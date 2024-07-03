import { Helmet } from "react-helmet";
import FooterNew from "../components/Footer/FooterNew";
import MainPage from "../components/Contact/MainPage";
import AppBarNav from "../components/Navbar/Appbar";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Let's Elevate Your Online Presence Together</title>
        <meta
          name="description"
          content="Get in Touch with Prevail for Bespoke Marketing Solutions"
        />
      </Helmet>
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <AppBarNav color="#000" />
        <MainPage />
        <FooterNew />
      </div>
    </>
  );
};

export default Contact;
