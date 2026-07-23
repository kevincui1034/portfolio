# The Prompt

This file contains one complete, self-contained prompt that teaches an AI model to
build an interactive 3D website. Copy the entire gray block below and paste it into
any capable AI assistant (Claude, or others). It works best when you also tell the
AI which **theme** and **stack** you want (both are explained inside the prompt —
if you say nothing, the AI picks sensible defaults).

````
You are building a single-page interactive 3D website. Follow this specification
exactly. It is organized as: DELIVERABLE → STACK → THEME → CONTENT → TECHNIQUE
TIERS → HARD RULES → ACCESSIBILITY & PERFORMANCE → SELF-VERIFICATION.

═══════════════════════════════════════════════════════════════════════
1. DELIVERABLE — definition of done
═══════════════════════════════════════════════════════════════════════

A single-page scrolling website with:
- A full-viewport animated WebGL particle field behind all content that visibly
  reacts to BOTH scrolling and mouse movement.
- All Tier 1 techniques (section 5) implemented and working.
- Smooth 60fps scrolling, no layout jank, no console errors.
- Full keyboard navigation, and a correct experience under
  prefers-reduced-motion (everything readable, nothing animating).
- The chosen theme applied consistently through CSS design tokens.

Build Tier 1 completely and verify it works BEFORE attempting Tier 2.
Build Tier 2 before Tier 3. A finished Tier 1 site is a success; a
half-broken Tier 3 site is a failure.

═══════════════════════════════════════════════════════════════════════
2. STACK — pick A or B (default: A; use B if no build tooling is available)
═══════════════════════════════════════════════════════════════════════

STACK A — Next.js (default)
- Next.js App Router, React, plain JSX (NOT TypeScript).
- Exactly ONE client component: components/DesignRuntime.jsx marked "use client".
  It owns ALL browser behavior. Every other component is a server component with
  zero hooks, zero refs, zero browser APIs.
- three is a package.json dependency but is ONLY loaded inside DesignRuntime's
  useEffect via: const THREE = await import("three") — wrapped in try/catch.
  The 3D background is decorative; if it fails, the site still works.
- Styling: ONE hand-written app/globals.css. Design tokens as CSS variables in
  :root at the top. Semantic class names. No Tailwind, no CSS-in-JS, no UI kits,
  no animation libraries (no framer-motion, no GSAP).
- Fonts via next/font/google in app/layout.jsx, exposed as CSS variables.

STACK B — single file (maximum reliability, zero tooling)
- One index.html containing all markup, one <style> block, one <script type="module">.
- Load three from a pinned CDN:
  import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";
  Wrap the entire 3D setup in try/catch — the page must work if the CDN fails.
- Fonts via a Google Fonts <link> tag.
- Same rules otherwise: CSS tokens in :root, semantic classes, no libraries.

═══════════════════════════════════════════════════════════════════════
3. THEME — pick exactly one recipe (default: Aurora Observatory)
═══════════════════════════════════════════════════════════════════════

Every theme defines: tokens, two Google fonts + one mono font, a particle-field
variant, and a motif vocabulary. Apply the chosen theme EVERYWHERE — do not mix.

THEME 1 · DEEP OCEAN SONAR (dark, cold, precise)
- Tokens: --bg:#030b12  --ink:#dcf2ff  --dim:#5d7f93  --accent:#35e0ff
  --panel:#081722  --line:rgba(220,242,255,0.14)
- Fonts: display "Michroma", body "Inter", mono "Space Mono".
- Particle field: a vast flat "sea floor" grid far below the camera, slow
  rolling swells (low frequency, high wavelength), cyan glow by height.
  Cursor emits a bump like a sonar contact.
- Motifs: expanding sonar rings on hover, depth readouts ("−214 M"), thin
  dotted rules, coordinates in mono type, slow blinking contact dots.

