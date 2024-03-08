import React from "react";
import HeroSection from "./HeroSection";
import DrawerAppBarWhite from "../../Navbar/AppbarWhite";
import PainPoint from "./PainPoint";
import Advantages from "./Advantages";
import Usp from "./Usp";
import Footer from "../../Footer/Footer"
import FooterNew from "../../Footer/FooterNew";

const DigitalAccelerator = () => {
  return (
    <div>
      <DrawerAppBarWhite />
      <HeroSection />
      <PainPoint />
      <Advantages />
      <Usp />
      <FooterNew />
    </div>
  );
};

export default DigitalAccelerator;
