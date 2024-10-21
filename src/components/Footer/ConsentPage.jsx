import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppBarNav from "../Navbar/Appbar";
import ConsentAccordion from "./consentAccordion";
import FooterNew from "./FooterNew";
import CookieConsent from "react-cookie-consent";
import { useNavigate } from "react-router-dom";

const ConsentPage = () => {
  const [isConsentGiven, setIsConsentGiven] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const consent = localStorage.getItem("user_consent");
    if (consent !== null) {
      setIsConsentGiven(JSON.parse(consent));
    } else {
      setIsConsentGiven(null);
    }
  }, []);

  const handleConsent = () => {
    setIsConsentGiven(true);
    localStorage.setItem("user_consent", JSON.stringify(true));

    // Push consent event to GTM
    window.dataLayer?.push({
      event: "cookie_consent_given",
      consent: "granted",
    });

    gtag("config", "G-XQHL846D91", { anonymize_ip: false }); // Trigger Google Tag when consent is granted
    setExpanded(null);
  };

  const handleReject = () => {
    setIsConsentGiven(false);
    localStorage.setItem("user_consent", JSON.stringify(false));

    // Push reject event to GTM
    window.dataLayer?.push({
      event: "cookie_consent_rejected",
      consent: "rejected",
    });
  };

  return (
    <Box>
      <AppBarNav color="#000" />
      <Box
        sx={{
          mt: 20,
          mx: 20,
          "@media (max-width: 600px)": {
            mt: 15,
            mx: 2,
          },
        }}
      >
        <Typography
          fontSize={{ xs: "30px", md: "44px" }}
          width={{ xs: "95vw", md: "50vw" }}
          fontWeight="700"
          color="#1D0D40"
        >
          Welcome to Prevail Consent Management
        </Typography>
        <Typography
          sx={{
            color: "#505660",
            fontSize: "20px",
            fontWeight: "400",
            mt: 4,
            lineHeight: "30px",
            "@media (max-width: 600px)": {
              fontSize: "18px",
              mt: 2,
            },
          }}
        >
          At Prevail, your privacy and control over your data are our top
          priorities. We believe in transparency, which is why we provide clear,
          detailed descriptions of how each cookie on our platform functions,
          tools, and marketing efforts and how they enhance your experience. You
          can easily manage your cookie preferences anytime, ensuring that your
          interactions with our services align with your personal choices. We
          regularly update our Cookie Policy to stay compliant with legal
          requirements and to reflect any changes in how we use cookies. 
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
            "@media (max-width: 600px)": {
              flexDirection: "column",
            },
          }}
        >
          <Typography variant="h5">You Allow All</Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              my: 2,
            }}
          >
            <Button
              onClick={handleReject}
              sx={{
                bgcolor: "#fff",
                borderRadius: "30px",
                width: "144px",
                border: "1px solid",
              }}
            >
              Disagree
            </Button>

            <Button
              onClick={handleConsent}
              sx={{
                bgcolor: "primary.main",
                color: "#fff",
                borderRadius: "30px",
                width: "144px",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "#fff",
                },
              }}
            >
              Agree
            </Button>
          </Box>
        </Box>
        <Box sx={{ my: 10 }}>
          <ConsentAccordion />
        </Box>
      </Box>
      <FooterNew />
    </Box>
  );
};

export default ConsentPage;
