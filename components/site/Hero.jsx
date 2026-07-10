const TAGS = ["AI AGENTS", "AGENTIC WORKFLOWS", "RAG", "LLM INFRASTRUCTURE"];

// Per-letter depths (pointer parallax) and scatter vectors (scroll-scrubbed
// disintegration) — deterministic so SSR matches client.
const depth = (i) => (((i * 37) % 13) / 13) * 1.7 - 0.85;

const scatter = (i) => {
  const dir = (i - 4) / 4; // -1..1 across the 9 glyphs
  const sx = dir * 22 + (((i * 31) % 7) - 3) * 1.6; // vw
  const sy = -(6 + ((i * 29) % 11)) * (i % 3 === 2 ? 0.4 : 1); // vh, a few sink less
  const sr = (i % 2 ? 1 : -1) * (8 + ((i * 13) % 20)); // deg
  return {
    "--sx": sx.toFixed(1),
    "--sy": sy.toFixed(1),
    "--sr": sr.toFixed(1),
  };
};

const Letters = ({ word, offset }) => (
  <>
    {word.split("").map((ch, i) => (
      <span key={`${ch}-${i}`} className="hn-l" style={{ "--i": offset + i }}>
        <span className="hn-s" style={scatter(offset + i)}>
          <span
            className="hn-i"
            style={{ "--d": depth(offset + i).toFixed(2) }}
          >
            {ch}
          </span>
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
      data-hero-runway
      data-section
      data-idx="00"
      data-label="HERO"
    >
      <div className="hero-stage" data-hero-stage>
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
                  <span
                    className="hn-s"
                    style={{ "--sx": "16.0", "--sy": "9.0", "--sr": "38.0" }}
                  >
                    <span className="hn-i" style={{ "--d": "0.9" }}>
                      .
                    </span>
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
      </div>
    </header>
  );
};

export default Hero;
