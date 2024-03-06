import React from "react";
import HeroSection from "./HeroSection";
import DrawerAppBarWhite from "../../Navbar/AppbarWhite";
import PainPoint from "./PainPoint";
import Advantages from "./Advantages";
import Usp from "./Usp";
import Footer from "../../Footer/Footer"

const DigitalAccelerator = () => {
  return (
    <div>
      <DrawerAppBarWhite />
      <HeroSection />
      <PainPoint />
      <Advantages />
      <Usp />
      <Footer />
    </div>
  );
};

export default DigitalAccelerator;
