import React from "react";
import HeroSection from "./HeroSection";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import PainPoint from "./PainPoints";
import Advantages from "./Advantages";
import Benefits from "./Benefits";

const WebsiteDevelopment = () => {
  return (
    <div>
      <DrawerAppBarWhite />
      <HeroSection />
      <PainPoint />
      <Advantages />
      <Benefits />
    </div>
  );
};

export default WebsiteDevelopment;
