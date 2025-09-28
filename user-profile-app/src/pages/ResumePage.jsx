import Header from '../components/resume/Header'
import About from '../components/resume/About'
import Skills from '../components/resume/Skills'
import Experience from '../components/resume/Experience'
import Education from '../components/resume/Education'
import Projects from '../components/resume/Projects'
import resumeData from '../data/resumeData'
import useTheme from '../shared/useTheme'

export default function ResumePage() {
  const { name, title, contact, about, skills, experience, education, projects } = resumeData
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div
      className="min-h-screen py-8 font-sans transition-colors"
      style={{
        backgroundColor: isDark ? '#0B1220' /* deep blue for dark */ : '#DBEAFE' /* dimmer light blue (tailwind blue-200) */,
        color: isDark ? '#E5E7EB' /* gray-200 */ : '#111827' /* gray-900 */,
      }}
    >
      <main className="mx-auto max-w-5xl px-4">
        {/* Toolbar */}
        <div className="print:hidden mb-4 flex justify-end">
          <div className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/90 px-2 py-2 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-700 dark:bg-gray-900/80">
            <button
              onClick={toggleTheme}
              className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
            </button>
            <button
              onClick={() => window.print()}
              className="rounded-lg bg-transparent px-3 py-1.5 text-sm text-gray-700 hover:underline dark:text-gray-200"
            >
              Save as PDF
            </button>
          </div>
        </div>

        <Header name={name} title={title} contact={contact} />

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <About about={about} />
            <Experience experience={experience} />
            <Projects projects={projects} />
          </div>
          <div className="space-y-6">
            <Skills skills={skills} />
            <Education education={education} />
          </div>
        </div>
      </main>
    </div>
  )
}
