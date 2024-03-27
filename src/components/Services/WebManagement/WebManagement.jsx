import React from "react";
import HeroSection from "./HeroSection";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import PainPoint from "./PainPoint";
import Offering from "./Offering";
import FooterNew from "../../Footer/FooterNew"
import AppBarOne from "../../Navbar/AppbarOne";


const WebManagement = () => {
  return (
    <>
      <AppBarOne />
      <br /><br /><br /><br />
      <HeroSection />
      <br /><br /><br /><br />
      <PainPoint />
      <br /><br /><br /><br />
      <Offering />
      <FooterNew />
    </>
  );
};

export default WebManagement;
