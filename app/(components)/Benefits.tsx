const benefits = [
  {
    title: "Экономия времени",
    description: "Свободные слоты прямо сейчас, без звонков и ожиданий в очереди.",
    icon: (
      <svg className="h-10 w-10 text-accent" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2.4" />
        <path d="M20 10v10l6 4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Твой мастер",
    description: "Смотри рейтинг и портфолио каждого специалиста, выбирай своего.",
    icon: (
      <svg className="h-10 w-10 text-accent" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20 21c4.142 0 7.5-3.358 7.5-7.5S24.142 6 20 6s-7.5 3.358-7.5 7.5S15.858 21 20 21z" stroke="currentColor" strokeWidth="2.4" />
        <path d="M11 33.5c1.5-4.5 5-7.5 9-7.5s7.5 3 9 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Удобные напоминания",
    description: "SMS, email и Telegram — не пропустишь визит и успеешь подготовиться.",
    icon: (
      <svg className="h-10 w-10 text-accent" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="10" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="2.4" />
        <path d="M9 14l11 8 11-8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Гибкая оплата",
    description: "Оплачивай онлайн или в салоне — выбирай, как удобнее.",
    icon: (
      <svg className="h-10 w-10 text-accent" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="12" width="28" height="16" rx="4" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="16" cy="20" r="3" stroke="currentColor" strokeWidth="2.4" />
        <path d="M23 20h7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="container-boundary space-y-12 py-20">
      <div className="max-w-2xl space-y-4">
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">Почему QueueCut</span>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 sm:text-4xl">Преимущества сервиса</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Подбираем салоны и мастеров под твой стиль, освобождаем от звонков, напоминаний и лишних затрат.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit) => (
          <article key={benefit.title} className="card-surface flex h-full flex-col gap-4 p-6">
            <div className="inline-flex items-center justify-center rounded-2xl bg-accent/10 p-4 text-accent">
              {benefit.icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{benefit.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
