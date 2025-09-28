import ProfilePic from '../../assets/img1.png'
export default function Header({ name, title, contact }) {
  return (
    <header className="animate-fadeIn rounded-2xl bg-gray-50 p-6 shadow-sm dark:bg-gray-900">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
 
        <div className="flex items-center gap-5">
         
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-300 bg-gradient-to-tr from-blue-200 to-blue-100 p-2 shadow-sm motion-safe:animate-float-slow dark:border-gray-700 dark:from-slate-700 dark:to-slate-600">
            <img
              src={ProfilePic}
              alt={name}
              className="h-20 w-20 rounded-xl object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{name}</h1>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{title}</p>
          </div>
        </div>

      
        <ul className="grid gap-2 sm:gap-3">
          <ContactItem label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          <ContactItem label="Phone" value={contact.phone} href={`tel:${contact.phone}`} />
          <ContactItem label="LinkedIn" value={contact.linkedin} href={`https://${contact.linkedin.replace(/^https?:\/\//, '')}`} />
          <ContactItem label="GitHub" value={contact.github} href={`https://${contact.github.replace(/^https?:\/\//, '')}`} />
        </ul>
      </div>
    </header>
  )
}

function ContactItem({ label, value, href }) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/70 px-3 py-2 text-sm hover:bg-white dark:border-gray-700 dark:bg-slate-800/60 dark:hover:bg-slate-800">
      <Icon type={label} />
      <span className="min-w-[82px] shrink-0 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{label}</span>
      {href ? (
        <a
          className="truncate font-semibold text-gray-900 hover:text-brand-700 hover:underline dark:text-gray-100 dark:hover:text-brand-400"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {value}
        </a>
      ) : (
        <span className="truncate font-semibold text-gray-900 dark:text-gray-100">{value}</span>
      )}
    </li>
  )
}

function Icon({ type }) {
  const base = "h-4 w-4 text-gray-500 dark:text-gray-400";
  switch (type) {
    case 'Email':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base} aria-hidden>
          <path d="M1.5 6.75A2.25 2.25 0 013.75 4.5h16.5A2.25 2.25 0 0122.5 6.75v10.5A2.25 2.25 0 0120.25 19.5H3.75A2.25 2.25 0 011.5 17.25V6.75z"/>
          <path fillRule="evenodd" d="M3.26 6.7a.75.75 0 01.99-.23l7.26 4.15 7.24-4.13a.75.75 0 11.74 1.31l-7.62 4.35a.75.75 0 01-.72 0L3.49 7.77a.75.75 0 01-.23-1.06z" clipRule="evenodd"/>
        </svg>
      );
    case 'Phone':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base} aria-hidden>
          <path d="M2.25 4.5A2.25 2.25 0 014.5 2.25h2.25a1.5 1.5 0 011.5 1.5V6a1.5 1.5 0 01-1.5 1.5H6.7a.75.75 0 00-.73.57 12.1 12.1 0 006.46 6.46.75.75 0 00.57-.73V15a1.5 1.5 0 011.5-1.5h2.25a1.5 1.5 0 011.5 1.5v2.25A2.25 2.25 0 0117.25 21H16.5C9.04 21 3 14.96 3 7.5V6.75A2.25 2.25 0 012.25 4.5z"/>
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base} aria-hidden>
          <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1 8h4v14H1V8zm7 0h3.8v2h.05C12.6 8.9 14.3 8 16.3 8 20.2 8 21 10.6 21 14.3V22H17v-6.6c0-1.6 0-3.7-2.3-3.7-2.3 0-2.7 1.8-2.7 3.6V22H8V8z"/>
        </svg>
      );
    case 'GitHub':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base} aria-hidden>
          <path fillRule="evenodd" d="M12 .5a11.5 11.5 0 00-3.63 22.42c.57.1.78-.25.78-.55v-2.1c-3.17.69-3.84-1.36-3.84-1.36-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.53-.29-5.2-1.26-5.2-5.62 0-1.25.45-2.26 1.2-3.06-.12-.29-.52-1.47.12-3.07 0 0 .99-.32 3.25 1.17A11.3 11.3 0 0112 6.8c1 .01 2.02.14 2.96.42 2.26-1.5 3.25-1.17 3.25-1.17.64 1.6.24 2.78.12 3.07.75.8 1.2 1.8 1.2 3.06 0 4.37-2.68 5.33-5.22 5.61.41.35.78 1.04.78 2.11v3.12c0 .3.2.66.78.55A11.5 11.5 0 0012 .5z" clipRule="evenodd"/>
        </svg>
      );
    default:
      return <span className="inline-block h-4 w-4" />;
  }
}
