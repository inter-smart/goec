import AboutSection from '@/components/features/charging-station/AboutSection'
import ChargingStationHero from '@/components/features/charging-station/ChargingStationHero'
import ReviewsSection from '@/components/features/charging-station/ReviewsSection'
import React from 'react'


export default function page() {
  return (
    <div>
      <ChargingStationHero />
      <AboutSection />
      <ReviewsSection />
    </div>
  )
}
