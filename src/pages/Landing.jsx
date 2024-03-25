import Footer from "../components/Footer/Footer";
import FooterNew from "../components/Footer/FooterNew";
import CarouselOne from "../components/Landing/CarouselOne";
import Hero from "../components/Landing/Hero";
import SectionFive from "../components/Landing/SectionFive";
import SectionFour from "../components/Landing/SectionFour";
import SectionSeven from "../components/Landing/SectionSeven";
import SectionThree from "../components/Landing/SectionThree";
import SectionTwo from "../components/Landing/SectionTwo";
import YourTools from "../components/Landing/YourTools";
import AppBarOne from "../components/Navbar/AppbarOne"
// import Follower from "../components/MouseAnimation";

const Landing = () => {
  return (
    <div>
      <AppBarOne />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <YourTools />
      <SectionSeven />
      <SectionFour />
      <FooterNew />
    </div>
  );
};

export default Landing;
