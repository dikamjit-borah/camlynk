import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  return (
    <section className="bg-white border-t-2 border-navy">
      {/* Header */}
      <div className="px-6 md:px-12 lg:px-16 pt-14 pb-8 border-b border-navy/10">
        <h2
          className="font-display text-navy"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', letterSpacing: '-0.01em' }}
        >
          CLIENT STORIES
        </h2>
      </div>

      {/* Testimonials — vertical stack with large opening quotes */}
      <div className="divide-y divide-navy/10">
        {TESTIMONIALS.map(({ quote, name, location, rating }, i) => (
          <div
            key={name}
            className="px-6 md:px-12 lg:px-16 py-12 grid md:grid-cols-[80px_1fr] gap-6 md:gap-10"
          >
            {/* Index */}
            <div className="flex md:flex-col gap-4 md:gap-0 items-center md:items-start">
              <span className="font-display text-navy/10 leading-none text-4xl select-none">
                0{i + 1}
              </span>
              {/* Stars */}
              <div className="flex gap-0.5 md:mt-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <div key={j} className="w-1.5 h-1.5 bg-orange" />
                ))}
              </div>
            </div>

            {/* Content */}
            <div>
              {/* Large opening quote in Thernaly italic */}
              <p
                className="font-complement italic text-navy/70 leading-relaxed mb-6"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
              >
                &ldquo;{quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-orange" />
                <div>
                  <p className="font-display text-navy text-xs tracking-[2px]">{name.toUpperCase()}</p>
                  <p className="font-complement italic text-navy/35 text-xs mt-0.5">{location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
