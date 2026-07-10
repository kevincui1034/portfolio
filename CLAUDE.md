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
- **Design: dark monochrome.** Background `#050505`, ink `#f2f2f4` / `#e8e8ea`, and a white-opacity text ramp. There is **no color accent** — hierarchy comes from type weight, size, and opacity. All tokens are CSS variables at the top of [globals.css](app/globals.css) (`--bg`, `--ink`, `--ink-2`, `--t-80…--t-35`, `--line`, `--surface`). Change a value there.
- **Fonts:** **Space Grotesk** (`--font-display`, also the body face) and **Space Mono** (`--font-mono`, used for every uppercase label, eyebrow, date, and tag). Wired through `next/font/google` in [app/layout.jsx](app/layout.jsx) as CSS variables on `<html>`. There is no serif.
- Tailwind v3 is installed but **essentially all styling is hand-written CSS in [app/globals.css](app/globals.css)** as semantic classes (`.hero`, `.section`, `.proj-card`, …), not utility classes. Components reference the CSS variables above.
- **`three`** (Three.js) is a real dependency — it renders the hero wireframe terrain (see DesignRuntime). It is **dynamically imported** inside a client effect so it never touches SSR.
- No UI library — **no shadcn, no framer-motion, no MagicUI**. Animations are plain CSS transitions/keyframes plus one `requestAnimationFrame` loop. Vercel Analytics is enabled in the root layout.

## Architecture

Single-page portfolio. [app/page.jsx](app/page.jsx) mounts `DesignRuntime` then every section in order — **Nav, Hero, Marquee, About, Experience, Education, Skills, Highlights, Projects, Contact** — there are no sibling routes. All section content (projects, bullets, skill columns, links) lives inline as arrays/consts at the top of each component file — **there is no data layer or CMS**. Edit the arrays to change content.

**One global client effect drives the whole page:**

- [DesignRuntime.jsx](components/site/DesignRuntime.jsx) — the only `"use client"` component. It renders the fixed visual layers (a **Three.js wireframe-terrain hero canvas**, an ambient particle field, a scroll-progress bar, and a lerped custom cursor) and runs a single `requestAnimationFrame` loop that also drives: **reveal-on-scroll** (adds `.in` to every `.reveal` via an IntersectionObserver), **ghost-title parallax** (`[data-ghost]`), and **hero content parallax + fade** (`[data-hero-inner]`, `[data-hero-name]`). It **bails out entirely under `prefers-reduced-motion`** (revealing all `.reveal` immediately) and hides the custom cursor on touch/coarse pointers. Three.js is loaded with `await import("three")` and its failure is swallowed (the terrain is decorative).

**Every other component is a server component** — none use refs, effects, or browser APIs. Interactivity (parallax, reveal, cursor) is delegated to DesignRuntime through `data-*` attributes and shared CSS classes, so the sections stay static.

**Section IDs and navigation.** [Nav.jsx](components/site/Nav.jsx) is a fixed bar: **WORK** → `#experience`, **PROJECTS** → `#highlights` (the "Selected work" section), **ABOUT** → `#about`, **CONTACT** → `#contact`, plus `#top` on the "KC" brand and the résumé PDF. (Note the labels don't match the ids one-to-one — WORK points at the experience section, PROJECTS at the highlights section.) Smooth scroll is pure CSS (`html { scroll-behavior: smooth }`), not JS. Section ids in DOM order: `top` (hero), `about`, `experience`, `education`, `skills`, `highlights`, `work` (projects), `contact`. If you rename a section, update Nav's links.

**Design conventions used throughout `globals.css`:**

- **Ghost titles.** Each section carries one giant outlined word (`.ghost`, `-webkit-text-stroke`, `white-space:nowrap`) behind its content. Position offsets (`top`/`right`/`bottom`/`left`) and the parallax factor (`data-ghost="0.16"`) are set inline per section; the section has `overflow:hidden` so the ghost is clipped, not scrolled.
- **Eyebrows.** Every section opens with a mono label `( 0N ) · LABEL` (`.eyebrow`), numbered sequentially 01–07.
- **`.reveal` is the animation primitive.** Add `className="reveal"` to any block to fade+rise it in on scroll; stagger siblings with an inline `style={{ transitionDelay: "150ms" }}`. Don't reach for framer-motion — it isn't installed.
- **Alt sections.** `.section.alt` (About, Education) and the Highlights/Contact sections get the faint `--surface` tint; plain `.section` (Experience, Skills, Projects) sit on pure `--bg`, so the page alternates.
- **Cards.** Case studies use `.case` / `.case.reverse` (alternating image/text). Grid projects use `.proj-card`; a project with no screenshot (the two published Claude Code skills) renders `.proj-card-placeholder` instead of an `<Image>`.

**Projects are curated across two sections.** [Highlights.jsx](components/site/Highlights.jsx) shows the two flagships (JanusLabs, ProofLoop) as large "Selected work" case studies; [Projects.jsx](components/site/Projects.jsx) shows the other ten as a card grid — **twelve total**, newest to oldest. Project screenshots live in [public/](public/) (`/januslabs.png`, `/proofloop.png`, …); `headshot.png` and `kevincui_resume_swe.pdf` are there too, referenced by absolute path.

**Accessibility.** `:focus-visible` styles are defined; decorative layers are `aria-hidden`; sections use `aria-labelledby`. The custom cursor and terrain are disabled under `prefers-reduced-motion` and on touch. Keep these guards when you touch the runtime.

## Conventions

- New components go in [components/site/](components/site/) as PascalCase `.jsx`. Mark a component `"use client"` **only** if it needs refs/effects/browser APIs — right now only `DesignRuntime` does.
- Prefer extending [globals.css](app/globals.css) with a new `/* ---------- name ---------- */` block of semantic classes over inline styles or Tailwind utilities. Inline `style` is reserved for one-off values a class can't express (per-ghost position offsets, per-reveal `transitionDelay`).
- Mobile breakpoint is `@media (max-width: 720px)` (defined in globals.css). The layout is otherwise fluid via `clamp()`, `vw`/`vh`, and `flex-wrap`.
- **Heads-up for visual verification:** the layout leans on `vh` units, so Playwright `fullPage` screenshots inflate/double the page — verify with **viewport** screenshots scrolled to each section instead.
