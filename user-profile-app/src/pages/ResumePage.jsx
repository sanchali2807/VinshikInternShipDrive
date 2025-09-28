import Header from '../components/resume/Header'
import About from '../components/resume/About'
import Skills from '../components/resume/Skills'
import Experience from '../components/resume/Experience'
import Education from '../components/resume/Education'
import Projects from '../components/resume/Projects'
import resumeData from '../data/resumeData'
import useTheme from '../shared/useTheme'
import useInView from '../shared/useInView'

export default function ResumePage() {
  const { name, title, contact, about, skills, experience, education, projects } = resumeData
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const aboutInView = useInView()
  const skillsInView = useInView()
  const expInView = useInView()
  const eduInView = useInView()
  const projInView = useInView()

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
        <div className="print:hidden sticky top-0 z-40 -mx-4 mb-4 rounded-b-xl border-b border-gray-200 bg-white/90 px-4 py-2 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-700 dark:bg-gray-900/80">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <a href="#about" className="rounded-md px-2 py-1 hover:text-brand-700 hover:underline">About</a>
              <a href="#skills" className="rounded-md px-2 py-1 hover:text-brand-700 hover:underline">Skills</a>
              <a href="#experience" className="rounded-md px-2 py-1 hover:text-brand-700 hover:underline">Experience</a>
              <a href="#projects" className="rounded-md px-2 py-1 hover:text-brand-700 hover:underline">Projects</a>
              <a href="#education" className="rounded-md px-2 py-1 hover:text-brand-700 hover:underline">Education</a>
            </nav>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
              </button>
              <button
                onClick={() => window.print()}
                className="rounded-lg border border-gray-300 bg-transparent px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Save as PDF
              </button>
            </div>
          </div>
        </div>

        <Header name={name} title={title} contact={contact} />

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <section ref={aboutInView.ref} className={`${aboutInView.inView ? 'animate-fadeIn' : 'opacity-0 translate-y-1'}`} id="about">
              <About about={about} />
            </section>
            <section ref={expInView.ref} className={`${expInView.inView ? 'animate-fadeIn' : 'opacity-0 translate-y-1'}`} id="experience">
              <Experience experience={experience} />
            </section>
            <section ref={projInView.ref} className={`${projInView.inView ? 'animate-fadeIn' : 'opacity-0 translate-y-1'}`} id="projects">
              <Projects projects={projects} />
            </section>
          </div>
          <div className="space-y-6">
            <section ref={skillsInView.ref} className={`${skillsInView.inView ? 'animate-fadeIn' : 'opacity-0 translate-y-1'}`} id="skills">
              <Skills skills={skills} inView={skillsInView.inView} />
            </section>
            <section ref={eduInView.ref} className={`${eduInView.inView ? 'animate-fadeIn' : 'opacity-0 translate-y-1'}`} id="education">
              <Education education={education} />
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
