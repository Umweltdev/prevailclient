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
import DrawerAppBarWhite from "../components/Navbar/Appbar.jsx";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
//import { Grid, Box } from "@mui/material";

const About = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* <DrawerAppBarWhite {...props} isLoggedIn={isLoggedIn} /> */}
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
