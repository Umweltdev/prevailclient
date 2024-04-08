import Footer from "../components/Footer/Footer.jsx";
import SectionOne from "../components/About/SectionOne";
import SectionThree from "../components/About/SectionThree";
import SectionTwo from "../components/About/SectionTwo";
import Navbar from "../components/Navbar/Navbar.jsx";
import SectionFour from "../components/About/SectionFour.jsx";
import Solutions from "../components/About/Solutions.jsx";
import DrawerAppBar from "../components/Navbar/Appbar.jsx";
import FooterNew from "../components/Footer/FooterNew.jsx";
import AppBarOne from "../components/Navbar/Appbar.jsx";
import SectionFive from "../components/About/SectionFive.jsx";
//import { Grid, Box } from "@mui/material";

const About = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <AppBarOne/>
      {/* <Navbar /> */}
      {/* <SectionOne /> */}
      <SectionTwo />
       <SectionFour />
      <hr />
       <Solutions />
       <SectionFive />
      <hr />
      <SectionThree />
      <FooterNew />
    </div>
  );
};

export default About;