THEME 2 · PAPER & INK ATELIER (light! warm paper, black ink, red seal)
- Tokens: --bg:#f5f0e6  --ink:#16130e  --dim:#8a7f6c  --accent:#c8401a
  --panel:#ece4d4  --line:rgba(22,19,14,0.16)
- Fonts: display "Fraunces" (700, tight), body "Newsreader", mono "IBM Plex Mono".
- Particle field: DARK ink-grain particles drifting in a slow spiral vortex on
  the light background (use normal blending, not additive; particles darker
  than the background). Cursor stirs the grains outward.
- Motifs: a square red "seal stamp" mark, ruled baselines, small margin numbers,
  underlines that draw in on hover. This theme proves the system works on light.

THEME 3 · AURORA OBSERVATORY (dark indigo, teal→violet gradient light)
- Tokens: --bg:#05060f  --ink:#e8eaff  --dim:#6b6f8f  --accent:#6ef3d6
  --accent2:#a78bfa  --panel:#0b0d1d  --line:rgba(232,234,255,0.12)
- Fonts: display "Syne" (800), body "Figtree", mono "Fira Code".
- Particle field: curtains/ribbons of particles arcing ABOVE the camera like an
  aurora, hue interpolating from --accent to --accent2 along each ribbon,
  slow vertical shimmer. Cursor brightens the nearest ribbon region.
- Motifs: constellation lines between small dots, a thin crosshair reticle,
  frosted-glass panels (background blur), gradient text on key words.

THEME 4 · MOLTEN FOUNDRY (charcoal, ember orange, industrial heat)
- Tokens: --bg:#14100d  --ink:#f4e9dd  --dim:#8d7f72  --accent:#ff6a1f
  --hot:#ffc86b  --panel:#1d1712  --line:rgba(244,233,221,0.14)
- Fonts: display "Alfa Slab One", body "Rubik", mono "Red Hat Mono".
- Particle field: sparks rising slowly from the bottom of the world, ember
  color mixed from --accent to --hot by height, slight horizontal heat-haze
  wobble. Scroll velocity makes sparks surge upward faster.
- Motifs: gauge arcs, hazard-stripe dividers (two-color repeating gradient),
  stamped mono labels ("BATCH 047"), glow shadows on the accent color.

═══════════════════════════════════════════════════════════════════════
4. CONTENT — placeholder (replace freely if the user supplies their own)
═══════════════════════════════════════════════════════════════════════

The site belongs to "Meridian Works", a fictional creative-technology studio.
Sections in DOM order, each with an id for anchor navigation:

- #top HERO — giant display-type name "MERIDIAN WORKS", tagline "Instruments
  for the curious.", a status line in mono type, a scroll hint.
- #about ABOUT — two short paragraphs: a studio that builds playful,
  precision-crafted digital instruments; ~8 years, ~40 shipped experiments.
- #work SELECTED WORK — three case studies, each with title, one-sentence
  description, 3 tags, and a media frame (use a styled placeholder div with a
  CSS gradient — no external images):
  1. "Tidepool" — a live map of ocean sensors rendered as a playable atlas.
     Tags: WebGL, Data, Realtime.
  2. "Cursor Nine" — a nine-voice synthesizer you play by drawing. Tags:
     Audio, Canvas, Interaction.
  3. "Fieldnotes" — an AR walking journal that pins memories to places. Tags:
     AR, Mobile, Maps.
- #capabilities CAPABILITIES — six short items in a grid: Creative Direction,
  WebGL & Shaders, Interaction Design, Generative Systems, Sound & Motion,
  Rapid Prototyping.
- #contact CONTACT — oversized "SAY HELLO" headline, a mailto button for
  hello@meridian.works, and small mono footer credits.

═══════════════════════════════════════════════════════════════════════
5. TECHNIQUE TIERS
═══════════════════════════════════════════════════════════════════════

── TIER 1 · REQUIRED CORE ──────────────────────────────────────────────

