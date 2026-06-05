const STEPS = [
  { step: '01', title: 'Free Site Survey',          body: 'We visit, assess your space and recommend exactly what you need — at no charge.' },
  { step: '02', title: 'Professional Installation', body: 'Clean, fast work by our certified team. Most installations are done same-day.' },
  { step: '03', title: "You're Protected",          body: 'Live monitoring, remote app access and 24/7 support from day one.' },
]

export default function HowItWorks() {
  return (
    <section className="bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">
        <p className="text-[9px] font-extrabold tracking-[5px] uppercase text-orange mb-3">The Process</p>
        <h2
          className="font-display font-extrabold text-navy mb-16"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-0 relative">
          {/* Thin connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-[2.6rem] left-[calc(16.5%+1rem)] right-[calc(16.5%+1rem)] h-px"
            style={{ background: 'repeating-linear-gradient(90deg, #E87F24 0 10px, transparent 10px 20px)' }}
            aria-hidden="true"
          />

          {STEPS.map(({ step, title, body }) => (
            <div key={step} className="pt-0 pb-10 md:pb-0 md:pr-12 last:pr-0">
              {/* Step bubble */}
              <div className="w-[4.5rem] h-[4.5rem] rounded-full border-2 border-orange bg-cream flex items-center justify-center mb-6 relative z-10">
                <span className="font-display font-extrabold text-orange text-xl">{step}</span>
              </div>
              <h3 className="font-display font-bold text-navy mb-3 text-base">{title}</h3>
              <p className="text-navy/50 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
