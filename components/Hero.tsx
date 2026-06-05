import { ShieldCheck } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto flex min-h-[560px]">
        {/* Left */}
        <div className="w-full md:w-[55%] flex flex-col justify-center px-6 md:px-12 py-16 z-10">
          <p className="text-[10px] font-extrabold tracking-[3px] uppercase text-orange mb-4">
            Guwahati&apos;s Trusted Security Partner
          </p>
          <h1 className="font-black leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
            <span className="text-navy block">Protect</span>
            <span className="text-orange italic">Everything.</span>
          </h1>
          <p className="text-navy/70 text-base md:text-lg leading-relaxed mb-8 max-w-md">
            Professional CCTV installation, smart home security and alarm systems for homes and businesses across Guwahati, Assam.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-orange text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-orange/90 transition-colors">
              Book Free Survey →
            </a>
            <a href="#services" className="border-2 border-navy text-navy px-6 py-3 rounded-lg font-semibold text-sm hover:border-orange hover:text-orange transition-colors">
              View Services
            </a>
          </div>
        </div>

        {/* Right — diagonal gradient panel, desktop only */}
        <div
          className="hidden md:flex w-[45%] flex-col items-center justify-center relative"
          style={{ background: 'linear-gradient(135deg, #FFC81E 0%, #E87F24 100%)', clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        >
          <div className="flex flex-col items-center gap-5 ml-12">
            <ShieldCheck size={96} className="text-white drop-shadow-xl" strokeWidth={1.5} />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-bold"
              style={{ background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.4)' }}>
              <ShieldCheck size={14} />
              500+ Homes Secured
            </div>
          </div>
        </div>
      </div>
      {/* Mobile gradient strip */}
      <div className="md:hidden h-3 w-full" style={{ background: 'linear-gradient(90deg, #FFC81E 0%, #E87F24 100%)' }} />
    </section>
  )
}
