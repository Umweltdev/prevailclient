import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Card, Typography, Switch, Modal } from "@mui/material";
import PersonalizationModal from "./consentDetails/Personalization";
import AnalyticsModal from "./consentDetails/Analytics";
import OptimizationModal from "./consentDetails/Optimization";
import EnhancementModal from "./consentDetails/Enhancement";

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
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": { width: 28, height: 28 },
  "& .MuiSwitch-track": {
    borderRadius: 17,
    backgroundColor: "#E9E9EA",
    opacity: 1,
  },
}));

const ConsentBar = () => {
  const [consentChoices, setConsentChoices] = React.useState({
    Personalization: false,
    Analytics: false,
    Optimization: false,
    Enhancement: false,
  });
  const [consentVisible, setConsentVisible] = useState(true);
  const [openModal, setOpenModal] = useState(null);

  useEffect(() => {
    // Declare gtag at the top of the function body
    function gtag() {
      window.dataLayer.push(arguments);
    }

    // Initialize gtag and set default consent
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = gtag;

      gtag("js", new Date());

      // Set consent defaults explicitly
      gtag("consent", "default", {
        ad_personalization: "denied",
        ad_analytics: "denied",
        ad_optimization: "denied",
        ad_enhancement: "denied",
      });

      // Now initialize GTM configuration after setting consent defaults
      gtag("config", "GT-5DH4FZDB");
    }

    // Load stored consent choices from localStorage
    const storedConsent = JSON.parse(localStorage.getItem("user_consent"));
    if (storedConsent) setConsentChoices(storedConsent);
  }, []);

  const updateGtagConsent = (type, value) => {
    window.gtag("consent", "update", { [type]: value });
  };

  const consentMap = {
    Personalization: "ad_personalization",
    Analytics: "ad_analytics",
    Optimization: "ad_optimization",
    Enhancement: "ad_enhancement",
  };

  const handleSwitchToggle = (id) => (event) => {
    const newChoice = event.target.checked;
    const updatedChoices = { ...consentChoices, [id]: newChoice };
    setConsentChoices(updatedChoices);
    localStorage.setItem("user_consent", JSON.stringify(updatedChoices));

    const consentType = consentMap[id];
    if (consentType)
      updateGtagConsent(consentType, newChoice ? "granted" : "denied");
  };

  const handleAcceptAll = () => {
    const allTrueChoices = Object.keys(consentChoices).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setConsentChoices(allTrueChoices);
    localStorage.setItem("user_consent", JSON.stringify(allTrueChoices));

    Object.values(consentMap).forEach((consentType) =>
      updateGtagConsent(consentType, "granted")
    );
    setConsentVisible(false);
  };

  const handleRejectAll = () => {
    const allFalseChoices = Object.keys(consentChoices).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    setConsentChoices(allFalseChoices);
    localStorage.setItem("user_consent", JSON.stringify(allFalseChoices));

    Object.values(consentMap).forEach((consentType) =>
      updateGtagConsent(consentType, "denied")
    );
    setConsentVisible(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem("user_consent", JSON.stringify(consentChoices));
    setConsentVisible(false);
  };

  const handleShowMore = (id) => {
    setOpenModal(id);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  if (!consentVisible) return null;

  const modalMessages = {
    Personalization: <PersonalizationModal />,
    Analytics: <AnalyticsModal />,
    Optimization: <OptimizationModal />,
    Enhancement: <EnhancementModal />,
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        color: "black",
        backgroundColor: "#fff",
        width: { xs: "90vw", md: "50vw" },
        p: { xs: 2, md: 4 },
        borderRadius: 5,
        mb: 2,
        opacity: 0.98,
        zIndex: 9999, // High z-index to ensure it appears above other elements
      }}
    >
      <Typography variant="h5">
        Welcome to Prevail Consent Management
      </Typography>
      <Typography variant="subtitle2" color="grey" my={2}>
        At Prevail, your privacy and control over your data are our top
        priorities...
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
          sx={{ borderRadius: 10, boxShadow: 0, textTransform: "capitalize" }}
        >
          Accept All
        </Button>
      </Box>

      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: 0,
          border: "1px solid",
          borderRadius: 3,
          gap: 1,
          mt: 3,
          p: 3,
          "@media (max-width: 767px)": {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            justifyItems: "center",
          },
        }}
      >
        {Object.keys(consentChoices).map((id) => (
          <Box
            key={id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "@media (max-width: 767px)": {
                minWidth: "auto",
              },
            }}
          >
            <Typography variant="body1" mb={2}>
              {id}
            </Typography>
            <BoldSwitch
              checked={consentChoices[id]}
              onChange={handleSwitchToggle(id)}
            />
            <Button
              onClick={() => handleShowMore(id)}
              sx={{ textTransform: "capitalize", fontSize: "14px" }}
            >
              Show More...
            </Button>
          </Box>
        ))}
      </Card>

      <Button
        onClick={handleSaveSettings}
        variant="contained"
        sx={{ borderRadius: 10, mt: 2, textTransform: "capitalize" }}
      >
        Save Settings
      </Button>

      <Modal open={!!openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
            width: { xs: "90vw", md: "50vw" },
            zIndex: 10000, // Even higher z-index for the modal
            "@media (max-width: 767px)": {
              overflowY: "scroll",
              maxHeight: "90vh",
            },
          }}
        >
          <Typography variant="h6" mb={2}>
            {openModal}
          </Typography>
          <Typography variant="body1" mb={2}>
            {modalMessages[openModal]}
          </Typography>
          <Button onClick={handleCloseModal} variant="contained">
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ConsentBar;