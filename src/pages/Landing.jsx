import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import FooterNew from "../components/Footer/FooterNew";
import Hero from "../components/Landing/Hero";
import OurCore from "../components/Landing/OurCore";
import SectionFour from "../components/Landing/SectionFour";
import SectionSeven from "../components/Landing/SectionSeven";
import SectionTwo from "../components/Landing/SectionTwo";
import CoreValues from "../components/Landing/CoreValues";
import { AuthContext } from "../context/AuthContext";
import AppBarNav from "../components/Navbar/Appbar";
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
        <JoinCustomers />
        <FooterNew />
      </div>
    </>
  );
};

export default Landing;
