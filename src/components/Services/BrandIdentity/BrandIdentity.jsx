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

const BrandIdentity = () => {
  return (
    <>
      <DrawerAppBarWhite />
      <HeroSection />
      {/* <br />
      <br />
      <br />
      <br /> */}
      <ServiceDetails2 />
      <ServiceDetails3 />
      <Packages />
      <FooterNew />
    </>
  );
};

export default BrandIdentity;
