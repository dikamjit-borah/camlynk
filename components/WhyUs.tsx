import SectionWrapper from '@/components/SectionWrapper'
import Eyebrow from '@/components/Eyebrow'
import DynamicIcon from '@/components/DynamicIcon'
import { WHY_US } from '@/lib/constants'

export default function WhyUs() {
  return (
    <SectionWrapper id="why-us" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Why Camlynk</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black text-navy mb-12">Built on Trust</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WHY_US.map(({ icon, title, description }) => (
            <div key={title} className="bg-cream rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 mb-4">
                <DynamicIcon name={icon} size={22} className="text-orange" />
              </div>
              <h3 className="text-base font-extrabold text-navy mb-2">{title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
