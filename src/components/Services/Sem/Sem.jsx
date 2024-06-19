import React from "react";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import PainPoint from "./PainPoint";
import Solutions from "./Solutions";
import Footer from "../../Footer/Footer";
import FooterNew from "../../Footer/FooterNew";
import AppBarOne from "../../Navbar/AppbarOne";
import Carousel from "./Carousel";
import HeroComponent from "../ReusedComponenets/HeroComponent";
import MainPage from "./MainPage";
import OfferSection from "./OfferSection";
import Packages from "./Packages";

const Sem = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <HeroComponent title={"Search Engine Marketing"} />
      <MainPage />
      <OfferSection/>  
      <Packages/>    
      <FooterNew />
    </div>
  );
};

export default Sem;
