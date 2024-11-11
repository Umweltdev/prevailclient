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
    title: "Actively Scan Device Characteristics for Identification ",
    summary:
      "Prevail may actively scan your device’s characteristics, such as its technical specifications and capabilities, to help identify the best ways to deliver content, screen optimisation, and advertisements. This process optimises those content or ads for your specific device, providing a better overall experience.",
    details: [
      "Optimisation of Service Delivery for Various Device Users: Suppose Prevail notices a significant increase in users accessing our content, tools, solutions and efforts. By scanning the device characteristics, such as screen size and network type, we might develop and implement a more responsive and efficient version for users. This improvement ensures that users have a smooth experience regardless of the device they are using.",
      "Optimising Resource Allocation: Prevail might scan device characteristics to understand the common types of devices used by our audience. For example, if a significant number of users access our services through high-resolution mobile, we might allocate more resources to developing tablet-optimised features and interfaces.",
    ],
  },
  {
    id: 2,
    title: "Use Profiles to Select Personalised Content ",
    summary:
      "Content presented to you on Prevail’s platform can be tailored based on your personalise content profiles. These profiles reflect your activity on Prevail’s services, such as the forms you submit, the content you engage with, and your indicated interests or preferences. This profiling allows us to prioritise and organise content in a way that makes it easier for you to find information that matches your specific interests and needs, ensuring a way that makes it easier for you to find information that matches your particular interests and needs ensuring a more efficient and engaging user experience. ",
    details: [
      "Cross-Service Content Personalisation: Imagine you’ve attended several of Prevail’s webinars on branding transformation. Based on the profile created from your participation, the next time you visit the Prevail platform, you might be greeted with a personalised list of eBooks, case studies, or articles that dive deeper into branding transformation strategies, helping you expand your knowledge in this field. ",
      "Optimising Content Recommendations Based on Industry Interests: If you’ve indicated through forms or previous interactions that you work in the real estate industry, Prevail might use this information to build a profile highlighting your industry interest. As a result, when you explore the platform, content related to real estate marketing trends, automation tools for property management, and other relevant topics will be recommended to you first, ensuring that you quickly find the most pertinent information.",
    ],
  },
];

function OptimizationModal({ onSwitchChange }) {
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
                <Typography style={{ marginLeft: 8 }}>{item.title}</Typography>
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

export default OptimizationModal;
