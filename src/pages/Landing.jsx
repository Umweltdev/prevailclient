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
import CoreValues from "../components/Landing/CoreValues";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import AppBarOne from "../components/Navbar/AppbarOne";
import { AuthContext } from "../context/AuthContext";
import AppBarNav from "../components/Navbar/Appbar";
import Testimonials from "../components/Landing/TestimonialCard";
// import DrawerAppBarWhite from "../components/Navbar/DrawerAppBarWhite";
// import Follower from "../components/MouseAnimation";

const Landing = (props) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <AppBarNav color="#000" />
        <Hero />

        <SectionTwo />
        <CoreValues />
        <OurCore />
        <SectionSeven />
        {/* <SectionFour /> */}
        <Testimonials />
        <SectionThree />
        <FooterNew />
      </div>
    </>
  );
};

export default Landing;
