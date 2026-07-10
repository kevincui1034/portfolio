const EXPERIENCES = [
  {
    title: "Founding Engineer",
    org: "JanusLabs · San Jose, CA",
    date: "APR 2026–PRESENT",
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
    date: "MAY–AUG 2025",
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
      aria-labelledby="experience-heading"
    >
      <div
        className="ghost"
        data-ghost="0.13"
        style={{ bottom: "4vh", left: "-4vw" }}
        aria-hidden="true"
      >
        EXPERIENCE
      </div>
      <div className="sect-inner">
        <div className="eyebrow reveal" id="experience-heading">
          ( 02 ) · EXPERIENCE
        </div>
        {EXPERIENCES.map((e, i) => (
          <div
            key={e.title}
            className="cv-block reveal"
            style={{ transitionDelay: `${(i + 1) * 100}ms` }}
          >
            <div className="cv-left">
              <h3 className="cv-title">{e.title}</h3>
              <div className="cv-org">{e.org}</div>
              <div className="cv-date">{e.date}</div>
            </div>
            <ul className="cv-bullets">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
