const COURSEWORK = [
  "Data Structures & Algorithms",
  "Advanced Python",
  "Data Visualization",
  "Database Management Systems",
  "R Programming",
  "Machine Learning",
  "Artificial Intelligence",
  "Information Security",
  "Probability & Statistics I & II",
];

const ASSOCIATIONS = ["MESA", "Stanford Science Groups", "ISPE", "SASE"];

const Education = () => {
  return (
    <section
      id="education"
      className="section"
      data-section
      data-idx="03"
      data-label="EDUCATION"
      aria-labelledby="education-heading"
    >
      <div className="section-inner">
        <header className="sec-head reveal">
          <span className="sec-index" aria-hidden="true">
            03
          </span>
          <h2 id="education-heading" className="sec-title">
            Education
          </h2>
          <span className="sec-note" aria-hidden="true">
            FOUNDATIONS
          </span>
        </header>

        <div className="edu-card reveal" style={{ "--i": 1 }}>
          <div className="edu-left">
            <h3 className="edu-degree">B.S. Data Science</h3>
            <p className="edu-school">
              San Jose State University · San Jose, CA
            </p>
            <p className="edu-date">AUG 2023 — DEC 2025</p>
          </div>
          <div className="edu-right">
            <div className="edu-group">
              <p className="edu-label">COURSEWORK</p>
              <div className="edu-chips">
                {COURSEWORK.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </div>
            <div className="edu-group">
              <p className="edu-label">ASSOCIATIONS</p>
              <div className="edu-chips">
                {ASSOCIATIONS.map((a) => (
                  <span key={a}>{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
