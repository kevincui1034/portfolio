const TAGS = ["AI AGENTS", "AGENTIC WORKFLOWS", "RAG", "LLM INFRASTRUCTURE"];

// Per-letter depths for pointer parallax — deterministic so SSR matches client.
const depth = (i) => (((i * 37) % 13) / 13) * 1.7 - 0.85;

const Letters = ({ word, offset }) => (
  <>
    {word.split("").map((ch, i) => (
      <span
        key={`${ch}-${i}`}
        className="hn-l"
        style={{ "--i": offset + i }}
      >
        <span className="hn-i" style={{ "--d": depth(offset + i).toFixed(2) }}>
          {ch}
        </span>
      </span>
    ))}
  </>
);

const Hero = () => {
  return (
    <header
      id="top"
      className="hero"
      data-section
      data-idx="00"
      data-label="HERO"
    >
      <div className="hero-inner">
        <p className="hero-status">
          <span className="pulse" aria-hidden="true" />
          <span>OPEN TO FULL-TIME</span>
          <span className="sep" aria-hidden="true">
            {"//"}
          </span>
          <span>SAN JOSE, CALIFORNIA</span>
        </p>

        <h1
          className="hero-name"
          data-hero-name
          aria-label="Kevin Cui — Full-Stack AI Engineer"
        >
          <span aria-hidden="true">
            <span className="hn-line">
              <Letters word="KEVIN" offset={0} />
            </span>
            <span className="hn-line">
              <Letters word="CUI" offset={5} />
              <span className="hn-l accent" style={{ "--i": 8 }}>
                <span className="hn-i" style={{ "--d": "0.9" }}>
                  .
                </span>
              </span>
            </span>
          </span>
        </h1>

        <div className="hero-sub">
          <p className="hero-role" data-scramble>
            FULL-STACK AI ENGINEER
          </p>
          <div className="hero-copy">
            <p className="hero-lead">
              I design and ship AI products end to end: autonomous agents,
              agentic workflows, RAG pipelines and the LLM infrastructure
              underneath.
            </p>
            <div className="hero-tags" aria-hidden="true">
              {TAGS.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="wire" />
        <span>SCROLL</span>
      </div>
    </header>
  );
};

export default Hero;
