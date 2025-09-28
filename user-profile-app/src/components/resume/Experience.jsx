export default function Experience({ experience }) {
  return (
    <section className="animate-fadeIn rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Experience</h2>
      <div className="grid gap-4">
        {experience.map((item, idx) => (
          <article key={idx} className="rounded-xl border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{item.company}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{item.role}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{item.duration}</span>
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-200">{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
