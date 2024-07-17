import React from "react";
import { Helmet } from "react-helmet";
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
import AppBarNav from "../../Navbar/Appbar";
import SmoothScrollUp from "../../utils/SmoothScrollUp";

const Sem = () => {
  return (
    <>
      <Helmet>
        <title>Unlock Precise Targeting and Digital Growth</title>
        <meta
          name="description"
          content="Previal's SEM Helps Boost Visibility and Target the Right Audience"
        />
      </Helmet>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <AppBarNav color="#000" />
        <HeroComponent title={"Search Engine Marketing"} />
        <MainPage />
        <OfferSection />
        <Packages />
        {/* <Carousel /> */}
        <SmoothScrollUp />
        <FooterNew />
      </div>
    </>
  );
};

export default Sem;
