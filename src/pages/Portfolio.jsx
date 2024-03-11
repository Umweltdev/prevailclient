import SectionOne from "../components/Portfolio/SectionOne";
import SectionTwo from "../components/Portfolio/SectionTwo";
import SectionThree from "../components/Portfolio/SectionThree";
import SectionFour from "../components/Portfolio/SectionFour";
import SectionFive from "../components/Portfolio/SectionFive";
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar";
import DrawerAppBar from "../components/Navbar/Appbar";
import FooterNew from "../components/Footer/FooterNew";
import CaseStudies from "../components/Portfolio/CaseStudies";


const Portfolio = () => {
  return (
    <div>
      <DrawerAppBar />
      <SectionOne />
      <CaseStudies/>
      {/* <SectionTwo />
      <SectionThree /> */}
      {/* <SectionSix/> */}
      {/* <SectionFour />
      <SectionFive /> */}
      <FooterNew />
    </div>
  );
};

export default Portfolio;
