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

    
      <div className="mb-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-800 shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-700 dark:text-gray-100"
          >
            <SkillIcon name={skill} />
            <span>{skill}</span>
          </span>
        ))}
      </div>

    
      <div className="space-y-3">
        {skills.map((skill) => {
          const level = LEVELS[skill] ?? 70
          const barClass = 'bg-white dark:bg-white shadow-sm ring-1 ring-black/5 dark:ring-white/10'
          return (
            <div key={skill} className="grid gap-1">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                  <SkillIcon name={skill} />
                  {skill}
                </span>
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

function SkillIcon({ name }) {
  const base = "h-4 w-4 text-gray-600 dark:text-gray-300";
  switch ((name || '').toLowerCase()) {
    case 'react':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={base}>
          <circle cx="12" cy="12" r="2"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" strokeWidth="1.5"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)" strokeWidth="1.5"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="1.5"/>
        </svg>
      )
    case 'javascript':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={base}>
          <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity="0.15"/>
          <text x="7" y="16" fontSize="10" fontFamily="monospace" fill="currentColor">JS</text>
        </svg>
      )
    case 'typescript':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={base}>
          <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity="0.15"/>
          <text x="6.5" y="16" fontSize="10" fontFamily="monospace" fill="currentColor">TS</text>
        </svg>
      )
    case 'html':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={base}>
          <path d="M4 4h16l-2 14-6 2-6-2-2-14z" opacity="0.3"/>
          <path d="M7 8h10M8 12h8M9 16h6"/>
        </svg>
      )
    case 'css':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={base}>
          <path d="M4 4h16l-2 14-6 2-6-2-2-14z" opacity="0.3"/>
          <path d="M8 9h8M7 13h10M9 17h6"/>
        </svg>
      )
    case 'tailwind':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={base}>
          <path d="M3 12c2-4 4-6 7-6 5 0 5 6 10 6-2 4-4 6-7 6-5 0-5-6-10-6z"/>
        </svg>
      )
    case 'vite':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={base}>
          <path d="M12 2l4 8h-3l3 12-8-10h3z"/>
        </svg>
      )
    case 'accessibility':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={base}>
          <circle cx="12" cy="5" r="2"/>
          <path d="M4 9h16M12 9v10M9 19l3-6 3 6"/>
        </svg>
      )
    default:
      return <span className="inline-block h-4 w-4" />
  }
}
