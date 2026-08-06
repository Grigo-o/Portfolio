import "./Projects.css";

const PROJECTS = [
  {
    name: "Async Race",
    summary:
      "A racing game built as a graded frontend project: garage management, real-time race animation, and a winners board, all driven through typed Redux state.",
    stack: ["React 19", "TypeScript", "Redux Toolkit", "React Router v6"],
    repo: "https://github.com/Grigo-o/async-race",
    demo: "https://Grigo-o.github.io/async-race",
  },
  {
    name: "KAT-Front",
    summary:
      "Frontend for a Kutaisi Airport website — pages and layouts talking to a separate backend service over Axios.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Axios"],
    repo: "https://github.com/Grigo-o/KAT-Front",
    demo: null,
  },
  {
    name: "Ecommerce App",
    summary:
      "A practice storefront: product listings and a cart flow built on a React + Vite scaffold.",
    stack: ["React", "Vite", "CSS"],
    repo: "https://github.com/Grigo-o/Ecommerce-app",
    demo: null,
  },
  {
    name: "Burgerio",
    summary:
      "A restaurant site with registration, login, and order flows layered on top of a menu, reviews, and blog landing page.",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    repo: "https://github.com/Grigo-o/Burgerio",
    demo: "https://burgerios.netlify.app/",
  },
  {
    name: "Clash of Stats",
    summary:
      "A Clash of Clans companion site — a reference for troops, heroes, and spells with quick compare links between units.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: null,
    demo: "https://clashofstats.netlify.app/",
  },
  {
    name: "Duckietown Convoying",
    summary:
      "A robotics control pipeline where a follower robot tracks a leader and holds its lane — HSV-based leader detection, lane detection, AprilTag sign recognition, and a PD controller tying it together.",
    stack: ["Python", "Computer Vision", "Robotics", "Control Systems"],
    repo: "https://github.com/Grigo-o/Duckietown",
    demo: null,
  },
  {
    name: "Custom Network Chat Protocol",
    summary:
      "An application-layer chat protocol written from scratch: UDP broadcast discovery, a TCP handshake keyed by UUID, and half-duplex messaging over a hand-rolled framing scheme.",
    stack: ["Python", "UDP/TCP", "Protocol Design"],
    repo: "https://github.com/Grigo-o/LocalChat",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <p className="eyebrow">projects</p>
        <h2 className="section-title">Things I've built</h2>
        <p className="section-lede">
          A mix of graded coursework and practice projects. More live on GitHub.
        </p>

        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <article key={p.name} className="project-card">
              <div>
                <h3 className="project-card__name">{p.name}</h3>
                <p className="project-card__summary">{p.summary}</p>
              </div>

              <div className="project-card__footer">
                <div className="project-card__stack">
                  {p.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>

                {(p.repo || p.demo) && (
                  <div className="project-card__links mono">
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer">
                        code ↗
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        live ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="projects__more">
          <a
            href="https://github.com/Grigo-o"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            see more on github ↗
          </a>
        </div>
      </div>
    </section>
  );
}
