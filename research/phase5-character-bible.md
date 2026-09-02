# Phase 5 — Character Bible: Nugget & Bruno

The locked cast, world and sound signature for the AI character-comedy channel.
Format rules live in `phase4-ai-character-comedy.md`.

**Nothing in this file changes once you start posting.** Recognition across videos is the
retention mechanism and the moat; drift kills it. Vary the premise, never the cast.

---

## Why this cast

Cats own the top of the category — @mochikit at 50.4M, and @meow.showtv going from **1,900
followers to 6.4M views** — so the lead is a cat for reach. But a plain cat duo is the most
saturated lane in the outlier set, so the second character carries the differentiation: **no
capybara appears anywhere in the data**, and it is unmistakable in a scroll.

Critically this keeps the *proven dynamic* intact. Every winner runs small-schemer versus
large-stoic (chihuahua/pitbull in @cyberpuptv and in the reference account). Cat as the scheming
neurotic, capybara as the immovable straight-man, is that same engine with fresh species.

---

## The cast

### NUGGET — the neurotic (small schemer)

Grey-and-white tuxedo cat. Lean and wiry, permanently alarmed, believes he is managing the
household. Every plan is his. Every plan fails.

**Character sheet job_id:** `62658dbf-5555-4e58-a8f4-ac02d2f79069`

**Locked identity block — paste verbatim into every prompt:**

> a lean adult short-haired domestic cat with grey and white tuxedo markings, white chest blaze
> and white front paws, narrow angular face with high cheekbones and a slightly pinched worried
> brow, small pink nose, oversized round amber-gold eyes, permanently alarmed anxious expression,
> upright pointed ears angled slightly back, slender wiry body with a long thin tail held stiffly
> upright, wearing a small olive-green terry bathrobe with a loose belt tied at the waist

### BRUNO — the unbothered (large stoic)

Capybara. Enormous, calm, immovable. Never reacts, never hurries, never acknowledges the
disaster. His indifference *is* the punchline.

**Character sheet job_id:** `c19d9625-5787-4b87-8658-9b0f8edf55a1`

**Locked identity block — paste verbatim into every prompt:**

> a large heavyset adult capybara with coarse bristly brown and tan fur, broad blunt rectangular
> muzzle, small rounded ears set far back, heavy relaxed half-lidded dark brown eyes,
> permanently calm unbothered deadpan expression, barrel-chested stocky heavy body with short
> sturdy legs, wearing an oversized oatmeal-beige chunky knitted cardigan with wooden buttons
> hanging open and brown corduroy slippers

### How consistency actually works

Pass the character-sheet **job_id** as a reference input on every video generation —
`medias: [{ role: "<ref role>", value: "<job_id>" }]`. Do **not** pass the CDN URL; the tools take
a media_id or job_id only.

This is the step vidIQ flags as the limiting skill across this entire category: *"requires precise
prompt engineering to achieve consistent character animation... to maintain character consistency
across many scenes."* The reference image plus the locked identity block is the answer to it.

---

## The world

**One apartment. Always the same one.** Warm, slightly cluttered, lived-in — mismatched
furniture, a sagging sofa, a cramped galley kitchen, one window with afternoon light.

**Locked world block:**

> inside the same small warm cluttered apartment, mismatched second-hand furniture, sagging
> green sofa, cramped galley kitchen with worn wooden counters, one window with soft afternoon
> light, lived-in and slightly untidy

Recognisability at a glance is the point. The domestic setting is also the most common in the
outlier data and the easiest to keep visually consistent across generations.

## The sound signature

- **SFX are mandatory.** `sfx_present: true` in **12 of 14** outliers. The comedy beats are
  carried by audio — the crash, the pop, the crack. A silent AI skit dies.
- **Nugget has a voice, Bruno never speaks.** One preset voice, generated once and reused
  forever, roughly 2 credits per clip. Bruno's silence is the joke, and it halves the audio work.
- Light comedic underscore, low in the mix. Ambient apartment room tone underneath.

