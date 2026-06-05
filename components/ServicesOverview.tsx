import SectionWrapper from '@/components/SectionWrapper'
import Eyebrow from '@/components/Eyebrow'
import DynamicIcon from '@/components/DynamicIcon'

const OVERVIEW = [
  { icon: 'ShieldCheck', title: 'Core Security',           tagline: 'CCTV · Alarms · Doorbell · Sensors',              href: '#core-security' },
  { icon: 'Home',        title: 'Smart Home Integration',  tagline: 'Automation · Lighting · Monitoring · Networking', href: '#smart-home' },
  { icon: 'Building2',   title: 'Commercial Security',     tagline: 'Office CCTV · Biometric · Access Control',        href: '#commercial' },
]

export default function ServicesOverview() {
  return (
    <SectionWrapper id="services" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>What We Do</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black text-navy mb-12">Complete Security Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OVERVIEW.map(({ icon, title, tagline, href }) => (
            <a key={title} href={href}
              className="group bg-cream rounded-xl p-7 border-l-4 border-gold hover:border-orange hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
              <DynamicIcon name={icon} size={36} className="text-orange mb-4" />
              <h3 className="text-xl font-extrabold text-navy mb-2">{title}</h3>
              <p className="text-navy/60 text-sm mb-4">{tagline}</p>
              <span className="text-orange text-sm font-bold group-hover:underline">Explore →</span>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
