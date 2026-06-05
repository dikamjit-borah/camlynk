import { PHONE, WHATSAPP_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy border-t-2 border-navy">
      <div className="px-6 md:px-12 lg:px-16 py-14">

        {/* Top: logo + nav */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-12 border-b border-white/10">
          <div>
            <a href="/" className="font-serif text-xl tracking-[1px] leading-none block mb-4">
              <span className="text-orange">CAM</span>
              <span className="text-white">LYNK</span>
            </a>
            <p className="font-sans italic text-white/30 text-sm max-w-[220px] leading-relaxed">
              Professional security installation for homes and businesses across Guwahati, Assam.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-2">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Smart Home', href: '#smart-home' },
              { label: 'Why Us', href: '#why-us' },
              { label: 'Commercial', href: '#commercial' },
              { label: 'Contact', href: '#contact' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-sans italic text-white/35 text-sm hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom: contact + copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8">
          <div className="flex flex-wrap gap-6">
            <a href={`tel:${PHONE}`} className="font-sans italic text-white/35 text-sm hover:text-white transition-colors">
              {PHONE}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-sans italic text-white/35 text-sm hover:text-white transition-colors">
              WhatsApp
            </a>
            <span className="font-sans italic text-white/20 text-sm">Guwahati, Assam</span>
          </div>
          <p className="font-sans italic text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Camlynk.
          </p>
        </div>
      </div>
    </footer>
  )
}
