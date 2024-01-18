import SectionOne from "../components/Contact/SectionOne";
import SectionThree from "../components/Contact/SectionThree";
import SectionTwo from "../components/Contact/SectionTwo";
import SectionFive from "../components/Services/SectionFive";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


const Contact = () => {
  return (
    <div>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <Footer />
    </div>
  );
};

export default Contact;
