const Experience = () => {
  return (
    <section
      id="xp"
      className="section"
      aria-labelledby="xp-heading"
    >
      <div className="section-head xp-head">
        <div className="left reveal">
          <div className="section-label">
            <span className="line" />
            <span className="num">01</span>
            <span>Experience</span>
          </div>
          <h2 id="xp-heading" className="section-title">
            Where I&rsquo;ve <em>worked.</em>
          </h2>
          <p className="bio-lead">
            I&rsquo;m a Dec 2025 Data Science grad from San Jose State
            University, building full-stack AI products where customers
            have a need and I have an answer.
          </p>
        </div>
        <div className="xp-bio reveal">
          <p className="bio-body">
            I&rsquo;m now working on JanusLabs (an AI marketing tool that started as
            a GTM Hackathon finalist and now sells direct to consumers), a
            browser-based 3D classroom with persona tutors, and a
            plain-language medical assistant. Each one pushed me further into
            system design and AI engineering that I wish I&rsquo;d learned sooner.
            I&rsquo;m open to full-time conversations, or opportunities.
          </p>
        </div>
      </div>

      <div className="xp">
        <div className="row reveal">
          <div className="when">Aug 2023 to Dec 2025</div>
          <div className="what">
            <h3>
              B.S. <em>Data Science</em>
            </h3>
            <div className="co">San Jose State University, San Jose, CA</div>
            <dl className="xp-meta">
              <dt>Relevant Coursework</dt>
              <dd>
                Data Structures &amp; Algorithms · Advanced Python Programming
                · Data Visualization · Database Management Systems · R
                Programming · Machine Learning · Artificial Intelligence ·
                Information Security · Probability &amp; Statistics I &amp; II
              </dd>
              <dt>Associations</dt>
              <dd>
                Mathematics, Engineering, Science, Achievement (MESA) ·
                Stanford Science Groups (SSG) · International Society of
                Pharmaceutical Engineers (ISPE) · Society of Asian Scientists
                and Engineers (SASE)
              </dd>
            </dl>
          </div>
        </div>

        <div className="row reveal">
          <div className="when">May to Aug 2025</div>
          <div className="what">
            <h3>
              Full-stack <em>SWE Intern</em>
            </h3>
            <div className="co">VTN Manufacturing, Inc., San Jose, CA</div>
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
                <b>~10% revenue leaks</b> the finance team hadn&rsquo;t seen.
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
