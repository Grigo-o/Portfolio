import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-inner contact__inner">
        <p className="eyebrow">contact</p>
        <h2 className="contact__title">Let's build something.</h2>
        <p className="section-lede contact__lede">
          Open to junior fullstack opportunities and interesting collaborations.
        </p>

        <div className="contact__actions">
          <a className="btn btn-primary" href="mailto:your.email@example.com">
            sabas.grigolia@gmail.com
          </a>
          <a
            className="btn btn-ghost"
            href="https://github.com/Grigo-o"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Grigo-o ↗
          </a>
        </div>
      </div>
    </section>
  );
}
