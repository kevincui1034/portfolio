---
name: Kevin Cui Portfolio
description: Editorial-magazine portfolio for an AI / agent-product full-stack engineer.
colors:
  cover-aubergine: "#221e2a"
  spread-aubergine: "#2b2734"
  plate-aubergine: "#322d3c"
  inside-cover-cream: "#f3efe8"
  caption-gray: "#a8a39a"
  footnote-gray: "#7a7470"
  apricot-ink: "#e8a87c"
  iris-ink: "#c8a8e9"
  cyan-ink: "#8fc8d4"
  hairline: "#ffffff14"
  hairline-bright: "#ffffff29"
  tonal-lift-base: "#ffffff08"
  tonal-lift: "#ffffff0a"
  tonal-lift-hover: "#ffffff12"
  scrim-soft: "#221e2a99"
  scrim-mid: "#221e2aa6"
  accent-wash: "#e8a87c0a"
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(56px, 7.8vw, 116px)"
    fontWeight: 300
    lineHeight: "0.94"
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(40px, 5.2vw, 68px)"
    fontWeight: 300
    lineHeight: "1"
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 400
    lineHeight: "1.05"
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "normal"
  serif-accent:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(22px, 2.4vw, 30px)"
    fontWeight: 300
    lineHeight: "1.4"
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "0.2em"
  mono-meta:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "0.15em"
rounded:
  frame: "8px"
  tile: "14px"
  card: "18px"
  card-lg: "24px"
  pill: "99px"
spacing:
  xs: "6px"
  sm: "14px"
  md: "24px"
  lg: "42px"
  xl: "72px"
  section-y: "120px"
  section-x: "48px"
  section-x-indent: "108px"
components:
  button-primary:
    backgroundColor: "{colors.inside-cover-cream}"
    textColor: "{colors.cover-aubergine}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.apricot-ink}"
    textColor: "{colors.cover-aubergine}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.inside-cover-cream}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
    typography: "{typography.body}"
  button-ghost-hover:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.inside-cover-cream}"
  chip-stack:
    backgroundColor: "{colors.tonal-lift}"
    textColor: "{colors.caption-gray}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
    typography: "{typography.mono-meta}"
  card-project:
    backgroundColor: "#ffffff06"
    textColor: "{colors.inside-cover-cream}"
    rounded: "{rounded.card}"
    padding: "28px"
  card-project-hover:
    backgroundColor: "{colors.tonal-lift}"
    textColor: "{colors.inside-cover-cream}"
  contact-tile:
    backgroundColor: "{colors.tonal-lift}"
    textColor: "{colors.inside-cover-cream}"
    rounded: "{rounded.tile}"
    padding: "24px"
    typography: "{typography.body}"
  contact-tile-hover:
    backgroundColor: "{colors.tonal-lift-hover}"
    textColor: "{colors.inside-cover-cream}"
  section-label:
    textColor: "{colors.caption-gray}"
    typography: "{typography.label}"
    padding: "0"
---

# Design System: Kevin Cui Portfolio

## 1. Overview

**Creative North Star: "The Editorial Studio"**

The system reads like the masthead of a small, opinionated magazine that happens to also be a design studio. Manrope sets the body and the masthead; Fraunces italic carries one or two words per headline like a hand-lettered flourish; JetBrains Mono lives in the margins, numbering sections and dating projects. The ground is a deep aubergine that behaves like cover stock, not a screen — warm, slightly purple, never blue-black. The three accents (apricot, iris, cyan) are the ink colors, used one at a time, and only for the words that matter.

Density is unhurried. Type is allowed to breathe at 65–75ch; spacing scales by rhythm, not grid. Motion lives in the background — three blurred glow disks drift over 40-second loops, a custom cursor lerps after the mouse, and project cards lift two pixels on hover. Nothing pops, nothing shouts, nothing demands a screenshot. The reader stays in the type.

What this system explicitly rejects: the default-Vercel hero (gradient blob, waving emoji, identical card grid), the terminal-hacker costume (green-on-black, ASCII flourishes, monospace-everywhere), and the corporate-FAANG palette (navy, gray, sterile grid). Editorial restraint, not dev-bro signaling.

**Key Characteristics:**

