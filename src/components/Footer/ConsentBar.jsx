import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Button, Card } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

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

function ConsentBar() {
  const [expanded, setExpanded] = useState(null);
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
    loadScripts();
  };

  const handleReject = () => {
    setIsConsentGiven(false);
    localStorage.setItem("user_consent", JSON.stringify(false));
    navigate("/user-consent");
  };

  const loadScripts = () => {
    if (isConsentGiven) {
      (function (i, s, o, g, r, a, m) {
        i["GoogleAnalyticsObject"] = r;
        (i[r] =
          i[r] ||
          function () {
            (i[r].q = i[r].q || []).push(arguments);
          }),
          (i[r].l = 1 * new Date());
        (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(
        window,
        document,
        "script",
        "https://www.google-analytics.com/analytics.js",
        "ga"
      );
      ga("create", "UA-XXXXX-Y", "auto");
      ga("send", "pageview");
    }
  };

  // Ensure consent bar is visible until consent is explicitly given or rejected
  if (isConsentGiven === null) {
    return (
      <Box sx={{ pt: "20px 0", width: "1000px" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={(_, newExpanded) =>
            setExpanded(newExpanded ? "panel1" : null)
          } // Toggle accordion state
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "primary.main", fontSize: "20px" }}>
                Store and/or Access Information on a device
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: "30px",
                    width: "144px",
                  }}
                  onClick={handleReject}
                >
                  Disagree
                </Button>
                <Button
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
                  onClick={handleConsent}
                >
                  Agree
                </Button>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography textAlign={"left"} variant="subtitle2">
              At Prevail, we use cookies, device identifiers, and similar
              technologies to store or access information on your device. This
              information includes unique identifiers (e.g., login-based
              identifiers, randomly assigned identifiers, network-based
              identifiers) as well as other data like browser type, language,
              screen size, and supported technologies.
            </Typography>
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
              <Typography>Examples of Data Processing: </Typography>
              <Typography
                component={"li"}
                textAlign={"left"}
                variant="subtitle2"
              >
                Recognition of Returning Users: Many of the functions on our
                site or app depend on recognising returning users. For instance,
                during your first visit, a cookie may be stored on your device.
                This cookie allows us or our partners to recognise your device
                during subsequent visits, enabling a more seamless and
                personalised user experience.
              </Typography>
              <Typography
                component={"li"}
                textAlign={"left"}
                variant="subtitle2"
              >
                Functionality Enhancement: Cookies may be used to store
                information that enhances your experience, such as your login
                status or records, so that you don’t have to re-enter this
                information each time you visit.
              </Typography>
              <Typography
                component={"li"}
                textAlign={"left"}
                variant="subtitle2"
              >
                Security and Fraud Prevention: Cookies and other technologies
                are also used to store information necessary for maintaining
                security, such as identifying unauthorised access attempts and
                protecting against fraudulent activities.
              </Typography>
            </Card>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
  }

  return null; // Hide the consent bar once a decision is made
}

export default ConsentBar;

//  const handleChange = (panel) => (event, newExpanded) => {
//    setExpanded(newExpanded ? panel : false);
//  };
