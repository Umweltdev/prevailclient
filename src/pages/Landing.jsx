import { useContext } from "react";
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
import YourTools from "../components/Landing/YourTools";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import AppBarOne from "../components/Navbar/AppbarOne";
import { AuthContext } from "../context/AuthContext";
// import DrawerAppBarWhite from "../components/Navbar/DrawerAppBarWhite";
// import Follower from "../components/MouseAnimation";

const Landing = (props) => {
   const { isLoggedIn } = useContext(AuthContext);
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* <DrawerAppBarWhite {...props} isLoggedIn={isLoggedIn} /> */}
      <Hero />
      <SectionTwo />
      {/* <SectionThree /> */}
      <YourTools />
      <OurCore />

      <SectionSeven />
      <SectionFour />
      <FooterNew />
    </div>
  );
};

export default Landing;
