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
import "./pages.css";

const Landing = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div style={{ overflowX: "hidden" }}>
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
        <div className="cookie-consent">
          <CookieConsent
            enableDeclineButton
            style={{
              background: "rgba(136, 78, 217, 0.9)",
              height: "13vh",
              width: "100vw",
              display: "flex",
              padding: "20px",
              boxSizing: "border-box",
            }}
            location="bottom"
            buttonText="Accept"
            cookieName="prevailagency"
            buttonStyle={{
              color: "#884ED9",
              fontSize: "18px",
              width: "144px",
              padding: "10px 0",
              borderRadius: "25px",
              background: "white",
              border: "1px solid rgba(136, 78, 217)",
              margin: "10px", // Margin between buttons
            }}
            declineButtonText="Decline"
            declineButtonStyle={{
              color: "white",
              fontSize: "18px",
              width: "144px",
              padding: "10px 0",
              borderRadius: "25px",
              background: "rgba(136, 78, 217, 0.9)",
              border: "1px solid white",
              margin: "10px", // Margin between buttons
            }}
            expires={150}
          >
            <p style={{ fontSize: "16px" }}>
              We collect cookies to analyze our website traffic and performance;
              we never collect any personal data.
            </p>
            {(acceptedByScrolling) => {
              if (acceptedByScrolling) {
                alert("Accept was triggered by user scrolling");
              } else {
                alert("Accept was triggered by clicking the Accept button");
              }
            }}
            {() => {
              alert("Decline was triggered");
            }}
          </CookieConsent>
        </div>
        <FooterNew />
      </div>
    </div>
  );
};

export default Landing;