T1.1 — WebGL particle field (the centerpiece)
Create a THREE.Points cloud of 15,000–25,000 vertices arranged per the theme's
variant (grid floor / vortex / ribbons / rising sparks). Animate positions in
the vertex shader (preferred) using time-scrolled noise or sine sums; a CPU
loop updating a BufferAttribute each frame is an acceptable fallback at ≤15k
points. Fragment shader: draw round soft points (discard outside radius,
smoothstep alpha edge), fade alpha by view-space depth. Dark themes: additive
blending, depthWrite false. Light theme (Paper & Ink): NORMAL blending with
dark particles. Renderer: alpha true, antialias false, pixel ratio capped at
Math.min(devicePixelRatio, 1.75), powerPreference "high-performance". The
canvas is position:fixed, inset:0, z-index 0, aria-hidden, pointer-events none.

T1.2 — Field reactivity (what makes it feel alive)
Maintain three smoothed values fed to the shader as uniforms (or applied in the
CPU fallback): (a) uScrollVel — scroll velocity: v=(scrollY−lastY)/dt, then
smoothed: vel += (v − vel) * min(1, dt*4); boosts animation amplitude or speed.
(b) uScroll — overall scroll progress 0→1; drives a slow camera move (e.g. dive
or drift: camera.position.z = 26 − progress*8). (c) uMouse — pointer in WORLD
space: take NDC (x=e.clientX/w*2−1, y=−e.clientY/h*2+1), unproject through the
camera, form a ray, intersect the plane the particles live on (guard against
near-parallel rays: if |dir.y| < 0.001 skip), and raise/brighten particles
within a falloff radius of that point via smoothstep(radius, 0, dist).

T1.3 — Reveal-on-scroll
All revealable elements carry class "reveal" and start hidden ONLY when JS is
present: a tiny inline script in <head> adds class "js" to <html> before paint;
CSS scopes hiding to html.js .reveal { opacity:0; transform:translateY(36px); }.
One IntersectionObserver (threshold 0.12, rootMargin "0px 0px -8% 0px") adds
class "in"; transition ~0.8s with per-item stagger via
transition-delay: calc(var(--i) * 80ms) where --i is set in the markup.
Unobserve after revealing. Without JS, everything is simply visible.

T1.4 — Scroll progress + scroll-spy nav
A fixed top bar scaled by --sp: each frame set
document.documentElement.style.setProperty("--sp", scrollY/(scrollHeight−innerHeight)).
CSS: transform: scaleX(var(--sp)); transform-origin: left. A fixed nav with
anchor links to every section; a second IntersectionObserver with rootMargin
"-45% 0px -50% 0px" marks the current section's link .active. Smooth scrolling
via html { scroll-behavior: smooth } (disabled under reduced motion).

T1.5 — Sticky-runway hero scrub (the signature scroll effect)
Hero structure: an outer "runway" div ~200svh tall containing a sticky stage
(position:sticky; top:0; height:100svh) that holds the hero content. Each
frame compute: p = clamp01(−runway.getBoundingClientRect().top /
(runway.offsetHeight − innerHeight)) and write it to a CSS variable --hp on
the runway. CSS uses --hp to transform the hero out as the user scrolls (e.g.
title translates up and fades: opacity: calc(1 − var(--hp)*1.4)). Feed the
same p into the camera or field amplitude so the 3D world responds to the hero
leaving. Default --hp: 0 in CSS so no-JS renders the resting state.

T1.6 — Fluid type & tokens
All font sizes via clamp(), e.g. hero: font-size: clamp(3.5rem, 14vw, 12rem).
Every color/spacing/font decision references the theme's CSS variables. One
mobile breakpoint at 720px; disable sticky scrub effects below it (plain
static hero) and use single-column layouts.

── TIER 2 · ENHANCEMENTS (only after Tier 1 works) ─────────────────────

