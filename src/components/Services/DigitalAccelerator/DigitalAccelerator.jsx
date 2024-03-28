import React from "react";
import HeroSection from "./HeroSection";

import PainPoint from "./PainPoint";
import Advantages from "./Advantages";
import Usp from "./Usp";
import Footer from "../../Footer/Footer"
import FooterNew from "../../Footer/FooterNew";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import AppBarOne from "../../Navbar/AppbarOne";
import YourTools from "./Solution";

const DigitalAccelerator = () => {
  return (
    <div>
      <DrawerAppBarWhite />
      <HeroSection />
      <PainPoint />
      <hr />
      <YourTools />
      {/* <Advantages /> */}
      <Usp />
      <FooterNew />
    </div>
  );
};

export default DigitalAccelerator;
