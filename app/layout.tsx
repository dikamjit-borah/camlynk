import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Unbounded } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
})

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-unbounded',
})

export const metadata: Metadata = {
  title: 'Camlynk — CCTV & Home Security Installation in Guwahati',
  description: 'Professional CCTV, smart home security and alarm system installation across Guwahati, Assam. Book a free site survey today.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${unbounded.variable}`}>
      <body>{children}</body>
    </html>
  )
}
