import Footer from "../components/Footer/Footer.jsx";
import SectionOne from "../components/About/SectionOne";
import SectionThree from "../components/About/SectionThree";
import SectionTwo from "../components/About/SectionTwo";
import Navbar from "../components/Navbar/Navbar.jsx";
import SectionFour from "../components/About/SectionFour.jsx"

const About = () => {
  return (
    <div>
      <Navbar />
      {/* <SectionOne /> */}
      <SectionTwo />
      <SectionFour/>
      <SectionThree />
      <Footer />
    </div>
  );
};

export default About;