- Warm aubergine ground with cream type; three ink-color accents reserved for one-or-two-word flourishes.
- Manrope display + Fraunces italic accent + JetBrains Mono margin notes. Type carries the personality.
- Flat surfaces, tonal layering via low-opacity white overlays. Atmosphere does the elevation work, not shadows.
- Pill geometry for interactive controls (buttons, nav, chips); softer card radii for content surfaces.
- Slow ambient motion you notice on the second look. No spectacle.
- One signature: the `<em>` in Fraunces italic + apricot-ink, used once per headline.

## 2. Colors

A warm-dusk palette: aubergine ground, cream type, three ink accents. Hex values are canonical and live in [app/globals.css](app/globals.css) as CSS custom properties; the descriptive names below are how this design system refers to them in prose and in future agent prompts.

### Primary

- **Apricot Ink** (`#e8a87c`): The signature accent. The color of warm desk light. Lives in every italic flourish (`<em>` in headings), the section-number numerals (`01` / `02` / `03` / `04`), the primary button's hover state, and the cursor ring during interaction. Never tinted, never gradiented, never used on more than ~10% of a screen at once.

### Secondary

- **Iris Ink** (`#c8a8e9`): A cool counter-accent. Used in the ambient glow palette and in the conic-gradient halo behind the Contact card. Reserved for atmosphere, not foreground type.
- **Cyan Ink** (`#8fc8d4`): The third accent. Lives in the geo-marker pulse dot ("San Jose · CA" sticker on the portrait), the ambient palette, and the contact-card halo. Like Iris, atmospheric, not foreground.

### Neutral

- **Cover Aubergine** (`#221e2a`): The page itself. The room. Always the body background; never used on a foreground element.
- **Spread Aubergine** (`#2b2734`): One tonal step lighter. Reserved for stage surfaces inside the page (the nav pill at 65% opacity, the portrait sticker, focal panels).
- **Plate Aubergine** (`#322d3c`): Two tonal steps lighter. Used inside `.img-wrap` backings and image placeholders.
- **Inside-Cover Cream** (`#f3efe8`): The type color. Body, headlines, button labels. Slightly warm-cream, never `#fff`.
- **Caption Gray** (`#a8a39a`): Secondary type — section descriptions, metadata, project body copy, mono labels. Sits ~50% opacity-equivalent against the cream.
- **Footnote Gray** (`#7a7470`): Tertiary. Reserved; currently used sparingly. Don't promote it without reason.

### Hairlines

- **Hairline** (`#ffffff14` ≈ rgba(255,255,255,0.08)): Default 1px borders on cards, dividers, ghost buttons.
- **Hairline Bright** (`#ffffff29` ≈ rgba(255,255,255,0.16)): Borders on hover, portrait frame, nav pill, contact card.

### Named Rules

**The One-Ink Rule.** Apricot Ink carries every emphasis on the page. Iris and Cyan exist only as ambient atmosphere — in the glow palette, in the conic-gradient halo, in the cursor trail. They never replace Apricot in headings, buttons, italic flourishes, or section numerals. The reader learns "apricot means *this matters*" within the first scroll; that vocabulary must not be diluted.

**The No-Pure-Black, No-Pure-White Rule.** `#000` and `#fff` are forbidden. The ground is Cover Aubergine, the type is Inside-Cover Cream. Every neutral is tinted toward the aubergine hue.

## 3. Typography

**Display Font:** Manrope (with system-ui, sans-serif fallbacks)
**Body Font:** Manrope (same family — the system is largely monotype, with weight and italic doing the hierarchy work)
**Serif Accent:** Fraunces (with Georgia, serif fallbacks). Used italic, weight 300, for one or two words per heading.
**Label / Mono Font:** JetBrains Mono (with ui-monospace, monospace fallbacks). Used uppercase, letter-spaced.

**Character:** Manrope is warm, geometric, slightly humanist — it sets long-form copy without academic stiffness. Fraunces italic at weight 300 is the signature flourish: high-contrast, with a calligraphic terminal, used like a hand-written annotation in the margin of a printed page. JetBrains Mono is the editorial mast — section numbers, dates, mono labels — never used for body copy.

### Hierarchy

