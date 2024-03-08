import React from "react";
import HeroSection from "./HeroSection";

import PainPoint from "./PainPoint";
import Advantages from "./Advantages";
import Usp from "./Usp";
import Footer from "../../Footer/Footer"
import FooterNew from "../../Footer/FooterNew";
import DrawerAppBarWhite from "../../Navbar/Appbar";

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