---

## The three-beat engine

Every script is one sentence in three beats: **setup → escalation → payoff**. Nothing more.

| Beat | Whose | What |
|---|---|---|
| Setup | Nugget | Starts a task with total confidence |
| Escalation | Nugget | It goes wrong, and he doubles down |
| Payoff | Bruno | Physical disaster; Bruno does not react |

## First ten scripts

Target 5–15 seconds each — the biggest numbers in the data cluster there (7s → 28.4M,
5s → 8.8M), while the 81-second cinematic entry managed only 1.3M.

| # | Setup | Escalation | Payoff |
|---|---|---|---|
| 1 | Nugget assembles flat-pack furniture, instructions spread out | Wrong panel, forces it | Chair collapses — Bruno is already sitting on the last piece, unmoved |
| 2 | Nugget operates the coffee machine like a technician | Pressure builds, steam everywhere | Machine erupts; Bruno drinks calmly from the drip tray |
| 3 | Nugget vacuums the flat with great precision | Bruno will not move | Nugget vacuums *around* him, leaving a Bruno-shaped outline of dust |
| 4 | Nugget rigs an elaborate trap to guard a delivery box | Tests it nervously | Bruno steps on it, nothing happens; it fires as Nugget leans in |
| 5 | Nugget on a video call, professional, tie over bathrobe | Tries to angle the laptop away | Bruno crosses behind in a towel, entirely serene |
| 6 | Nugget microwaves leftovers, sets the time carefully | Fork still in the bowl, sparks | Kitchen lights blow; Bruno keeps eating in the dark |
| 7 | Nugget stacks clean dishes into a tower, one by one | The tower sways, he steadies it | Bruno opens the cupboard; avalanche; Bruno closes it |
| 8 | Nugget creeps toward the last slice of pizza at 3am | One paw extended, agonising slowly | Two half-lidded eyes open in the dark. Nugget retreats |
| 9 | Nugget hangs a picture, measuring with a spirit level | Marks the spot three times | Bruno leans on the wall; the nail comes through a metre away |
| 10 | Nugget does a full skincare routine, cucumber on eyes | Settles back, finally relaxed | Bruno eats the cucumber slices off his face. Nugget does not notice |

Write the next ten to the same shape. They are one sentence each and cost nothing to draft.

---

## Video prompt template

```
[WORLD BLOCK], [NUGGET BLOCK] and [BRUNO BLOCK],
[SETUP ACTION], [ESCALATION], [PAYOFF],
photoreal animal fur texture, natural animal anatomy, handheld domestic camera feel,
cinematic realism, no text, no watermark, no logos
```

Pass **both** character-sheet job_ids as reference media on every generation.

## Caption formula

Mirror the winners — a mini-story with a twist, plus an emoji:

- *"Chihuahua's AC Repair Goes Shockingly Wrong! 😂⚡"* — 1.7M
- *"She loved her new lip filler… her husband had other plans 😂"* — 6.4M

So: `Nugget had a system. Bruno had other plans 😂` — the twist is always that Bruno didn't
react.

Tags: `#funnyanimals #catsoftiktok #capybara #aianimals #comedy`

**Label every video as AI-generated.** The reference account does this explicitly in every
caption, and platforms increasingly require disclosure for synthetic media. It costs nothing and
protects the account.

---

## Costs

| Item | Credits |
|---|---|
| Character sheet (one image, nano_banana_pro, 2K) | 2 |
| Voice line (~20s) | 2 |
| Video generation | **Untested — preflight with `get_cost: true` before the first batch** |

Higgsfield balance was 394 before the two character sheets. Image and audio are cheap; video is
the unknown and the only real budget risk. Price it before committing to a batch.

## Next

1. Review the two character sheets. If either is wrong, fix it **now** — everything downstream
   inherits it.
2. Preflight video cost, then generate script #1 as a single pilot.
3. Add SFX and cut to 5–15s.
4. Only after one pilot looks right, batch the remaining nine.
