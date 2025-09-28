export default function Projects({ projects }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, idx) => (
          <article key={idx} className="rounded-xl border border-gray-200 p-4">
            <h3 className="text-base font-semibold text-gray-900">{p.title}</h3>
            <p className="mt-1 text-sm text-gray-700">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
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
