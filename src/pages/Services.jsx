import SectionFour from "../components/Services/SectionFour";
import SectionOne from "../components/Services/SectionOne";
import SectionThree from "../components/Services/SectionThree";
import SectionTwo from "../components/Services/SectionTwo";
import Footer from "../components/Footer/Footer";
import SectionFive from "../components/Services/SectionFive";
import SectionSix from "../components/Services/SectionSix";
import Navbar from "../components/Navbar/Navbar";
import FooterNew from "../components/Footer/FooterNew";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import Carousel from "../components/Services/Carousel";
import Platform from "../components/Services/Platform";
import PlatformTwo from "../components/Services/PlatformTwo";
import AutomationSection from "../components/Services/AutomationSection";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import MainPage from "../components/Services/MainPage";
import AppBarNav from "../components/Navbar/Appbar";
import { Helmet } from "react-helmet";
import SmoothScrollUp from "../components/utils/SmoothScrollUp";
//import Reduce from "../components/Services/Reduce";

const Services = (props) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <Helmet>
        <title>Unlock Your Digital Potential with Prevail</title>
        <meta
          name="description"
          content="Tailored Strategies for Sustainable Growth in the Digital Landscape"
        />
      </Helmet>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <AppBarNav color="#000" />
        <MainPage />
        <FooterNew />
        <SmoothScrollUp />
      </div>
    </>
  );
};

export default Services;

// integrative-frog-psyix4zu9vsuaxxqwsapar12.herokudns.com
