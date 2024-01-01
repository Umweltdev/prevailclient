import SectionOne from "../components/Portfolio/SectionOne";
import SectionTwo from "../components/Portfolio/SectionTwo";
import SectionThree from "../components/Portfolio/SectionThree";
import SectionFour from "../components/Portfolio/SectionFour";
import SectionFive from "../components/Portfolio/SectionFive";
import Footer from "../components/Footer/Footer"
// import SectionSix from "../components/Portfolio/SectionSix";

const Portfolio = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      {/* <SectionSix/> */}
      <SectionFour />
      <SectionFive />
      <Footer/>
    </div>
  );
};

export default Portfolio;
