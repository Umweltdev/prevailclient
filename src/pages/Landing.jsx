import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer/Footer";
import FooterNew from "../components/Footer/FooterNew";
import CarouselOne from "../components/Landing/CarouselOne";
import Hero from "../components/Landing/Hero";
import OurCore from "../components/Landing/OurCore";
import SectionFive from "../components/Landing/SectionFive";
import SectionFour from "../components/Landing/SectionFour";
import SectionSeven from "../components/Landing/SectionSeven";
import SectionThree from "../components/Landing/SectionThree";
import SectionTwo from "../components/Landing/SectionTwo";
import CoreValues from "../components/Landing/CoreValues";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import AppBarOne from "../components/Navbar/AppbarOne";
import { AuthContext } from "../context/AuthContext";
import AppBarNav from "../components/Navbar/Appbar";
import Testimonials from "../components/Landing/Testimonials";
import JoinCustomers from "../components/About/JoinOurCustomer";

const Landing = (props) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <Helmet>
        <title>Prevail: Your Partner in Success</title>
        <meta
          name="description"
          content="Prevail is a Strategic Partner for Businesses in the Digital Age."
        />
      </Helmet>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <AppBarNav color="#000" />
        <Hero />
        <SectionTwo />
        <CoreValues />
        <OurCore />
        <SectionSeven />
        <br />
        <br />
        <SectionFour />
        <br />
        <br />
        {/* <Testimonials /> */}
        <JoinCustomers />
        <FooterNew />
      </div>
    </>
  );
};

export default Landing;
