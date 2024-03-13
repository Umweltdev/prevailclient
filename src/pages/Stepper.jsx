import React from "react";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import FooterNew from "../components/Footer/FooterNew";
import StepperForm from "../components/Form/Stepper";

const Stepper = () => {
  return (
    <>
      <DrawerAppBarWhite />
      <StepperForm />
      <FooterNew />
    </>
  );
};

export default Stepper;
