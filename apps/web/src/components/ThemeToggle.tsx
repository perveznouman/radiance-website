"use client";

import { useEffect, useState } from "react";

type Theme = "a" | "d";

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

// Temporary: lets us compare design options A and D. Remove once one is chosen.
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("a");

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("theme");
    } catch {}
    if (saved === "a" || saved === "d") {
      setTheme(saved);
      apply(saved);
    }
  }, []);

  function choose(t: Theme) {
    setTheme(t);
    apply(t);
    try {
      localStorage.setItem("theme", t);
    } catch {}
  }

  return (
    <div className="fixed bottom-5 left-5 z-20 flex overflow-hidden rounded-full border border-line-strong bg-background text-sm font-semibold shadow-lg">
      {(["a", "d"] as const).map((t) => (
        <button
          key={t}
          type="button"
          onClick={() => choose(t)}
          className={`px-4 py-2 ${theme === t ? "btn-primary" : "text-soft"}`}
        >
          Option {t.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
