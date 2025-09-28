export default function Education({ education }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Education</h2>
      <div className="grid gap-4">
        {education.map((e, idx) => (
          <article key={idx} className="rounded-xl border border-gray-200 p-4">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-base font-semibold text-gray-900">{e.institution}</h3>
                <p className="text-sm text-gray-700">{e.degree}</p>
              </div>
              <span className="text-sm text-gray-500">{e.year}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
