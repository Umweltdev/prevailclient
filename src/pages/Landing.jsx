import { Helmet } from "react-helmet";
import FooterNew from "../components/Footer/FooterNew";
import Hero from "../components/Landing/Hero";
import OurCore from "../components/Landing/OurCore";
import SectionFour from "../components/Landing/SectionFour";
import SectionSeven from "../components/Landing/SectionSeven";
import SectionTwo from "../components/Landing/SectionTwo";
import CoreValues from "../components/Landing/CoreValues";
import AppBarNav from "../components/Navbar/Appbar";
import JoinCustomers from "../components/About/JoinOurCustomer";
import SmoothScrollUp from "../components/utils/SmoothScrollUp";
import ExternalLinks from "../components/Landing/ExternalLinks";
import { useEffect } from "react";

const Landing = () => {
  useEffect(()=>{
    import ("./pages.css");
  }, [])
  return (
    <div style={{ overflowX: "hidden" }}>
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
        <ExternalLinks />
        <SectionTwo />
        <CoreValues />
        <OurCore />
        <SectionSeven />
        <SectionFour />
        <JoinCustomers />
        <SmoothScrollUp />
        <FooterNew />
      </div>
    </div>
  );
};

export default Landing;
