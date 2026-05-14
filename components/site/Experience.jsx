const Experience = () => {
  return (
    <section id="xp" className="section">
      <div className="section-head">
        <div className="left">
          <div className="section-label">
            <span className="line" />
            <span className="num">01</span>
            <span>Experience</span>
          </div>
          <h2 className="section-title">
            Where I've <em>worked.</em>
          </h2>
        </div>
        <div className="right" />
      </div>
      <div className="xp">
        <div className="row reveal">
          <div className="when">May to Aug 2025</div>
          <div className="what">
            <h3>
              Full-stack <em>SWE Intern</em>
            </h3>
            <div className="co">VTN Manufacturing, Inc., San Jose, CA</div>
            <p className="lead">
              Owned the company's first end-to-end machine-data platform, from
              raw CNC log file to executive dashboard.
            </p>
            <ul>
              <li>
                Designed and built a{" "}
                <b>CNC performance analytics dashboard</b> from zero with
                React, Node, Express, and PostgreSQL, tracking runtime,
                downtime, defects, and performance from JSON logs.
              </li>
              <li>
                Engineered a <b>5+ year historical ingestion pipeline</b>,
                normalizing machine-generated logs into structured analytics
                records.
              </li>
              <li>
                Improved reporting accuracy enough to flag{" "}
                <b>~10% revenue leaks</b> the finance team hadn't seen.
              </li>
              <li>
                Replaced manual spreadsheets with real-time dashboards, saving{" "}
                <b>~6 hours/week</b> in reporting.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
