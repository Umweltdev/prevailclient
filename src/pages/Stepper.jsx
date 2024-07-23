import React, { useContext } from "react";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import FooterNew from "../components/Footer/FooterNew";
import StepperForm from "../components/Form/Stepper";
import { AuthContext } from "../context/AuthContext";
import SmoothScrollUp from "../components/utils/SmoothScrollUp";

const Stepper = (props) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* <DrawerAppBarWhite {...props} isLoggedIn={isLoggedIn} /> */}
      <StepperForm />
      <SmoothScrollUp />
      <FooterNew />
    </div>
  );
};

export default Stepper;
