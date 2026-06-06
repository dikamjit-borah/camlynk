'use client'

import { useState } from 'react'
import { PHONE, WHATSAPP_URL } from '@/lib/constants'
import { Phone, MapPin } from 'lucide-react'

const SERVICE_OPTIONS = [
  'CCTV Installation',
  'Smart Home Integration',
  'Burglar Alarms',
  'Video Doorbell',
  'Commercial Security',
  'Other',
]

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L.057 23.882l6.197-1.624A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 01-4.988-1.366l-.358-.213-3.68.965.981-3.595-.233-.369A9.79 9.79 0 012.182 12c0-5.424 4.394-9.818 9.818-9.818 5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z"/>
  </svg>
)

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = [
    'w-full border border-navy/12 px-5 py-4 font-sans text-navy text-sm bg-white',
    'placeholder:text-navy/25',
    'transition-colors',
  ].join(' ')

  return (
    <section id="contact" className="bg-light">

      {/* Header */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-20 md:pt-24 pb-10 border-b border-[var(--color-paper)]/08">
        <h2
          className="font-serif text-navy"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', letterSpacing: '-0.02em', lineHeight: '0.9', fontStyle: 'normal' }}
        >
          Book your<br />free survey
        </h2>
      </div>

      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--color-paper)]/08">

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 md:px-12 lg:px-16 xl:px-24 py-14 space-y-4">
          <input
            className={inputClass}
            placeholder="Your Name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            required
          />
          <input
            className={inputClass}
            placeholder="Phone Number"
            type="tel"
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            required
          />
          <select
            className={inputClass}
            value={form.service}
            onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
          >
            <option value="">Select a Service</option>
            {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <textarea
            className={`${inputClass} resize-none`}
            rows={4}
            placeholder="Tell us about your requirements (optional)"
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          />
          {status === 'sent' ? (
            <p className="font-sans text-[var(--color-accent-2)] text-sm">
              Thank you &mdash; we&apos;ll be in touch shortly.
            </p>
          ) : (
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-navy text-ink py-4 font-sans uppercase hover:bg-[var(--color-accent-2)] hover:text-[var(--color-paper)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.2em',
                transitionDuration: 'var(--dur-short)',
                transitionTimingFunction: 'var(--ease-out)',
              }}
            >
              {status === 'sending' ? 'Sending…' : 'Submit Request'}
            </button>
          )}
          {status === 'error' && (
            <p className="font-sans text-red-600 text-sm">
              Something went wrong. Please WhatsApp or call us directly.
            </p>
          )}
        </form>

        {/* Contact details */}
        <div className="px-6 md:px-12 lg:px-16 xl:px-24 py-14 flex flex-col justify-center divide-y divide-[var(--color-paper)]/08">

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 py-8 group hover:bg-white/60 -mx-6 md:-mx-12 lg:-mx-16 xl:-mx-24 px-6 md:px-12 lg:px-16 xl:px-24 transition-colors"
            style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
          >
            <div className="w-10 h-10 flex items-center justify-center shrink-0 text-white" style={{ background: 'var(--color-whatsapp)' }}>
              <WhatsAppIcon />
            </div>
            <div>
              <p className="font-serif text-navy text-xs tracking-[2px]" style={{ fontStyle: 'normal' }}>WhatsApp</p>
              <p className="font-sans text-navy/65 text-xs mt-0.5">Quick replies, 7 days a week</p>
            </div>
            <span
              className="ml-auto text-navy/20 group-hover:text-[var(--color-accent-2)] group-hover:translate-x-1 transition-[color,transform]"
              style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
            >→</span>
          </a>

          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-5 py-8 group hover:bg-white/60 -mx-6 md:-mx-12 lg:-mx-16 xl:-mx-24 px-6 md:px-12 lg:px-16 xl:px-24 transition-colors"
            style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
          >
            <div className="w-10 h-10 border border-navy/12 flex items-center justify-center shrink-0 group-hover:border-[var(--color-accent-2)] group-hover:bg-[var(--color-accent-2)] transition-[border-color,background-color]"
              style={{ transitionDuration: 'var(--dur-short)' }}
            >
              <Phone size={15} className="text-navy/65 group-hover:text-white transition-colors" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-serif text-navy text-xs tracking-[2px]" style={{ fontStyle: 'normal' }}>{PHONE}</p>
              <p className="font-sans text-navy/65 text-xs mt-0.5">Call us directly</p>
            </div>
            <span
              className="ml-auto text-navy/20 group-hover:text-[var(--color-accent-2)] group-hover:translate-x-1 transition-[color,transform]"
              style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
            >→</span>
          </a>

          <div className="flex items-center gap-5 py-8">
            <div className="w-10 h-10 border border-navy/12 flex items-center justify-center shrink-0">
              <MapPin size={15} className="text-navy" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-serif text-navy text-xs tracking-[2px]" style={{ fontStyle: 'normal' }}>Guwahati, Assam</p>
              <p className="font-sans text-navy/65 text-xs mt-0.5">
                Paltan Bazaar &middot; Fancy Bazaar &middot; Zoo Road &middot; Dispur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
