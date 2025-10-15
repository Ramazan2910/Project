const testimonials = [
  {
    name: "Александр",
    role: "Постоянный гость Gentlemen's Lab",
    quote: "Раньше приходилось звонить, теперь всё в пару кликов. Напоминание в Telegram — вообще топ!",
  },
  {
    name: "Мария",
    role: "Гость Aurora Beauty Loft",
    quote: "Выбираю мастера по рейтингу, записываюсь на маникюр на утро. Очередей ноль, сервис супер.",
  },
  {
    name: "Кирилл",
    role: "Посетитель Fade & Blade",
    quote: "Люблю, что можно оплатить онлайн и просто прийти. Мастер уже знает, что я хочу.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="container-boundary space-y-12 py-20">
      <div className="max-w-2xl space-y-4">
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">Отзывы</span>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 sm:text-4xl">Опыт гостей QueueCut</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Живые истории людей, которые ценят время и комфорт. Никакой постановки — только реальные визиты.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className="card-surface flex h-full flex-col gap-6 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-lg font-semibold text-accent">
                {testimonial.name[0]}
              </div>
              <figcaption>
                <div className="text-base font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
              </figcaption>
            </div>
            <blockquote className="text-sm text-gray-600 dark:text-gray-300">“{testimonial.quote}”</blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
