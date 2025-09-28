export default function About({ about }) {
  return (
    <section className="animate-fadeIn rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">About</h2>
      <p className="text-gray-700 dark:text-gray-200">{about}</p>
    </section>
  )
}
