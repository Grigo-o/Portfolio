import "./About.css";

const FOCUS_AREAS = [
  {
    label: "Frontend",
    detail:
      "React, TypeScript, Redux Toolkit — interfaces that stay predictable under real state.",
  },
  {
    label: "Backend",
    detail:
      "Node.js and REST APIs, backed by PostgreSQL, MongoDB, or ScyllaDB depending on the shape of the data.",
  },
  {
    label: "Systems",
    detail:
      "Distributed consistency (CRDTs, quorum, MVCC), protocol design, and how failures propagate.",
  },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner about__grid">
        <div>
          <p className="eyebrow">about</p>
          <h2 className="section-title">
            Knowing what happens underneath the interface.
          </h2>
          <p className="section-lede about__lede">
            I'm a computer science student at Kutaisi International University
            and a junior fullstack developer. Most of my time goes into web
            development — building interfaces in React, then wiring them up to
            APIs and a database that actually holds together, whether that's
            PostgreSQL or MongoDB. No professional experience yet — what I have
            instead is a habit of finishing what I start and shipping it
            publicly.
          </p>
        </div>

        <ul className="about__focus">
          {FOCUS_AREAS.map((f) => (
            <li key={f.label} className="about__focus-item">
              <span className="about__focus-label mono">{f.label}</span>
              <p className="about__focus-detail">{f.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
