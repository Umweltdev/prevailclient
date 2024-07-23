import React from "react";
import { Helmet } from "react-helmet";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import FooterNew from "../../Footer/FooterNew";
import Hero from "./Hero";
import Trigger from "./Trigger";
//import Presence from './Presence';
//import Evaluation from './Evaluation';
//import Purchase from './Purchase';
//import SpecialOffer from './SpecialOffer';
import Last from "./Last";
import SmoothScrollUp from "../../utils/SmoothScrollUp";

const CustomerJourney = () => {
  return (
    <>
      <Helmet>
        <title>Transform Your Customer Journey with Prevail</title>
        <meta
          name="description"
          content="Map and Optimise Every Stage of Your Customer Journey for Growth"
        />
      </Helmet>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <DrawerAppBarWhite />

        <Hero />
        <Trigger />
        <Last />
        <SmoothScrollUp />
        <FooterNew />
      </div>
    </>
  );
};

export default CustomerJourney;
