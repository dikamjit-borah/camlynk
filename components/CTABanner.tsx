import { PHONE, WHATSAPP_URL } from '@/lib/constants'
import { Phone } from 'lucide-react'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L.057 23.882l6.197-1.624A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 01-4.988-1.366l-.358-.213-3.68.965.981-3.595-.233-.369A9.79 9.79 0 012.182 12c0-5.424 4.394-9.818 9.818-9.818 5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z"/>
  </svg>
)

export default function CTABanner() {
  return (
    <section className="bg-navy border-t border-[var(--color-rule)]">
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 py-16 md:py-20">

        <h2
          className="font-serif text-ink leading-[0.88] mb-8"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.02em', fontStyle: 'normal' }}
        >
          Free site survey.<br />
          <span style={{ color: 'var(--color-accent)' }}>No obligation.</span>
        </h2>
        <p className="font-sans text-[var(--color-ink-3)] text-base mb-10 max-w-md leading-relaxed">
          We&apos;ll visit your home or office and recommend the right setup at the right price.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={`tel:${PHONE}`}
            className="relative flex items-center gap-2.5 bg-[var(--color-accent)] text-[var(--color-paper)] px-8 py-4 font-sans font-medium uppercase overflow-hidden hover:bg-ink hover:text-[var(--color-paper)] transition-colors"
            style={{
              fontSize: '0.625rem',
              letterSpacing: '0.2em',
              transitionDuration: 'var(--dur-short)',
              transitionTimingFunction: 'var(--ease-out)',
              whiteSpace: 'nowrap',
            }}
          >
            <Phone size={13} className="relative" />
            <span className="relative">Call Now</span>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 border border-[var(--color-rule)] text-[var(--color-ink-2)] px-8 py-4 font-sans font-medium uppercase hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            style={{
              fontSize: '0.625rem',
              letterSpacing: '0.2em',
              transitionDuration: 'var(--dur-short)',
              transitionTimingFunction: 'var(--ease-out)',
              whiteSpace: 'nowrap',
            }}
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
