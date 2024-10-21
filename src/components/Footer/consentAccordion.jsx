import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Button, Card } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

// Sample accordion data object
const accordionData = [
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



function ConsentAccordion() {
  const [expanded, setExpanded] = React.useState("panel0");

  // State to track consent preferences
  const [consentPreferences, setConsentPreferences] = React.useState(() => {
    const savedPreferences = localStorage.getItem("consentPreferences");
    return savedPreferences ? JSON.parse(savedPreferences) : {};
  });

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // Handle consent change and update state, localStorage, and GTM
  const handleConsentChange = (categoryId, consentGranted) => {
    const updatedPreferences = {
      ...consentPreferences,
      [categoryId]: consentGranted,
    };

    // Update state and localStorage with new consent preferences
    setConsentPreferences(updatedPreferences);
    localStorage.setItem(
      "consentPreferences",
      JSON.stringify(updatedPreferences)
    );

    // Push the consent selection to Google Tag Manager
    window.dataLayer?.push({
      event: "cookie_consent_update",
      consent_category: categoryId,
      consent_status: consentGranted ? "granted" : "denied",
    });
  };

  return (
    <Box sx={{ p: "20px 0", width: "100%" }}>
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  "@media (max-width: 600px)": {
                    fontSize: "18px",
                  },
                }}
              >
                {item.title}
              </Typography>
              <Box
                sx={{
                  display: expanded === `panel${index}` ? "none" : "flex",
                  gap: 1,
                  "@media (max-width: 600px)": {
                    display: "none",
                  },
                }}
              >
                {/* Conditional styling for Agree and Disagree buttons */}
                <Button
                  onClick={() => handleConsentChange(item.id, false)}
                  sx={{
                    bgcolor: "#fff",
                    color: "#000",
                    borderRadius: "30px",
                    width: "144px",
                    border: "1px solid",
                    textTransform: "capitalize",
                  }}
                >
                  {consentPreferences[item.id] === false
                    ? "Disagreed"
                    : "Disagree"}
                </Button>
                <Button
                  onClick={() => handleConsentChange(item.id, true)}
                  sx={{
                    bgcolor: "primary.main",
                    color: "#fff",
                    borderRadius: "30px",
                    width: "144px",
                    textTransform: "capitalize",
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "#fff",
                    },
                  }}
                >
                  {consentPreferences[item.id] === true ? "Agreed" : "Agree"}
                </Button>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">{item.summary}</Typography>
            <Card
              sx={{
                width: "100%",
                p: 2,
                bgcolor: "#E9E9E9",
                mt: 2,
                boxShadow: 0,
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {item.details.map((detail, idx) => (
                <Typography key={idx} component={"li"} variant="subtitle2">
                  {detail}
                </Typography>
              ))}
            </Card>
            <Box sx={{ display: "flex", gap: 1, my: 2 }}>
              {/* Buttons inside the expanded view */}
              <Button
                onClick={() => handleConsentChange(item.id, false)}
                sx={{
                  bgcolor: "#fff",
                  color: "#000",
                  borderRadius: "30px",
                  width: "144px",
                  border: "1px solid",
                  textTransform: "capitalize",
                }}
              >
                {consentPreferences[item.id] === false
                  ? "Rejected"
                  : "Disagree"}
              </Button>
              <Button
                onClick={() => handleConsentChange(item.id, true)}
                sx={{
                  bgcolor: "primary.main",
                  color: "#fff",
                  borderRadius: "30px",
                  width: "144px",
                  textTransform: "capitalize",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "#fff",
                  },
                }}
              >
                {consentPreferences[item.id] === true ? "Accepted" : "Agree"}
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default ConsentAccordion;
