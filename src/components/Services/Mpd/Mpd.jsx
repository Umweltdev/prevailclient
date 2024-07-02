import React from "react";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import PainPoint from "./PainPoints";
import Advantages from "./Advantages";
import Budget from "./Budget";
import Footer from "../../Footer/Footer";
import FooterNew from "../../Footer/FooterNew";
import AppBarOne from "../../Navbar/Appbar";
import { Helmet } from "react-helmet";
import Solution from "./Solution";
import HeroComponent from "../ReusedComponenets/HeroComponent";
import MainPage from "./MainPage";
import PrevailMPDApi from "./PrevailMPDApi";
import KeyBenefits from "./KeyBenefits";
import ImageTextComponent from "../ReusedComponenets/ImageTextComponent";
import imago from "../assets/Why-Choose-Prevail’s-MPD.webp";
import TakeAction from "./TakeAction";
import Carousel from "./Carousel";
import AppBarNav from "../../Navbar/Appbar";

const Mpd = () => {
  return (
    <>
    <Helmet>
        <title>Automate and Optimise Your Pricing Strategy</title>
        <meta
          name="description"
          content="Prevail's MPD API enhances market visibility for SMEs through smart pricing"
        />
      </Helmet>
    <div style={{ width: "100%", overflow: "hidden" }}>
      <AppBarNav color="#000" />
      <HeroComponent title={"Marketing Price Displacement (MPD) API’s"} />
      <MainPage />
      <PrevailMPDApi />
      <KeyBenefits />
      <ImageTextComponent
        img={imago}
        header={"Why Choose Prevail’s MPD API? "}
        text={`Embrace the future of digital marketing by incorporating Prevail’s MPD API into your business strategy. This tool simplifies complex pricing strategies and ensures that your marketing efforts are as effective and efficient as possible. Choosing Prevail opens your business to increased market share and proportional income growth.`}
      />
      <TakeAction />
      {/* <Solution/> */}
      <FooterNew />
    </div>
    </>
  );
};

export default Mpd;
