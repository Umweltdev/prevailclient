import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import FooterNew from "../components/Footer/FooterNew";
import Hero from "../components/Landing/Hero";
import OurCore from "../components/Landing/OurCore";
import SectionFour from "../components/Landing/SectionFour";
import SectionSeven from "../components/Landing/SectionSeven";
import SectionTwo from "../components/Landing/SectionTwo";
import CoreValues from "../components/Landing/CoreValues";
import { AuthContext } from "../context/AuthContext";
import AppBarNav from "../components/Navbar/Appbar";
import JoinCustomers from "../components/About/JoinOurCustomer";
import CookieConsent from "react-cookie-consent";
import { cookieConsentStyles, buttonStyle, declineButtonStyle } from "./styles";


const Landing = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div style={{ overflowX: "hidden" }}>
      <div style={{ overflowX: "hidden" }}>
        <Helmet>
          <title>Prevail: Your Partner in Success</title>
          <meta
            name="description"
            content="Prevail is a Strategic Partner for Businesses in the Digital Age."
          />
        </Helmet>

        <AppBarNav color="#000" />
        <Hero />
        <SectionTwo />
        <CoreValues />
        <OurCore />
        <SectionSeven />
        <br />
        <br />
        <SectionFour />
        <br />
        <br />
        <JoinCustomers />
        <CookieConsent
          enableDeclineButton
          style={cookieConsentStyles}
          buttonText="Accept"
          cookieName="prevailagency"
          buttonStyle={buttonStyle}
          declineButtonText="Decline"
          declineButtonStyle={declineButtonStyle}
          expires={150}
        >
          <p style={{ fontSize: "18px", textAlign: "left" }}>
            We use cookies to personalise content and ads. This website collects
            cookies to deliver better user experience. we never collect any
            personal data
          </p>
        </CookieConsent>
        <FooterNew />
      </div>
    </div>
  );
};

export default Landing;
