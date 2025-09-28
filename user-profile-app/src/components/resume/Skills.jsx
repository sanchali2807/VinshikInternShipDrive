const LEVELS = {
  React: 90,
  JavaScript: 85,
  TypeScript: 80,
  HTML: 95,
  CSS: 88,
  Tailwind: 85,
  Vite: 80,
  Accessibility: 75,
}

export default function Skills({ skills, inView }) {
  return (
    <section className="animate-fadeIn rounded-2xl p-6 shadow-sm bg-gray-50 text-gray-900 dark:bg-slate-800 dark:text-gray-100">
      <h2 className="mb-4 text-lg font-semibold">Skills</h2>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-800 dark:border-slate-700 dark:bg-slate-700 dark:text-gray-100"
          >
            {skill}
          </span>
        ))}
      </div>
      {/* Progress bars */}
      <div className="space-y-3">
        {skills.map((skill) => {
          const level = LEVELS[skill] ?? 70
          return (
            <div key={skill} className="grid gap-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{level}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200/70 dark:bg-slate-700">
                <div
                  className="h-full rounded-full bg-brand-500 transition-[width] duration-1000 ease-out will-change-transform dark:bg-brand-400"
                  style={{ width: inView ? `${level}%` : `${Math.max(8, Math.floor(level * 0.2))}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
