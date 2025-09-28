export default function Skills({ skills }) {
  return (
    <section className="animate-fadeIn rounded-2xl p-6 shadow-sm bg-gray-50 text-gray-900 dark:bg-slate-800 dark:text-gray-100">
      <h2 className="mb-3 text-lg font-semibold">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-800 dark:border-slate-700 dark:bg-slate-700 dark:text-gray-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
