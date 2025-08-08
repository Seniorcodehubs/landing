import { useEffect, useState } from "react";
import "./index.css";

function App() {
  return (
    <div className="page">
      <NavBar />
      <Hero />
      <LogoMarquee />
      <Services />
      <Showcase />
      <About />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="nav">
      <div className="nav__glass">
        <div className="brand">
          <div className="brand__gem" aria-hidden />
          <span className="brand__name">Senior CodeHub</span>
        </div>
        <nav className="nav__links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
        <div className="nav__actions">
          <ThemeToggle />
          <a href="#contact" className="btn btn--ghost">
            Contact
          </a>
          <button
            className="nav__menuBtn"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="nav__menu" role="menu">
          <a
            href="#services"
            role="menuitem"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a href="#work" role="menuitem" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#about" role="menuitem" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact" role="menuitem" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (saved === "light" || saved === "dark") return saved;
    const prefersLight =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    return prefersLight ? "light" : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isLight = theme === "light";
  return (
    <button
      className={`toggle ${isLight ? "is-light" : "is-dark"}`}
      aria-label="Toggle theme"
      aria-pressed={isLight}
      title="Toggle theme"
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      <span className="toggle__icon" aria-hidden>
        {isLight ? "☀" : "🌙"}
      </span>
    </button>
  );
}

function Hero() {
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

function LogoMarquee() {
  const logos = [
    "Azure",
    "AWS",
    "GCP",
    "OpenAI",
    "HuggingFace",
    "Kubernetes",
    "Docker",
    "Terraform",
    "PostgreSQL",
    "Redis",
    "Next.js",
    "FastAPI",
    "PyTorch",
    "LangChain",
    "Vertex AI",
    "Bedrock",
  ];

  return (
    <section className="marquee" aria-label="Technologies">
      <div className="marquee__mask">
        <div className="marquee__track">
          <div className="marquee__group">
            {logos.map((name, i) => (
              <div key={`${name}-a-${i}`} className="chip">
                <span className="chip__dot" />
                {name}
              </div>
            ))}
          </div>
          <div className="marquee__group" aria-hidden>
            {logos.map((name, i) => (
              <div key={`${name}-b-${i}`} className="chip">
                <span className="chip__dot" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      title: "AI Strategy & Delivery",
      desc: "From PoC to production: model selection, evals, guardrails, and ROI tracking.",
    },
    {
      title: "Senior Engineering",
      desc: "Hands-on architecture, performance tuning, platform foundations, DX.",
    },
    {
      title: "Data & MLOps",
      desc: "Pipelines, feature stores, vector DBs, observability, cost control.",
    },
  ];
  return (
    <section id="services" className="section container">
      <h2 className="section__title">What we do</h2>
      <div className="cards">
        {items.map((it) => (
          <article key={it.title} className="card card--glass">
            <div className="card__shine" />
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
            <a href="#contact" className="link">
              Engage →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Showcase() {
  const rows = [
    {
      k: "Velocity",
      v: "Ship in weeks, not quarters. Proven delivery patterns and reusable accelerators.",
    },
    {
      k: "Quality",
      v: "Strong typing, tests, observability, and zero-regret architecture.",
    },
    {
      k: "Security",
      v: "Least privilege, secret hygiene, threat modeling, compliance-ready.",
    },
    {
      k: "Scale",
      v: "From first user to millions. Perf budgets and cost-aware design.",
    },
  ];
  return (
    <section id="work" className="section container section--contrast">
      <div className="panel">
        <div className="panel__glare" />
        <h2 className="section__title">Craft that compounds</h2>
        <ul className="kv">
          {rows.map((r) => (
            <li key={r.k}>
              <span>{r.k}</span>
              <b>{r.v}</b>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function About() {
  const bullets = [
    {
      t: "Hands-on principals",
      d: "Work directly with senior engineers and AI leads who ship and mentor in the same sprint.",
    },
    {
      t: "Outcome-first",
      d: "Every engagement is scoped to measurable outcomes: latency, accuracy, cost, adoption.",
    },
    {
      t: "Pragmatic AI",
      d: "Use the right tool: fine-tuned models, RAG, agents, or good old systems engineering.",
    },
  ];
  return (
    <section id="about" className="section container">
      <h2 className="section__title">Senior hands. Clear outcomes.</h2>
      <div className="bullets">
        {bullets.map((b) => (
          <article key={b.t} className="bullet card--glass card">
            <div className="card__shine" />
            <h3>{b.t}</h3>
            <p>{b.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      t: "Discovery",
      d: "Goals, constraints, and success metrics in a 60–90 min session.",
    },
    {
      t: "Plan",
      d: "Crisp proposal with milestones, risks, and an execution path.",
    },
    {
      t: "Build",
      d: "Iterate in short cycles with demos, evals, and instrumentation.",
    },
    {
      t: "Handoff",
      d: "Documentation, training, and support to make it yours.",
    },
  ];
  return (
    <section className="section container section--contrast">
      <div className="panel">
        <div className="panel__glare" />
        <h2 className="section__title">How we work</h2>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.t}>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Do you work onsite or remote?",
      a: "Remote-first with optional on-site workshops for kickoff and critical milestones.",
    },
    {
      q: "What is a typical engagement?",
      a: "2–12 weeks to ship a scoped capability, or ongoing staff+ leadership embedded with your team.",
    },
    {
      q: "Can you train our team?",
      a: "Yes. We mentor as we build and can run focused workshops and codebase audits.",
    },
  ];
  return (
    <section className="section container" id="faq">
      <h2 className="section__title">FAQ</h2>
      <div className="faq">
        {items.map((it, i) => (
          <details key={i} className="faq__item">
            <summary>{it.q}</summary>
            <p>{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="cta__inner container">
        <h2>Let’s build your next advantage</h2>
        <p>Tell us your goal. We’ll propose a crisp plan within 48 hours.</p>
        <a
          className="btn btn--primary btn--xl btn--block-sm"
          href="mailto:hello@seniorcodehub.dev"
        >
          hello@seniorcodehub.dev
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <div className="brand brand--sm">
          <div className="brand__gem" aria-hidden />
          <span className="brand__name">Senior CodeHub</span>
        </div>
        <nav className="footer__links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
        <span className="copy">
          © {new Date().getFullYear()} Senior CodeHub
        </span>
      </div>
    </footer>
  );
}

export default App;
