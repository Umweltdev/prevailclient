import SectionFour from "../components/Services/SectionFour";
import SectionOne from "../components/Services/SectionOne";
import SectionThree from "../components/Services/SectionThree";
import SectionTwo from "../components/Services/SectionTwo";
import Footer from "../components/Footer/Footer";
import SectionFive from "../components/Services/SectionFive";
import SectionSix from "../components/Services/SectionSix";
import Navbar from "../components/Navbar/Navbar";

const Services = () => {
  return (
    <div>
      {/* <Navbar />    */}
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      {/* <SectionFive/> */}
      <SectionSix />
      <Footer />
    </div>
  );
};

export default Services;