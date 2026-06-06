const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-[var(--color-rule)]">
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">

        {/* Nav links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-sans text-[var(--color-ink-3)] text-xs hover:text-ink transition-colors"
              style={{
                transitionDuration: 'var(--dur-short)',
                transitionTimingFunction: 'var(--ease-out)',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Copyright & Attribution */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 shrink-0">
          <p className="font-sans text-[var(--color-ink-3)] text-xs">
            &copy; {new Date().getFullYear()} Camlynk · Guwahati, Assam
          </p>
          <p className="font-sans text-[var(--color-ink-3)] text-xs">
            Powered by{' '}
            <a
              href="https://backendandbeyond.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors underline"
              style={{
                transitionDuration: 'var(--dur-short)',
                transitionTimingFunction: 'var(--ease-out)',
              }}
            >
              Backend & Beyond
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
