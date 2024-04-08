import React from "react";
import HeroSection from "./HeroSection";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import PainPoint from "./PainPoints";
import Advantages from "./Advantages";
import Benefits from "./Benefits";
import Footer from "../../Footer/Footer";
import FooterNew from "../../Footer/FooterNew";

const WebsiteDevelopment = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <DrawerAppBarWhite />
      <HeroSection />
      <PainPoint />
      {/* <Advantages /> */}
      <Benefits />
      <FooterNew />
    </div>
  );
};

export default WebsiteDevelopment;
