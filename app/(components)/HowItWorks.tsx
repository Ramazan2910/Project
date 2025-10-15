const steps = [
  {
    number: "01",
    title: "Выбери салон",
    description: "Фильтруй по гео, услуге и рейтингу. Сразу видишь свободные окна и цену.",
  },
  {
    number: "02",
    title: "Назначь время",
    description: "Выбирай мастера, услугу и способ оплаты. Мы подтвердим бронь мгновенно.",
  },
  {
    number: "03",
    title: "Получай напоминание",
    description: "Получишь SMS, email или сообщение в Telegram с деталями визита.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="container-boundary space-y-12 py-20">
      <div className="max-w-2xl space-y-4">
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">Как это работает</span>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 sm:text-4xl">Три шага к идеальному визиту</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Никаких звонков и ожидания. Всё, что нужно, — открыть QueueCut, выбрать услугу и подтвердить запись.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <article key={step.title} className="card-surface flex h-full flex-col gap-4 p-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">{step.number}</span>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{step.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
