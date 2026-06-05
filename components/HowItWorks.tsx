import SectionWrapper from '@/components/SectionWrapper'
import Eyebrow from '@/components/Eyebrow'
import { HOW_IT_WORKS } from '@/lib/constants'

export default function HowItWorks() {
  return (
    <SectionWrapper className="bg-cream py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>The Process</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black text-navy mb-16">How It Works</h2>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
          <div
            className="hidden md:block absolute top-7 left-[16.5%] right-[16.5%] h-[2px]"
            style={{ background: 'repeating-linear-gradient(90deg, #E87F24 0 12px, transparent 12px 24px)' }}
          />
          {HOW_IT_WORKS.map(({ step, title, description }) => (
            <div key={step} className="relative flex flex-col items-start md:items-center md:text-center">
              <div className="w-14 h-14 rounded-full bg-orange flex items-center justify-center mb-5 shrink-0 z-10">
                <span className="text-white font-black text-lg">{step}</span>
              </div>
              <h3 className="text-lg font-extrabold text-navy mb-2">{title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed max-w-xs">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
