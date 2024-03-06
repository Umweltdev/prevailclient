import React from "react";

import DrawerAppBarWhite from "../../Navbar/Appbar";
import HeroSection from "./HeroSection";
import PainPoint from "./PainPoint";
import Solutions from "./Solutions";
import Footer from "../../Footer/Footer";

const Sem = () => {
  return (
    <>
      <DrawerAppBarWhite />
      <HeroSection />
      <PainPoint />
      <Solutions/>
      <Footer/>
    </>
  );
};

export default Sem;
