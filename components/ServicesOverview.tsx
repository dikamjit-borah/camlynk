const OVERVIEW = [
  {
    num: '01',
    title: 'Core Security',
    tagline: 'CCTV Installation · Burglar Alarms · Video Doorbell · Motion Sensors · Intercom',
    href: '#core-security',
  },
  {
    num: '02',
    title: 'Smart Home Integration',
    tagline: 'Automation · Smart Lighting · Remote Monitoring · Structured Networking',
    href: '#smart-home',
  },
  {
    num: '03',
    title: 'Commercial Security',
    tagline: 'Office & Shop CCTV · Biometric Attendance · Access Control Systems',
    href: '#commercial',
  },
]

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-white border-t-2 border-navy">
      {/* Section label */}
      <div className="px-6 md:px-12 lg:px-16 pt-14 pb-8 flex items-end justify-between gap-4 border-b border-navy/10">
        <h2
          className="font-serif text-navy"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', letterSpacing: '-0.01em' }}
        >
          WHAT WE DO
        </h2>
        <span className="font-sans italic text-navy/35 text-sm shrink-0">3 services</span>
      </div>

      {/* Service rows */}
      {OVERVIEW.map(({ num, title, tagline, href }, i) => (
        <a
          key={title}
          href={href}
          className="group flex items-center gap-6 md:gap-10 px-6 md:px-12 lg:px-16 py-8 md:py-10 border-b border-navy/10 hover:bg-navy hover:text-white transition-colors duration-200"
        >
          {/* Number */}
          <span
            className="font-serif shrink-0 leading-none text-navy/15 group-hover:text-white/20 transition-colors"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            {num}
          </span>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3
              className="font-serif text-navy group-hover:text-white transition-colors"
              style={{ fontSize: 'clamp(1.2rem, 2.8vw, 2rem)', letterSpacing: '-0.01em' }}
            >
              {title}
            </h3>
            <p className="font-sans italic text-navy/45 group-hover:text-white/55 transition-colors text-sm mt-1.5">
              {tagline}
            </p>
          </div>

          {/* Arrow */}
          <span className="font-sans text-navy/20 group-hover:text-white/50 text-2xl shrink-0 group-hover:translate-x-1 transition-all duration-200">
            →
          </span>
        </a>
      ))}
    </section>
  )
}
