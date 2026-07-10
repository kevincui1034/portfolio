const EXPERIENCES = [
  {
    title: "Founding Engineer",
    org: "JanusLabs · San Jose, CA",
    date: "APR 2026 — PRESENT",
    bullets: [
      "Built and operate JanusLabs, a live AI platform that helps creators and small businesses turn trending short-form videos into finished, ready-to-post ads. It began as a hackathon finalist, then I rebuilt it from the ground up to serve real, paying customers.",
      "Designed the full product from idea to finished ad: surfacing what is trending across the major short-form platforms, turning any video into a complete ad concept through an AI agent, and generating the images and video to produce it, all in one place.",
      "Built the AI generation engine that creates images and video through several AI models, with automatic recovery when a job fails so users reliably get a finished result instead of a dead end.",
      "Engineered a credit-based billing system that charges only for successful work, refunds failed jobs automatically, and is protected against duplicate charges, keeping revenue and customer trust accurate.",
      "Kept the platform fast and dependable as usage grew, using caching and performance work to protect response times and control the cost of the AI services running behind the product.",
      "Owned every layer of the product, from the creative tools and AI systems to billing, customer plans, and the internal dashboards that track cost against revenue.",
    ],
  },
  {
    title: "Full-stack SWE Intern",
    org: "VTN Manufacturing, Inc. · San Jose, CA",
    date: "MAY — AUG 2025",
    bullets: [
      "Designed and built a CNC performance analytics dashboard from zero with React, Node, Express and PostgreSQL, tracking runtime, downtime, defects and performance from JSON logs.",
      "Engineered a 5+ year historical ingestion pipeline, normalizing machine-generated logs into structured analytics records.",
      "Improved reporting accuracy enough to flag ~10% revenue leaks the finance team hadn't seen.",
      "Replaced manual spreadsheets with real-time dashboards, saving ~6 hours/week in reporting.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="section"
      data-section
      data-idx="02"
      data-label="EXPERIENCE"
      aria-labelledby="experience-heading"
    >
      <div className="section-inner">
        <header className="sec-head reveal">
          <span className="sec-index" aria-hidden="true">
            02
          </span>
          <h2 id="experience-heading" className="sec-title">
            Experience
          </h2>
          <span className="sec-note" aria-hidden="true">
            WHERE I&rsquo;VE SHIPPED
          </span>
        </header>

        <div className="xp-wrap" data-timeline>
          <div className="xp-rail" aria-hidden="true">
            <span />
          </div>
          {EXPERIENCES.map((e, i) => (
            <article
              key={e.title}
              className="xp-item reveal"
              data-tl-item
              style={{ "--i": i }}
            >
              <div className="xp-left">
                <p className="xp-date">{e.date}</p>
                <h3 className="xp-title">{e.title}</h3>
                <p className="xp-org">{e.org}</p>
              </div>
              <ul className="xp-bullets">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
