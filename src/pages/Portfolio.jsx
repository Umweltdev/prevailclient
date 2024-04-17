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
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import DrawerAppBarWhite from "../components/Navbar/Appbar";


const Portfolio = (props) => {
   const { isLoggedIn } = useContext(AuthContext);
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* <DrawerAppBarWhite {...props} isLoggedIn={isLoggedIn} /> */}
      <SectionOne />
      <CaseStudies />
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
