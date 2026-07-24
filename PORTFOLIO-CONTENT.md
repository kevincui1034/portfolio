# Kevin Cui — Portfolio Content

Source-of-truth content for the portfolio, with no design or layout prescribed.
Every project is real; descriptions are written from the actual repos. Wording
can be rewritten freely — this is the information, not the copy contract.

---

## Identity

- **Name:** Kevin Cui
- **Title:** Full-stack Software Engineer (AI / Data)
- **Location:** San Jose, California
- **Status:** Open to full-time conversations and opportunities
- **Education line:** B.S. Data Science · SJSU · 2025
- **Headline (current):** "Building thoughtful products with intelligence quietly inside."

## Links & contact

- **Email:** kevincui1034@gmail.com
- **GitHub:** @kevincui1034 — https://github.com/kevincui1034
- **LinkedIn:** kevincui-datascientist — https://www.linkedin.com/in/kevincui-datascientist/
- **X / Twitter:** @kevincui_dev — https://x.com/kevincui_dev
- **Instagram:** @aku.kevinc — https://www.instagram.com/aku.kevinc/
- **TikTok:** @kevincuidev — https://www.tiktok.com/@kevincuidev
- **Resume (PDF asset):** /kevincui_resume.pdf
- **Headshot (image asset):** /headshot.png

## About

Dec 2025 Data Science grad from San Jose State University, building full-stack
AI products where customers have a need and he has an answer. Currently working
on Janusly (an AI marketing tool that started as a GTM Hackathon finalist and
now sells direct to consumers), a browser-based 3D classroom with persona
tutors, and a plain-language medical assistant. On the side, builds developer
tools for AI-written code and ships agent prototypes at hackathons.

---

## Education

**B.S. Data Science** — San Jose State University, San Jose, CA · Aug 2023 – Dec 2025

- **Relevant coursework:** Data Structures & Algorithms · Advanced Python Programming · Data Visualization · Database Management Systems · R Programming · Machine Learning · Artificial Intelligence · Information Security · Probability & Statistics I & II
- **Associations:** Mathematics, Engineering, Science, Achievement (MESA) · Stanford Science Groups (SSG) · International Society of Pharmaceutical Engineers (ISPE) · Society of Asian Scientists and Engineers (SASE)

## Experience

**Full-stack SWE Intern** — VTN Manufacturing, Inc., San Jose, CA · May – Aug 2025

- Designed and built a CNC performance analytics dashboard from zero with React, Node, Express, and PostgreSQL, tracking runtime, downtime, defects, and performance from JSON logs.
- Engineered a 5+ year historical ingestion pipeline, normalizing machine-generated logs into structured analytics records.
- Improved reporting accuracy enough to flag ~10% revenue leaks the finance team hadn't seen.
- Replaced manual spreadsheets with real-time dashboards, saving ~6 hours/week in reporting.

---

## Projects

Twelve projects, listed newest to oldest. Each has: what it is, tech, live link,
and timeframe. Team/solo and any hackathon are stated where they apply.

### Janusly — Since April 2026
Founding-engineer product; his flagship. An AI marketing platform he's building
and selling to consumers. Started as a GTM Hackathon finalist, then rebuilt from
scratch: ~67k lines across a 30-table Postgres schema, credit-ledger billing on
idempotent Stripe webhooks, and a unified render queue that debits at enqueue and
refunds on failure. Scrapes TikTok, Reels, and Shorts trends through an
Apify-cached pipeline, turns them into on-brand scripts, and generates AI video
across a dozen image/video models. Solo build, actively shipping.
- **Tech:** Next.js, TypeScript, Drizzle, Supabase, Stripe, Apify, Redis
- **Models used:** Gemini, DeepSeek, Nano Banana Pro, Nano Banana 2, GPT Image 2, Seedream, Seedance, Kling (more ongoing)
- **Link:** https://janusly.com

### Proofjury — July 2026
A correctness gate for AI-written code. Wraps your deploy command and only lets
it run if a suite of deterministic checks pass — missing env vars, unrun tests,
hardcoded secrets, pending migrations — each with file-and-line proof. Pass/fail
is always deterministic; an optional LLM only writes the explanation. Every
diagnosis is logged to memory so the same failure is caught instantly next time.
Backed by ~360 tests. Solo.
- **Tech:** Python, Typer, pytest, Claude Code
- **Link:** https://proofjury.vercel.app/

### Preflight — July 2026
A deploy-review agent that decides whether a repo will survive a deploy by
traversing a Neo4j code property graph instead of guessing from heuristics —
blast radius, load-bearing hubs, missing prod env vars, proximity to past
failures. Deep reviews clone the repo into a sandbox and actually run its tests,
attaching the real output as evidence. Built solo in a day at HackwithBay 3.0.
- **Tech:** Python, FastAPI, Neo4j, Daytona
- **Link:** https://preflight.butterbase.dev/

