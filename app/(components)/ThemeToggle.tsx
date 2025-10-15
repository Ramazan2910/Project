"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ThemeOption } from "../(lib)/theme";
import { useTheme, isDarkActive } from "./ThemeProvider";

const themes: { value: ThemeOption; label: string }[] = [
  { value: "light", label: "Светлая" },
  { value: "dark", label: "Тёмная" },
  { value: "system", label: "Система" },
];

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const handleSelect = useCallback(
    (nextTheme: ThemeOption) => {
      setTheme(nextTheme);
      setIsOpen(false);
    },
    [setTheme]
  );

  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!listRef.current) return;
      if (!listRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  return (
    <div className="relative" ref={listRef}>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-xl border border-gray-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:border-white/10 dark:bg-[#16181d]/80 dark:text-gray-200"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setIsOpen(false);
          }
        }}
      >
        <span className="h-2.5 w-2.5 rounded-full border border-gray-400" style={{ backgroundColor: isDarkActive(theme) ? "#111827" : "#f3f4f6" }} />
        <span>{themes.find((item) => item.value === theme)?.label ?? "Тема"}</span>
        <svg
          className={`h-4 w-4 transition ${isOpen ? "rotate-180" : "rotate-0"}`}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen ? (
        <ul
          role="listbox"
          tabIndex={-1}
          className="absolute right-0 z-20 mt-2 w-40 overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-lg dark:border-white/10 dark:bg-[#16181d]"
        >
          {themes.map((item) => (
            <li key={item.value}>
              <button
                type="button"
                role="option"
                aria-selected={theme === item.value}
                className={`flex w-full items-center justify-between px-4 py-2 text-sm transition hover:bg-accent/10 dark:hover:bg-accent/20 ${
                  theme === item.value ? "text-accent" : "text-gray-600 dark:text-gray-300"
                }`}
                onClick={() => handleSelect(item.value)}
              >
                {item.label}
                {theme === item.value ? (
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default ThemeToggle;
