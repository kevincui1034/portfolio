# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Next.js dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config, extends `eslint-config-next/core-web-vitals`)

There is no test runner configured.

## Stack

- Next.js 16 App Router, React 19, **JSX (not TypeScript)**. `jsconfig.json` aliases `@/*` to the repo root.
- Tailwind v3 is installed but **most styling lives in hand-written CSS in [app/globals.css](app/globals.css)**, not utility classes. The Tailwind config exists mostly to register the custom color palette (`bg` `#221e2a`, `ink` `#f3efe8`, `accent` `#e8a87c`, `accent-2` `#c8a8e9`, `accent-3` `#8fc8d4`, etc.) and font families — but components reference these through CSS variables (`var(--accent)`, `var(--ink)`, `var(--bg)`…) defined at the top of [globals.css](app/globals.css), not via Tailwind classes. If you change a color, update both places.
- Fonts: **Manrope** (`--font-display`), **Fraunces** (`--font-serif`, used italic for editorial accents), **JetBrains Mono** (`--font-mono`). Wired through `next/font/google` in [app/layout.jsx](app/layout.jsx) as CSS variables on `<html>`.
- No UI library — **no shadcn, no framer-motion, no MagicUI**. Animations are plain CSS transitions and keyframes, plus a few small `requestAnimationFrame` loops. Vercel Analytics is enabled in the root layout.

## Architecture

Single-page portfolio. [app/page.jsx](app/page.jsx) mounts every component in order; there are no sibling routes. All section content (experience entries, project cards, skill categories, contact links) lives inline as arrays at the top of each component file — **there is no data layer or CMS**. Edit the arrays to add content.

**Three globally-mounted client effects wrap the page:**

- [AmbientAtmosphere.jsx](components/site/AmbientAtmosphere.jsx) — three large `filter: blur(140px)` glow divs that drift via CSS keyframes, plus an SVG noise grain overlay. Fixed to the viewport behind everything.
- [Cursor.jsx](components/site/Cursor.jsx) — replaces the default cursor with a dot + lerped ring + decaying trail. Bails out on `(hover: none)` or `prefers-reduced-motion`. Uses a `MutationObserver` on `document.body` to re-attach hover handlers (matched by `HOVER_SELECTOR`) when content changes — **be aware: the trail spawns ~36 DOM nodes/sec while the mouse moves, and the observer re-queries on every mutation**. Filter trail nodes if you extend the observer logic.
- [Reveal.jsx](components/site/Reveal.jsx) — renders nothing; sets up an `IntersectionObserver` that adds `.in` to any `.reveal` element when it scrolls into view, triggering the CSS opacity/translate transition. Under `prefers-reduced-motion`, every `.reveal` is marked `in` immediately.

**Section IDs and navigation.** [Nav.jsx](components/site/Nav.jsx) links to `#xp`, `#projects`, `#skills`, `#contact` and uses a custom `smoothScroll` (NOT `scrollIntoView`) that offsets 32px from the top. If you rename a section, update Nav's `links` array. The hero is the implicit "home" — no `#home` anchor exists.

**Editorial design conventions used throughout `globals.css`:**

- `<em>` inside headings is restyled to Fraunces italic in `--accent` color. This is the site's signature flourish — keep using it for one or two words per title, not full phrases.
- Section heads share a `.section-label` (mono · "01" / "02" · LABEL) + `.section-title` pattern. Section numbering is sequential 01–04.
- `.reveal` is the only animation primitive — add it to any element you want to fade-in on scroll. Don't reach for framer-motion; it isn't installed.
- Magnetic CTAs (`useMagnetic` hook in [Hero.jsx](components/site/Hero.jsx)) translate on mouseover. The hook is local to Hero — if you want it elsewhere, lift it to a shared file.

**Accessibility note.** `body { cursor: none }` is set globally with a `(hover: none)` and `prefers-reduced-motion` bail-out, but there are currently **no `:focus-visible` styles** anywhere. Keyboard users get no focus indicator on buttons, links, or project cards. Worth adding when you touch component styles.

## Conventions

- New components go in [components/site/](components/site/) as PascalCase `.jsx`. Mark them `"use client"` only if they use refs, effects, browser APIs, or event handlers — `Experience`, `Projects`, `Skills`, `Contact`, `Footer`, `AmbientAtmosphere` are server components.
- Prefer extending [globals.css](app/globals.css) with a new section block (matching the existing `/* ---------- name ---------- */` convention) over inlining styles or adding utility classes.
- Static assets — resume PDF, project screenshots, headshot — live in [public/](public/) and are referenced by absolute paths like `/headshot.png`, `/kevincui_resume_swe.pdf`.
- Mobile breakpoint is `@media (max-width: 900px)` (one breakpoint, defined in globals.css). Tailwind's own `sm/md/lg/xl` are configured but rarely used.
