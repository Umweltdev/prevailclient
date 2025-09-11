import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Card, Typography, Switch, Modal } from "@mui/material";
import PersonalizationModal from "./consentDetails/Personalization";
import AnalyticsModal from "./consentDetails/Analytics";
import OptimizationModal from "./consentDetails/Optimization";
import EnhancementModal from "./consentDetails/Enhancement";

const BoldSwitch = styled(Switch)(({ theme }) => ({
  width: 50,
  height: 28,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(22px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": { width: 24, height: 24 },
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
  const [consentVisible, setConsentVisible] = useState(false);
  const [openModal, setOpenModal] = useState(null);

  useEffect(() => {
    // Load stored consent choices from localStorage
    const storedConsent = localStorage.getItem("user_consent");
    if (storedConsent) {
      setConsentChoices(JSON.parse(storedConsent));
      setConsentVisible(false); // don’t show again after first acceptance/rejection
    } else {
      setConsentVisible(true); // only show first time
    }
  }, []);

  const updateGtagConsent = (type, value) => {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", { [type]: value });
    }
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

  const handleShowMore = (id) => setOpenModal(id);
  const handleCloseModal = () => setOpenModal(null);

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
        width: { xs: "95vw", md: "50vw" },
        p: { xs: 2, md: 4 },
        borderRadius: 3,
        mb: 2,
        opacity: 0.98,
        zIndex: 9999,
      }}
    >
      {/* Heading */}
      <Typography
        variant="h6"
        fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
        fontWeight="600"
      >
        Welcome to Prevail Consent Management
      </Typography>

      {/* Description */}
      <Typography
        variant="body2"
        color="grey"
        my={2}
        fontSize={{ xs: "13px", sm: "14px", md: "16px" }}
      >
        At Prevail, your privacy and control over your data are our top
        priorities...
      </Typography>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: 1, md: 2 },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Button
          onClick={handleRejectAll}
          variant="outlined"
          sx={{
            borderRadius: 10,
            textTransform: "capitalize",
            fontSize: { xs: "13px", md: "15px" },
          }}
        >
          Reject All
        </Button>
        <Button
          onClick={handleAcceptAll}
          variant="contained"
          sx={{
            borderRadius: 10,
            boxShadow: 0,
            textTransform: "capitalize",
            fontSize: { xs: "13px", md: "15px" },
          }}
        >
          Accept All
        </Button>
      </Box>

      {/* Consent Options */}
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
          p: { xs: 2, md: 3 },
          flexWrap: "wrap",
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
            }}
          >
            <Typography
              variant="body2"
              mb={1}
              fontSize={{ xs: "13px", md: "15px" }}
              fontWeight="500"
            >
              {id}
            </Typography>
            <BoldSwitch
              checked={consentChoices[id]}
              onChange={handleSwitchToggle(id)}
            />
            <Button
              onClick={() => handleShowMore(id)}
              sx={{
                textTransform: "capitalize",
                fontSize: { xs: "12px", md: "14px" },
                mt: 1,
              }}
            >
              Show More...
            </Button>
          </Box>
        ))}
      </Card>

      {/* Save Settings */}
      <Button
        onClick={handleSaveSettings}
        variant="contained"
        sx={{
          borderRadius: 10,
          mt: 2,
          textTransform: "capitalize",
          fontSize: { xs: "13px", md: "15px" },
        }}
      >
        Save Settings
      </Button>

      {/* Modal */}
      <Modal open={!!openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            p: { xs: 2, md: 4 },
            borderRadius: 2,
            boxShadow: 24,
            width: { xs: "90vw", md: "50vw" },
            "@media (max-width: 767px)": {
              overflowY: "scroll",
              maxHeight: "90vh",
            },
          }}
        >
          <Typography variant="h6" mb={2}>
            {openModal}
          </Typography>
          <Typography variant="body2" mb={2}>
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
