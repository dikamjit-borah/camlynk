import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'
import { PHONE, WHATSAPP_URL } from '@/lib/constants'

const SERVICES_LINKS = [
  { label: 'CCTV Installation', href: '#core-security' },
  { label: 'Burglar Alarms', href: '#core-security' },
  { label: 'Video Doorbell', href: '#core-security' },
  { label: 'Motion Sensors', href: '#core-security' },
  { label: 'Home Automation', href: '#smart-home' },
  { label: 'Smart Lighting', href: '#smart-home' },
  { label: 'Commercial CCTV', href: '#commercial' },
  { label: 'Biometric Attendance', href: '#commercial' },
  { label: 'Access Control', href: '#commercial' },
]

const COMPANY_LINKS = [
  { label: 'Why Camlynk', href: '#why-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Get a Quote', href: '#contact' },
]

const SERVICE_AREAS = [
  'Paltan Bazaar',
  'Fancy Bazaar',
  'Zoo Road',
  'Dispur',
  'Narengi',
  'Beltola',
  'Ganeshguri',
  'Guwahati City',
]

export default function Footer() {
  return (
    <footer className="bg-navy">

      {/* Top orange blade */}
      <div className="h-[3px] bg-orange" />

      {/* Main body */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-20 pb-16">

        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr] gap-12 lg:gap-10">

          {/* Col 1: Brand */}
          <div>
            <a
              href="/"
              className="font-serif tracking-[1px] leading-none block mb-6"
              style={{ fontSize: 'clamp(2rem, 3vw, 2.6rem)' }}
            >
              <span className="text-orange">CAM</span>
              <span className="text-white">LYNK</span>
            </a>

            <p className="font-sans text-white/40 text-sm leading-relaxed mb-3 max-w-[280px]">
              Professional CCTV, burglar alarm and smart home installation for homes and businesses across Guwahati, Assam.
            </p>
            <p className="font-sans italic text-white/25 text-sm leading-relaxed mb-10 max-w-[280px]">
              Licensed · Insured · 5-Year Warranty
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 border border-white/20 text-white/65 hover:border-orange hover:text-white px-4 py-2.5 font-sans text-[10px] tracking-[2px] transition-colors duration-200"
              >
                <Phone size={11} strokeWidth={1.5} />
                CALL NOW
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange text-white hover:bg-white hover:text-navy px-4 py-2.5 font-sans text-[10px] tracking-[2px] transition-colors duration-200"
              >
                <MessageCircle size={11} strokeWidth={1.5} />
                WHATSAPP
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <p className="font-sans text-white/25 text-[9px] tracking-[3px] uppercase mb-7">
              Services
            </p>
            <ul className="space-y-3.5">
              {SERVICES_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-sans text-white/45 text-sm hover:text-white transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <p className="font-sans text-white/25 text-[9px] tracking-[3px] uppercase mb-7">
              Company
            </p>
            <ul className="space-y-3.5">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-sans text-white/45 text-sm hover:text-white transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className="font-sans text-white/25 text-[9px] tracking-[3px] uppercase mb-7">
              Contact
            </p>
            <ul className="space-y-5">
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-start gap-3 font-sans text-white/45 text-sm hover:text-white transition-colors duration-150"
                >
                  <Phone size={13} className="mt-0.5 shrink-0 text-orange" strokeWidth={1.5} />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 font-sans text-white/45 text-sm hover:text-white transition-colors duration-150"
                >
                  <MessageCircle size={13} className="mt-0.5 shrink-0 text-orange" strokeWidth={1.5} />
                  WhatsApp us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={13} className="mt-0.5 shrink-0 text-orange" strokeWidth={1.5} />
                <span className="font-sans text-white/35 text-sm leading-relaxed">
                  Guwahati, Assam<br />India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={13} className="mt-0.5 shrink-0 text-orange" strokeWidth={1.5} />
                <span className="font-sans text-white/35 text-sm leading-relaxed">
                  Mon – Sat<br />9:00 am – 7:00 pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service areas */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <p className="font-sans text-white/20 text-[9px] tracking-[3px] uppercase mb-4">
            Areas We Serve
          </p>
          <p className="font-sans text-white/30 text-sm leading-relaxed">
            {SERVICE_AREAS.join(' · ')}
          </p>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <p className="font-sans text-white/20 text-xs">
          &copy; {new Date().getFullYear()} Camlynk. All rights reserved.
        </p>
        <p className="font-sans italic text-white/15 text-xs">
          Professional Security Installation · Guwahati, Assam
        </p>
      </div>
    </footer>
  )
}
