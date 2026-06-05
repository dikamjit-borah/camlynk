import { Camera, BellRing, Video, ScanLine, PhoneCall } from 'lucide-react'

const FEATURES = [
  { Icon: Camera,    title: 'CCTV Installation',  detail: 'HD & 4K, night vision, remote viewing, cloud backup' },
  { Icon: BellRing,  title: 'Burglar Alarms',      detail: 'Motion-triggered, loud siren, instant mobile alert' },
  { Icon: Video,     title: 'Video Doorbell',      detail: 'See and speak to visitors from anywhere' },
  { Icon: ScanLine,  title: 'Motion Sensors',      detail: 'Indoor & outdoor, pet-immune options available' },
  { Icon: PhoneCall, title: 'Intercom Systems',    detail: 'Multi-unit and standalone audio/video intercom' },
]

export default function CoreSecurity() {
  return (
    <section id="core-security" className="bg-white border-t border-navy/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 md:gap-24 items-start">

          {/* Left — heading block */}
          <div className="md:sticky md:top-32">
            <p className="text-[9px] font-extrabold tracking-[5px] uppercase text-orange mb-4">Core Security</p>
            <h2
              className="font-display font-extrabold text-navy leading-[0.9] mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              Secure<br />Every<br />Corner.
            </h2>
            <p className="text-navy/50 text-sm leading-relaxed max-w-xs">
              From high-definition cameras to smart alarm systems — we cover every entry point of your home or business.
            </p>
          </div>

          {/* Right — feature list */}
          <div>
            {FEATURES.map(({ Icon, title, detail }, i) => (
              <div
                key={title}
                className="flex items-start gap-5 py-6 border-b border-navy/10 last:border-0 group hover:bg-navy/[0.02] -mx-4 px-4 transition-colors"
              >
                <div className="w-10 h-10 border border-orange/25 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-orange transition-colors">
                  <Icon size={18} className="text-orange" strokeWidth={1.8} />
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
