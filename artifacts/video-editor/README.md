# @workspace/video-editor

Programmatic short-form video editing with [Remotion](https://remotion.dev). Built to reproduce
the money-counter format torn down in `research/phase6-money-counter-format.md`.

Remotion renders **locally**, which matters here: Higgsfield's output CDN is blocked by the
environment's egress proxy, so anything rendered there cannot be retrieved. Anything rendered by
this package is a local file.

## Compositions

| ID | Duration | Needs footage? |
|---|---|---|
| `MoneyCounter` | 8s | No — pure black and type |
| `ViralClip` | 15s | Yes — six clips in `public/` |

## Render

Chrome's old headless mode is gone, so the headless *shell* binary must be named explicitly:

```bash
npx remotion render MoneyCounter out/money-counter.mp4 \
  --browser-executable=/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell
```

Pointing `--browser-executable` at `chromium-1194/chrome-linux/chrome` fails with
"Old Headless mode has been removed from the Chrome binary".

## The counter

Rate is derived from `target / secondsToTarget`, never set directly. The retention mechanic
depends on the figure being on a visible trajectory toward a round number it never reaches —
the reference ran $105,263/s at $1,000,000 and cut away at 8.0s, 1.47s short.

Verified on the rendered output: sampled increments are exactly $105,263.

## To render ViralClip

Drop the six b-roll clips into `public/` using the exact filenames in
`src/Montage.tsx` (`broll-01-car-interior.mp4` … `broll-06-supercar-wet-street.mp4`), then:

```bash
npx remotion render ViralClip out/viral-clip.mp4 \
  --browser-executable=/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell
```

Cut rhythm is `CUT_SECONDS = 1/3` in `src/Root.tsx`. To beat-lock against a real track, replace
the fixed grid with measured onset times.
