import Footer from "../components/Footer/Footer.jsx";
import SectionOne from "../components/About/SectionOne";
import SectionThree from "../components/About/SectionThree";
import SectionTwo from "../components/About/SectionTwo";
import Navbar from "../components/Navbar/Navbar.jsx";
import SectionFour from "../components/About/SectionFour.jsx";
import SectionConsultation from "../components/About/SectionConsultation.jsx";
import DrawerAppBar from "../components/Navbar/Appbar.jsx";
import FooterNew from "../components/Footer/FooterNew.jsx";
import AppBarOne from "../components/Navbar/Appbar.jsx";
//import { Grid, Box } from "@mui/material";

const About = () => {
  return (
    <div>
      <AppBarOne/>
      {/* <Navbar /> */}
      {/* <SectionOne /> */}
      <br /> <br /> <br /> <br />
      <SectionTwo />
      {/* <SectionFour /> */}
      <br /> <hr />
      <SectionThree />
      <FooterNew />
    </div>
  );
};

export default About;
