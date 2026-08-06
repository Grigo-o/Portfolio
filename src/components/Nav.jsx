import { useEffect, useState } from "react";
import "./Nav.css";

const LINKS = [
  { id: "about", label: "about" },
  { id: "work", label: "work" },
  { id: "projects", label: "projects" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__mark mono" onClick={handleClick}>
          <span className="nav__dot" aria-hidden="true" />
          saba<span className="nav__mark-accent">.grigolia</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="mono">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn-ghost nav__cta"
          href="https://github.com/Grigo-o"
          target="_blank"
          rel="noreferrer"
        >
          github ↗
        </a>

        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__mobile ${open ? "is-open" : ""}`}>
        {LINKS.map((link) => (
          <a key={link.id} href={`#${link.id}`} className="mono" onClick={handleClick}>
            {link.label}
          </a>
        ))}
        <a
          href="https://github.com/Grigo-o"
          target="_blank"
          rel="noreferrer"
          className="mono nav__mobile-github"
          onClick={handleClick}
        >
          github ↗
        </a>
      </div>
    </header>
  );
}
