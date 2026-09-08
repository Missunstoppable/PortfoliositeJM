"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark";

const STORAGE_KEY = "theme";

function getInitialMode(): Mode {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // ignore
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    setMode(getInitialMode());
  }, []);

  function applyTheme(next: Mode) {
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    setMode(next);
  }

  return (
    <div className="theme-toggle" role="group" aria-label="Theme">
      <button
        type="button"
        className={mode === "light" ? "active" : ""}
        onClick={() => applyTheme("light")}
      >
        Light
      </button>
      <button
        type="button"
        className={mode === "dark" ? "active" : ""}
        onClick={() => applyTheme("dark")}
      >
        Dark
      </button>
    </div>
  );
}