- **Display** (Manrope 300, `clamp(56px, 7.8vw, 116px)`, line-height 0.94, letter-spacing −0.035em): Hero H1 — the name itself. One per page.
- **Headline** (Manrope 300, `clamp(40px, 5.2vw, 68px)`, line-height 1, letter-spacing −0.025em): Section titles ("Where I've *worked*", "My *projects*"). The Contact section bumps to `clamp(50px, 7vw, 96px)`.
- **Title** (Manrope 400, 30–32px, line-height 1.05, letter-spacing −0.015em): Project card H3s, experience role H3s. Featured project card uses 52px / weight 300.
- **Body** (Manrope 400, 15px, line-height 1.6): Project descriptions, experience leads, section right-column copy. Cap line length at 60–70ch (project descriptions enforce `max-width: 54ch`, experience leads `60ch`).
- **Serif Accent** (Fraunces 300 italic, `clamp(22px, 2.4vw, 30px)`, line-height 1.4): The hero tagline. Also styled inside every `<em>` in display and headline elements, recolored to Apricot Ink.
- **Label** (JetBrains Mono 400, 11px, letter-spacing 0.2em, uppercase): Section labels ("01 · EXPERIENCE", "02 · SELECTED WORK", "03 · STACK", "04 · CONTACT").
- **Mono Meta** (JetBrains Mono 400, 10–12px, letter-spacing 0.15em, uppercase): Project metadata (number, date), portrait frame meta, stack chips, the "San Jose · CA" sticker.

### Named Rules

**The Italic-Flourish Rule.** Every `<em>` element inside a display, headline, or title heading switches to Fraunces 300 italic and Apricot Ink. Use exactly **one** italic flourish per heading — never two, never an entire phrase. The flourish is the editor's hand-lettered word, not a sentence-long highlight. Examples in the codebase: *"Where I've worked."*, *"Building thoughtful products..."*, *"My projects."*, *"Let's build something cool."*

**The Mono-Mast Rule.** JetBrains Mono is reserved for editorial machinery: section numbers, dates, frame metadata, stack tags, geo stickers. Never body copy. Never headlines. The mono mast is the magazine's running header — it organizes, it doesn't speak.

**The Long-Line Rule.** Body copy is allowed to be paragraphed and dense (the audience is a deep reader, not a skimmer). Cap line length at 60–70ch, but don't truncate or summarize for the sake of card balance. Project descriptions in the codebase run 200–280 characters by design.

## 4. Elevation

**The system uses no traditional drop shadows.** Depth is conveyed by three other devices: (a) hairline 1px borders that brighten on interaction, (b) tonal background steps using low-opacity white overlays (0.025 / 0.04 / 0.07), and (c) the **ambient atmosphere** — three large blurred color disks drifting behind every page, plus a slow conic-gradient halo behind the Contact card. The atmosphere does the elevation work.

There is exactly one exception: the hero portrait. It carries a single large diffuse shadow (`0 40px 120px -20px rgba(0,0,0,0.55)` plus an inset hairline) and a subtle perspective tilt that responds to cursor position. This is the system's signature elevation — used once, on the most important element on the page, and never duplicated.

### Atmosphere Vocabulary

- **Ambient glow trio** (three 560–760px circles, `filter: blur(140px)`, opacity 0.18–0.22, drifting 38–46s): Fixed behind the page at `z-index: -1`. The colors are Apricot, Iris, Cyan — the same three accents, doing background work. Never replicated on a per-card basis.
- **Conic halo** (`conic-gradient(from 0deg, accent, accent-2, accent-3, accent)`, blur 120px, opacity 0.14, spinning 50s): Lives behind the Contact card only. Marks the card as the page's destination.
- **Tonal lift** (`#ffffff0a` ≈ rgba(255,255,255,0.04) at rest, `#ffffff12` ≈ 0.07 on hover): The default surface for cards and tiles. Sits over the aubergine ground and gets brighter on interaction.

### Named Rules

**The Ambient-Elevation Rule.** Surfaces are flat at rest. Depth comes from hairlines, tonal lifts, and the ambient atmosphere — never from `box-shadow` on cards, buttons, or tiles. The portrait is the lone exception and is not a pattern to reuse.

**The Hairline-First Rule.** Borders precede shadows. If a surface needs to read as raised, it gets a brighter hairline (`hairline-bright`) on hover before it gets any other treatment. This keeps the entire system inside one elevation language.

## 5. Components

### Buttons

