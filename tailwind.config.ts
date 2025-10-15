import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./docs/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#1f5e43",
        success: "#16a34a",
        warning: "#f59e0b",
        error: "#ef4444"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 20px 45px -24px rgba(31,94,67,0.25)",
        header: "0 8px 18px -12px rgba(15,23,42,0.18)"
      }
    }
  },
  plugins: []
};

export default config;
