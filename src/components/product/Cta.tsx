"use client"

import StandardCta from "../ui/StandardCta";

const Cta = () => {
  return (
    <StandardCta
      imageSrc="/images/home/demo-home-car.png"
      imageAlt="demo-car"
      showOverlay={true}
      overlayWidth="31%"
      overlayHeight="45px"
      overlayMobileHeight="54px"
    />
  );
};

export default Cta
