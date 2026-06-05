import { Camera, BellRing, Video, ScanLine, PhoneCall } from 'lucide-react'

const FEATURES = [
  { Icon: Camera,    title: 'CCTV Installation',  detail: 'HD & 4K, night vision, remote viewing, cloud backup.' },
  { Icon: BellRing,  title: 'Burglar Alarms',      detail: 'Motion-triggered, loud siren, instant mobile alert.' },
  { Icon: Video,     title: 'Video Doorbell',      detail: 'See and speak to visitors remotely from your phone.' },
  { Icon: ScanLine,  title: 'Motion Sensors',      detail: 'Indoor & outdoor, pet-immune options available.' },
  { Icon: PhoneCall, title: 'Intercom Systems',    detail: 'Multi-unit and standalone audio/video intercom.' },
]

export default function CoreSecurity() {
  return (
    <section id="core-security" className="bg-white border-t-2 border-navy">
      <div className="grid md:grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr]">

        {/* Left — sticky heading */}
        <div className="px-6 md:px-12 lg:px-16 py-14 border-b md:border-b-0 md:border-r border-navy/10">
          <div className="md:sticky md:top-24">
            <p className="font-sans italic text-orange text-xs tracking-[3px] mb-4">
              Core Security
            </p>
            <h2
              className="font-serif text-navy leading-[0.88]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              SECURE<br />EVERY<br />CORNER.
            </h2>
            <div className="h-[2px] bg-orange w-8 mt-8 mb-6" />
            <p className="font-sans text-navy/50 text-sm leading-relaxed">
              From high-definition cameras to smart alarm systems — we cover every entry point of your home or business.
            </p>
          </div>
        </div>

        {/* Right — feature list */}
        <div className="divide-y divide-navy/10">
          {FEATURES.map(({ Icon, title, detail }, i) => (
            <div
              key={title}
              className="flex items-start gap-5 px-8 md:px-12 py-8 group hover:bg-navy/[0.025] transition-colors"
            >
              <div className="w-9 h-9 border border-navy/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-orange transition-colors">
                <Icon size={16} className="text-navy/50 group-hover:text-orange transition-colors" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-navy text-sm tracking-[1px] mb-1">{title}</h3>
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
