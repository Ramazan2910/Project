"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { isQuickBookingValid } from "../(lib)/validators";

const initialFormState = {
  name: "",
  service: "",
  date: "",
  time: "",
};

type QuickBookingState = typeof initialFormState;

const Hero = () => {
  const [form, setForm] = useState<QuickBookingState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setStatus("idle");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isQuickBookingValid(form)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm(initialFormState);
  };

  return (
    <section id="hero" className="container-boundary grid gap-12 py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-medium text-accent">
          Бронирование без очередей
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
            Запишись без ожидания
          </h1>
          <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300">
            Очередь онлайн в барбершопы и салоны красоты. Выбирай мастера, время и услугу — за минуту.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#booking" className="btn-primary text-sm sm:text-base">
              Забронировать визит
            </a>
            <Link href="#how-it-works" className="btn-secondary text-sm sm:text-base">
              Как это работает
            </Link>
          </div>
        </div>
        <ul className="grid gap-4 text-sm text-gray-600 dark:text-gray-300 sm:grid-cols-2">
          {["350+ проверенных салонов", "Рейтинг мастеров и отзывы", "Напоминания по SMS и в Telegram", "Поддержка 24/7"].map(
            (item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 text-accent">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            )
          )}
        </ul>
        <div className="relative mt-4 w-full max-w-xl overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-sm transition dark:border-white/10 dark:bg-[#16181d]">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" aria-hidden="true" />
          <Image
            src="/mock-screens/dashboard.svg"
            alt="Мок-скриншот QueueCut"
            width={720}
            height={420}
            className="w-full"
            priority
          />
        </div>
      </div>
      <div className="card-surface space-y-6 p-6" id="booking">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Быстрая бронь</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Выбери удобную дату и время — подтверждение придёт за секунды.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Имя
            </label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200/80 bg-white px-4 py-3 text-sm shadow-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent dark:border-white/10 dark:bg-[#0b0b0d]"
              placeholder="Алексей"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="service" className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Услуга
            </label>
            <input
              id="service"
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200/80 bg-white px-4 py-3 text-sm shadow-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent dark:border-white/10 dark:bg-[#0b0b0d]"
              placeholder="Стрижка / маникюр"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="date" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Дата
              </label>
              <input
                id="date"
                name="date"
                type="date"
                required
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200/80 bg-white px-4 py-3 text-sm shadow-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent dark:border-white/10 dark:bg-[#0b0b0d]"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="time" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Время
              </label>
              <input
                id="time"
                name="time"
                type="time"
                required
                value={form.time}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200/80 bg-white px-4 py-3 text-sm shadow-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent dark:border-white/10 dark:bg-[#0b0b0d]"
              />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full">
            Получить подтверждение
          </button>
        </form>
        {status === "error" ? (
          <p className="rounded-xl border border-error/30 bg-error/5 px-4 py-3 text-sm text-error">
            Проверь, что все поля заполнены.
          </p>
        ) : null}
        {status === "success" ? (
          <p className="rounded-xl border border-success/30 bg-success/5 px-4 py-3 text-sm text-success">
            Готово! Мы подтвердим бронь и отправим напоминание.
          </p>
        ) : null}
        <div className="relative overflow-hidden rounded-2xl border border-dashed border-accent/30 bg-accent/5 p-4 text-xs text-accent">
          <p>
            После подтверждения мы пришлём SMS и уведомление в Telegram с контактами мастера.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
