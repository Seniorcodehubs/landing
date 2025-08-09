export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <div className="brand brand--sm">
          <img
            src="/seo/icon.svg"
            alt=""
            aria-hidden="true"
            className="brand__gem"
          />
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
