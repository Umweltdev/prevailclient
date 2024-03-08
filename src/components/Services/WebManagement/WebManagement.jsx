import React from "react";
import HeroSection from "./HeroSection";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import PainPoint from "./PainPoint";
import Offering from "./Offering";
import FooterNew from "../../Footer/FooterNew"


const WebManagement = () => {
  return (
    <>
      <DrawerAppBarWhite />
      <HeroSection />
      <PainPoint />
      <Offering />
      <FooterNew />
    </>
  );
};

export default WebManagement;
