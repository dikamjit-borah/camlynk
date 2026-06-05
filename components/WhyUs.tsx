const REASONS = [
  { num: '01', title: 'Same-Day Installation',    body: 'No long waits. Most jobs are quoted, confirmed and installed in a single visit.' },
  { num: '02', title: '5-Year Warranty',          body: 'Every piece of equipment we install is covered for five full years. No asterisks.' },
  { num: '03', title: 'Local Experts',            body: 'We live here. We know Guwahati — its streets, its buildings, its specific needs.' },
  { num: '04', title: 'AMC Plans Available',      body: 'Optional annual maintenance contracts keep your systems running at zero stress.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-[9px] font-extrabold tracking-[5px] uppercase text-orange mb-3">Why Camlynk</p>
            <h2
              className="font-display font-extrabold text-navy leading-[0.9]"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Built on trust.<br />Proven by results.
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm font-bold text-orange border-b-2 border-orange pb-0.5 hover:text-navy hover:border-navy transition-colors self-start md:self-end whitespace-nowrap"
          >
            Get a Free Survey →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-0">
          {REASONS.map(({ num, title, body }) => (
            <div
              key={num}
              className="py-8 md:py-10 px-0 md:px-10 border-t border-navy/10 md:even:border-l flex gap-6 items-start"
            >
              <span className="font-display font-extrabold text-navy/12 leading-none shrink-0 mt-0.5" style={{ fontSize: '2.5rem' }}>
                {num}
              </span>
              <div>
                <h3 className="font-display font-bold text-navy mb-2" style={{ fontSize: '1.1rem' }}>{title}</h3>
                <p className="text-navy/50 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
