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

const About = () => {
  return (
    <div>
      <AppBarOne/>
      {/* <Navbar /> */}
      {/* <SectionOne /> */}
      <SectionTwo />
      <SectionConsultation />
      {/* <SectionFour /> */}
      <SectionThree />
      <FooterNew />
    </div>
  );
};

export default About;
