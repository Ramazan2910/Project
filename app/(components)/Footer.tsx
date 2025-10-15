import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200/80 bg-white/80 py-12 text-sm text-gray-600 dark:border-white/10 dark:bg-[#0b0b0d]/80 dark:text-gray-300">
      <div className="container-boundary grid gap-10 lg:grid-cols-4">
        <div className="space-y-3">
          <a href="#hero" className="flex items-center gap-2" aria-label="QueueCut">
            <svg className="h-9 w-9 text-accent" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="10" width="48" height="48" rx="18" stroke="currentColor" strokeWidth="4" />
              <path d="M22 30h20M22 38h12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <circle cx="40" cy="38" r="6" stroke="currentColor" strokeWidth="4" />
            </svg>
            <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">QueueCut</span>
          </a>
          <p className="max-w-xs text-sm text-gray-500 dark:text-gray-400">
            Онлайн-сервис бронирования визитов в барбершопы и салоны красоты без очередей и ожидания.
          </p>
          <ThemeToggle />
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Навигация</h3>
          <ul className="space-y-2">
            <li><a href="#benefits" className="transition hover:text-accent">Преимущества</a></li>
            <li><a href="#how-it-works" className="transition hover:text-accent">Как это работает</a></li>
            <li><a href="#salons" className="transition hover:text-accent">Салоны</a></li>
            <li><a href="#testimonials" className="transition hover:text-accent">Отзывы</a></li>
            <li><a href="#faq" className="transition hover:text-accent">FAQ</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Контакты</h3>
          <ul className="space-y-2">
            <li><a href="mailto:team@queuecut.ru" className="transition hover:text-accent">team@queuecut.ru</a></li>
            <li><a href="tel:+74951234567" className="transition hover:text-accent">+7 (495) 123-45-67</a></li>
            <li><span className="text-gray-500 dark:text-gray-400">Москва, ул. Гладкая, 8</span></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Мы в соцсетях</h3>
          <div className="flex gap-3">
            {[
              { label: "Instagram", href: "https://instagram.com" },
              { label: "VK", href: "https://vk.com" },
              { label: "Telegram", href: "https://t.me" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/80 text-gray-600 transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-white/10 dark:text-gray-300"
                aria-label={item.label}
              >
                <span className="text-sm font-semibold">{item.label.slice(0, 2)}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container-boundary mt-10 flex flex-col gap-4 border-t border-gray-200/70 pt-6 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} QueueCut. Все права защищены.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="transition hover:text-accent">
            Политика конфиденциальности
          </Link>
          <Link href="/terms" className="transition hover:text-accent">
            Условия использования
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
