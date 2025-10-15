export type ThemeOption = "light" | "dark" | "system";

export const THEME_STORAGE_KEY = "queuecut-theme";

export const prefersDark = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;

export const getStoredTheme = (): ThemeOption | null => {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeOption | null;
  return stored ?? null;
};

export const applyThemeClass = (theme: ThemeOption) => {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const resolved = theme === "system" ? (prefersDark() ? "dark" : "light") : theme;
  if (resolved === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
};

export const resolveInitialTheme = (): ThemeOption => {
  if (typeof window === "undefined") return "system";
  const stored = getStoredTheme();
  if (stored) {
    return stored;
  }
  return prefersDark() ? "dark" : "light";
};
