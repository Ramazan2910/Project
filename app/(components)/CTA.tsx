"use client";

import { useState, type FormEvent } from "react";
import { isValidEmail } from "../(lib)/validators";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container-boundary my-20">
      <div className="card-surface overflow-hidden bg-gradient-to-br from-accent/10 via-transparent to-transparent p-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Готов начать?</span>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 sm:text-4xl">
              Подключайся и записывайся в один тап
            </h2>
            <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300">
              Подпишись, чтобы получить приглашение в бета-доступ и подборку салонов рядом с тобой.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="space-y-2">
              <label htmlFor="cta-email" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Email для приглашения
              </label>
              <input
                id="cta-email"
                type="email"
                name="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setStatus("idle");
                }}
                className="w-full rounded-xl border border-gray-200/80 bg-white px-4 py-3 text-sm shadow-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent dark:border-white/10 dark:bg-[#0b0b0d]"
                placeholder="you@example.com"
                aria-describedby="cta-helper"
              />
              <p id="cta-helper" className="text-xs text-gray-500 dark:text-gray-400">
                Мы не отправляем спам и не делимся данными с третьими лицами.
              </p>
            </div>
            <button type="submit" className="btn-primary w-full lg:w-auto" disabled={isLoading}>
              {isLoading ? "Отправляем..." : "Получить приглашение"}
            </button>
            {status === "error" ? (
              <p className="rounded-xl border border-error/30 bg-error/5 px-4 py-3 text-sm text-error">
                Проверь корректность email. Попробуем ещё раз.
              </p>
            ) : null}
            {status === "success" ? (
              <p className="rounded-xl border border-success/30 bg-success/5 px-4 py-3 text-sm text-success">
                Спасибо! Мы отправим письмо с доступом в ближайшее время.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
