'use client'

export default function Navbar() {
  return (
    <header
      className="sticky top-0 bg-navy border-b border-[var(--color-rule)]"
      style={{ zIndex: 'var(--z-sticky)' }}
    >
      <nav className="px-6 md:px-12 lg:px-16 xl:px-24 py-6 flex items-center justify-between">

        {/* Wordmark — N9 edge-aligned · Fraunces italic accent */}
        <a
          href="/"
          className="font-semibold leading-none tracking-tight text-ink"
          style={{
            fontFamily: 'var(--font-fraunces), Georgia, serif',
            fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
          }}
        >
          <span className="text-orange" style={{ fontStyle: 'italic' }}>Cam</span>
          <span className="text-ink">lynk</span>
        </a>

        {/* Single CTA — hard right · outlined chip · vast void between */}
        <a
          href="#contact"
          className="font-sans uppercase text-[var(--color-ink-2)] border border-[var(--color-rule)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
          style={{
            fontSize: '0.625rem',
            letterSpacing: '0.2em',
            padding: '0.75rem 1.25rem',
            transitionDuration: 'var(--dur-short)',
            transitionTimingFunction: 'var(--ease-out)',
            whiteSpace: 'nowrap',
          }}
        >
          Book Survey
        </a>
      </nav>
    </header>
  )
}
