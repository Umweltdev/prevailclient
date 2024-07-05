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
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from "react-cookie-consent";
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from "react-cookie-consent";

const Landing = (props) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(getCookieConsentValue("your_custom_cookie_name"));

  return (
    <>
      <Helmet>
        <title>Prevail: Your Partner in Success</title>
        <meta
          name="description"
          content="Prevail is a Strategic Partner for Businesses in the Digital Age."
        />
      </Helmet>
      <div style={{ width: "100%", overflow: "hidden" }}>
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
          style={{
            background: "rgba(136, 78, 217,0.9)",
            height: "35vh",
            width: "70vw",
            display: "flex",
          }}
          location="bottom"
          buttonText="Accept"
          cookieName="myAwesomeCookieName2"
          buttonStyle={{
            color: "#884ED9",
            fontSize: "18px",
            width: "144px",
            padding: "10px 0",
            borderRadius: "25px",
            background: "white",
            border: "1px solid rgba(136, 78, 217)",
          }}
          expires={150}
        >
          <p style={{ fontSize: "18px" }}>
            use cookies to personalise content and ads, to provide social media
            features and to analyse our traffic. We also share information about
            your use of our site with our social media, advertising and
            analytics partners who may combine it with other information that
            you’ve provided to them or that they’ve collected from your use of
            their services.{" "}
          </p>
          {/* <span style={{ fontSize: "10px" }}>
            This bit of text is smaller :O
          </span> */}
          {/* onAccept= */}
          {(acceptedByScrolling) => {
            if (acceptedByScrolling) {
              // triggered if user scrolls past threshold
              alert("Accept was triggered by user scrolling");
            } else {
              alert("Accept was triggered by clicking the Accept button");
            }
          }}
          {/* enableDeclineButton onDecline= */}
          {() => {
            alert("nay!");
          }}
        </CookieConsent>
        <FooterNew />
      </div>
    </>
  );
};

export default Landing;
