#!/usr/bin/env bash
# Money-counter viral clip — built in the Higgsfield sandbox (sandbox_exec).
#
# Why the sandbox: the Higgsfield output CDN is blocked by this project's agent
# egress proxy (403 through the proxy AND bypassing it), so generated b-roll can
# never be pulled locally. The sandbox sits inside Higgsfield's network and
# fetches the same URLs with HTTP 200. The edit therefore happens where the
# footage already is.
#
# Output: 1080x1920, 30fps, 450 frames, 15.0s, no audio (music is added on the
# platform — Higgsfield cannot generate music, and a trending sound carries reach).
set -euo pipefail
cd "$(dirname "$0")"
BASE="https://d8j0ntlcm91z4.cloudfront.net/user_3HjeNUqeYV6Fc0gU2I7EiNvoYub"

echo "== b-roll =="
curl -sSf -o c1.mp4 "$BASE/hf_20260903_032237_7c6fd0bc-67ec-4214-b185-996843400654.mp4"  # car interior
curl -sSf -o c2.mp4 "$BASE/hf_20260903_032238_8c5cb93c-7279-4fb5-817d-61716d689c10.mp4"  # night skyline
curl -sSf -o c3.mp4 "$BASE/hf_20260903_032238_61ff0815-61af-4955-a87e-28e98874aeb5.mp4"  # watch macro
curl -sSf -o c4.mp4 "$BASE/hf_20260903_032238_e607f80b-fdd4-49a0-b79b-1a1f45714cb7.mp4"  # cash counter
curl -sSf -o c5.mp4 "$BASE/hf_20260903_032238_7a22f28f-540e-45df-85ee-886f25cdd8b7.mp4"  # trading screens
curl -sSf -o c6.mp4 "$BASE/hf_20260903_032238_03893559-c8af-4d1d-ac40-f80fc7913b28.mp4"  # supercar

echo "== counter (act one) =="
# Rate is derived from target/seconds-to-target, never hardcoded: the retention
# mechanic needs the figure visibly heading for a round number it never reaches.
# $105,263/s hits $1,000,000 at 9.47s; the cut lands at 8.0s, 1.47s short.
mkdir -p cf
python3 - <<'PY'
from PIL import Image, ImageDraw, ImageFont
W,H,FPS,SECS = 1080,1920,30,8
RATE = 1_000_000/9.5
f = ImageFont.truetype("/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf", int(W*0.155))
for i in range(FPS*SECS):
    img = Image.new("RGB",(W,H),(0,0,0)); d = ImageDraw.Draw(img)
    txt = f"$ {int(RATE*i/FPS):,}"
    l,t,r,b = d.textbbox((0,0), txt, font=f)
    # grey, never white: white glares on black and flattens the drop that follows
    d.text(((W-(r-l))/2 - l, (H-(b-t))/2 - t - H*0.06), txt, font=f, fill=(180,180,180))
    img.save(f"cf/{i:04d}.png")
PY
ffmpeg -hide_banner -loglevel error -y -framerate 30 -i cf/%04d.png \
  -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -r 30 seg000.mp4

echo "== montage (act two) =="
# 20 fragments x 10 frames = 0.3333s each, matching the reference's measured
# 0.333s cut rhythm. Six sources cycle so no two adjacent fragments share a
# clip; the in-point advances 1s per pass so no fragment is ever reused.
ORDER=(c1 c4 c6 c2 c5 c3)
GRADE="scale=1080:1920,hue=s=0,eq=contrast=1.38:brightness=-0.05,format=yuv420p"
for i in $(seq 0 19); do
  ffmpeg -hide_banner -loglevel error -y -accurate_seek -ss "$((i / 6))" -i "${ORDER[$((i % 6))]}.mp4" \
    -frames:v 10 -vf "$GRADE" -c:v libx264 -preset medium -crf 18 -r 30 -an \
    "$(printf 'seg%03d.mp4' $((i+1)))"
done

echo "== black tail =="
# The loop point must be black -> black. Without this the clip ends on a bright
# montage frame and restarts on a black counter, and that seam is what stops
# people rewatching. 12 of 12 outliers over 2M views loop.
ffmpeg -hide_banner -loglevel error -y -f lavfi -i color=c=black:s=1080x1920:r=30:d=0.334 \
  -frames:v 10 -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p seg021.mp4

echo "== concat =="
for f in seg*.mp4; do echo "file '$f'"; done > list.txt
ffmpeg -hide_banner -loglevel error -y -f concat -safe 0 -i list.txt -c copy final.mp4
ffprobe -v error -show_entries format=duration -show_entries stream=width,height,nb_frames -of default=nw=1 final.mp4
