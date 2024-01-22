import Footer from "../components/Footer/Footer";
import Hero from "../components/Landing/Hero";
import SectionFive from "../components/Landing/SectionFive";
import SectionFour from "../components/Landing/SectionFour";
import SectionSix from "../components/Landing/SectionSix";
import SectionThree from "../components/Landing/SectionThree";
import SectionTwo from "../components/Landing/SectionTwo";
import Navbar from "../components/Navbar/Navbar";
// import Follower from "../components/MouseAnimation";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <SectionFour />
      <SectionSix />
      <Footer />
    </div>
  );
};

export default Landing;
