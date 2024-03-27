import React from "react";

import DrawerAppBarWhite from "../../Navbar/Appbar";
import HeroSection from "./HeroSection";
import PainPoint from "./PainPoint";
import Solutions from "./Solutions";
import Footer from "../../Footer/Footer";
import FooterNew from "../../Footer/FooterNew";
import AppBarOne from "../../Navbar/AppbarOne";
import Carousel from "./Carousel";

const Sem = () => {
  return (
    <>
      <AppBarOne />
      <HeroSection />
      <PainPoint />
      {/* <Solutions/> */}
      <hr />
      <Carousel />
      <FooterNew />
    </>
  );
};

export default Sem;
