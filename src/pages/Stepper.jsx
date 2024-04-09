import React from "react";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import FooterNew from "../components/Footer/FooterNew";
import StepperForm from "../components/Form/Stepper";

const Stepper = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <DrawerAppBarWhite />
      <StepperForm />
      <FooterNew />
    </div>
  );
};

export default Stepper;
