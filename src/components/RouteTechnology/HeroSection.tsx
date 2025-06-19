import React from 'react'
import ReusableHero from '@/components/shared/ReusableHero'
import './HeroSection.css'

function HeroSection() {
  const title = (
    <>
      HPC Performance For Groundbreaking Science
    </>
  )

  const subtitle = "Tracer uses cutting-edge technology to bring observability to complex scientific pipelines. By extracting real-time system-level data, Tracer turns what was initially a black box into clear, actionable insights."

  return (
    <div className="technology-hero-wrapper">
      <ReusableHero
        title={title}
        subtitle={subtitle}
        imageSrc="/technology/T-Asset-Satellite.webp"
        imageAlt="Tracer Technology"
        imageStyle="monitoring"
      />
    </div>
  )
}

export default HeroSection
