import Footer from "../components/Footer/Footer";
import Hero from "../components/Landing/Hero";
import SectionFive from "../components/Landing/SectionFive";
import SectionFour from "../components/Landing/SectionFour";
import SectionSeven from "../components/Landing/SectionSeven";
import SectionSix from "../components/Landing/SectionSix";
import SectionThree from "../components/Landing/SectionThree";
import SectionTwo from "../components/Landing/SectionTwo";
import DrawerAppBar from "../components/Navbar/Appbar";
import Navbar from "../components/Navbar/Navbar";
// import Follower from "../components/MouseAnimation";

const Landing = () => {
  return (
    <div>
      <DrawerAppBar />
      {/* <Navbar /> */}
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <SectionFour />
      <SectionSix />
      <SectionSeven/>
      <Footer />
    </div>
  );
};

export default Landing;
