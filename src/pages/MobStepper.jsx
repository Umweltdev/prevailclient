import React from "react";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import FooterNew from "../components/Footer/FooterNew";
import MobileStepper from "../components/Form/MobileStepper";


const MobStepper = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <DrawerAppBarWhite />
      <MobileStepper />
      <FooterNew />
    </div>
  );
};

export default MobStepper;
