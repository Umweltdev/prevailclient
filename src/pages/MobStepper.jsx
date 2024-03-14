import React from "react";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import FooterNew from "../components/Footer/FooterNew";
import MobileStepper from "../components/Form/MobileStepper";


const MobStepper = () => {
  return (
    <>
      <DrawerAppBarWhite />
      <MobileStepper/>
      <FooterNew/>
    </>
  );
};

export default MobStepper;
