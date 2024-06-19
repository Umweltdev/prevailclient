import React from "react";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import HeroSection from "./HeroSection";
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

const BrandIdentity = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* <DrawerAppBarWhite /> */}
      <HeroSection />
      <ElevateYourPresence />
      <Addressing />
      <ServiceDetails2 />
      <ServiceDetails3 />
      <Packages />
      <FooterNew />
    </div>
  );
};

export default BrandIdentity;
