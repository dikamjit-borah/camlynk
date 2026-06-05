import SectionWrapper from '@/components/SectionWrapper'
import Eyebrow from '@/components/Eyebrow'
import DynamicIcon from '@/components/DynamicIcon'
import { COMMERCIAL_SERVICES, WHATSAPP_URL } from '@/lib/constants'

export default function Commercial() {
  return (
    <SectionWrapper id="commercial" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>For Businesses</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black text-navy mb-3">Commercial Security</h2>
        <p className="text-navy/60 text-base mb-12 max-w-xl">
          Comprehensive security solutions for offices, shops, warehouses and commercial premises across Guwahati.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {COMMERCIAL_SERVICES.map(({ icon, title, description }) => (
            <div key={title}
              className="bg-cream rounded-xl p-6 border-l-4 border-gold hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <DynamicIcon name={icon} size={26} className="text-orange mb-3" />
              <h3 className="text-base font-extrabold text-navy mb-1">{title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-navy/90 transition-colors">
          Get a Commercial Quote &rarr;
        </a>
      </div>
    </SectionWrapper>
  )
}
