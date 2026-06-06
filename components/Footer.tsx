import { Phone, MessageCircle } from 'lucide-react'
import { PHONE, WHATSAPP_URL } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-[var(--color-rule)]">

      {/* Statement — Ft5 dominant close */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-20 md:pt-24 pb-16 border-b border-[var(--color-rule)]">

        {/* Wordmark — top of statement section */}
        <a
          href="/"
          className="font-serif font-semibold text-ink block mb-12"
          style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)', letterSpacing: '-0.01em', fontStyle: 'normal' }}
        >
          <span className="text-[var(--color-accent-2)]">Cam</span>
          <span className="text-ink">lynk</span>
        </a>

        {/* Closing statement */}
        <p
          className="font-serif text-ink leading-[0.9] mb-12"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em', maxWidth: '16ch', fontStyle: 'normal' }}
        >
          Security, precisely installed.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 border border-[var(--color-rule)] text-[var(--color-ink-2)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] font-sans uppercase transition-colors"
            style={{
              fontSize: '0.625rem',
              letterSpacing: '0.2em',
              padding: '0.75rem 1.25rem',
              transitionDuration: 'var(--dur-short)',
              transitionTimingFunction: 'var(--ease-out)',
              whiteSpace: 'nowrap',
            }}
          >
            <Phone size={11} strokeWidth={1.5} />
            Call Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-paper)] hover:bg-ink font-sans uppercase transition-colors"
            style={{
              fontSize: '0.625rem',
              letterSpacing: '0.2em',
              padding: '0.75rem 1.25rem',
              transitionDuration: 'var(--dur-short)',
              transitionTimingFunction: 'var(--ease-out)',
              whiteSpace: 'nowrap',
            }}
          >
            <MessageCircle size={11} strokeWidth={1.5} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Meta row */}
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

        {/* Copyright */}
        <p className="font-sans text-[var(--color-ink-3)] text-xs shrink-0">
          &copy; {new Date().getFullYear()} Camlynk · Guwahati, Assam
        </p>
      </div>
    </footer>
  )
}
