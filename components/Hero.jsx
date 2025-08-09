export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden>
        <div className="gloss gloss--1" />
        <div className="gloss gloss--2" />
        <div className="gloss gloss--3" />
        <div className="grid" />
      </div>
      <div className="container hero__content">
        <h1 className="hero__title">
          Senior-level Engineering.{" "}
          <span className="t-gradient">AI that ships.</span>
        </h1>
        <p className="hero__subtitle">
          We architect, build, and launch AI-first products with precision. From
          strategy to production—done right, done fast.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">
            Book a discovery call
          </a>
          <a href="#work" className="btn btn--secondary">
            See work
          </a>
        </div>
        <ul className="badges">
          <li>Enterprise-grade</li>
          <li>MLOps & LLMs</li>
          <li>Staff+ Engineering</li>
        </ul>
      </div>
    </section>
  );
}
