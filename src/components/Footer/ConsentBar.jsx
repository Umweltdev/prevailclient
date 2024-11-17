import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Card, Typography, Switch } from "@mui/material";

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
    ad_storage: false,
    analytics_storage: false,
    functionality_storage: false,
    personalization_storage: false,
    security_storage: false,
  });
  const [consentVisible, setConsentVisible] = useState(true);

  useEffect(() => {
    const storedConsent = JSON.parse(localStorage.getItem("user_consent"));
    if (storedConsent) {
      setConsentChoices(storedConsent);
    } else {
      // Load GTM default consent states
      const defaultConsent = {
        ad_storage: false,
        analytics_storage: false,
        functionality_storage: false,
        personalization_storage: false,
        security_storage: true, // Set default based on your requirements
      };
      setConsentChoices(defaultConsent);
      localStorage.setItem("user_consent", JSON.stringify(defaultConsent));
    }
  }, []);

  const updateGtagConsent = (type, value) => {
    window.gtag("consent", "update", { [type]: value ? "granted" : "denied" });
  };

  const handleSwitchToggle = (key) => (event) => {
    const updatedChoices = {
      ...consentChoices,
      [key]: event.target.checked,
    };
    setConsentChoices(updatedChoices);
    localStorage.setItem("user_consent", JSON.stringify(updatedChoices));
    updateGtagConsent(key, event.target.checked);
  };

  const handleAcceptAll = () => {
    const allTrueChoices = Object.keys(consentChoices).reduce((acc, key) => {
      acc[key] = true;
      updateGtagConsent(key, true);
      return acc;
    }, {});
    setConsentChoices(allTrueChoices);
    localStorage.setItem("user_consent", JSON.stringify(allTrueChoices));
    setConsentVisible(false);
  };

  const handleRejectAll = () => {
    const allFalseChoices = Object.keys(consentChoices).reduce((acc, key) => {
      acc[key] = false;
      updateGtagConsent(key, false);
      return acc;
    }, {});
    setConsentChoices(allFalseChoices);
    localStorage.setItem("user_consent", JSON.stringify(allFalseChoices));
    setConsentVisible(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem("user_consent", JSON.stringify(consentChoices));
    Object.keys(consentChoices).forEach((key) =>
      updateGtagConsent(key, consentChoices[key])
    );
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
        priorities. We provide clear descriptions of how each cookie functions
        and how they enhance your experience.
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
        {Object.keys(consentChoices).map((key) => (
          <Box
            key={key}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" mb={2}>
              {key.replace("_", " ").toUpperCase()}
            </Typography>
            <BoldSwitch
              checked={consentChoices[key]}
              onChange={handleSwitchToggle(key)}
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

// Technology: Local storage
// Cookie name : user_consent
// Contnt: {Personalization: true, Analytics: true, Optimization: true, Enhancement: true}
// Analytics
// :
// true
// Enhancement
// :
// true
// Optimization
// :
// true
// Personalization
// :
// true
