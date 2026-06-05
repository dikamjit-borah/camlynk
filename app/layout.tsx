import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
})

const BASE_URL = 'https://camlynk.in'

export const metadata: Metadata = {
  title: 'Camlynk — CCTV & Home Security Installation in Guwahati',
  description: 'Professional CCTV, burglar alarm, smart home and commercial security installation across Guwahati, Assam. Same-day installation, 5-year warranty. Book a free site survey today.',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: 'Camlynk — CCTV & Security Installation in Guwahati',
    description: 'Professional CCTV, burglar alarm, smart home and commercial security installation across Guwahati. Same-day installation, 5-year warranty. Book a free site survey.',
    url: BASE_URL,
    siteName: 'Camlynk',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Camlynk — CCTV & Security Installation in Guwahati',
    description: 'Professional CCTV, burglar alarm, smart home and commercial security installation across Guwahati. Same-day installation, 5-year warranty.',
  },
  alternates: {
    canonical: BASE_URL,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Camlynk',
  description: 'Professional CCTV, smart home security and alarm system installation across Guwahati, Assam.',
  url: BASE_URL,
  telephone: '+91-98765-43210',
  priceRange: '$$',
  image: `${BASE_URL}/og-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Guwahati',
    addressRegion: 'Assam',
    postalCode: '781001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '26.1445',
    longitude: '91.7362',
  },
  areaServed: [
    { '@type': 'City', name: 'Guwahati' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '50',
    bestRating: '5',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Security & Smart Home Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CCTV Installation Guwahati',
          description: 'Professional HD and 4K CCTV camera installation for homes and businesses in Guwahati with remote viewing and cloud backup.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Burglar Alarm Installation Guwahati',
          description: 'Motion-triggered burglar alarm systems with instant mobile alerts and loud siren for homes and offices in Guwahati.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Smart Home Automation Guwahati',
          description: 'Complete smart home integration including automation, smart lighting, remote monitoring and structured networking.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Security Systems Guwahati',
          description: 'Commercial CCTV, biometric attendance and access control systems for offices, shops and warehouses in Guwahati.',
        },
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
