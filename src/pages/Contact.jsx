import SectionOne from "../components/Contact/SectionOne";
import SectionThree from "../components/Contact/SectionThree";
import SectionTwo from "../components/Contact/SectionTwo";
import SectionFive from "../components/Services/SectionFive";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import DrawerAppBar from "../components/Navbar/Appbar";
import ContactInput from "../components/Contact/ContactInput";
import FooterNew from "../components/Footer/FooterNew";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import MainPage from "../components/Contact/MainPage";
import AppBarNav from "../components/Navbar/Appbar";

const Contact = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <AppBarNav color="#000" />
      <MainPage />
      {/* <ContactInput /> */}
      {/* <SectionThree /> */}
      {/* <SectionFive /> */}
      <FooterNew />
    </div>
  );
};

export default Contact;
