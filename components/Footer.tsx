import { PHONE, WHATSAPP_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">

        {/* Top row — logo + nav */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <a href="/" className="font-display font-extrabold text-2xl">
            <span className="text-orange">Cam</span>
            <span className="text-steel-blue">lynk</span>
          </a>
          <nav className="flex flex-wrap gap-6">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Smart Home', href: '#smart-home' },
              { label: 'Why Us', href: '#why-us' },
              { label: 'Commercial', href: '#commercial' },
              { label: 'Contact', href: '#contact' },
            ].map(({ label, href }) => (
              <a key={href} href={href} className="text-white/40 text-sm hover:text-gold transition-colors font-medium">
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row — contact + copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8">
          <div className="flex flex-wrap gap-6">
            <a href={`tel:${PHONE}`} className="text-white/40 text-sm hover:text-white transition-colors">
              {PHONE}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white/40 text-sm hover:text-white transition-colors">
              WhatsApp
            </a>
            <span className="text-white/25 text-sm">Guwahati, Assam</span>
          </div>
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Camlynk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
