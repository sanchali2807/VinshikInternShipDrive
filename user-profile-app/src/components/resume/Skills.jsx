const LEVELS = {
  React: 90,
  JavaScript: 85,
  TypeScript: 80,
  HTML: 95,
  CSS: 88,
  Tailwind: 85,
  Vite: 80,
  Accessibility: 75,
};

export default function Skills({ skills, inView }) {
  return (
    <section className="animate-fadeIn rounded-2xl p-6 shadow-sm transition bg-gray-50 text-gray-900 hover:-translate-y-0.5 hover:shadow-md dark:bg-slate-800 dark:text-gray-100">

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-800 shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-700 dark:text-gray-100"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Progress bars */}
      <div className="space-y-3">
        {skills.map((skill) => {
          const level = LEVELS[skill] ?? 70
          const barClass = 'bg-white dark:bg-white shadow-sm ring-1 ring-black/5 dark:ring-white/10'
          return (
            <div key={skill} className="grid gap-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{level}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-blue-100 dark:bg-slate-700">
                <div
                  className={`h-full rounded-full transition-[width] duration-1000 ease-out will-change-transform ${barClass}`}
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
