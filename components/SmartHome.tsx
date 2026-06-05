import { Zap, Lightbulb, MonitorSmartphone, Wifi } from 'lucide-react'

const FEATURES = [
  { Icon: Zap,               title: 'Home Automation',   detail: 'Schedules, scenes and voice control.' },
  { Icon: Lightbulb,         title: 'Smart Lighting',    detail: 'Mood lighting, motion-triggered, energy saving.' },
  { Icon: MonitorSmartphone, title: 'Remote Monitoring', detail: 'Live feeds and alerts from anywhere.' },
  { Icon: Wifi,              title: 'Networking',        detail: 'Mesh Wi-Fi, structured cabling, router setup.' },
]

export default function SmartHome() {
  return (
    <section id="smart-home" className="bg-navy border-t-2 border-navy">

      {/* Top orange blade */}
      <div className="h-[3px] bg-orange" />

      <div className="px-6 md:px-12 lg:px-16 py-20 md:py-24">

        {/* Headline */}
        <div className="mb-16 md:mb-20">
          <p className="font-sans italic text-orange text-xs tracking-[3px] mb-5">
            Beyond Security
          </p>
          <h2
            className="font-serif text-white leading-[0.88]"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.02em' }}
          >
            YOUR HOME,<br />
            <span className="text-orange">CONNECTED</span><br />
            &amp; CONTROLLED.
          </h2>
          <p className="font-sans italic text-white/40 text-sm mt-6 max-w-xs leading-relaxed">
            Control, automate and monitor everything — from your phone, from anywhere in the world.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-white/10">
          {FEATURES.map(({ Icon, title, detail }) => (
            <div
              key={title}
              className="flex items-start gap-5 py-8 pr-8 border-b border-r-0 sm:odd:border-r border-white/10 sm:last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
            >
              <div className="w-9 h-9 border border-white/15 flex items-center justify-center shrink-0">
                <Icon size={15} className="text-orange" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-white text-xs tracking-[2px] mb-1">{title}</h3>
                <p className="font-sans italic text-white/40 text-sm leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
