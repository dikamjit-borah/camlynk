const OVERVIEW = [
  {
    num: '01',
    title: 'Core Security',
    tagline: 'CCTV · Alarms · Video Doorbell · Motion Sensors · Intercom',
    href: '#core-security',
  },
  {
    num: '02',
    title: 'Smart Home Integration',
    tagline: 'Automation · Smart Lighting · Remote Monitoring · Networking',
    href: '#smart-home',
  },
  {
    num: '03',
    title: 'Commercial Security',
    tagline: 'Office & Shop CCTV · Biometric Attendance · Access Control',
    href: '#commercial',
  },
]

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-6">
        <p className="text-[9px] font-extrabold tracking-[5px] uppercase text-orange mb-3">What We Do</p>
        <h2
          className="font-display font-extrabold text-navy"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Complete Security Solutions
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 pb-20">
        {OVERVIEW.map(({ num, title, tagline, href }) => (
          <a
            key={title}
            href={href}
            className="group flex items-center gap-6 md:gap-10 py-7 border-t border-navy/10 hover:bg-navy/[0.02] transition-colors duration-200 -mx-6 md:-mx-10 px-6 md:px-10"
          >
            <span
              className="font-display font-extrabold text-navy/10 group-hover:text-orange/20 transition-colors duration-300 shrink-0 leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              {num}
            </span>
            <div className="flex-1 min-w-0">
              <h3
                className="font-display font-bold text-navy group-hover:text-orange transition-colors duration-200"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
              >
                {title}
              </h3>
              <p className="text-navy/45 text-sm mt-1">{tagline}</p>
            </div>
            <span className="text-navy/25 group-hover:text-orange group-hover:translate-x-1 transition-all duration-200 text-2xl shrink-0">
              →
            </span>
          </a>
        ))}
        <div className="border-t border-navy/10" />
      </div>
    </section>
  )
}
