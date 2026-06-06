import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServicesOverview from '@/components/ServicesOverview'
import CoreSecurity from '@/components/CoreSecurity'
import SmartHome from '@/components/SmartHome'
import WhyUs from '@/components/WhyUs'
import FAQ from '@/components/FAQ'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesOverview />
      <CoreSecurity />
      <SmartHome />
      <WhyUs />
      <FAQ />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
