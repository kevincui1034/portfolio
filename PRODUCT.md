# Product

## Register

brand

## Users

Engineering managers and hiring leads at AI / agent-product companies — the people who decide who to bring in for a loop, not the sourcer who first finds the resume. They land here from a referral, a LinkedIn click, or an outbound application, usually on a 27-inch monitor between meetings. They are deep readers, not skimmers: they will scroll, they will click into project demos, and they will judge the surface of the site as one more data point on the engineer.

Kevin Cui is the author: B.S. Data Science (Dec 2025), San Jose, CA, full-stack with an AI / agent product lean. The site is built to convert these readers into "let's talk" conversations for full-time roles.

## Product Purpose

A portfolio whose explicit job is to land a full-time SWE / AI engineering role at a company building AI or agent products. Success is a hiring conversation in inbox or DMs that the site itself helped trigger — the visitor arrives curious, leaves wanting to ship something with the author.

The site has to do two things at once:

1. **Make the work legible** — every project is a click away, every outcome is stated in plain language (revenue caught, hours saved, hackathon finalist, infra cost cut 90%), and the technical surface area (Next.js, Python, Postgres, vector DBs, agent runtimes) is visible without being recited.
2. **Be a work sample of its own** — the typography, motion, focus states, copy density, and edge cases must hold up to the same review that the projects do. A clean interface signals a clean engineer.

## Brand Personality

Editorial, thoughtful, quietly confident. The voice is the inside-cover essay of a well-typeset magazine, not a hype-page. Confidence shows up through restraint: warm serif italics for one or two words per heading, generous spacing, slow ambient color rather than aggressive accents.

Emotional goals on read:

- *"This person has taste."*
- *"This person finishes things and notices what changed."*
- *"I want to know what they'd build next."*

Tone in copy: declarative, specific, slightly literary. Numbers when they matter (10% revenue leaks flagged, ~6 hours/week saved). No exclamation points. No emoji except in places where they read as typographic punctuation, not enthusiasm.

## Anti-references

Three failure modes the site must never collapse into:

- **Generic Vercel / Next.js template clone.** Gradient-blob hero, *"Hi I'm Kevin 👋"*, waving emoji, identical card grids, three skill icons in a row, no point of view. The default-Next aesthetic is the most common dev-portfolio failure; this site has to look like it was made on purpose.
- **Hacker / terminal aesthetic.** Green-on-black, monospace-everywhere, ASCII flair, matrix typography, "AI = code-rain" iconography. The work is AI / agent product engineering — the substance is technical, but the *surface* shouldn't cosplay the substance. Editorial restraint, not dev-bro signaling.
- **Corporate-FAANG portfolio.** Navy / gray palette, sterile grid, named-company logos as the whole pitch, LinkedIn-HTML energy. The audience here hires on craft, not on logo collection.

## Design Principles

1. **The interface is the work sample.** Engineering managers hire on craft they can verify firsthand. Every motion curve, focus ring, breakpoint, and dead pixel on this site is part of the review. If a detail wouldn't pass code review on a project, it doesn't ship on the portfolio either.

2. **Quiet confidence over volume.** Restraint signals judgment. One serif italic per heading; one accent color foregrounded at a time; ambient motion that you notice only on the second look. Anything that screams "look at me" — gradient text, big-number hero stats, Awwwards-bait scroll-jacking — undermines the read.

3. **Show outcomes, not titles.** Every project and experience line leads with what shipped and what changed. "Saved 6 hours/week," "flagged 10% revenue leaks," "cut infra cost ~90%." Role names and company logos sit in the metadata, not the headline.

4. **AI lives in the substance, not the costume.** The pitch is AI / agent product work — the proof is in the projects (JanusLabs, TutorMe, MiniMed). The visual language stays editorial. No robot icons, no neon, no terminal frames, no "powered by GPT" badges. The reader figures out the AI fluency from the work.

5. **Designed for the deep reader.** EM-level visitors will scroll, hover, click into demos, and read the description in full. The site is allowed to be dense, paragraphed, and quietly long. It is not optimized for the 6-second recruiter skim or the ATS keyword pass.

## Accessibility & Inclusion

WCAG 2.1 AA is the floor. Concretely for this site:

- **Visible focus rings on every interactive element** — buttons, project cards, nav links, contact tiles. The custom cursor doesn't substitute for keyboard focus.
- **4.5:1 minimum contrast** on body copy against the warm-dark background; 3:1 on large display type.
- **`prefers-reduced-motion` bail-outs** on the ambient glow drift, the cursor trail, the magnetic CTAs, and the reveal-on-scroll fades. Already partially implemented in `globals.css`; extend wherever motion is added.
- **Keyboard-reachable everything**, in document order. No focus traps, no tab-skip on the custom cursor.
- **Don't rely on color alone** for meaning. The serif-italic accent is decorative; if a state ever means something (active, error, success), it carries a non-color cue too.

Screen-reader review is welcome but not the primary optimization target; the audience is sighted EMs on desktop. Mobile parity is required (the site is shared in DMs and read on phones too) but optimized second.
