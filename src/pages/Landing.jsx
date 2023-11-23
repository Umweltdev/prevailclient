import Footer from "../components/Landing/Footer";
import Hero from "../components/Landing/Hero";
import SectionFive from "../components/Landing/SectionFive";
import SectionFour from "../components/Landing/SectionFour";
import SectionSix from "../components/Landing/SectionSix";
import SectionThree from "../components/Landing/SectionThree";
import SectionTwo from "../components/Landing/SectionTwo";
// import Follower from "../components/MouseAnimation";

const Landing = () => {
  return (
    <div>
      <Hero />
      <SectionTwo />
      <SectionFive />
      <SectionThree />
      <SectionFour />
      <SectionSix />
      <Footer />
      {/* <Follower /> */}
    </div>
  );
};

export default Landing;
