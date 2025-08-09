export default function FAQ() {
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
