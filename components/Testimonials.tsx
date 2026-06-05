import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">
        <p className="text-[9px] font-extrabold tracking-[5px] uppercase text-orange mb-3">Customer Stories</p>
        <h2
          className="font-display font-extrabold text-navy mb-16"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-0">
          {TESTIMONIALS.map(({ quote, name, location, rating }, i) => (
            <div
              key={name}
              className="py-8 md:py-0 md:px-10 border-t md:border-t-0 md:border-l border-navy/10 first:border-t-0 first:md:border-l-0 first:pl-0"
            >
              {/* Large decorative opening quote */}
              <div
                className="font-display font-extrabold text-gold leading-none mb-4 select-none"
                style={{ fontSize: '5rem', lineHeight: '1' }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <svg key={j} viewBox="0 0 12 12" fill="#FFC81E" width="12" height="12">
                    <path d="M6 1l1.24 2.51L10 3.93l-2 1.95.47 2.76L6 7.27l-2.47 1.37L4 5.88 2 3.93l2.76-.42L6 1z" />
                  </svg>
                ))}
              </div>

              <p className="text-navy/70 text-sm leading-relaxed mb-6 italic">
                {quote}
              </p>
              <div>
                <p className="font-display font-bold text-navy text-sm">{name}</p>
                <p className="text-navy/40 text-xs mt-0.5">{location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
