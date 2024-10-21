import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Button, Card, IconButton, Modal, Switch } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
};

const consentData = [
  {
    id: "Personalization",
    title: "Tailor Advertising and Content Based on Limited Data",
    summary:
      "Advertising and content can be personalized based on limited data such as device type, location, and previous interactions. This ensures relevant ads and content without overwhelming the user.",
    details: [
      "Advertising: Ads tailored based on general geographic location, device type, and past interactions to avoid repetition.",
      "Service-Specific Advertising: Limits ad frequency and focuses on services aligned with your interests.",
      "Content Customization: Content adjusted to your device and location, ensuring it’s relevant and optimized.",
    ],
  },
  {
    id: "Analytics",
    title: "Understand Audiences and Measure Ad Performance",
    summary:
      "By analyzing user data, we generate insights and measure the effectiveness of advertising, helping refine marketing strategies and optimize audience engagement.",
    details: [
      "Audience Insights: Analyze cross-platform user data to optimize content and marketing strategies.",
      "Ad Performance: Track ad engagement to understand which placements lead to user interaction and optimize future campaigns.",
    ],
  },
  {
    id: "Optimization",
    title: "Optimize Device Interaction and Service Delivery",
    summary:
      "Device characteristics are scanned to optimize content delivery, while user data helps improve and develop new services.",
    details: [
      "Device Optimization: Content is tailored to the device’s specifications, providing a better user experience.",
      "Service Development: Analyze user interactions to improve services and develop new features.",
    ],
  },
  {
    id: "Enhancement",
    title: "Enhance Services Based on User Feedback and Functional Needs",
    summary:
      "We use feedback and functional cookies to improve user experience, focusing on platform functionality and evolving services based on user input.",
    details: [
      "Feedback: User suggestions influence the development of new features and integrations.",
      "Functional Cookies: Remember preferences like login information and search settings to improve user experience.",
    ],
  },
];

const BoldSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 32,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(28px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "primary.main",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 28,
    height: 28,
  },
  "& .MuiSwitch-track": {
    borderRadius: 34 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
  },
}));

function ConsentBar() {
  const [open, setOpen] = useState(false);
  const [selectedConsent, setSelectedConsent] = useState(null);
  const [consentChoices, setConsentChoices] = useState({
    Personalization: false,
    Analytics: false,
    Optimization: false,
    Enhancement: false,
  });
  const [allAccepted, setAllAccepted] = useState(false);
  const [consentVisible, setConsentVisible] = useState(true);

  useEffect(() => {
    const storedConsent = JSON.parse(localStorage.getItem("user_consent"));
    if (storedConsent) {
      setConsentChoices(storedConsent);
    }
  }, []);

  const handleOpen = (data) => {
    setSelectedConsent(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSwitchToggle = (id) => (event) => {
    const updatedChoices = { ...consentChoices, [id]: event.target.checked };
    setConsentChoices(updatedChoices);
    localStorage.setItem("user_consent", JSON.stringify(updatedChoices));

    // GTM event for individual consent change
    window.dataLayer?.push({
      event: "cookie_consent_updated",
      consentType: id,
      consentValue: event.target.checked ? "granted" : "rejected",
    });
  };

  const handleAcceptAll = () => {
    const allTrueChoices = Object.keys(consentChoices).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setConsentChoices(allTrueChoices);
    setAllAccepted(true);
    localStorage.setItem("user_consent", JSON.stringify(allTrueChoices));

    window.dataLayer?.push({
      event: "cookie_consent_given",
      consent: "all_granted",
    });

    setConsentVisible(false);
  };

  const handleRejectAll = () => {
    const allFalseChoices = Object.keys(consentChoices).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    setConsentChoices(allFalseChoices);
    setAllAccepted(false);
    localStorage.setItem("user_consent", JSON.stringify(allFalseChoices));

    window.dataLayer?.push({
      event: "cookie_consent_rejected",
      consent: "all_rejected",
    });

    setConsentVisible(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem("user_consent", JSON.stringify(consentChoices));

    // GTM event for saving settings
    window.dataLayer?.push({
      event: "cookie_consent_saved",
      consent: consentChoices,
    });

    setConsentVisible(false);
  };

  if (!consentVisible) return null;

  return (
    <Box sx={{ pt: "20px 0", width: "100%" }}>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          color: "black",
          backgroundColor: "#fff",
          width: "50vw",
          // pb: 3,
          p: 4,
          borderRadius: 3,
          mb: 4,
        }}
      >
        <Typography variant="h5" mb={3}>
          Welcome to Prevail Consent Management
        </Typography>
        <Typography variant="subtitle2">
          At Prevail, your privacy and control over your data are our top
          priorities. We believe in transparency, which is why we provide clear,
          detailed descriptions of how each cookie on our platform functions,
          tools, and marketing efforts and how they enhance your experience.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
          <Button
            onClick={handleRejectAll}
            variant="outlined"
            sx={{ borderRadius: 10, textTransform: "capitalize" }}
          >
            Reject All
          </Button>
          <Button
            onClick={handleAcceptAll}
            variant="contained"
            sx={{ borderRadius: 10, textTransform: "capitalize", boxShadow: 0 }}
          >
            Accept All
          </Button>
        </Box>

        <Typography variant="subtitle2" fontWeight="600" sx={{ mt: 3 }}>
          Cookies will help us serve you better in these way:
        </Typography>

        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
            px: 10,
            mt: 1,
            p: 3,
            bgcolor: "#F5F3FB",
            boxShadow: 0,
          }}
        >
          {consentData.map((data, index) => (
            <Box
              key={data.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">{data.id}</Typography>
              <Typography
                variant="subtitle2"
                mb={2}
                color="primary"
                sx={{ cursor: "pointer" }}
                onClick={() => handleOpen(data)}
              >
                Details
              </Typography>
              <BoldSwitch
                checked={consentChoices[data.id]}
                onChange={handleSwitchToggle(data.id)}
              />
            </Box>
          ))}
        </Card>
        <Button
          onClick={handleSaveSettings}
          variant="contained"
          sx={{
            borderRadius: 10,
            textTransform: "capitalize",
            mt: 2,
            display: "flex",
            justifyContent: "flex-end",
            textAlign: "flex-end",
            boxShadow: 0,
          }}
        >
          Save Settings
        </Button>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          {selectedConsent && (
            <>
              <Typography id="modal-title" variant="h6">
                {selectedConsent.title}
              </Typography>
              <Typography id="modal-description" sx={{ mt: 2 }}>
                {selectedConsent.summary}
              </Typography>
              <Typography id="modal-details" sx={{ mt: 2 }}>
                {selectedConsent.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default ConsentBar;
