const REASONS = [
  { num: '01', title: 'SAME-DAY INSTALLATION',  body: 'Most jobs are quoted, confirmed and installed in a single visit. No long waits.' },
  { num: '02', title: '5-YEAR WARRANTY',         body: 'Every piece of equipment we install is fully covered for five years. No asterisks.' },
  { num: '03', title: 'LOCAL TO GUWAHATI',       body: 'We live here. We know the city, its buildings, and its specific security needs.' },
  { num: '04', title: 'AMC PLANS AVAILABLE',     body: 'Affordable annual maintenance contracts that keep your systems running flawlessly.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white border-t-2 border-navy">
      {/* Header row */}
      <div className="px-6 md:px-12 lg:px-16 pt-14 pb-8 border-b border-navy/10 flex items-end justify-between gap-4">
        <h2
          className="font-display text-navy"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', letterSpacing: '-0.01em' }}
        >
          WHY CAMLYNK
        </h2>
        <a
          href="#contact"
          className="font-complement italic text-orange text-sm hover:text-navy transition-colors shrink-0"
        >
          Book a free survey →
        </a>
      </div>

      {/* Reasons grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {REASONS.map(({ num, title, body }, i) => (
          <div
            key={num}
            className="px-6 md:px-12 lg:px-16 py-10 md:py-12 border-b border-navy/10 md:odd:border-r"
          >
            <div className="flex items-start gap-5">
              <span
                className="font-display text-navy/10 leading-none shrink-0 mt-1"
                style={{ fontSize: '3rem' }}
              >
                {num}
              </span>
              <div>
                <h3
                  className="font-display text-navy mb-3"
                  style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.15rem)', letterSpacing: '1px' }}
                >
                  {title}
                </h3>
                <p className="font-complement italic text-navy/50 text-sm leading-relaxed max-w-sm">{body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
