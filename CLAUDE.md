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
- Tailwind v3 with `tailwindcss-animate`. Theme extends `colors.primary` (`#1c1c22`) and `colors.accent` (`#00ff99` / `accent-hover`); fonts are `font-primary` (Geist Sans) and `font-secondary` (Geist Mono), wired via `next/font/google` in [app/layout.jsx](app/layout.jsx).
- shadcn/ui — style `new-york`, base color `slate`, **`tsx: false`** (generated components must be `.jsx`), icons from `lucide-react`. Registries include `@magicui` (https://magicui.design/r/{name}). Add components with `npx shadcn@latest add <name>`; they land in [components/ui/](components/ui/).
- Animations via `framer-motion`. Vercel Analytics is enabled in the root layout.

## Architecture

Single-page portfolio with the entire content living in [app/page.jsx](app/page.jsx) as four stacked `<section>`s with stable IDs `home`, `about`, `projects`, `contact`. Sibling routes [app/about](app/about), [app/contact](app/contact), and [app/resume](app/resume) exist but `about`/`contact` are scroll targets on `/` rather than independent pages, and `resume` is currently a stub.

Navigation lives in two parallel components that must stay in sync:

- [components/Nav.jsx](components/Nav.jsx) — desktop tabs (xl+ breakpoint).
- [components/MobileNav.jsx](components/MobileNav.jsx) — mobile sheet menu (below xl).

Both share the same `SECTION_IDS = ["home", "about", "projects", "contact"]` and `links` arrays, and both use an `IntersectionObserver` scroll spy (rootMargin `-20% 0px -60% 0px`) to highlight the active link when on `/`. On `/`, clicks call `scrollIntoView`; on other routes they fall back to `router.push(path)`. **If you add or rename a section, update both files together — the scroll-spy and tab values key off the section IDs.**

The home page sources its content from two arrays at the top of [app/page.jsx](app/page.jsx): `technologies` (icon SVGs from [public/](public/)) and `projects` (cards with optional `image`, required `tags`, `href`, `description`). Add new entries by editing those arrays — there is no CMS or data layer.

[app/layout.jsx](app/layout.jsx) wraps every page with a fixed background `GridPattern`, a sticky `Header`, `StairTransition`, and `PageTransition`. **`Stairs.jsx`, `PageTransition.jsx`, and `StairTransition.jsx` are marked "Obselete" in their source** but are still mounted in the layout — the surviving effect is a brief opacity fade on route change. Treat them as legacy: prefer the per-section `motion.section` fade-in pattern already used on the home page rather than extending these.

## Conventions

- New shadcn primitives go in `components/ui/`; bespoke composites go in `components/` (PascalCase `.jsx`).
- Use the `cn()` helper from [lib/utils.js](lib/utils.js) (`clsx` + `tailwind-merge`) for conditional class composition.
- Mark client components with `"use client"` — anything using `framer-motion`, `usePathname`, `useRouter`, or browser APIs needs it. Layout and the resume stub stay server components.
- Static assets (resume PDF, project screenshots, tech icons) live in [public/](public/) and are referenced by absolute paths like `/headshot.png`.
