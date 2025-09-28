import { useState } from 'react'

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('about')

  const user = {
    name: 'Ava Collins',
    username: 'ava.collins',
    avatar: 'https://i.pravatar.cc/150?img=47',
    bio: 'Product Designer. Coffee enthusiast. Always learning.',
    location: 'San Francisco, CA',
    website: 'https://example.com',
    stats: {
      posts: 128,
      followers: 2458,
      following: 314,
    },
    interests: ['Design', 'React', 'Tailwind', 'UX', 'Accessibility'],
  }

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'posts', label: 'Posts' },
    { id: 'activity', label: 'Activity' },
  ]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="relative h-28 bg-gradient-to-r from-brand-600 to-brand-400">
          <div className="absolute -bottom-10 left-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-24 w-24 rounded-2xl border-4 border-white object-cover shadow-md"
            />
          </div>
        </div>

        <div className="px-6 pt-12 pb-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">{user.name}</h1>
              <p className="text-sm text-gray-500">@{user.username}</p>
              <p className="mt-3 max-w-prose text-gray-700">{user.bio}</p>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v3a1 1 0 00.293.707l2 2a1 1 0 101.414-1.414L11 8.586V6z" clipRule="evenodd" />
                  </svg>
                  {user.location}
                </span>
                <a
                  href={user.website}
                  className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 hover:bg-gray-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H21m0 0v7.5M21 6l-7.5 7.5M10.5 18H3m0 0v-7.5M3 18l7.5-7.5" />
                  </svg>
                  Website
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">
                Message
              </button>
              <button className="rounded-lg bg-brand-600 px-4 py-2 text-white hover:bg-brand-700">
                Follow
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <Stat label="Posts" value={user.stats.posts} />
            <Stat label="Followers" value={user.stats.followers} />
            <Stat label="Following" value={user.stats.following} />
          </div>
        </div>

        <div className="border-t border-gray-200">
          <nav className="flex flex-wrap gap-4 px-6 pt-4" aria-label="Tabs">
            {tabs.map((t) => {
              const active = activeTab === t.id
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? 'bg-brand-50 text-brand-700 ring-1 ring-brand-600/20'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {t.label}
                </button>
              )
            })}
          </nav>

          <div className="px-6 py-6">
            {activeTab === 'about' && (
              <AboutSection interests={user.interests} />
            )}
            {activeTab === 'posts' && (
              <Placeholder title="Posts" description="This is a front-end only demo. Hook this up to your API or CMS to render real posts." />
            )}
            {activeTab === 'activity' && (
              <Placeholder title="Recent Activity" description="Display recent likes, comments, follows, etc." />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
      <div className="text-2xl font-semibold text-gray-900">{Intl.NumberFormat().format(value)}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  )
}

function AboutSection({ interests }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="rounded-xl border border-gray-200 p-5">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Profile Details
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li><span className="font-medium">Role:</span> Product Designer</li>
          <li><span className="font-medium">Company:</span> Independent</li>
          <li><span className="font-medium">Email:</span> ava.collins@example.com</li>
        </ul>
      </div>

      <div className="rounded-xl border border-gray-200 p-5">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Interests
        </h3>
        <div className="flex flex-wrap gap-2">
          {interests.map((i) => (
            <span key={i} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
              {i}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Placeholder({ title, description }) {
  return (
    <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  )
}
