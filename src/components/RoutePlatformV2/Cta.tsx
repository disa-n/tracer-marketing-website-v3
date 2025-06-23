"use client"

import StandardCta from "../shared/StandardCta";

const Cta = () => {
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

export default Cta
