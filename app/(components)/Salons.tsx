const salons = [
  {
    name: "Gentlemen's Lab",
    rating: 4.9,
    type: "barber",
    address: "Мясницкая, 22",
    services: ["Стрижка", "Бритьё", "Укладка"],
    slots: ["11:00", "12:30", "18:45"],
  },
  {
    name: "Studio 17",
    rating: 4.8,
    type: "beauty",
    address: "Тверская, 17",
    services: ["Маникюр", "SPA", "Окрашивание"],
    slots: ["10:00", "15:30", "19:15"],
  },
  {
    name: "Fade & Blade",
    rating: 4.7,
    type: "barber",
    address: "Большая Никитская, 5",
    services: ["Стрижка", "Тримминг", "Камуфляж"],
    slots: ["09:30", "13:45", "17:20"],
  },
  {
    name: "Aurora Beauty Loft",
    rating: 4.95,
    type: "beauty",
    address: "Патриаршие пруды, 4",
    services: ["Визаж", "Укладка", "Спа-уход"],
    slots: ["08:30", "14:00", "20:00"],
  },
];

const typeLabels: Record<string, string> = {
  barber: "Barber",
  beauty: "Beauty",
};

const Salons = () => {
  return (
    <section id="salons" className="container-boundary space-y-12 py-20">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Лучшие салоны</span>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 sm:text-4xl">Прозрачная витрина партнёров</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Подборка салонов и барбершопов с честными рейтингами и актуальными слотами, которые обновляются в реальном времени.
          </p>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Рейтинг формируется на основе отзывов гостей и подтверждённых визитов.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {salons.map((salon) => (
          <article key={salon.name} className="card-surface flex h-full flex-col gap-5 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{salon.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{salon.address}</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                {typeLabels[salon.type] ?? salon.type}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span>{salon.rating.toFixed(2)}</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">/ 5.0</span>
            </div>
            <ul className="flex flex-wrap gap-2 text-xs font-medium text-gray-600 dark:text-gray-300">
              {salon.services.map((service) => (
                <li key={service} className="rounded-full border border-gray-200/80 px-3 py-1 dark:border-white/10">
                  {service}
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Свободные слоты сегодня
              </span>
              <div className="flex flex-wrap gap-2">
                {salon.slots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className="inline-flex items-center justify-center rounded-xl border border-accent/40 bg-accent/5 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Salons;
