import NetworkField from "./NetworkField";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <NetworkField className="hero__field" />
      <div className="hero__scrim" aria-hidden="true" />

      <div className="section-inner hero__inner">
        <p className="eyebrow">available for junior fullstack roles</p>

        <h1 className="hero__title">
          Saba Grigolia
        </h1>

        <p className="hero__role mono">
          Junior Fullstack Developer <span className="hero__sep">/</span> CS Student
        </p>

        <p className="hero__lede">
          Computer science student at Kutaisi International University, building
          across the stack — from React interfaces down to the network protocols
          and distributed systems underneath them.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary">
            view projects
          </a>
          <a href="#contact" className="btn btn-ghost">
            get in touch
          </a>
        </div>
      </div>

      <div className="hero__scroll mono" aria-hidden="true">
        <span>scroll</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}
