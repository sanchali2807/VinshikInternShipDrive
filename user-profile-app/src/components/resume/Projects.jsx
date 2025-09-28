export default function Projects({ projects }) {
  return (
    <section className="animate-fadeIn rounded-2xl p-6 shadow-sm bg-gray-50 text-gray-900 dark:bg-slate-800 dark:text-gray-100">
      <h2 className="mb-4 text-lg font-semibold">Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, idx) => (
          <article key={idx} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-slate-700">
            <h3 className="text-base font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-slate-600 dark:text-gray-100">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
