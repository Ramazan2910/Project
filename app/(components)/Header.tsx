"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { href: "#benefits", label: "Преимущества" },
  { href: "#how-it-works", label: "Как это работает" },
  { href: "#salons", label: "Салоны" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#faq", label: "FAQ" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/70 bg-white/80 shadow-header backdrop-blur dark:border-white/10 dark:bg-[#0b0b0d]/80">
      <div className="container-boundary flex h-20 items-center justify-between">
        <a href="#hero" className="flex items-center gap-2" aria-label="QueueCut">
          <svg className="h-10 w-10 text-accent" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="10" width="48" height="48" rx="18" stroke="currentColor" strokeWidth="4" />
            <path d="M22 30h20M22 38h12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <circle cx="40" cy="38" r="6" stroke="currentColor" strokeWidth="4" />
          </svg>
          <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">QueueCut</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-accent focus:outline-none focus-visible:text-accent">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <a href="#booking" className="btn-primary">
            Забронировать визит
          </a>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200/80 text-gray-600 shadow-sm transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-white/10 dark:text-gray-200 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label="Навигация"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>
      <div
        id="mobile-nav"
        className={`lg:hidden ${mobileOpen ? "pointer-events-auto max-h-screen opacity-100" : "pointer-events-none max-h-0 opacity-0"} overflow-hidden border-t border-gray-200/80 bg-white/95 shadow-lg transition-all duration-200 dark:border-white/10 dark:bg-[#0b0b0d]/95`}
      >
        <div className="container-boundary flex flex-col gap-6 py-6">
          <nav className="flex flex-col gap-4 text-base font-medium text-gray-700 dark:text-gray-200">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="transition hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-between">
            <ThemeToggle />
            <a href="#booking" className="btn-primary">
              Забронировать визит
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
