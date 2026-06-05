import { Zap, Lightbulb, MonitorSmartphone, Wifi } from 'lucide-react'

const FEATURES = [
  { Icon: Zap,               title: 'Home Automation',   detail: 'Schedules, scenes and voice control' },
  { Icon: Lightbulb,         title: 'Smart Lighting',    detail: 'Mood lighting, motion-triggered, energy saving' },
  { Icon: MonitorSmartphone, title: 'Remote Monitoring', detail: 'Live feeds and alerts from anywhere' },
  { Icon: Wifi,              title: 'Networking',        detail: 'Mesh Wi-Fi, structured cabling, router setup' },
]

export default function SmartHome() {
  return (
    <section id="smart-home" className="bg-navy relative overflow-hidden">

      {/* Decorative background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#FFC81E 1px, transparent 1px), linear-gradient(90deg, #FFC81E 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Gold accent line top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 relative">

        {/* Headline block */}
        <div className="mb-16 md:mb-20">
          <p className="text-[9px] font-extrabold tracking-[5px] uppercase text-gold mb-5">Beyond Security</p>
          <h2
            className="font-display font-extrabold text-white leading-[0.88]"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            Your home,<br />
            <span className="text-orange">connected</span><br />
            &amp; controlled.
          </h2>
        </div>

        {/* Feature list — horizontal dividers, no cards */}
        <div className="grid md:grid-cols-2 gap-0 md:gap-x-20">
          {FEATURES.map(({ Icon, title, detail }) => (
            <div
              key={title}
              className="flex items-center gap-5 py-6 border-b border-white/10 last:border-0 md:[&:nth-last-child(2)]:border-0"
            >
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                <Icon size={17} className="text-gold" strokeWidth={1.8} />
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm mb-0.5">{title}</p>
                <p className="text-white/45 text-xs leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom label */}
        <p className="text-white/20 text-xs mt-12 font-medium">
          Works with your existing home infrastructure — no full rewiring needed.
        </p>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  )
}
