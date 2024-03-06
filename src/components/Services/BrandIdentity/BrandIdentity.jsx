import React from "react";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import HeroSection from "./HeroSection";
import { serviceCard } from "../assets/ServicesData";
import { useParams } from "react-router-dom";
import ServiceDetails2 from "./ServiceDetails2";
import ServiceDetails3 from "./ServiceDetails3";
import PackagesLayout from "./PackagesLayout";
import Packages from "./Packages";
import Footer from "../../Footer/Footer"

const BrandIdentity = () => {
  return (
    <>
      <DrawerAppBarWhite />
      <HeroSection />
      <ServiceDetails2 />
      <ServiceDetails3 />
      <Packages />
      <Footer/>
    </>
  );
};

export default BrandIdentity;
