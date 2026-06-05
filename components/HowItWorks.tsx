const STEPS = [
  { step: '01', title: 'FREE SITE SURVEY',          body: 'We visit, assess your space and recommend exactly what you need — at no charge.' },
  { step: '02', title: 'PROFESSIONAL INSTALLATION', body: 'Clean, fast work by our certified team. Most installations are done same-day.' },
  { step: '03', title: "YOU'RE PROTECTED",          body: 'Live monitoring, remote app access and 24/7 support from day one.' },
]

export default function HowItWorks() {
  return (
    <section className="bg-white border-t-2 border-navy">
      {/* Header */}
      <div className="px-6 md:px-12 lg:px-16 pt-14 pb-8 border-b border-navy/10">
        <h2
          className="font-display text-navy"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', letterSpacing: '-0.01em' }}
        >
          HOW IT WORKS
        </h2>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-navy/10">
        {STEPS.map(({ step, title, body }) => (
          <div key={step} className="px-6 md:px-10 lg:px-14 py-12 relative">
            <span
              className="block font-display text-navy/8 leading-none mb-8 select-none"
              style={{ fontSize: '5rem' }}
            >
              {step}
            </span>
            {/* Orange step indicator */}
            <div className="h-[2px] bg-orange w-8 mb-6" />
            <h3
              className="font-display text-navy mb-3"
              style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1rem)', letterSpacing: '1.5px' }}
            >
              {title}
            </h3>
            <p className="font-complement italic text-navy/50 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
