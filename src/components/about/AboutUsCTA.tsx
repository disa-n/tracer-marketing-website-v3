"use client"

import ReusableCta from '@/components/ui/ctas/ReusableCta'

const AboutUsCTA = () => {
  return (
    <ReusableCta
      imageSrc="/images/home/demo-home-car.png"
      imageAlt="demo-car"
      title="Ready to see Tracer in action?"
      subtitle="get a personalised demo"
      buttonText="Talk to an Expert"
      showOverlay={true}
      overlayWidth="31%"
      overlayHeight="45px"
      overlayMobileHeight="54px"
    />
  )
}

export default AboutUsCTA
