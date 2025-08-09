"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="nav">
      <div className="nav__glass">
        <div className="brand">
          <img
            src="/seo/icon.svg"
            alt=""
            aria-hidden="true"
            className="brand__gem"
          />
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
