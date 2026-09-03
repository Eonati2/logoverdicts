# Phase 6 — Money-Counter Luxury Edit: full teardown

Reverse-engineered from the reference upload (`@wq.8__`) by frame extraction, scene detection and
audio analysis. 18.11s, 576×1024 (9:16), 29.44 fps, AAC audio.

TikTok is blocked by the egress proxy, so this came from the file itself: ffmpeg frame extraction
at 2 fps, brightness-boosted scene detection (the footage is too dark for normal detection), and a
numpy onset/loudness pass on the extracted audio.

---

## Structure: two acts and one hard drop

| Time | Act | What |
|---|---|---|
| 0.0 – 8.0s | **The counter** | Pure black screen. One centred dollar figure ticking up. Nothing else. |
| **8.0s** | **The drop** | Counter stops, music jumps **+11 dB**, first montage cut — all on the same frame. |
| 8.0 – 17.0s | **The montage** | ~27 luxury b-roll shots, cut every ~0.33s, beat-synced. |
| 17.0s | **Out** | Hard cut to near-silence (−43.9 dB). |

The whole video is a build and a payoff. Act one spends 8 seconds doing almost nothing visually,
which is precisely why the drop lands.

---

## Act 1 — the counter (0.0–8.0s)

This is the hook, and it is much simpler than it looks.

- **Background: pure black.** No footage underneath. Just black.
- **One line of text**, centred horizontally, sitting slightly above centre.
- **Format:** `$ 792,982` — dollar sign, a space, comma-grouped.
- **Colour: mid-grey, not white** (roughly `#B4B4B4`). This matters — white would glare on a black
  field; grey reads as expensive and lets the drop's brightness feel like a jump.
- **Typeface:** clean geometric sans, medium weight, large — the number spans most of the frame.

**The counter is perfectly linear.** Measured values every 0.5s:

```
3,509 → 56,140 → 108,772 → 161,404 → 214,035 → 266,667 → 319,298 → 371,930
→ 424,561 → 477,193 → 529,825 → 582,456 → 635,088 → 687,719 → 740,351 → 792,982
```

Every increment is **52,631.5 per half-second** — that is **$105,263 per second**, dead constant.

### The retention trick hiding in the maths

At 105,263/sec, the counter reaches **exactly $1,000,000 at t = 9.47s**.

**The video cuts away at 8.0s.** You never see it land on the million.

That is not an accident — it is the reason people rewatch. The number is calibrated to a round
target the viewer is subconsciously waiting for, and then the edit denies it. Combined with a
short loop, the viewer goes round again to find the ending that does not exist.

---

## Act 2 — the montage (8.0–17.0s)

Measured cut points and the gaps between them:

```
8.194  8.528  10.594  10.928  11.294  11.628  11.994  14.961  15.361  15.661  16.042
gaps:   0.333   0.333   0.367   0.333   0.367   0.400   0.300   0.348
```

**Every shot is roughly one third of a second.** Three cuts per second, sustained for nine
seconds. (The two larger gaps are missed detections in near-black passages — the frame extraction
shows a different shot every 0.5s throughout, so the real rate is constant.)

### Shot list

Car interior · parking garage · fireworks over water · headlights at night · city skyline ·
trading chart on a laptop · supercars in a showroom · night street · crowd · black supercar ·
stock ticker screens · $50 bill macro · perfume/emblem · branded pen · quilted designer bag ·
watch face · Porsche rear · three watches held over a keyboard.

Every shot is **desaturated to near-monochrome, very dark, high contrast**. No shot is bright.
No shot contains a face in focus. No text appears after the counter ends.

---

## The audio, measured

| Second | RMS (dBFS) | |
|---|---|---|
| 0–6s | ≈ −30 | counter, deliberately quiet |
| 7s | −26.4 | rising |
| **8s** | **−19.5** | **the drop, +11 dB** |
| 9–15s | −17 to −19 | sustained loud |
| **16s** | **−11.0** | peak accent |
| 17s | −43.9 | hard silence |

- Median inter-onset interval **0.360s** → **~167 BPM**, i.e. **~83 BPM half-time** — standard
  phonk/trap territory.
- A steady 0.50s pulse runs underneath with off-beat ornaments between.

### The cuts are beat-locked

Comparing each measured cut to the nearest audio onset:

| Cut | Offset from beat |
|---|---|
| 8.194 | +0.049s |
| 8.528 | +0.087s |
| 10.594 | +0.018s |
| 10.928 | +0.055s |
| 11.294 | −0.056s |
| 14.961 | +0.027s |
| 15.661 | +0.082s |

