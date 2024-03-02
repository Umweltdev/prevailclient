import SectionOne from "../components/Contact/SectionOne";
import SectionThree from "../components/Contact/SectionThree";
import SectionTwo from "../components/Contact/SectionTwo";
import SectionFive from "../components/Services/SectionFive";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import DrawerAppBar from "../components/Navbar/Appbar";
import ContactInput from "../components/Contact/ContactInput";


const Contact = () => {
  return (
    <div>
      <DrawerAppBar />
      {/* <SectionOne /> */}
      <SectionTwo />
      <ContactInput/>
      {/* <SectionThree /> */}
      <SectionFive />
      <Footer />
    </div>
  );
};

export default Contact;
