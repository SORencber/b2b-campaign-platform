'use client'

import { HeroSection } from '@/components/sections/hero'
import { FeaturesSection } from '@/components/sections/features'
import { PricingSection } from '@/components/sections/pricing'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { CTASection } from '@/components/sections/cta'

export default function HomePage() {

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
