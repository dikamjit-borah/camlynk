import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Camlynk — CCTV & Home Security Installation in Guwahati',
  description: 'Professional CCTV, smart home security and alarm system installation across Guwahati, Assam. Book a free site survey today.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
