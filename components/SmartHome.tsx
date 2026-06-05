import SectionWrapper from '@/components/SectionWrapper'
import Eyebrow from '@/components/Eyebrow'
import DynamicIcon from '@/components/DynamicIcon'
import { SMART_HOME_SERVICES } from '@/lib/constants'

export default function SmartHome() {
  return (
    <SectionWrapper id="smart-home" className="bg-navy py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow light>Beyond Security</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Turn Your Home Into a Smart Home</h2>
        <p className="text-white/70 text-base mb-12 max-w-xl">Control, automate and monitor everything — from your phone.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SMART_HOME_SERVICES.map(({ icon, title, description }) => (
            <div key={title}
              className="rounded-xl p-6 border border-gold/30 hover:border-gold/70 transition-colors duration-200"
              style={{ background: 'rgba(255,255,255,0.07)' }}>
              <DynamicIcon name={icon} size={28} className="text-gold mb-3" />
              <h3 className="text-base font-extrabold text-white mb-1">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
