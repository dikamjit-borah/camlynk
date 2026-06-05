import { Building2, Fingerprint, KeyRound } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

const FEATURES = [
  { Icon: Building2,   title: 'Office & Shop CCTV',   detail: 'High-coverage camera systems tailored for commercial premises.' },
  { Icon: Fingerprint, title: 'Biometric Attendance',  detail: 'Fingerprint and face-recognition systems for accurate staff tracking.' },
  { Icon: KeyRound,    title: 'Access Control',        detail: 'Card, PIN and biometric door access for secure zones.' },
]

export default function Commercial() {
  return (
    <section id="commercial" className="bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 md:gap-24 items-start">

          {/* Left */}
          <div className="md:sticky md:top-32">
            <p className="text-[9px] font-extrabold tracking-[5px] uppercase text-orange mb-4">For Businesses</p>
            <h2
              className="font-display font-extrabold text-navy leading-[0.9] mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}
            >
              Commercial<br />Security.
            </h2>
            <p className="text-navy/50 text-sm leading-relaxed max-w-xs mb-8">
              Offices, shops, warehouses, restaurants — we secure commercial spaces of every size across Guwahati.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-cream px-6 py-3 text-sm font-bold hover:bg-orange transition-colors duration-300"
            >
              Get a Commercial Quote →
            </a>
          </div>

          {/* Right — feature list */}
          <div>
            {FEATURES.map(({ Icon, title, detail }, i) => (
              <div
                key={title}
                className="flex items-start gap-5 py-7 border-b border-navy/10 last:border-0"
              >
                <div className="w-10 h-10 rounded-full bg-navy/8 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={18} className="text-navy/60" strokeWidth={1.8} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-navy text-base mb-1">{title}</h3>
                  <p className="text-navy/50 text-sm leading-relaxed">{detail}</p>
                </div>
                <span className="text-[10px] font-bold text-navy/15 self-center shrink-0">0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
