import React from "react";
import HeroSection from "./HeroSection";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import PainPoint from "./PainPoints";
import Advantages from "./Advantages";
import Benefits from "./Benefits";
import Footer from "../../Footer/Footer";

const WebsiteDevelopment = () => {
  return (
    <div>
      <DrawerAppBarWhite />
      <HeroSection />
      <PainPoint />
      <Advantages />
      <Benefits />
      <Footer/>
    </div>
  );
};

export default WebsiteDevelopment;
