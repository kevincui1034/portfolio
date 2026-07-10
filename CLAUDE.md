# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Design language: "Control Room"** (rebuilt from scratch, July 2026). Dark machine-editorial: near-black base with a single acid-lime accent (`--acid`), Anton condensed display type, Archivo body, JetBrains Mono for telemetry labels, hairline viewport frame with live readouts, and a WebGL particle terrain behind everything. All tokens live at the top of [app/globals.css](app/globals.css). Runtime behaviors (cursor, scramble, tilt, magnetic, sticky-stack, marquee, boot intro) are driven by `data-*` attributes documented in [DesignRuntime.jsx](components/site/DesignRuntime.jsx).

## Commands

- `npm run dev` — Next.js dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config, extends `eslint-config-next/core-web-vitals`)

There is no test runner configured.

## Stack

- Next.js 16 App Router, React 19, **JSX (not TypeScript)**. `jsconfig.json` aliases `@/*` to the repo root.
- Styling is **hand-written CSS in [app/globals.css](app/globals.css)** as semantic classes (not utility classes). Tailwind v3 is installed but currently unused for layout. Design tokens (colors, type, spacing) are defined as CSS variables at the top of `globals.css` — change values there.
- Fonts are wired through `next/font/google` in [app/layout.jsx](app/layout.jsx) and exposed as CSS variables on `<html>`.
- **`three`** (Three.js) is a real dependency used by DesignRuntime for a decorative hero effect. It is **dynamically imported** inside a client effect so it never touches SSR; its failure is swallowed (the effect is decorative).
- No UI component library (no shadcn, no framer-motion, no MagicUI). Animations are plain CSS transitions/keyframes plus one `requestAnimationFrame` loop. Vercel Analytics is enabled in the root layout.

## Architecture

Single-page portfolio. [app/page.jsx](app/page.jsx) mounts `DesignRuntime` then every section in order — **Nav, Hero, Marquee, About, Experience, Education, Skills, Highlights, Projects, Contact** — there are no sibling routes. All section content (projects, bullets, skill columns, links) lives inline as arrays/consts at the top of each component file — **there is no data layer or CMS**. Edit the arrays to change content.

**One global client effect drives page-level interactivity:**

- [DesignRuntime.jsx](components/site/DesignRuntime.jsx) — the only `"use client"` component. It renders fixed visual layers and runs a single `requestAnimationFrame` loop that drives runtime behaviors such as **reveal-on-scroll** (adds `.in` to every `.reveal` via an IntersectionObserver), scroll-progress, parallax on tagged elements, and a custom cursor. It **bails out entirely under `prefers-reduced-motion`** (revealing all `.reveal` immediately) and disables the custom cursor on touch/coarse pointers. Three.js is loaded with `await import("three")`. Keep these guards when you touch the runtime.

**Every other component is a server component** — none use refs, effects, or browser APIs. Interactivity is delegated to DesignRuntime through `data-*` attributes and shared CSS classes, so the sections stay static.

**Section IDs and navigation.** [Nav.jsx](components/site/Nav.jsx) is a fixed bar linking to in-page anchors (plus the résumé PDF). Smooth scroll is pure CSS (`html { scroll-behavior: smooth }`), not JS. Section ids in DOM order: `top` (hero), `about`, `experience`, `education`, `skills`, `highlights`, `work` (projects), `contact`. If you rename a section, update Nav's links.

**Projects are curated across two sections.** [Highlights.jsx](components/site/Highlights.jsx) shows the flagship projects as large case studies; [Projects.jsx](components/site/Projects.jsx) shows the rest as a card grid — twelve total, newest to oldest. Project screenshots live in [public/](public/); `headshot.png` and the résumé PDF are there too, referenced by absolute path.

**Accessibility.** `:focus-visible` styles are defined; decorative layers are `aria-hidden`; sections use `aria-labelledby`. The custom cursor and any decorative motion are disabled under `prefers-reduced-motion` and on touch. Preserve these guards.

## Conventions

- New components go in [components/site/](components/site/) as PascalCase `.jsx`. Mark a component `"use client"` **only** if it needs refs/effects/browser APIs — right now only `DesignRuntime` does.
- Prefer extending [globals.css](app/globals.css) with a new `/* ---------- name ---------- */` block of semantic classes over inline styles or Tailwind utilities. Reserve inline `style` for one-off values a class can't express.
- Mobile breakpoint is `@media (max-width: 720px)` (defined in globals.css). The layout is otherwise fluid via `clamp()`, `vw`/`vh`, and `flex-wrap`.
- **Heads-up for visual verification:** the layout leans on `vh` units, so Playwright `fullPage` screenshots inflate the page — verify with **viewport** screenshots scrolled to each section instead.
