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

  return (
    <div className="min-h-screen bg-gray-50 py-8 dark:bg-gray-900">
      <main className="mx-auto max-w-5xl px-4">
        {/* Toolbar */}
        <div className="mb-4 flex items-center justify-end gap-2 print:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
          </button>
          <button
            onClick={() => window.print()}
            className="rounded-lg bg-brand-600 px-3 py-1.5 text-sm text-white shadow-sm hover:bg-brand-700"
          >
            ⬇ Download PDF
          </button>
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
