import { PHONE, WHATSAPP_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <a href="/" className="text-2xl font-black">
              <span className="text-orange">Cam</span>
              <span className="text-steel-blue">lynk</span>
            </a>
            <p className="text-white/50 text-sm mt-3 leading-relaxed">
              Professional security installation for homes and businesses across Guwahati, Assam.
            </p>
          </div>
          <div>
            <h4 className="text-white font-extrabold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[{ label: 'Services', href: '#services' }, { label: 'Why Us', href: '#why-us' }, { label: 'Contact', href: '#contact' }].map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-white/50 text-sm hover:text-gold transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-extrabold text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {['CCTV Installation', 'Smart Home', 'Burglar Alarms', 'Commercial Security'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/50 text-sm hover:text-gold transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-extrabold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2">
              <li><a href={`tel:${PHONE}`} className="text-white/50 text-sm hover:text-gold transition-colors">{PHONE}</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white/50 text-sm hover:text-gold transition-colors">WhatsApp</a></li>
              <li className="text-white/50 text-sm">Guwahati, Assam</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} Camlynk. All rights reserved.</p>
          <p className="text-white/30 text-xs">Guwahati, Assam, India</p>
        </div>
      </div>
    </footer>
  )
}
