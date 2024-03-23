import Footer from "../components/Footer/Footer.jsx";
import SectionOne from "../components/About/SectionOne";
import SectionThree from "../components/About/SectionThree";
import SectionTwo from "../components/About/SectionTwo";
import Navbar from "../components/Navbar/Navbar.jsx";
import SectionFour from "../components/About/SectionFour.jsx";
import SectionConsultation from "../components/About/SectionConsultation.jsx";
import DrawerAppBar from "../components/Navbar/Appbar.jsx";
import FooterNew from "../components/Footer/FooterNew.jsx";
import AppBarOne from "../components/Navbar/AppbarOne.jsx";
import { Grid, Box } from "@mui/material";

const About = () => {
  return (
    <div>
      <AppBarOne/>
      {/* <Navbar /> */}
      {/* <SectionOne /> */}
      <br /> <br /> <br /> <br />
      <Grid container spacing={2}>
      <Grid item xs={12} md={6}> 
      <SectionTwo />
      </Grid>
      <Grid item xs={12} md={6}>
      <SectionConsultation />
      </Grid>
      </Grid>
      {/* <SectionFour /> */}
      <hr />
      <SectionThree />
      <FooterNew />
    </div>
  );
};

export default About;
