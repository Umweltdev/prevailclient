import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Data for each accordion
const accordionData = [
  {
    id: 1,
    title: "Store and/or Access Information on a device",
    summary:
      "At Prevail, we use cookies, device identifiers, and similar technologies to store or access information on your device. This information includes unique identifiers (e.g., login-based identifiers, randomly assigned identifiers, network-based identifiers) as well as other data like browser type, language, screen size, and supported technologies. These technologies are employed to recognise your device during each connection to our application or website for various purposes, as outlined below. ",
    details: [
      "Recognition of Returning Users: Many of the functions on our site or app depend on recognising returning users. For instance, during your first visit, a cookie may be stored on your device. This cookie allows us or our partners to recognise your device during subsequent visits, enabling a more seamless and personalised user experience. ",
      "Functionality Enhancement: Cookies may be used to store information that enhances your experience, such as your login status or records, so that you don’t have to re-enter this information each time you visit. ",
      "Security and Fraud Prevention: Cookies and other technologies are also used to store information necessary for maintaining security, such as identifying unauthorised access attempts and protecting against fraudulent activities. ",
    ],
  },
  {
    id: 2,
    title: "Use Limited Data to Select Content",
    summary:
      "Content presented to you on Prevail’s platform, marketing outreach, and social media, can be tailored based on a limited set of data. This data might include information such as the specific services or sections of the website you are using, your general (non-precise) geographic location, the type of device you are using, and the content you are interacting with or have interacted with in the past. This approach ensures that the content you see is relevant to your needs while avoiding redundancy, such as showing the same article or video multiple times.",
    details: [
      "Customising Content Based on Service Interaction and Location: Suppose you are exploring Prevail’s resources on digital marketing strategies, and your general location suggests you are in a region with a high concentration of SMEs. Based on this limited data, Prevail might present you with case studies and success stories of local businesses in your area that have successfully implemented similar strategies, making the content more relevant to your specific context.",
      "Personalising Content Recommendations Based on Device Type: If you access Prevail’s platform primarily through a mobile device, the system might prioritise presenting content that is optimised for smaller screens, such as infographics or brief articles, rather than lengthy whitepapers or detailed reports that are better suited for desktop viewing. This helps improve your overall user experience by matching the content format to your device. ",
    ],
  },
  {
    id: 3,
    title: "Use Limited Data to Select Advertising ",
    summary:
      "Advertising shown to you about Prevail or our services can be tailored based on a limited set of data. This data might include information such as the website, app, or third-party applications you are currently using: your general (non-precise) geographic location, the type of device you are using, and the content you are interacting with or have interacted with in the past. This approach helps to deliver ads that are more relevant to you while ensuring that the same ad isn't shown too frequently.",
    details: [
      "Advertising and Marketing: Our cookies store and access information on your device to tailor advertisements that are more relevant to your interests. These cookies help track your interaction with ads and determine their effectiveness. ",
      "Contextual Advertising Based on Service Interaction and Location: If Prevail is running a campaign to promote advanced digital tools tailored to your needs, wants or requirements. You might see ads highlighting these services while browsing the relevant section of our website or marketing efforts. ",
      "Frequency Capping and Service-Specific Advertising: If you’ve been exploring Prevail’s content marketing efforts, our platform might limit how often you see an advertisement about our premium content creation service. This ensures that you are not repeatedly overwhelmed by the same ad while still informing you of services that align with your interests.",
    ],
  },
  {
    id: 4,
    title: "Functional ",
    summary:
      "Functional cookies are essential for enhancing your experience on Prevail’s platform by remembering the choices you make and personalising your interaction with our services. These cookies enable us to offer you a smoother, more tailored experience by storing information such as your username and password for login, your search preferences, and any customisations you make to the website's appearance. However, these cookies do not track your activity across other sites, focusing solely on improving your experience within our platform.",
    details: [
      "Session Continuity: These cookies store login information, so you don’t have to re-enter your username and password each time you visit. They also remember your search preferences, making it easier to find the content you need across sessions.",
      "Content Accessibility: Functional cookies can be used to remember specific settings or changes you’ve made, such as adjusting text size or font. They may also be necessary to provide services you've requested, like watching a video, posting a comment, or filling out a form.",
      "Anonymised Data Collection: The information collected by these cookies is often anonymized, meaning it cannot be used to track your browsing activity on other websites. Instead, it helps us improve your experience on Prevail by remembering how you interact with our platform.",
    ],
  },
];

function PersonalizationModal({ onSwitchChange }) {
  const [expanded, setExpanded] = React.useState(null);
  const [switchStates, setSwitchStates] = React.useState(
    accordionData.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  // Handle accordion expansion, ensuring only one accordion is open at a time
  const handleExpandClick = (panelId) => (event) => {
    event.stopPropagation();
    setExpanded(expanded === panelId ? null : panelId);
  };

  // Handle the switch toggle and propagate the state via onSwitchChange prop
  const handleSwitchChange = (panelId) => (event) => {
    const newSwitchState = !switchStates[panelId];
    setSwitchStates((prevState) => ({
      ...prevState,
      [panelId]: newSwitchState,
    }));
    if (onSwitchChange) {
      onSwitchChange(panelId, newSwitchState);
    }
    event.stopPropagation();
  };

  return (
    <Box component={"div"} sx={{ color: "primary" }}>
      {accordionData.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleExpandClick(item.id)}
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon style={{ cursor: "pointer" }} />}
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Box display="flex" alignItems="center">
                {<ExpandMoreIcon style={{ cursor: "pointer" }} />}
                <Typography style={{ marginLeft: 8, color: "primary" }}>
                  {item.title}
                </Typography>
              </Box>
              {/* <Switch
                checked={switchStates[item.id]}
                onClick={(e) => e.stopPropagation()}
                onChange={handleSwitchChange(item.id)}
              /> */}
            </Box>
          </AccordionSummary>

          <AccordionDetails sx={{ p: 2 }}>
            <Typography variant="subtitle2">{item.summary}</Typography>
            <Box
              sx={{
                bgcolor: "rgba(233, 233, 233, 1)",
                mt: 2,
                p: 2,
                borderRadius: "8px",
              }}
            >
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Examples of Data Processing: 
              </Typography>
              {item.details.map((detail, idx) => (
                <Typography key={idx} component={"li"} variant="subtitle2">
                  {detail}
                </Typography>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default PersonalizationModal;