### Parallax — June 2026
Upload a product photo and an agent turns it into an interactive exploded-parts
3D diagram you can inspect and reassemble. The agent drives the viewer — explode,
highlight, isolate, focus — through a frozen structured-JSON action protocol with
strict Pydantic validation. Built with a partner in a four-hour hackathon sprint
against a jointly-owned API contract.
- **Tech:** FastAPI, Three.js, Pydantic, GMI Cloud
- **Link:** https://parallax-tawny-xi.vercel.app/

### kyujin — May–June 2026
A job-application tracker that plugs into Gmail and auto-sorts application,
interview, rejection, and offer emails. A hybrid classifier filters obvious noise
with sender and template rules before spending an LLM call, while a five-minute
cron and Gmail push watches keep it live. Dashboard, a Sankey hiring funnel, an
undo-able audit log, and dual Stripe/Apple billing across web and a native iOS
client. Solo.
- **Tech:** Next.js, Drizzle, Supabase, Gemini, Stripe, SwiftUI
- **Link:** https://kyujin.dev/

### preprod-check — June 2026
A Claude Code skill he published that audits a codebase for production readiness
across 14 categories — auth and tenant isolation, injection, billing integrity,
rate limiting, SSRF and upload safety, secrets, headers — and returns a
severity-ranked report with drafted patches for the mechanical fixes. Installable
as a plugin and marketplace. (No standalone site.)
- **Tech:** Claude Code skill / plugin; security auditing
- **Link:** https://github.com/kevincui1034/preprod-check

### cost-analysis — June 2026
A Claude Code skill he published that inventories every paid API, SDK, and
managed service in a project, attaches per-unit rates, and computes per-plan
margins for average, power, and redlining users — flagging the paths that lose
money. Diffs against prior snapshots kept in memory. Installable as a plugin and
marketplace. (No standalone site.)
- **Tech:** Claude Code skill / plugin; unit-economics / FinOps
- **Link:** https://github.com/kevincui1034/cost-analysis

### Reunion — June 2026
An iMessage-native group-travel agent that reads travel intent from a group chat,
remembers everyone's constraints, and turns loose conversation into a concrete
plan. An on-device gate classifies messages locally with Apple Foundation Models
— nothing leaves the Mac — and a Google Calendar engine intersects everyone's
free time. Built with a six-person team at the Agentic AI SF Hackathon.
- **Tech:** TypeScript, Next.js, Apple Foundation Models, Swift
- **Link:** https://vacaylog.vercel.app/

### Tutor Me — April 2026
A browser-based social AI classroom. Learners move through a shared 3D space,
talk to persona-based tutors they can share or duplicate, and join the same live
room with a code. Tutors ground their answers in live web research, backed by
pgvector memory and a semantic cache so repeat questions skip the model call.
- **Tech:** Next.js, React Three Fiber, PartyKit, VAPI, pgvector, Llama 3.3
- **Link:** https://tutor-me-tau.vercel.app

### MiniMed — April 2026
Plain-language medical guidance built as a seven-phase intake state machine —
each step constrained by its own JSON schema, ending in non-diagnostic
differentials and a four-level care recommendation from home care to emergency.
Voice in and out via ElevenLabs, with defensive parsing so a malformed model
response degrades gracefully.
- **Tech:** Next.js, Tailwind, ElevenLabs, MiniMax
- **Link:** https://mini-med.vercel.app

### Next Boba — March–April 2026
Search a phrase like "matcha" and rank Bay Area boba shops by how people actually
feel about it. Built on a RoBERTa sentiment classifier fine-tuned on the ~5 GB
Yelp dataset, then run across millions of reviews with a memory-safe streaming
ETL, served from Supabase. Solo.
- **Tech:** PyTorch, RoBERTa, FastAPI, Supabase, Vercel
- **Link:** https://nextboba.vercel.app

### Pokémon Predictor — Jan–May 2025
A Pokémon competitive-metagame study built with a four-person course team. Python
pipelines scrape Smogon usage stats across three annual ladder snapshots, feeding
a Random Forest that recommends the best move — or a switch — for a matchup, plus
clustering and a gen-9 usage classifier. Deployed on Google App Engine.
- **Tech:** Python, scikit-learn, Dash, Flask, GCP
- **Link:** https://pokemon-recommendation.vercel.app/

---

## Skills

- **Languages:** Python, TypeScript, JavaScript, SQL, R, Bash
- **Frontend:** React, Next.js, Three.js, Tailwind, shadcn/ui, Vite
- **Backend / Data:** FastAPI, Node / Express, PostgreSQL, Drizzle, Supabase, Redis, Stripe, GCP
- **AI / ML:** PyTorch, TensorFlow, scikit-learn, HF Transformers, Vercel AI SDK, VAPI, ElevenLabs

---

## Static assets on hand

- `/headshot.png` — portrait
- `/kevincui_resume.pdf` — resume download
- Per-project screenshots exist in the repo's `public/` folder (one per project) if the redesign wants imagery.
