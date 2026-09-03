#!/usr/bin/env python3
"""Turn a music track into a beat-locked cut list.

The measured lesson from the reference teardown (research/phase6): seven of eleven cuts landed
within 90ms of an audio onset. That sync is the single hardest thing to fake and the main reason
a montage reads as edited rather than as a slideshow. A fixed 0.333s grid looks right but drifts
against a real track within a few seconds.

This estimates the track's tempo, builds a phase-locked grid, and emits cut points on it.

    python3 beatgrid.py track.mp3 --drop 8 --end 15 --clips 6

Writes JSON to stdout: bpm, the grid, and a fragments list ready to drop into the Remotion
Montage component or the sandbox build script.

Snapping to an inferred *grid* rather than to raw detected onsets is deliberate: raw onsets are
noisy (ghost notes, reverb tails), and a grid keeps the cut rhythm even where the track's
percussion drops out.
"""
import argparse
import json

import subprocess
import sys
import tempfile
import wave
from pathlib import Path

import numpy as np

SR = 22050
HOP = 256
WIN = 1024


def decode_to_wav(src: Path) -> Path:
    """Any container -> mono 22.05kHz wav, via the bundled static ffmpeg."""
    import imageio_ffmpeg

    out = Path(tempfile.gettempdir()) / f"{src.stem}.beatgrid.wav"
    subprocess.run(
        [imageio_ffmpeg.get_ffmpeg_exe(), "-hide_banner", "-loglevel", "error", "-y",
         "-i", str(src), "-vn", "-ac", "1", "-ar", str(SR), "-f", "wav", str(out)],
        check=True,
    )
    return out


def onsets(path: Path):
    with wave.open(str(path)) as w:
        x = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16)
    x = x.astype(np.float32) / 32768.0

    frames = 1 + (len(x) - WIN) // HOP
    rms = np.array([np.sqrt(np.mean(x[i * HOP:i * HOP + WIN] ** 2)) for i in range(frames)])
    t = np.arange(frames) * HOP / SR

    # Rectified energy rise: a transient is a jump up, never a decay down.
    flux = np.diff(rms, prepend=rms[0])
    flux[flux < 0] = 0
    thr = flux.mean() + 1.6 * flux.std()

    peaks, last = [], -1.0
    for i in range(1, len(flux) - 1):
        if flux[i] > thr and flux[i] >= flux[i - 1] and flux[i] >= flux[i + 1] and t[i] - last > 0.12:
            peaks.append(float(t[i]))
            last = t[i]
    return np.array(peaks), len(x) / SR


def estimate_grid(peaks):
    """Return (beat_seconds, phase_seconds) by phase-locking a comb to the onsets.

    A median of inter-onset intervals is not good enough: validated against the reference track
    it returned 0.3599s where the truth was 0.3333s (180 BPM), and that 27ms-per-cut error
    accumulated into 164ms of drift by the seventh cut — clearly audible as sloppy editing.

    Instead every candidate tempo is scored on how tightly *all* onsets cluster around its grid,
    using a circular mean. Ghost notes and reverb tails no longer drag the estimate.
    """
    if len(peaks) < 4:
        raise SystemExit("Too few onsets detected — is this a music track?")

    # Search only real tempos: 60-180 BPM. Anything faster is a subdivision, not a tempo, and
    # letting the search reach it is what made an unconstrained comb return 240 BPM on a 180 BPM
    # track. Faster cutting is expressed through `subdivision` below, not through the tempo.
    scored = []
    for beat in np.arange(1 / 3, 1.001, 0.0005):
        # Circular statistics: map each onset to an angle within the beat, then measure how
        # concentrated those angles are. A perfect grid gives strength 1, noise gives ~0.
        ang = 2 * np.pi * (peaks % beat) / beat
        vec = np.exp(1j * ang).mean()
        phase = (np.angle(vec) % (2 * np.pi)) * beat / (2 * np.pi)
        scored.append((float(abs(vec)), float(beat), float(phase)))

    # Correct the comb-filter's bias toward short periods: a genuine grid at beat b also scores
    # highly at b/2, b/3 and so on, and the shorter the candidate the more grid points there are
    # for an onset to sit near. Left uncorrected this picked 240 BPM on a 180 BPM track.
    # So take the SLOWEST period that still explains the onsets nearly as well as the best one.
    peak_strength = max(s for s, _, _ in scored)
    viable = [c for c in scored if c[0] >= peak_strength * 0.92]
    _, beat, phase = max(viable, key=lambda c: c[1])
    return beat, phase


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("track")
    ap.add_argument("--drop", type=float, default=8.0, help="seconds; montage starts here")
    ap.add_argument("--end", type=float, default=15.0, help="total clip length")
    ap.add_argument("--clips", type=int, default=6, help="number of source clips to cycle")
    ap.add_argument("--target-cut", type=float, default=1 / 3,
                    help="desired seconds per fragment; snapped to the nearest grid subdivision")
    ap.add_argument("--pre-roll", type=float, default=0.05,
                    help="seconds to cut BEFORE each beat (default 0.05)")
    a = ap.parse_args()

    wav = decode_to_wav(Path(a.track))
    peaks, dur = onsets(wav)
    beat, phase = estimate_grid(peaks)

    # Pick the subdivision whose interval sits closest to the requested cut length.
    subdiv = min((1, 2, 3, 4), key=lambda n: abs(beat / n - a.target_cut))
    step = beat / subdiv

    # Cut slightly BEFORE the beat, not on it. Measured off the reference: its cuts sat
    # +0.049, +0.087, +0.018, +0.055, +0.027 and +0.082 seconds ahead of the nearest onset —
    # consistently early, never late. The new shot is already on screen when the transient
    # lands, so the image reads as causing the hit rather than reacting to it.
    cuts, k = [], 0
    while True:
        t = phase + k * step - a.pre_roll
        k += 1
        if t < a.drop - 1e-9:
            continue
        if t > a.end - step / 2:
            break
        cuts.append(round(t, 4))

    fragments = [
        {"index": i, "at": c, "clip": i % a.clips, "in_point": float(i // a.clips)}
        for i, c in enumerate(cuts)
    ]

    json.dump({
        "track": a.track,
        "track_duration": round(dur, 3),
        "onsets_detected": len(peaks),
        "bpm": round(60 / beat, 1),
        "beat_seconds": round(beat, 4),
        "grid_phase": round(phase, 4),
        "subdivision": subdiv,
        "cut_seconds": round(step, 4),
        "cut_count": len(cuts),
        "cuts": cuts,
        "fragments": fragments,
    }, sys.stdout, indent=2)
    print(file=sys.stdout)


if __name__ == "__main__":
    main()
