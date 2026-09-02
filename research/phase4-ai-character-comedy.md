# Phase 4 — AI Character Comedy: teardown and formula

Prompted by the reference account **@the.giggles.and.w** ("The Giggles and Wag Show"), whose own
captions state: *"A creative AI-crafted Video For Entertainment! Every scene is digitally created
using detailed prompts, timing, and imagination — no real animals or people involved."*

TikTok is blocked by this environment's egress proxy, so that feed could not be read directly.
Instead the whole category was pulled: 14 outliers over 1M views from accounts under 200K
followers. That is a stronger basis than one account anyway — it separates the formula from one
creator's luck.

---

## Why this matters more than the kitchen plan

The kitchen niche was chosen when AI generation looked unusable — satisfying process footage
reads as fake. **This category is the opposite: the winners are openly, deliberately AI-generated,
and the audience is there for exactly that.** No camera, no rig, no kitchen, no daily filming.

Higgsfield goes from "almost nothing" to the entire production line.

## The reach is real, and it starts from nothing

| Account | Followers | Views | vs own median | Length |
|---|---|---|---|---|
| @mochikit | 169K | **50,400,000** | 227× | — |
| @remy.boyy6 | 13.3K | **28,400,000** | **596×** | **7s** |
| @cliffordthelilcreamween | 65.3K | 8,800,000 | 265× | 5s |
| **@meow.showtv** | **1,900** | **6,400,000** | 261× | — |
| @pawsfilm | 26K | 2,600,000 | 27× | — |
| @mali_ksamar | 91K | 2,200,000 | 394× | — |
| @newniche0 | 41K | 1,800,000 | 103× | 45s |
| @cyberpuptv | 92.7K | 1,700,000 | 60× | 15s |
| @mushuthebrat | **4,100** | 1,700,000 | 331× | — |
| @ai.fruity.world1 | 66.8K | 1,300,000 | **2,448×** | 81s |

**A 1,900-follower account produced 6.4 million views.** That is the number that matters — it is
the format doing the work, not an existing audience.

---

## The formula

### 1. The premise: animal + human role + something goes wrong

Every single winning skit is this one sentence, varied:

| Setup | Escalation | Payoff |
|---|---|---|
| Chihuahua + pitbull as AC repairmen | Opens the unit | Electrical malfunction |
| Cat visits a cosmetic clinic | Lip filler injected | Lips balloon, partner recoils |
| Two cats mixing fizzy drinks | Pouring, shaking | It explodes |
| Chihuahua rigs a water bottle | Larger dog drinks it | Spit-take |
| Cat tries on a leotard, steps on scale | Weight registers | Scale breaks |

That is the whole engine: **anthropomorphic setup → escalation → physical comedy payoff.** Three
beats, nothing more. Write every script to that shape before you generate a frame.

### 2. Named, recurring characters — this is the moat

The strongest accounts do not post random skits. They run a **cast**:

- @iaforgeofficiel02 names them — "King" and "Rocky"
- @hello_keetty_ runs "Orange" and "White"
- @cyberpuptv has a recurring Chihuahua + Pitbull double act

This is what turns a feed into a channel: a returning viewer recognises the characters, and
recognition is what produces retention across videos rather than within one.

It is also the named production barrier. vidIQ's own analysis flags it repeatedly: *"requires
proficiency in AI video generation tools and precise prompt engineering to achieve consistent
character animation"* and *"to maintain character consistency across many scenes."*

**Higgsfield has a workflow built for exactly this** — `character-sheet`, described as producing a
"character reference / model sheet / consistent multi-view character prompt." Load it before
generating anything. Consistency is the whole game and it is the step most people fail.

### 3. Duration: 5–15 seconds

The biggest numbers cluster tight: 7s → 28.4M, 5s → 8.8M, 9s → 1.2M, 10s → 1.6M, 15s → 1.7M.
The 81-second cinematic one managed 1.3M — respectable, but an order of magnitude below the
7-second clip. **Short wins.**

### 4. The premise is already visible at frame 0

