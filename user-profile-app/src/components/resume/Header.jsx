export default function Header({ name, title, contact }) {
  return (
    <header className="animate-fadeIn rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-4">
            <img
              src={`https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(name)}&radius=12&backgroundColor=b6e3f4,c0aede,d1d4f9&fontFamily=Inter`}
              alt={name}
              className="h-16 w-16 rounded-xl border border-gray-200 object-cover"
            />
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{name}</h1>
              <p className="text-gray-600 dark:text-gray-300">{title}</p>
            </div>
          </div>
        </div>

        <ul className="w-full max-w-lg divide-y divide-gray-100 overflow-hidden rounded-xl border border-gray-200 sm:w-auto sm:divide-y-0 sm:border-0 sm:bg-transparent dark:divide-gray-700 dark:border-gray-700">
          <ContactItem label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          <ContactItem label="Phone" value={contact.phone} href={`tel:${contact.phone}`} />
          <ContactItem label="LinkedIn" value={contact.linkedin} href={`https://${contact.linkedin.replace(/^https?:\/\//,'')}`} />
          <ContactItem label="GitHub" value={contact.github} href={`https://${contact.github.replace(/^https?:\/\//,'')}`} />
        </ul>
      </div>
    </header>
  )
}

function ContactItem({ label, value, href }) {
  return (
    <li className="group flex items-center justify-between gap-3 bg-white px-4 py-3 hover:bg-gray-50 sm:rounded-lg sm:border sm:border-gray-200 sm:px-3 sm:py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700">
      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</span>
      {href ? (
        <a
          className="truncate text-sm text-brand-700 hover:underline dark:text-brand-400"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {value}
        </a>
      ) : (
        <span className="truncate text-sm text-gray-700 dark:text-gray-200">{value}</span>
      )}
    </li>
  )
}