- **Shape:** Pill (border-radius 99px, the `rounded.pill` token).
- **Primary (`.btn-primary`):** Inside-Cover Cream surface, Cover Aubergine label. Padding 14px 22px, font 14px / weight 500. On hover: surface fills to Apricot Ink, label stays Cover Aubergine.
- **Ghost (`.btn-ghost`):** Transparent surface, Inside-Cover Cream label, 1px Hairline-Bright border. On hover: surface fills to `tonal-lift`, border darkens to Inside-Cover Cream.
- **Magnetic behavior:** Both buttons translate up to 25%/40% of cursor offset on mouseover (the `useMagnetic` hook in [Hero.jsx](components/site/Hero.jsx)). Bails out under `prefers-reduced-motion`.
- **Transitions:** 0.25s `cubic-bezier(0.2, 0.7, 0.3, 1)` — ease-out-quart-ish — for transform; 0.2s for background and border.

### Chips (Stack tags)

- **Style:** Pill (99px radius), padding 4px 10px, JetBrains Mono 10px uppercase with letter-spacing 0.05em.
- **Surface:** `#ffffff0a` (tonal-lift) with a 1px Hairline border.
- **Text:** Caption Gray at rest; lifts to Inside-Cover Cream when the parent project card is hovered (`.proj:hover .stack span`).

### Cards (Project)

- **Corner style:** 18px radius (`rounded.card`).
- **Background:** `#ffffff06` (~rgba(255,255,255,0.025)) at rest; `#ffffff0a` on hover.
- **Border:** 1px Hairline at rest; Hairline-Bright on hover.
- **Internal padding:** 28px standard; 42px on the featured card.
- **Hover behavior:** `transform: translateY(-3px)`, background lifts one tonal step, hairline brightens, and the arrow indicator in the top-right rotates `-45deg` while filling Apricot Ink. 0.35s `cubic-bezier(0.2, 0.7, 0.3, 1)`.
- **Featured variant** (`.proj.feat`): 2-column grid (1.1fr / 1fr), spans the full 6-column grid, image lives on the right, body left. Larger `h3` (52px, weight 300).

### Contact tiles

- **Corner style:** 14px (`rounded.tile`) — softer than project cards, marking them as friendlier endpoints.
- **Background:** `#ffffff0a` at rest, `#ffffff12` on hover.
- **Border:** 1px Hairline → Hairline-Bright on hover.
- **Internal padding:** 24px.
- **Hover lift:** `translateY(-2px)`, plus the arrow icon translates `(3px, -3px)` and tints Apricot Ink.

### Cards (Contact)

- **Corner style:** 24px (`rounded.card-lg`) — the largest radius in the system, reserved for the single Contact card.
- **Background:** `#ffffff08` (~0.03) over the page ground, with the conic halo blurring behind it at `z-index: -1`.
- **Border:** 1px Hairline-Bright.
- **Internal padding:** 80px / 60px (desktop); 48px / 24px (mobile).

### Navigation (`.nav-top`)

- **Style:** Floating pill (99px radius), fixed top-center, padding 6px / 6px / 6px / 18px.
- **Surface:** `#221e2aa6` (~rgba(34,30,42,0.65)) with `backdrop-filter: blur(20px)` — frosted aubergine.
- **Border:** 1px Hairline-Bright.
- **Brand:** Fraunces italic 300 at 18px, with a 1px right-hand divider.
- **Links:** JetBrains Mono–free zone — they're Manrope 13px, color Caption Gray, padding 8px 14px, pill hover state at `#ffffff0d`. The trailing CTA is filled Inside-Cover Cream → Apricot Ink on hover.

### Custom Cursor (Signature)

- **Ring:** 32×32 at rest, 62×62 on interactive hover, 1px border at ~45% Inside-Cover Cream. Tints to Apricot Ink on hover with an Apricot wash at 8% opacity. Lerps after the mouse on a `requestAnimationFrame` loop with damping 0.18.
- **Dot:** 5×5 Inside-Cover Cream, `mix-blend-mode: difference`, follows the mouse immediately.
- **Trail:** 5×5 Apricot Ink dots spawned every ~28ms, `mix-blend-mode: screen`, opacity 0.45, fading and scaling to 0.2 over 0.7s.
- **Bails out** on `(hover: none)` and `prefers-reduced-motion`.

### Section Labels