Every hook description in the set: *"A cat **actively pouring** Coca-Cola"*, *"A cat in a suit
**gets hit with an axe**"*, *"A chihuahua **positioned over** a water bottle with a green cloud."*

No establishing shot, no title card, no build-up. The absurdity is on screen in frame one or the
scroll continues.

### 5. Sound effects are not decoration

`sfx_present: true` in **12 of 14**. The comedic beats are carried by audio — the fart sound, the
pop, the plumping, the egg crack. Audio mix breakdown: Raw/Ambient 7, Music-only 3, Voice 3.

Generate or source a proper SFX layer. A silent AI skit dies.

### 6. It loops

`is_looped: true` in 8 of 14 — the same mechanism found in the satisfying-process research. The
gag replays and the viewer watches three times. Where the joke allows, end on a frame that could
be the beginning.

---

## Two sub-formats — pick A

**A. Fully AI-generated skit** — @mochikit (50.4M), @meow.showtv (6.4M from 1.9K followers),
@cyberpuptv, @hello_keetty_. No camera at all. This is the one you can execute today with
Higgsfield.

**B. Real pet footage + AI voiceover** — @remy.boyy6 (28.4M, **596×**), @mushuthebrat (1.7M,
331×). The highest multipliers in the set, and the effort is logged as "within an hour" rather
than "within a day". But it needs a real pet with a repeatable funny behaviour, which is a
harder input to control than a prompt.

**Go with A.** It matches your tools and needs no live subject.

---

## Building your own style, not a copy

Do not reproduce another account's characters. Derive the formula, then own a variable nobody
else in the set owns. Open lanes visible in this data:

- Everyone is doing cats and small dogs. **Nobody is doing an unexpected species** as the lead.
- Everyone uses generic domestic settings. **A consistent, distinctive world** — one recurring
  workplace, one recurring apartment — makes the feed recognisable at a glance in a scroll.
- Most are silent-with-SFX. **A signature voice** for one character, generated once and reused,
  is instant brand and costs 2 credits per clip.

Lock three things and never change them: your cast (2–3 named characters), your world, and your
sound signature. Everything else varies per video.

**Label the content as AI.** The reference account does this explicitly in every caption, and
platforms increasingly require disclosure for synthetic media. It costs nothing and protects the
account.

---

## Production line

| Step | Tool | Notes |
|---|---|---|
| 1. Character bible | `get_workflow_instructions{workflow:"character-sheet"}` → `generate_image` | Do this **once**. Everything downstream depends on it. |
| 2. Script | Three beats: setup → escalation → payoff | Write 10 at a time; they are one sentence each. |
| 3. Shots | `generate_video` / `generate_video_batch` | Batch them. Character sheet goes in as reference for consistency. |
| 4. Voice | `generate_audio` | One preset voice per character, locked forever. ~2 credits per clip. |
| 5. SFX + cut | Editing app | 12 of 14 winners depend on this layer. Do not skip it. |
| 6. Ratio | `reframe` | One source, both aspect ratios. |

**Cost check:** Higgsfield holds **394 credits**, and audio ran 2 credits for 21 seconds. Video
generation is the real cost and is untested here — price the first batch with `get_cost: true`
before committing, so the budget is known rather than guessed.

---

## Honest caveats

- **This category is filling up fast.** Fourteen accounts doing near-identical AI animal skits
  surfaced in one query. The formula is not a secret; the cast and world are what will separate
  you, which is why step 1 is not optional.
- **Platforms are actively adjusting to synthetic content.** Reach for AI-generated media can be
  down-weighted with little warning. Building on one format on one platform is a real risk —
  disclose, and expect to adapt.
- **Monetization is still weak.** This is entertainment reach with no purchase intent, same as the
  kitchen niche. If revenue matters again later, the affiliate and partner routes from
  `phase2-format-spec.md` still stand and are unaffected by this change.
- **The 50.4M and 28.4M results are the tail.** The median clip in this category does far less.
  Volume with a consistent cast is what buys enough attempts.