T2.1 — Custom cursor (fine pointers only)
Gate with matchMedia("(pointer: fine)"). Two fixed elements: a small accent
dot and a larger ring, both lerped toward the real pointer each frame at
different rates — dot: x += (mx−x)*min(1,dt*24); ring: dt*11 — producing a
trailing feel. On hover of a, button, [data-cursor], add a class that scales
the ring up; if the target has data-cursor="LABEL", show that text in a small
pill near the ring. Hide the native cursor only when active (html.has-cursor
* { cursor: none }). Never enable on touch.

T2.2 — Tilt + spotlight cards
On pointermove over a card, compute px,py ∈ [0,1] within its rect. Targets:
rotY=(px−0.5)*2*MAX, rotX=−(py−0.5)*2*MAX with MAX≈4.5deg. Lerp current
values toward targets each frame (factor dt*10) and write --rx/--ry consumed
by transform: perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry)).
Also write --mx/--my as percentages driving a radial-gradient highlight on a
::after overlay. Reset targets to 0 on pointerleave.

T2.3 — Magnetic buttons
Each frame, for elements tagged data-magnetic: d = pointer − elementCenter;
if |d| < radius (radius = 1.4 × max(width,height)) translate the element by
d * (1 − |d|/radius) * 0.42, lerped; otherwise lerp translation back to 0.
Fine pointers only.

T2.4 — Sticky-stack panels
Consecutive full-height panels each position:sticky; top:0; min-height:100svh
so the next slides over the last. Per frame, for each panel measure how far
the NEXT panel has risen into the viewport → cover ∈ [0,1]; write --cover on
the current panel: it scales to 1−0.05*cover and dims via
filter: brightness(calc(1 − var(--cover)*0.5)). The incoming panel gets
--enter used to settle its content upward from translateY(6vh) to 0.

T2.5 — Text scramble
For [data-scramble] elements when they reveal: cache the original string ONCE
in dataset.text (guard: only if not already cached). Animate ~950ms: characters
solidify left-to-right (character i locks when elapsed/duration > i/length);
unlocked characters flicker through a small glyph set each frame; spaces stay
spaces. Re-entrancy guard (skip if already scrambling). Runs only after mount,
never during server render.

── TIER 3 · SHOWPIECES (optional) ──────────────────────────────────────

T3.1 — Pinned horizontal rail: a sticky full-height section whose vertical
scroll budget equals the rail's horizontal overflow. Set the wrapper height in
JS: innerHeight + (rail.scrollWidth − innerWidth). Each frame p = clamp01(
−wrapper.top / (wrapper.height − innerHeight)); rail.style.transform =
`translate3d(${−p*(rail.scrollWidth−innerWidth)}px,0,0)`. Desktop only; plain
grid on mobile.
T3.2 — Velocity marquee: an infinitely looping row (content duplicated 2–3×);
offset advances by (baseSpeed + clamp(|scrollVel|)*k) * dt each frame, applied
modulo the width of ONE copy for a seamless loop. Optional skewX proportional
to scroll velocity, capped at ~9deg.
T3.3 — Intro sequence: a fixed overlay with a 0→100 eased counter (~1.6s) that
plays once per session (sessionStorage flag), then wipes away via a clip-path
transition and releases the hero reveal. Skips entirely under reduced motion
and on repeat visits.
T3.4 — Per-letter hero effects: wrap each hero glyph in a span. Derive each
letter's parallax depth and scatter vector DETERMINISTICALLY from its index
(e.g. depth = ((i*37) % 13)/13 − 0.5), never Math.random() in rendered markup.
Pointer parallax: translate each letter by depth * smoothed pointer offset.
Scroll disintegration: at higher --hp each letter flies along its own scatter
vector and fades.

═══════════════════════════════════════════════════════════════════════
6. HARD RULES — violations are the most common causes of failure
═══════════════════════════════════════════════════════════════════════

R1  NEVER import three at module top level in Stack A (breaks SSR/build). Only
    await import("three") inside the client effect, in try/catch. The site must
    fully work when WebGL is unavailable.
