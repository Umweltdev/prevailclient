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
//import Reduce from "../components/Services/Reduce";

const Services = (props) => {
   const { isLoggedIn } = useContext(AuthContext);
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* <DrawerAppBarWhite {...props} isLoggedIn={isLoggedIn} /> */}
      <Carousel />
      <SectionTwo />
      <Platform />
      <PlatformTwo />
      <br /> <br /> <br />
      <AutomationSection />
      <br /> <hr /> <br />
      <FooterNew />
    </div>
  );
};

export default Services;

// integrative-frog-psyix4zu9vsuaxxqwsapar12.herokudns.com
