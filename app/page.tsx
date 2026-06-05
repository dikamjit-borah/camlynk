import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ServicesOverview from '@/components/ServicesOverview'
import CoreSecurity from '@/components/CoreSecurity'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <CoreSecurity />
    </main>
  )
}
