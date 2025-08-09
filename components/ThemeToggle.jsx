"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    const prefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    return prefersLight ? "light" : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isLight = theme === "light";
  return (
    <button
      className={`toggle ${isLight ? "is-light" : "is-dark"}`}
      aria-label="Toggle theme"
      aria-pressed={isLight}
      title="Toggle theme"
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      <span className="toggle__icon" aria-hidden>
        {isLight ? "🌞" : "🌚"}
      </span>
    </button>
  );
}
