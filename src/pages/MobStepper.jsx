import React, { useContext } from "react";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import FooterNew from "../components/Footer/FooterNew";
import MobileStepper from "../components/Form/MobileStepper";
import { AuthContext } from "../context/AuthContext";


const MobStepper = (props) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* <DrawerAppBarWhite {...props} isLoggedIn={isLoggedIn} /> */}
      <MobileStepper />
      <FooterNew />
    </div>
  );
};

export default MobStepper;
