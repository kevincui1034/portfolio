const Education = () => {
  return (
    <section
      id="education"
      className="section alt"
      aria-labelledby="education-heading"
    >
      <div
        className="ghost"
        data-ghost="0.17"
        style={{ top: "4vh", right: "-5vw" }}
        aria-hidden="true"
      >
        EDUCATION
      </div>
      <div className="sect-inner">
        <div className="eyebrow reveal">( 03 ) · EDUCATION</div>
        <div className="cv-block reveal" style={{ transitionDelay: "100ms" }}>
          <div className="cv-left">
            <h3 id="education-heading" className="cv-title">
              B.S. Data Science
            </h3>
            <div className="cv-org">
              San Jose State University · San Jose, CA
            </div>
            <div className="cv-date">AUG 2023–DEC 2025</div>
          </div>
          <div className="cv-detail">
            <div className="cv-detail-group">
              <div className="cv-detail-label">COURSEWORK</div>
              <p className="cv-detail-text">
                Data Structures &amp; Algorithms · Advanced Python · Data
                Visualization · Database Management Systems · R Programming ·
                Machine Learning · Artificial Intelligence · Information
                Security · Probability &amp; Statistics I &amp; II
              </p>
            </div>
            <div className="cv-detail-group">
              <div className="cv-detail-label">ASSOCIATIONS</div>
              <p className="cv-detail-text">
                MESA · Stanford Science Groups · ISPE · SASE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
