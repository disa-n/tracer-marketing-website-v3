"use client"

import StandardCta from "../shared/StandardCta";

const PersonalizedDemoHome = () => {
  return (
    <StandardCta
      imageSrc="/home/demo-home-car.png"
      imageAlt="demo-car"
      showOverlay={true}
      overlayWidth="31%"
      overlayHeight="45px"
      overlayMobileHeight="54px"
    />
  );
};

export default PersonalizedDemoHome;