- **Style:** Mono mast — 1px line element (32px wide) + two-digit number in Apricot Ink + uppercase label in Caption Gray. JetBrains Mono 11px, letter-spacing 0.2em.
- **Pattern:** `[line] · 01 · EXPERIENCE` — applied identically on every section head (Experience, Selected Work, Stack, Contact).

### Ambient Atmosphere (Signature)

- **Layout:** Three blurred circles fixed at `z-index: -1`, plus an SVG noise grain at 5% opacity, `mix-blend-mode: overlay`.
- **Disks:** 760px (Apricot, top-left), 560px (Iris, mid-right), 620px (Cyan, bottom-center). All `filter: blur(140px)`, opacity 0.18–0.22.
- **Motion:** Each disk drifts on its own `38s` / `42s` / `46s` `ease-in-out infinite` keyframe. Disabled under `prefers-reduced-motion`.

### Named Rules

**The Pill-vs-Card Rule.** Interactive controls are pills (99px). Content surfaces are cards (8–24px radius). Never inverted. A button with an 18px radius reads as a tile, not a control; a card with a 99px radius reads as a button, not a story.

**The Two-Pixel Lift Rule.** Hover lifts are subtle: project cards `translateY(-3px)`, contact tiles `translateY(-2px)`, the contact tile arrow `translate(3px, -3px)`. Anything larger is too eager. Pair every lift with a hairline brightening so the reason for the lift is legible, not just the motion.

## 6. Do's and Don'ts

### Do:

- **Do** use Fraunces italic + Apricot Ink for exactly one or two words per heading. The flourish is the signature — keep it rare.
- **Do** keep new interactive controls as **pills** (99px radius). Pills are the system's signature geometry for buttons, nav links, chips.
- **Do** use **tonal layering** (`#ffffff06` → `#ffffff0a` → `#ffffff12`) for surface elevation. Hairline brightens on hover before anything else changes.
- **Do** number every new section with the same `[line] · 0N · LABEL` mono mast pattern; use sequential two-digit numbers.
- **Do** cap body line length at 60–70ch. The audience is a deep reader; long, paragraphed copy is welcome.
- **Do** respect `prefers-reduced-motion` on every motion you add. The custom cursor, ambient glows, magnetic CTAs, and reveal-on-scroll all bail out — anything new must follow.
- **Do** add a `:focus-visible` ring on every interactive element using **Apricot Ink** (2px offset is enough). The custom cursor is not a substitute for keyboard focus.

### Don't:

- **Don't** ship the generic Vercel / Next.js template clone — gradient-blob hero, "Hi I'm Kevin 👋", waving emoji, identical card grids, three skill icons in a row. PRODUCT.md rejects this by name.
- **Don't** drift into the hacker / terminal aesthetic — green-on-black, ASCII flair, matrix typography, "AI = code-rain" iconography. The substance is AI engineering; the surface stays editorial.
- **Don't** ship the corporate-FAANG palette — navy, gray, sterile grid, company-logo-collection as the pitch. The audience hires on craft, not on logos.
- **Don't** use `#000` or `#fff`. The ground is Cover Aubergine; the type is Inside-Cover Cream. Every neutral is tinted toward the aubergine hue.
- **Don't** use gradient text (`background-clip: text` with a gradient fill). Emphasis comes from weight, scale, or the italic-flourish rule — never from a gradient.
- **Don't** add `box-shadow` to new cards, buttons, or tiles. Use hairlines + tonal lifts. The portrait's shadow is the system's one exception.
- **Don't** use `border-left` greater than 1px as a colored accent stripe on a card or callout. Universally bad pattern.
- **Don't** glassmorph by default. Blur and frosted surfaces exist on the nav pill alone; they earn that role by sitting over scrolling content. Don't extend the pattern decoratively.
- **Don't** use more than one italic flourish per heading. *"Where I've **worked**"* is correct; *"Where I've **worked recently**"* is not.
- **Don't** promote Iris Ink or Cyan Ink to a foreground accent role. They exist as ambient atmosphere — in the glow palette and the contact halo. Apricot Ink is the only foreground accent.
- **Don't** add em dashes (`—`) or double-dashes (`--`) to display or headline copy. Use commas, periods, or colons. Tagline copy already follows this.
- **Don't** rely on color alone to convey state. The cursor ring color shift is a hover cue; pair any future state with size, motion, or copy too.
