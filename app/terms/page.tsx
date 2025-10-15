export const metadata = {
  title: "Условия использования — QueueCut",
};

export default function TermsPage() {
  return (
    <section className="container-boundary space-y-6 py-24">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">Условия использования</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Используя QueueCut, вы соглашаетесь с правилами сервиса: уважать расписание мастеров, приходить вовремя и корректно
          отменять или переносить бронирования. Мы оставляем за собой право обновлять условия.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Полная версия условий доступна по запросу: <a href="mailto:legal@queuecut.ru" className="text-accent">legal@queuecut.ru</a>.
        </p>
      </div>
    </section>
  );
}
