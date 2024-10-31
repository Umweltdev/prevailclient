import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Card, Typography, Modal, Switch } from "@mui/material";

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
  const [consentChoices, setConsentChoices] = useState({
    Personalization: false,
    Analytics: false,
    Optimization: false,
    Enhancement: false,
  });
  const [consentVisible, setConsentVisible] = useState(true);

  useEffect(() => {
    const storedConsent = JSON.parse(localStorage.getItem("user_consent"));
    if (storedConsent) setConsentChoices(storedConsent);
  }, []);

  const updateGtagConsent = (type, value) => {
    window.gtag("consent", "update", { [type]: value });
  };

  const handleSwitchToggle = (id) => (event) => {
    const newChoice = event.target.checked;
    const updatedChoices = { ...consentChoices, [id]: newChoice };
    setConsentChoices(updatedChoices);
    localStorage.setItem("user_consent", JSON.stringify(updatedChoices));

    const consentMap = {
      Personalization: "ad_personalization",
      Analytics: "analytics_storage",
      Optimization: "ad_storage",
      Enhancement: "ad_user_data",
    };
    updateGtagConsent(consentMap[id], newChoice ? "granted" : "denied");
  };

  const handleAcceptAll = () => {
    const allTrueChoices = Object.keys(consentChoices).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setConsentChoices(allTrueChoices);
    localStorage.setItem("user_consent", JSON.stringify(allTrueChoices));
    Object.keys(consentChoices).forEach((key) =>
      updateGtagConsent(key, "granted")
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
    Object.keys(consentChoices).forEach((key) =>
      updateGtagConsent(key, "denied")
    );
    setConsentVisible(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem("user_consent", JSON.stringify(consentChoices));
    setConsentVisible(false);
  };

  if (!consentVisible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        color: "black",
        backgroundColor: "#fff",
        width: "50vw",
        p: 4,
        borderRadius: 5,
        mb: 2,
        opacity: 0.98,
      }}
    >
      <Typography variant="h5">
        Welcome to Prevail Consent Management
      </Typography>
      <Typography variant="subtitle2" color="grey" my={2}>
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
        }}
      >
        {Object.keys(consentChoices).map((id) => (
          <Box
            key={id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" mb={2}>
              {id}
            </Typography>
            <BoldSwitch
              checked={consentChoices[id]}
              onChange={handleSwitchToggle(id)}
            />
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
    </Box>
  );
};

export default ConsentBar;
