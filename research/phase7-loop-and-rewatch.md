# Phase 7 — Loop and rewatch mechanics

Twelve cross-platform outliers over 2M views from accounts under 200K followers, pulled on the
question of what makes people watch a video *again*.

## The finding

**`is_looped: true` in 12 of 12.** Not a majority — all of them. Earlier phases measured 8 of 14
and 9 of 12; filtering for 2M+ views takes it to unanimous. Above a certain reach threshold,
looping is not a technique, it is the entry ticket.

The multipliers against each creator's own median are the largest seen anywhere in this research:

| Account | Followers | Views | vs own median |
|---|---|---|---|
| @motivating_ideas_ | 84K | 7.9M | **306×** |
| @rubyredpoodle | 4.7K | 3.3M | **285×** |
| @randomfatseal | 13.7K | 2.2M | **256×** |
| @fun.for.all404 | 133K | 2.2M | 133× |
| @demojot | 24.6K | 3.6M | 132× |
| @tina.fidgettoy.factory | 124K | **26.7M** | 33× |

## Why they loop, mechanically

**1. Static camera.** "Low (static camera)" in 11 of 12. A moving camera cannot loop invisibly —
the frame is in a different place at the seam, so the restart is visible. Camera movement and
looping are in direct opposition.

**2. Music-only audio.** 8 of 12 are music-only; the rest are raw ambient. **None** carry a
voiceover. A voice has a beginning and an end, and both expose the seam. Ambient and music beds
have neither.

**3. Short.** 5s, 11s, 13s, 25s for the pure loops. Less material means more repetitions per
viewer before boredom.

## The rewatch instruction — the strongest single lever

Four of the highest performers put the rewatch *in the text overlay*:

| Overlay text | Views |
|---|---|
| "This video gets funnier every single time you watch it" | **7.9M** (306×) |
| "Can you reverse the spin with your mind?" | 4.5M |
| "Can you reverse the direction of the arrow with you mind?" | 3.6M |
| "How fast can you reverse its spin?" | 2.0M |

Three of those four are the **same ambiguous-motion illusion** — a spinning object with no true
direction — posted by three unrelated accounts, each clearing 2M.

That is the pattern worth naming: **a task with no completion state.** The viewer cannot succeed,
so they cannot stop. It is not a puzzle with an answer withheld; it is a puzzle with no answer at
all, and the brain keeps trying.

## Why this matters for the money counter

**The counter is already this mechanism.** A figure climbing toward $1,000,000 that the edit cuts
away from at 8.0s is a task with no completion state — the viewer is waiting for a number that
never arrives. That is the same trick as the reversible spin, in a different costume.

What the current 15s edit gets *wrong* is the loop itself:

- It ends on a montage fragment — bright-ish, high-detail, mid-motion.
- It restarts on pure black with the counter at `$ 0`.
- That seam is enormous and visible, so the rewatch never happens and the strongest mechanic in
  the format is wasted.

## Changes this dictates

1. **End on black.** The final montage fragment must cut to a black frame so the loop point is
   black → black. The counter restarting at `$ 0` on black then reads as a continuation rather
   than a restart.
2. **Keep the camera still.** Generated b-roll with slow drift is acceptable; anything with a
   strong camera push is not.
3. **Music-only, no voiceover.** Already the plan — this confirms it.
4. **Shorten if in doubt.** 15s is at the long end for a loop; 10–12s would repeat more.

## Open tension, flagged not resolved

The reference format has **no text after the counter** (recipe rule 8), and adding text would
break its aesthetic. But the loop data says an explicit rewatch instruction is worth up to 306×.

These conflict. The counter is an *implicit* unresolvable task; the 7.9M example makes it
explicit. Worth testing as an A/B rather than assuming — one cut with a single line of overlay
text, one without, same footage.
