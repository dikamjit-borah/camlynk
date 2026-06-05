'use client'

import { useEffect, useState } from 'react'
import { WHATSAPP_URL } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us',   href: '#why-us' },
  { label: 'Contact',  href: '#contact' },
]

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L.057 23.882l6.197-1.624A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 01-4.988-1.366l-.358-.213-3.68.965.981-3.595-.233-.369A9.79 9.79 0 012.182 12c0-5.424 4.394-9.818 9.818-9.818 5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z"/>
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-white border-b border-navy/12 transition-shadow duration-200 ${scrolled ? 'shadow-[0_1px_0_0_#1B3A5C]' : ''}`}>
      <nav className="max-w-none px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        <a href="/" className="font-serif font-semibold text-xl leading-none tracking-tight">
          <span className="text-orange">Cam</span>
          <span className="text-navy italic">lynk</span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="font-sans text-navy/50 text-sm font-medium hover:text-navy transition-colors tracking-wide">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-orange text-white px-4 py-2.5 font-sans font-medium text-[11px] tracking-[3px] uppercase hover:bg-navy transition-colors duration-200"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </nav>
    </header>
  )
}
