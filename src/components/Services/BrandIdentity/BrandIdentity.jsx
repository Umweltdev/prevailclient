import { Helmet } from "react-helmet";
import React from "react";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import { serviceCard } from "../assets/ServicesData";
import { useParams } from "react-router-dom";
import ServiceDetails2 from "./ServiceDetails2";
import ServiceDetails3 from "./ServiceDetails3";
import PackagesLayout from "./PackagesLayout";
import Packages from "./Packages";
import Footer from "../../Footer/Footer";
import FooterNew from "../../Footer/FooterNew";
import AppBarOne from "../../Navbar/AppbarOne";
import ElevateYourPresence from "./ElevateYourPresence";
import Addressing from "./Addressing";
import TailoredApproach from "./TailoredApproach";
import HeroComponent from "../ReusedComponenets/HeroComponent";
import AppBarNav from "../../Navbar/Appbar";
import MainPage from "./MainPage";

const BrandIdentity = () => {
  return (
    <>
    <Helmet>
        <title>Distinctive Brand Identity Solutions by Prevail</title>
        <meta
          name="description"
          content="Build Trust and Recognition with Prevail's Brand Identity"
        />
      </Helmet>
    <div style={{ width: "100%", overflow: "hidden" }}>
      <AppBarNav color="#000" />
      <HeroComponent title={"Brand Identity Package"} />
      <ElevateYourPresence />
      <Addressing />
      <TailoredApproach />
      <Packages />
      <FooterNew />
    </div>
    </>
  );
};

export default BrandIdentity;
