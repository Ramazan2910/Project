export const metadata = {
  title: "Политика конфиденциальности — QueueCut",
};

export default function PrivacyPage() {
  return (
    <section className="container-boundary space-y-6 py-24">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">Политика конфиденциальности</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Мы ценим вашу приватность. QueueCut хранит и обрабатывает персональные данные только для предоставления сервиса
          онлайн-бронирования. Информация не передаётся третьим лицам без согласия пользователя.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Для запросов по персональным данным пишите на <a href="mailto:privacy@queuecut.ru" className="text-accent">privacy@queuecut.ru</a>.
        </p>
      </div>
    </section>
  );
}