**Seven of eleven cuts land within 90 milliseconds of a beat.**

> **CORRECTION (2026-09-03).** This was over-read, and the conclusion drawn from it was wrong.
>
> Two independent tempo estimators — a phase-locked comb written for `scripts/viral/beatgrid.py`
> and `librosa.beat.beat_track` — agree the track runs at **117.5–118.3 BPM**, a beat interval
> of **0.51s**. The montage cuts every 0.333s, which is 1.53 cuts per beat: not a clean
> subdivision of anything.
>
> So the reference is cutting on a **fixed one-third-second grid, not locked to the music.** The
> "7 of 11 within 90ms" figure is a statistical artifact: onsets in this track sit roughly 0.25s
> apart, so almost any cut lands within 90ms of one by chance. Intent was read into noise.
>
> This makes the format *easier* to reproduce, not harder — a fixed 0.333s grid is both what the
> reference actually does and what `scripts/viral/build-money-counter.sh` already produces. Beat
> synchronisation remains a real technique worth using, but it is not what this video is doing.

---

## The repeatable recipe

Nine rules. Follow all nine and the format reproduces.

1. **Open on pure black with one grey number.** No footage for the first 8 seconds.
2. **Counter runs linearly at a fixed rate** — pick a rate that would hit a round target
   (1,000,000 / duration-you-want).
3. **Cut away before it lands.** This is the retention mechanic. Never show the round number.
4. **Drop the music +10 dB at the exact frame the counter stops.** Counter end, music drop and
   first cut are the same frame.
5. **Montage cuts every 0.33s.** Three per second, no exceptions, for about nine seconds.
6. **Land cuts within ~50ms of the beat.** At ~83 BPM half-time this is every eighth note.
7. **Desaturate everything and crush the blacks.** Near-monochrome, no bright shot, no faces.
8. **No text after the counter.** The number is the only copy in the whole video.
9. **End on a loud accent, then hard silence.**

---

## What our tools can and cannot do here

**Good news: this format suits generation far better than the character comedy.** There are no
recurring characters to keep consistent — the hardest problem in the Nugget & Bruno work simply
does not exist here. It is all b-roll.

| Element | Tool | Note |
|---|---|---|
| B-roll shots | Higgsfield `generate_video` | Cars, watches, city, cash, trading screens all generate well |
| The counter | `video-editing` (higgsedit) | Kinetic typography over black; sandbox render, likely free |
| Cutting and beat-sync | `video-editing` (higgsedit) | JS-defined timeline, so cut points can be specified numerically |
| Grade (desaturate, crush blacks) | `video-editing` LUT/shader | Built into the workflow |
| **Music** | **None — cannot generate** | Higgsfield explicitly declines general music generation |

### The efficiency that makes this cheap

Each shot is only **0.33 seconds**, but generation bills by clip. So do not generate 27 clips.

**Generate 5–6 clips of 5 seconds each, then cut them into 0.33s fragments.** Six 5-second clips
is 30 seconds of footage — enough for roughly 90 distinct fragments, against the ~27 the montage
needs. Cost: **6 × 22.5 = 135 credits** at standard, or **75** on mini.

### Music is yours to supply

Higgsfield cannot generate the track, and the "SFX" in this format are not a separate layer —
the percussive hits *are* the music. So the entire sound design reduces to one decision: pick the
track.

Take it from **TikTok's own audio library**, and prefer a trending sound. That is both the only
practical route and the better one, since trending audio carries its own reach. Pick the track
**first** — the cut points are derived from its BPM, so the edit cannot be built before the music
exists.

---

## One caution worth stating plainly

A ticking dollar counter reads as an earnings claim. If it is posted as *your* revenue and it
isn't, that is a fabricated income claim — the same issue flagged on the LogoVerdicts script
earlier, and it carries real platform and advertising-standards risk.

The fix is cheap: keep it aspirational and unattributed, or label it. The format works exactly as
well without implying the money is yours — the reference account never states whose it is either.

---

## B-roll library (generated 2026-09-03)

Six 5-second clips, `seedance_2_0_mini`, 9:16, 720×1280, no audio. 12.5 credits each, **75 total**.
30 seconds of footage against the ~9 seconds the montage needs, so each clip yields several
distinct 0.33s fragments. Reusable across every counter video — this library does not need
regenerating.

