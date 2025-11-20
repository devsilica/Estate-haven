import Header from '@/components/estate-header'
import Hero from '@/components/estate-hero'
import FeaturedProperties from '@/components/estate-featured'
import PropertyTypes from '@/components/estate-types'
import Stats from '@/components/estate-stats'
import Testimonials from '@/components/estate-testimonials'
import Agents from '@/components/estate-agents'
import CTA from '@/components/estate-cta'
import Footer from '@/components/estate-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedProperties />
      <PropertyTypes />
      <Stats />
      <Testimonials />
      <Agents />
      <CTA />
      <Footer />
    </main>
  )
}
