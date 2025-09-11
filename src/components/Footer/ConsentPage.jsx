import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import AppBarNav from "../Navbar/Appbar";
import ConsentAccordion from "./consentAccordion";
import FooterNew from "./FooterNew";

const ConsentPage = () => {
  const [ setIsConsentGiven] = useState(null);
  // const navigate = useNavigate();

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

    window.dataLayer?.push({
      event: "cookie_consent_given",
      consent: "granted",
    });

    if (typeof window.gtag === "function") {
      window.gtag("config", "G-XQHL846D91", { anonymize_ip: false });
    }
  };

  const handleReject = () => {
    setIsConsentGiven(false);
    localStorage.setItem("user_consent", JSON.stringify(false));

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
          mt: { xs: 12, md: 20 },
          mx: { xs: 2, md: 20 },
        }}
      >
        {/* Title */}
        <Typography
          fontSize={{ xs: "24px", sm: "28px", md: "44px" }}
          width={{ xs: "100%", md: "50vw" }}
          fontWeight="700"
          color="#1D0D40"
        >
          Welcome to Prevail Consent Management
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            color: "#505660",
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            fontWeight: "400",
            mt: { xs: 2, md: 4 },
            lineHeight: { xs: "24px", md: "30px" },
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

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: { xs: 2, md: 3 },
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            variant="h6"
            fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
            textAlign={{ xs: "center", sm: "left" }}
          >
            You Allow All
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 1.5, md: 2 },
              flexWrap: "wrap",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <Button
              onClick={handleReject}
              sx={{
                bgcolor: "#fff",
                borderRadius: "30px",
                width: { xs: "120px", md: "144px" },
                border: "1px solid",
                fontSize: { xs: "14px", md: "16px" },
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
                width: { xs: "120px", md: "144px" },
                fontSize: { xs: "14px", md: "16px" },
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

        {/* Accordion Section */}
        <Box sx={{ my: { xs: 6, md: 10 } }}>
          <ConsentAccordion />
        </Box>
      </Box>

      <FooterNew />
    </Box>
  );
};

export default ConsentPage;
