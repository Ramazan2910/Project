import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import { ThemeProvider } from "./(components)/ThemeProvider";
import CTA from "./(components)/CTA";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "QueueCut — очередь онлайн в барбершопы и салоны красоты",
  description:
    "QueueCut помогает забронировать визит в барбершоп или салон красоты онлайн: выбери мастера, время и услугу за минуту.",
  keywords: [
    "QueueCut",
    "запись в барбершоп",
    "салон красоты онлайн",
    "онлайн запись",
    "резервирование очереди",
  ],
  authors: [{ name: "QueueCut" }],
  openGraph: {
    title: "QueueCut — онлайн-запись без ожидания",
    description:
      "Мгновенно записывайся к любимым мастерам в барбершопы и салоны красоты. Выбирай время и получай напоминания.",
    url: "https://queuecut.example.com",
    siteName: "QueueCut",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "QueueCut — онлайн-запись без ожидания",
    description:
      "Мгновенно записывайся к любимым мастерам в барбершопы и салоны красоты. Выбирай время и получай напоминания.",
  },
  metadataBase: new URL("https://queuecut.example.com"),
};

const themeInitScript = `(() => {
  const storageKey = "queuecut-theme";
  const classNameDark = "dark";
  const root = document.documentElement;
  function applyTheme(theme) {
    const resolved = theme === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : theme;
    if (resolved === "dark") {
      root.classList.add(classNameDark);
    } else {
      root.classList.remove(classNameDark);
    }
  }
  try {
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      applyTheme(stored);
    } else {
      applyTheme("system");
    }
  } catch (error) {
    applyTheme("system");
  }
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} font-sans min-h-screen bg-white text-gray-900 transition-colors duration-200 dark:bg-[#0b0b0d] dark:text-gray-100`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-24">{children}</main>
            <CTA />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
