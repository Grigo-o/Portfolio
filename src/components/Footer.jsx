import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="section-inner footer__inner mono">
        <span>© {year} Saba Grigolia</span>
      </div>
    </footer>
  );
}
