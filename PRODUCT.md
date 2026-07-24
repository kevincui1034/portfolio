# Product

> This file documents **who the site is for and what it needs to accomplish** — not how it should look. The current visual direction ("Control Room") is documented in [CLAUDE.md](CLAUDE.md).

## Users

Engineering managers and hiring leads at AI / agent-product companies — the people who decide who to bring in for a loop, not the sourcer who first finds the resume. They land here from a referral, a LinkedIn click, or an outbound application, usually on a large desktop monitor between meetings. They are deep readers, not skimmers: they will scroll, they will click into project demos, and they will judge the surface of the site as one more data point on the engineer.

Kevin Cui is the author: B.S. Data Science (Dec 2025), San Jose, CA, full-stack with an AI / agent product lean. The site is built to convert these readers into "let's talk" conversations for full-time roles.

## Product Purpose

A portfolio whose explicit job is to land a full-time SWE / AI engineering role at a company building AI or agent products. Success is a hiring conversation in inbox or DMs that the site itself helped trigger — the visitor arrives curious, leaves wanting to ship something with the author.

The site has to do two things at once:

1. **Make the work legible** — every project is a click away, every outcome is stated in plain language (revenue caught, hours saved, hackathon finalist, infra cost cut 90%), and the technical surface area (Next.js, Python, Postgres, vector DBs, agent runtimes) is visible.
2. **Be a work sample of its own** — the execution quality of the site itself is part of what it's demonstrating.

## Content Priorities

- **Show outcomes, not titles.** Every project and experience line should lead with what shipped and what changed ("saved 6 hours/week," "flagged 10% revenue leaks," "cut infra cost ~90%"). Role names and company logos are metadata.
- **AI lives in the substance.** The pitch is AI / agent product work; the proof is in the projects (Janusly, Proofjury, TutorMe, MiniMed). Let the reader infer the AI fluency from the work.
- **Designed for the deep reader.** EM-level visitors will scroll, hover, and click into demos. The site can be dense and paragraphed; it is not optimized for the 6-second recruiter skim or the ATS keyword pass.

## Accessibility & Inclusion

WCAG 2.1 AA is the floor. Concretely for this site:

- **Visible keyboard focus on every interactive element** — buttons, project cards, nav links, contact links.
- **4.5:1 minimum contrast** on body copy; 3:1 on large display type.
- **`prefers-reduced-motion` bail-outs** on any decorative motion.
- **Keyboard-reachable everything**, in document order. No focus traps.
- **Don't rely on color alone** to convey state.

Mobile parity is required (the site is shared in DMs and read on phones too).
