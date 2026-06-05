import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Syne } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
})

export const metadata: Metadata = {
  title: 'Camlynk — CCTV & Home Security Installation in Guwahati',
  description: 'Professional CCTV, smart home security and alarm system installation across Guwahati, Assam. Book a free site survey today.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  )
}
