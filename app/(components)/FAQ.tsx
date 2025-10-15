"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Нужна ли предоплата?",
    answer: "Нет. Можно забронировать слот бесплатно и оплатить уже в салоне или выбрать онлайн-оплату, если удобно.",
  },
  {
    question: "Можно перенести запись?",
    answer: "Да. В личном кабинете достаточно выбрать новую дату и время — салон увидит обновление мгновенно.",
  },
  {
    question: "Работаете с женскими услугами?",
    answer: "Конечно. В витрине есть парикмахерские, nail-студии, визаж, уходовые и spa-процедуры.",
  },
  {
    question: "Как подключить свой салон?",
    answer: "Оставьте заявку на partners@queuecut.ru — поможем загрузить услуги, настроить расписание и обучить команду.",
  },
  {
    question: "Есть ли напоминания о визите?",
    answer: "Мы отправляем SMS, email и уведомление в Telegram за день и за час до записи.",
  },
  {
    question: "Как защищены мои данные?",
    answer: "Используем шифрование и двухфакторную аутентификацию. Данные не передаются третьим лицам.",
  },
  {
    question: "Сколько стоит использование?",
    answer: "Для гостей сервис бесплатный. Салоны оплачивают подписку по модели SaaS с гибкими тарифами.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container-boundary space-y-12 py-20">
      <div className="max-w-2xl space-y-4">
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">FAQ</span>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 sm:text-4xl">Частые вопросы</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Если остались сомнения — загляни сюда или напиши нам. Команда поддержки отвечает в течение пары минут.
        </p>
      </div>
      <dl className="space-y-4">
        {faqs.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.question} className="card-surface">
              <dt>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span className="text-base font-semibold text-gray-900 dark:text-gray-100">{item.question}</span>
                  <svg
                    className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </dt>
              <dd
                id={`faq-panel-${index}`}
                className={`grid overflow-hidden px-6 transition-all duration-200 ${
                  isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden text-sm text-gray-600 dark:text-gray-300">
                  <p>{item.answer}</p>
                </div>
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
};

export default FAQ;
