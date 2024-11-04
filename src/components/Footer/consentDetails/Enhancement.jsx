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
    title: "Develop and Improve Services ",
    summary:
      "Information about how you interact with Prevail’s services, including your engagement with ads and content, is invaluable in improving our existing offerings and developing new features or products. This data-driven approach enables us better to meet the needs of our diverse user base. Importantly, this process focuses on enhancing the service experience and does not involve creating or refining individual user profiles or identifiers. ",
    details: [
      "Adapting to New Technology for Enhanced User Interaction: If Prevail is considering expanding its services to support a new type of digital device, we may analyse how users interact with our content or tools on those devices. For instance, we could collect data on user interactions to determine whether our existing advertising formats are effective or if we need to develop new methods for delivering content on our platform. This process helps us stay ahead of technological trends and continuously improve our service offerings.",
      "A/B Testing to Improve User Interface Design: Prevail may conduct A/B testing by tracking how users interact with different versions of a new service feature or user interface. For instance, we might introduce an analytics dashboard on our user portal and how users interact with it compared to not including it. This data helps us refine the design and analytics data to ensure it's intuitive and meets users'/clients' needs.",
      "Analysing Content Performance to Guide Future Development: Prevail may analyse which types of content (e.g., blog posts, case studies, video tutorials) receive the most engagement. If we notice that our audience is particularly interested in content about automation in marketing, we might prioritise developing more advanced tools and services in this area.",
    ],
  },
  {
    id: 2,
    title: "Developing New Services Based on User Feedback ",
    summary:
      "At Prevail, we prioritise evolving our services to better meet the needs of our users and clients. We regularly collect data on user satisfaction and feature requests through surveys, feedback forms, and direct interactions on our platform. If a significant number of users express interest in a particular feature or request an integration with a specific third-party tool within our application, we may prioritise its development. ",
    details: [
      "SaaS Integration: If numerous users indicate a strong demand for integration with a particular project management tool, we would consider this feedback in our product development roadmap. By doing so, we ensure that our platform continues to evolve in a way that aligns with user needs and preferences, making Prevail more valuable and effective for our clients.",
      "Analytic Dashboard: Suppose several clients using Prevail’s analytics dashboard frequently request more advanced reporting features, such as customisable reports. By assessing that feedback, we might prioritise the development of these advanced reporting capabilities, ensuring that our platform better meets our clients' specific analytical needs. This process ensures that Prevail stays ahead of industry trends and continues to offer solutions directly influenced by our users' needs and preferences.",
    ],
  },
];

function EnhancementModal({ onSwitchChange }) {
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
              <Switch
                checked={switchStates[item.id]}
                onClick={(e) => e.stopPropagation()}
                onChange={handleSwitchChange(item.id)}
              />
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

export default EnhancementModal;
