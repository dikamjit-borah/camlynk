'use client'

import { useState } from 'react'
import SectionWrapper from '@/components/SectionWrapper'
import Eyebrow from '@/components/Eyebrow'
import { PHONE, WHATSAPP_URL } from '@/lib/constants'
import { Phone, MapPin } from 'lucide-react'

const SERVICE_OPTIONS = ['CCTV Installation', 'Smart Home Integration', 'Burglar Alarms', 'Video Doorbell', 'Commercial Security', 'Other']

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
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

  const inputClass = 'w-full border border-navy/20 rounded-lg px-4 py-3 text-navy text-sm bg-white focus:outline-none focus:border-orange transition-colors'

  return (
    <SectionWrapper id="contact" className="bg-white border-t border-navy/10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Get in Touch</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black text-navy mb-12">Book Your Free Survey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input className={inputClass} placeholder="Your Name" value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
            <input className={inputClass} placeholder="Phone Number" type="tel" value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required />
            <select className={inputClass} value={form.service}
              onChange={e => setForm(f => ({ ...f, service: e.target.value }))}>
              <option value="">Select a Service</option>
              {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <textarea className={`${inputClass} resize-none`} rows={4}
              placeholder="Tell us about your requirements (optional)"
              value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
            {status === 'sent' ? (
              <p className="text-orange font-bold text-sm">Thank you &mdash; we&apos;ll be in touch shortly!</p>
            ) : (
              <button type="submit" disabled={status === 'sending'}
                className="w-full bg-orange text-white py-3 rounded-lg font-bold text-sm hover:bg-orange/90 transition-colors disabled:opacity-60">
                {status === 'sending' ? 'Sending...' : 'Submit Request →'}
              </button>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-sm">Something went wrong. Please WhatsApp or call us directly.</p>
            )}
          </form>
          <div className="flex flex-col gap-6 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-xl p-5 border border-navy/10 hover:border-gold transition-colors">
              <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: '#25D366' }}>
                <WhatsAppIcon />
              </div>
              <div>
                <p className="text-navy font-extrabold text-sm">Chat on WhatsApp</p>
                <p className="text-navy/50 text-xs">Quick replies, 7 days a week</p>
              </div>
            </a>
            <a href={`tel:${PHONE}`}
              className="flex items-center gap-4 bg-white rounded-xl p-5 border border-navy/10 hover:border-gold transition-colors">
              <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-orange" />
              </div>
              <div>
                <p className="text-navy font-extrabold text-sm">{PHONE}</p>
                <p className="text-navy/50 text-xs">Call us directly</p>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-white rounded-xl p-5 border border-navy/10">
              <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-orange" />
              </div>
              <div>
                <p className="text-navy font-extrabold text-sm">Serving All of Guwahati</p>
                <p className="text-navy/50 text-xs">Paltan Bazaar &middot; Fancy Bazaar &middot; Zoo Road &middot; Dispur and more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
