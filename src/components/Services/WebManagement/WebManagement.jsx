import React from "react";
import HeroSection from "./HeroSection";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import PainPoint from "./PainPoint";
import Offering from "./Offering";
import FooterNew from "../../Footer/FooterNew";
import AppBarOne from "../../Navbar/AppbarOne";
import Packages from "./Packages";

const WebManagement = () => {
  return (
    <>
      <DrawerAppBarWhite />
      <HeroSection />
      <PainPoint />
      <Offering />
      <Packages />
      <FooterNew />
    </>
  );
};

export default WebManagement;
