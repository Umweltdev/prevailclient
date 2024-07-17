import { Helmet } from "react-helmet";
import SectionOne from "../components/About/SectionOne";
import SectionThree from "../components/About/SectionThree";
import SectionTwo from "../components/About/SectionTwo.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import SectionFour from "../components/About/SectionFour.jsx";
import Solutions from "../components/About/Solutions.jsx";
import DrawerAppBar from "../components/Navbar/Appbar.jsx";
import FooterNew from "../components/Footer/FooterNew.jsx";
import AppBarOne from "../components/Navbar/Appbar.jsx";
import SectionFive from "../components/About/SectionFive.jsx";
import DrawerAppBarWhite from "../components/Navbar/Appbar.jsx";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import AboutUs from "../components/About/AboutUs.jsx";
import WhyItMatters from "../components/About/WhyItMatters.jsx";
import Sliders from "../components/About/Slider.jsx";
import FAQ from "../components/About/FAQ.jsx";
import JoinOurCustomer from "../components/About/JoinOurCustomer.jsx";
import AppBarNav from "../components/Navbar/Appbar.jsx";
import SmoothScrollUp from "../components/utils/SmoothScrollUp.jsx";
//import { Grid, Box } from "@mui/material";

const About = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Helmet>
        <title>How Prevail Supports Local Businesses and SMEs</title>
        <meta
          name="description"
          content="Supporting SMEs and Local Businesses with Custom Solutions"
        />
      </Helmet>
      <div
        style={{
          // width: "100%",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #DDD4EF 0%, #F9FAFC 50%, white 100%);",
        }}
      >
        <AppBarNav color="#000" />
        <AboutUs />
        <SectionTwo />
        <SectionFour />
        {/* <hr /> */}
        <WhyItMatters />
        <Sliders />
        <FAQ />
        {/* <SectionFive /> */}
        {/* <hr /> */}
        {/* <SectionThree /> */}
        <JoinOurCustomer />
        <SmoothScrollUp />
        <FooterNew />
      </div>
    </>
  );
};

export default About;
