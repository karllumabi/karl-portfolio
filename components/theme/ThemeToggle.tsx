"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
    >
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
    >
      <path
        d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5A8.5 8.5 0 1 0 20.5 14.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const root = document.documentElement;

    const currentTheme: Theme =
      root.dataset.theme === "light" ? "light" : "dark";

    setTheme(currentTheme);

    const systemPreference = window.matchMedia(
      "(prefers-color-scheme: light)",
    );

    function handleSystemPreferenceChange(event: MediaQueryListEvent) {
      const savedTheme = localStorage.getItem("portfolio-theme");

      if (savedTheme) {
        return;
      }

      const nextTheme: Theme = event.matches ? "light" : "dark";

      root.dataset.theme = nextTheme;
      root.style.colorScheme = nextTheme;

      setTheme(nextTheme);
    }

    systemPreference.addEventListener(
      "change",
      handleSystemPreferenceChange,
    );

    return () => {
      systemPreference.removeEventListener(
        "change",
        handleSystemPreferenceChange,
      );
    };
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    root.dataset.theme = nextTheme;
    root.style.colorScheme = nextTheme;

    localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  }

  if (!theme) {
    return (
      <div
        aria-hidden="true"
        className="h-10 w-10 shrink-0 rounded-full border border-[var(--border)] sm:h-11 sm:w-11"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        isDark ? "Switch to light mode" : "Switch to dark mode"
      }
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] sm:h-11 sm:w-11"
    >
      <span className="transition-transform duration-500 group-hover:rotate-12">
        {isDark ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}