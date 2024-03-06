import React from "react";
import HeroSection from "./HeroSection";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import PainPoint from "./PainPoint";
import Offering from "./Offering";

const WebManagement = () => {
  return (
    <>
      <DrawerAppBarWhite />
      <HeroSection />
      <PainPoint />
      <Offering/>
    </>
  );
};

export default WebManagement;
