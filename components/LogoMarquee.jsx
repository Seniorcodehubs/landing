export default function LogoMarquee() {
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
