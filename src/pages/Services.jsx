import SectionFour from "../components/Services/SectionFour";
import SectionOne from "../components/Services/SectionOne";
import SectionThree from "../components/Services/SectionThree";
import SectionTwo from "../components/Services/SectionTwo";
import Footer from "../components/Footer/Footer";
import SectionFive from "../components/Services/SectionFive";
import SectionSix from "../components/Services/SectionSix";
import Navbar from "../components/Navbar/Navbar";
import FooterNew from "../components/Footer/FooterNew";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import Carousel from "../components/Services/Carousel";



const Services = () => {
  return (
    <div>
      {/* <Navbar />    */}
      {/* <SectionOne /> */}
      <DrawerAppBarWhite />
      <SectionTwo />
      {/* <SectionThree /> */}
      <Carousel />
      {/* <SectionFour /> */}
      {/* <SectionFive/> */}
      {/* <SectionSix /> */}
      <FooterNew />
    </div>
  );
};

export default Services;
