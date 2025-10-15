"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  THEME_STORAGE_KEY,
  ThemeOption,
  applyThemeClass,
  prefersDark,
  resolveInitialTheme,
} from "../(lib)/theme";

type ThemeContextValue = {
  theme: ThemeOption;
  setTheme: (theme: ThemeOption) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeOption>(() => {
    if (typeof window === "undefined") return "system";
    return resolveInitialTheme();
  });

  useEffect(() => {
    const initial = resolveInitialTheme();
    setTheme(initial);
    applyThemeClass(initial);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        applyThemeClass("system");
      }
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [theme]);

  const value = useMemo<ThemeContextValue>(() => ({
    theme,
    setTheme: (nextTheme) => {
      setTheme(nextTheme);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      }
      applyThemeClass(nextTheme);
    },
  }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

export const isDarkActive = (theme: ThemeOption) => {
  if (theme === "system") {
    return prefersDark();
  }
  return theme === "dark";
};
