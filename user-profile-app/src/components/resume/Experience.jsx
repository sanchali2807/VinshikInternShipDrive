export default function Experience({ experience }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Experience</h2>
      <div className="grid gap-4">
        {experience.map((item, idx) => (
          <article key={idx} className="rounded-xl border border-gray-200 p-4">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-base font-semibold text-gray-900">{item.company}</h3>
                <p className="text-sm text-gray-700">{item.role}</p>
              </div>
              <span className="text-sm text-gray-500">{item.duration}</span>
            </div>
            <p className="mt-2 text-gray-700">{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
