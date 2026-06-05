import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ServicesOverview from '@/components/ServicesOverview'
import CoreSecurity from '@/components/CoreSecurity'
import SmartHome from '@/components/SmartHome'
import WhyUs from '@/components/WhyUs'
import HowItWorks from '@/components/HowItWorks'
import Commercial from '@/components/Commercial'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <CoreSecurity />
      <SmartHome />
      <WhyUs />
      <HowItWorks />
      <Commercial />
      <Testimonials />
    </main>
  )
}
