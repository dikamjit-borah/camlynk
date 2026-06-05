import SectionWrapper from '@/components/SectionWrapper'
import Eyebrow from '@/components/Eyebrow'
import DynamicIcon from '@/components/DynamicIcon'
import { CORE_SERVICES } from '@/lib/constants'

export default function CoreSecurity() {
  return (
    <SectionWrapper id="core-security" className="bg-cream py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Core Security</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black text-navy mb-12">Secure Every Corner</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CORE_SERVICES.map(({ icon, title, description }) => (
            <div key={title}
              className="bg-white rounded-xl p-6 border-l-4 border-gold hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <DynamicIcon name={icon} size={28} className="text-orange mb-3" />
              <h3 className="text-base font-extrabold text-navy mb-1">{title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
