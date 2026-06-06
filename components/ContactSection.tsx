'use client'

import { useState } from 'react'
import { PHONE, WHATSAPP_URL } from '@/lib/constants'
import { Phone, MapPin } from 'lucide-react'

const SERVICE_OPTIONS = [
  'CCTV Installation',
  'Burglar Alarms',
  'Video Doorbell',
  'Smart Home',
  'Commercial Security',
  'Biometric Attendance',
  'Access Control',
  'Not sure yet',
]

const COVERAGE = ['Paltan Bazaar', 'Fancy Bazaar', 'Zoo Road', 'Dispur', 'Beltola', 'Geetanagar']

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L.057 23.882l6.197-1.624A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 01-4.988-1.366l-.358-.213-3.68.965.981-3.595-.233-.369A9.79 9.79 0 012.182 12c0-5.424 4.394-9.818 9.818-9.818 5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z" />
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

  const fieldBase: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    borderBottom: '1px solid var(--color-rule)',
    padding: '0.875rem 0',
    fontFamily: 'var(--font-outfit), system-ui, sans-serif',
    fontSize: '0.875rem',
    color: 'var(--color-ink)',
    outline: 'none',
    transition: `border-color var(--dur-short) var(--ease-out)`,
  }

  return (
    <section id="contact" className="bg-[var(--color-navy)]">
      <div className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px] divide-y lg:divide-y-0 lg:divide-x divide-[var(--color-rule)]">

        {/* LEFT — Form */}
        <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-20 md:pt-28 pb-20">

          {/* Label */}
          <div className="flex items-center gap-4 mb-14">
            <span
              className="font-sans shrink-0"
              style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-accent)' }}
            >
              Contact
            </span>
            <div className="h-px w-10 bg-[var(--color-rule)]" />
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: '0.88',
              fontStyle: 'italic',
              fontWeight: 600,
              color: 'var(--color-ink)',
            }}
          >
            Tell us what<br />you need.
          </h2>

          <p
            className="font-sans text-sm leading-relaxed mt-6 mb-14"
            style={{ color: 'var(--color-ink-3)', maxWidth: '30rem' }}
          >
            Fill in the details below and we will be in touch within 2 hours — Mon to Sat, 9am to 8pm. Prefer to call? Our number is on the right.
          </p>

          {status === 'sent' ? (
            <div className="border-l-2 border-[var(--color-accent)] pl-6 py-2">
              <p
                className="font-sans font-medium"
                style={{ fontSize: '0.875rem', color: 'var(--color-ink)' }}
              >
                Message received.
              </p>
              <p
                className="font-sans text-sm mt-1"
                style={{ color: 'var(--color-ink-3)' }}
              >
                We will call or WhatsApp you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">

              {/* Name */}
              <div>
                <label
                  className="font-sans block mb-3"
                  style={{ fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-ink-3)', opacity: 0.6 }}
                >
                  Your Name
                </label>
                <input
                  style={fieldBase}
                  placeholder="e.g. Rahul Sharma"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  onFocus={e => (e.target.style.borderBottomColor = 'var(--color-accent)')}
                  onBlur={e => (e.target.style.borderBottomColor = 'var(--color-rule)')}
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  className="font-sans block mb-3"
                  style={{ fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-ink-3)', opacity: 0.6 }}
                >
                  Phone Number
                </label>
                <input
                  style={fieldBase}
                  type="tel"
                  placeholder="+91 99725 51379"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  onFocus={e => (e.target.style.borderBottomColor = 'var(--color-accent)')}
                  onBlur={e => (e.target.style.borderBottomColor = 'var(--color-rule)')}
                  required
                />
              </div>

              {/* Service chip selector */}
              <div>
                <label
                  className="font-sans block mb-4"
                  style={{ fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-ink-3)', opacity: 0.6 }}
                >
                  Service needed
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map((s) => {
                    const active = form.service === s
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, service: active ? '' : s }))}
                        className="font-sans transition-colors"
                        style={{
                          fontSize: '0.68rem',
                          letterSpacing: '0.04em',
                          padding: '0.4rem 0.85rem',
                          border: `1px solid ${active ? 'var(--color-accent)' : 'var(--color-rule)'}`,
                          color: active ? 'var(--color-accent)' : 'var(--color-ink-3)',
                          background: active ? 'color-mix(in oklch, var(--color-accent) 10%, transparent)' : 'transparent',
                          transitionDuration: 'var(--dur-short)',
                          transitionTimingFunction: 'var(--ease-out)',
                        }}
                      >
                        {s}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  className="font-sans block mb-3"
                  style={{ fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-ink-3)', opacity: 0.6 }}
                >
                  Anything else we should know
                </label>
                <textarea
                  style={{ ...fieldBase, resize: 'none', borderBottom: 'none', borderTop: '1px solid var(--color-rule)', padding: '0.875rem 0 0.875rem 0' }}
                  rows={3}
                  placeholder="Number of cameras, size of property, specific concerns…"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  onFocus={e => { e.target.style.borderTopColor = 'var(--color-accent)'; e.target.style.borderBottom = `1px solid var(--color-accent)` }}
                  onBlur={e => { e.target.style.borderTopColor = 'var(--color-rule)'; e.target.style.borderBottom = 'none' }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="font-sans uppercase self-start px-10 py-4 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.25em',
                  background: 'var(--color-accent)',
                  color: 'var(--color-paper)',
                  transitionDuration: 'var(--dur-short)',
                  transitionTimingFunction: 'var(--ease-out)',
                }}
                onMouseEnter={e => { if (status !== 'sending') (e.currentTarget as HTMLElement).style.background = 'var(--color-ink)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-accent)' }}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message →'}
              </button>

              {status === 'error' && (
                <p
                  className="font-sans text-sm"
                  style={{ color: 'var(--color-accent-2)' }}
                >
                  Something went wrong. Please WhatsApp or call us directly.
                </p>
              )}
            </form>
          )}
        </div>

        {/* RIGHT — Direct contact */}
        <div className="px-8 lg:px-10 xl:px-12 pt-20 md:pt-28 pb-20 flex flex-col">

          <div className="flex items-center gap-4 mb-14">
            <span
              className="font-sans shrink-0"
              style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-ink-3)', opacity: 0.5 }}
            >
              Or reach us directly
            </span>
          </div>

          <div className="flex flex-col divide-y divide-[var(--color-rule)] flex-1">

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 py-8 hover:opacity-100 transition-opacity"
              style={{ opacity: 0.85, transitionDuration: 'var(--dur-short)' }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 flex items-center justify-center shrink-0 text-white"
                    style={{ background: 'var(--color-whatsapp)' }}
                  >
                    <WhatsAppIcon />
                  </div>
                  <span
                    className="font-sans"
                    style={{ fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-ink-3)' }}
                  >
                    WhatsApp
                  </span>
                </div>
                <span
                  className="font-sans group-hover:translate-x-1 transition-transform"
                  style={{ color: 'var(--color-ink-3)', opacity: 0.4, transitionDuration: 'var(--dur-short)', fontSize: '0.85rem' }}
                >
                  →
                </span>
              </div>
              <span
                className="font-sans font-medium"
                style={{ fontSize: '1rem', letterSpacing: '-0.01em', color: 'var(--color-ink)', paddingLeft: '2.5rem' }}
              >
                {PHONE}
              </span>
              <span
                className="font-sans text-xs"
                style={{ color: 'var(--color-ink-3)', paddingLeft: '2.5rem' }}
              >
                Quick replies · 7 days a week
              </span>
            </a>

            {/* Phone */}
            <a
              href={`tel:${PHONE}`}
              className="group flex flex-col gap-2 py-8 hover:opacity-100 transition-opacity"
              style={{ opacity: 0.85, transitionDuration: 'var(--dur-short)' }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 border border-[var(--color-rule)] flex items-center justify-center shrink-0"
                  >
                    <Phone size={12} strokeWidth={1.5} style={{ color: 'var(--color-ink-3)' }} />
                  </div>
                  <span
                    className="font-sans"
                    style={{ fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-ink-3)' }}
                  >
                    Call Us
                  </span>
                </div>
                <span
                  className="font-sans group-hover:translate-x-1 transition-transform"
                  style={{ color: 'var(--color-ink-3)', opacity: 0.4, transitionDuration: 'var(--dur-short)', fontSize: '0.85rem' }}
                >
                  →
                </span>
              </div>
              <span
                className="font-sans font-medium"
                style={{ fontSize: '1rem', letterSpacing: '-0.01em', color: 'var(--color-ink)', paddingLeft: '2.5rem' }}
              >
                {PHONE}
              </span>
              <span
                className="font-sans text-xs"
                style={{ color: 'var(--color-ink-3)', paddingLeft: '2.5rem' }}
              >
                Mon – Sat · 9am – 8pm
              </span>
            </a>

            {/* Location */}
            <div className="flex flex-col gap-2 py-8">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 border border-[var(--color-rule)] flex items-center justify-center shrink-0">
                  <MapPin size={12} strokeWidth={1.5} style={{ color: 'var(--color-ink-3)' }} />
                </div>
                <span
                  className="font-sans"
                  style={{ fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-ink-3)' }}
                >
                  Service Area
                </span>
              </div>
              <span
                className="font-sans font-medium"
                style={{ fontSize: '0.95rem', color: 'var(--color-ink)', paddingLeft: '2.5rem' }}
              >
                Guwahati, Assam
              </span>
              <div className="flex flex-wrap gap-1.5 pl-10">
                {COVERAGE.map((area) => (
                  <span
                    key={area}
                    className="font-sans"
                    style={{
                      fontSize: '0.62rem',
                      letterSpacing: '0.02em',
                      padding: '0.2rem 0.55rem',
                      border: '1px solid var(--color-rule)',
                      color: 'var(--color-ink-3)',
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Response promise */}
          <div className="border-t border-[var(--color-rule)] pt-6 mt-4">
            <p
              className="font-sans"
              style={{ fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--color-ink-3)', opacity: 0.45 }}
            >
              We respond to all enquiries within 2 hours during business hours.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
