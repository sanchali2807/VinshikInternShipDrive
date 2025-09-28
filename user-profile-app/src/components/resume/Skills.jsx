export default function Skills({ skills }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-3 text-lg font-semibold text-gray-900">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