| # | Shot | Job ID |
|---|---|---|
| 0 | Luxury car interior, light strips across leather/carbon | `7c6fd0bc-67ec-4214-b185-996843400654` |
| 1 | Night city skyline across dark water | `8c5cb93c-7279-4fb5-817d-61716d689c10` |
| 2 | Macro wristwatch face, raking light | `61ff0815-61af-4955-a87e-28e98874aeb5` |
| 3 | Banknotes through a counting machine | `e607f80b-fdd4-49a0-b79b-1a1f45714cb7` |
| 4 | Trading monitors glowing in the dark | `7a22f28f-540e-45df-85ee-886f25cdd8b7` |
| 5 | Black supercar on a wet street at night | `03893559-c8af-4d1d-ac40-f80fc7913b28` |

Balance after: **~292 credits**.

## Counter spec, ready to build

Music-independent — the count is linear, so this half can be built before the track is chosen.

| Property | Value |
|---|---|
| Background | pure black, no footage |
| Text | `$ N,NNN` — dollar sign, space, comma-grouped |
| Colour | mid-grey ≈ `#B4B4B4`, never white |
| Position | centred horizontally, slightly above vertical centre |
| Rate | linear, `target / duration` per second |
| Calibration | set the rate so it *would* hit a round number ~1.5s after the cut |
| Cut point | 8.0s — before it lands |

For a 15s edit: 8s counter + 7s montage. At $105,263/s the counter reads ~$842,000 at the cut,
still short of the million it is visibly heading toward.

## Remaining blocker

**The music.** Cut points derive from its BPM, so the montage cannot be timed until the track
exists. Pick from TikTok's audio library, prefer a trending sound, target ~80–90 BPM
(half-time phonk/trap, matching the reference's ~83).

---

## Canva: assets yes, edit no

Tested 2026-09-03. All six b-roll clips uploaded successfully into the user's Canva account
via `upload-asset-from-url` — the Higgsfield CDN is publicly reachable, it is only this
container's egress that blocks it.

| Clip | Canva asset ID |
|---|---|
| 01 car interior | `VAHUG7wqEUI` |
| 02 night skyline | `VAHUGxrmMa0` |
| 03 watch macro | `VAHUGw9SDo0` |
| 04 cash counter | `VAHUG3cxFnk` |
| 05 trading screens | `VAHUGyPNsV8` |
| 06 supercar wet street | `VAHUG43HF3Y` |

**But the Canva MCP cannot perform this edit.** Its operation set is entirely spatial and
content-based — there is no temporal control anywhere in the API:

- `add_page` → width, height, title, background_color. **No duration.**
- `insert_fill` (video) → asset_id, position, size, opacity, rotation. **No trim, no in/out.**
- No transition, audio, or timing operation exists.

Canva's default video page is 5s; the montage needs 0.33s. Driven through this API the result
would be ~27 pages × 5s = 135 seconds instead of 9. Assets can be staged there for manual
assembly in the Canva UI (where duration *is* editable), but the programmatic path stops here.

**ffmpeg (installed, v7.0.2) does this trivially** — it is the same toolchain that measured the
reference. It needs the clips as local files, which means downloading them from the generation
widget and re-uploading, since the CDN is blocked for this container's egress.

## Cut sheet — 15s version

`0.00–8.00` counter on black, grey `#B4B4B4`, linear $105,263/sec (~$842,000 at the cut).
`8.00–15.00` montage, 21 fragments at 0.333s. Six sources cycle so no two adjacent fragments
share a clip; the in-point advances 1.0s per pass so no fragment repeats.

| # | t | clip | in | # | t | clip | in |
|---|---|---|---|---|---|---|---|
| 1 | 8.000 | car | 0.0 | 12 | 11.667 | watch | 1.0 |
| 2 | 8.333 | cash | 0.0 | 13 | 12.000 | car | 2.0 |
| 3 | 8.667 | supercar | 0.0 | 14 | 12.333 | cash | 2.0 |
| 4 | 9.000 | skyline | 0.0 | 15 | 12.667 | supercar | 2.0 |
| 5 | 9.333 | screens | 0.0 | 16 | 13.000 | skyline | 2.0 |
| 6 | 9.667 | watch | 0.0 | 17 | 13.333 | screens | 2.0 |
| 7 | 10.000 | car | 1.0 | 18 | 13.667 | watch | 2.0 |
| 8 | 10.333 | cash | 1.0 | 19 | 14.000 | car | 3.0 |
| 9 | 10.667 | supercar | 1.0 | 20 | 14.333 | cash | 3.0 |
| 10 | 11.000 | skyline | 1.0 | 21 | 14.667 | supercar | 3.0 |
| 11 | 11.333 | screens | 1.0 | | | | |
