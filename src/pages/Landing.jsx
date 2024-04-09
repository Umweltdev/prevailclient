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
import DrawerAppBarWhite from "../components/Navbar/AppbarOne";
import AppBarOne from "../components/Navbar/AppbarOne";
// import DrawerAppBarWhite from "../components/Navbar/DrawerAppBarWhite";
// import Follower from "../components/MouseAnimation";

const Landing = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <DrawerAppBarWhite />
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
