import React from "react";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import PainPoint from "./PainPoints";
import Advantages from "./Advantages";
import Budget from "./Budget";
import Footer from "../../Footer/Footer";
import FooterNew from "../../Footer/FooterNew";
import AppBarOne from "../../Navbar/Appbar";
import Solution from "./Solution";
import HeroComponent from "../ReusedComponenets/HeroComponent";
import MainPage from "./MainPage";
import PrevailMPDApi from "./PrevailMPDApi";
import KeyBenefits from "./KeyBenefits";
import ImageTextComponent from "../ReusedComponenets/ImageTextComponent";
import imago from "../assets/image 142.png";
import TakeAction from "./TakeAction";

const Mpd = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <HeroComponent title={"Marketing Price Displacement (MPD) API’s"} />
      <MainPage />
      <PrevailMPDApi />
      <KeyBenefits />
      <ImageTextComponent
        img={imago}
        header={"Why Choose Prevail’s MPD API? "}
        text={`Embrace the future of digital marketing by incorporating Prevail’s MPD API into your business strategy. This tool not only simplifies complex pricing strategies but also ensures that your marketing efforts are as effective and efficient as possible. By choosing Prevail, you open your business to increased market share and proportional income growth. `}
      />
      <TakeAction />
      <FooterNew />
    </div>
  );
};

export default Mpd;