R2  NEVER call Math.random() (or Date.now()) for anything that appears in
    server-rendered markup — it causes hydration mismatches. Randomness in
    rendered content must be an integer-hash function of the element's index.
    (Purely post-mount client effects like the scramble may use Math.random().)
R3  ONE requestAnimationFrame loop drives everything (cursor, scrubs, magnets,
    tilt, marquee, uniforms). Clamp delta time: dt = min(0.05, (now−last)/1000).
    Pause the loop when document.hidden; on visibilitychange reset the last-time
    stamp so there is no giant dt/velocity spike when the tab returns.
R4  JS communicates with CSS by writing CSS custom properties (--sp, --hp,
    --cover, --rx…), not by setting style.opacity/left/top directly (transform
    strings for the rail/marquee are the exception). CSS does the visual math.
R5  Fixed-layer z-index order (keep exactly this relationship): canvas 0 →
    content sections 2 (each section position:relative; z-index:2 or the fixed
    canvas will swallow clicks/content) → decorative overlays 60s → nav 70 →
    progress bar 80 → custom cursor 90 → intro overlay 100.
R6  Full-height measurements use 100svh (not 100vh) so mobile browser chrome
    does not cause jumps.
R7  prefers-reduced-motion is BOTH: (a) an early return in the runtime before
    any wiring — reveal everything, skip intro, run no rAF loop, hide/freeze
    the canvas; and (b) a CSS media block neutralizing transitions/animations.
    A CSS-only approach still burns CPU; a JS-only approach still animates CSS.
R8  Collect every listener, observer, interval, and the rAF handle in a
    disposers array; the effect cleanup runs them all, disposes Three geometry/
    material/renderer, and flips a running flag the loop checks. (In React dev
    StrictMode effects run twice — without this you leak a second loop and a
    WebGL context.)
R9  Scrub math is always progress = clamp01(−top / (scrollHeight_of_runway −
    viewportHeight)) from getBoundingClientRect() — never scrollY arithmetic
    against absolute offsets (breaks on resize/late layout).
R10 Cache-and-guard any text-mutating effect (R2's scramble): cache the
    original string once, and never start a second run while one is active —
    otherwise the animation corrupts the text permanently.

═══════════════════════════════════════════════════════════════════════
7. ACCESSIBILITY & PERFORMANCE REQUIREMENTS
═══════════════════════════════════════════════════════════════════════

- Decorative layers (canvas, overlays, cursor) are aria-hidden="true" and
  pointer-events:none. Animated headline glyph soup gets aria-hidden spans
  inside an element carrying an aria-label with the real text.
- Custom cursor, magnetic, and tilt effects: fine pointers only; nothing may
  break on touch. Visible :focus-visible outlines on all interactive elements.
- Semantic landmarks: nav, main, section[aria-labelledby], footer. Real <a>
  anchors for navigation.
- No animation/UI libraries. Plain CSS transitions/keyframes + the single rAF
  loop. will-change only on the few persistently-transformed elements.
- Lighthouse-visible basics: <title>, meta description, one <h1>, sequential
  headings, lang attribute.

═══════════════════════════════════════════════════════════════════════
8. SELF-VERIFICATION — do this before declaring success
═══════════════════════════════════════════════════════════════════════

1. Run it (Stack A: npm run dev; Stack B: open index.html). Zero console
   errors, zero hydration warnings.
2. Scroll top to bottom: particle field visibly reacts to scroll; hero scrubs
   out over its runway; every section reveals; progress bar reaches 100%; nav
   highlights follow; no horizontal scrollbar at any width.
3. Move the mouse: field responds near the cursor; (Tier 2) cursor trails,
   cards tilt, buttons magnetize.
4. Emulate prefers-reduced-motion: everything visible and static, no canvas
   motion, page fully readable.
5. 390px-wide viewport: single column, no sticky scrub, field still renders.
6. Disable JS (or simulate WebGL failure): all content visible and readable.
7. Confirm every Tier 1 item exists. State explicitly which Tier 2/3 items
   were included.
````
