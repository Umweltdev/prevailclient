import SectionOne from "../components/Contact/SectionOne";
import SectionThree from "../components/Contact/SectionThree";
import SectionTwo from "../components/Contact/SectionTwo";
import SectionFive from "../components/Services/SectionFive";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import DrawerAppBar from "../components/Navbar/Appbar";
import ContactInput from "../components/Contact/ContactInput";
import FooterNew from "../components/Footer/FooterNew";


const Contact = () => {
  return (
    <div>
      <DrawerAppBar />
      {/* <SectionOne /> */}
      <br /><br />
      <SectionTwo />
      <ContactInput/>
      {/* <SectionThree /> */}
      <SectionFive />
      <FooterNew />
    </div>
  );
};

export default Contact;
