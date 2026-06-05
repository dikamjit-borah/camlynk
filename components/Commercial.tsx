import { Building2, Fingerprint, KeyRound } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

const FEATURES = [
  { Icon: Building2,   title: 'OFFICE & SHOP CCTV',   detail: 'High-coverage camera systems tailored for commercial premises.' },
  { Icon: Fingerprint, title: 'BIOMETRIC ATTENDANCE',  detail: 'Fingerprint and face-recognition systems for accurate staff tracking.' },
  { Icon: KeyRound,    title: 'ACCESS CONTROL',        detail: 'Card, PIN and biometric door access for secure zones.' },
]

export default function Commercial() {
  return (
    <section id="commercial" className="bg-white border-t-2 border-navy">
      <div className="grid md:grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr]">

        {/* Left */}
        <div className="px-6 md:px-12 lg:px-16 py-14 border-b md:border-b-0 md:border-r border-navy/10">
          <div className="md:sticky md:top-24">
            <p className="font-sans italic text-orange text-xs tracking-[3px] mb-4">
              For Businesses
            </p>
            <h2
              className="font-serif text-navy leading-[0.88]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              COMMERCIAL<br />SECURITY.
            </h2>
            <div className="h-[2px] bg-orange w-8 mt-8 mb-6" />
            <p className="font-sans text-navy/50 text-sm leading-relaxed mb-8 max-w-xs">
              Offices, shops, warehouses, restaurants — we secure commercial spaces of every size across Guwahati.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3.5 font-serif text-[10px] tracking-[3px] hover:bg-orange transition-colors duration-200"
            >
              GET A QUOTE
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="divide-y divide-navy/10">
          {FEATURES.map(({ Icon, title, detail }, i) => (
            <div
              key={title}
              className="flex items-start gap-5 px-8 md:px-12 py-10 group hover:bg-navy/[0.02] transition-colors"
            >
              <div className="w-9 h-9 border border-navy/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-orange transition-colors">
                <Icon size={15} className="text-navy/40 group-hover:text-orange transition-colors" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-navy text-xs tracking-[2px] mb-2">{title}</h3>
                <p className="font-sans italic text-navy/45 text-sm leading-relaxed">{detail}</p>
              </div>
              <span className="font-serif text-navy/10 text-xs self-start mt-1 shrink-0">0{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
