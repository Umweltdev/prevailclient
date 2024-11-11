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
    title: "Measure Advertising Performance ",
    summary:
      "Information regarding which advertising is presented to you and how you interact with it is crucial for evaluating the effectiveness of our advertising campaigns. This data helps us understand whether the advertising has met its goals, such as whether users saw an ad, clicked on it, or took a subsequent action, like signing up for a service or purchasing a service. By analysing this information, we can optimise future ad placements and campaigns to ensure they are as relevant and effective as possible.",
    details: [
      "Optimising Placement of Service Promotions: Imagine Prevail is promoting a special offer on its content creation services through a banner. If you interact with the ad by clicking it and exploring the service but do not immediately sign up, Prevail might analyse this interaction along with data from other users. This analysis helps us understand which ad placements or messages lead to the most engagement, allowing us to refine our ad strategy and improve conversion rates for future campaigns.",
      "Measuring Engagement with Industry-Specific Ads: Prevail might run targeted ads highlighting specific tools or services for industries like real estate or hospitality. We can measure how well these ads perform by tracking whether users from these industries click on the ads and take further actions, such as requesting a demo or downloading a case study. This data allows us to tailor future advertising efforts to better resonate with each industry’s unique needs.",
    ],
  },
  {
    id: 2,
    title: "Understand Audiences Through Statistics",
    summary:
      "Prevail generates reports and insights by combining various data sets, including user profiles, website analytics, market research, and other interaction data. This data is used to understand how users interact with our content and services, helping us identify trends and common characteristics among different audience segments. This analysis allows us to refine our offerings, optimise our marketing strategies and improve the user experience. ",
    details: [
      "Audience Analysis for Service Optimisation: Suppose Prevail wants to understand how different user segments engage with our marketing tools, solutions, and efforts. We might analyse data from users who frequently visit our marketing content and website pages, combining it with demographic information such as industry type and company size. This helps us identify which types of businesses are most interested in specific services, enabling us to tailor our offerings and marketing efforts more effectively.",
      "Cross-Platform Audience Insights: Prevail may also work with research partners to compare the characteristics of users who interact with our advertisements across different platforms (e.g., desktop vs. mobile). For instance, we may discover that a significant portion of users/clients engaging with a particular tool or service are accessing them through mobile devices and are primarily in the 30-45 age range. This insight allows us to adjust our advertising strategy to reach and engage this audience segment better.",
    ],
  },
];

function AnalyticsModal({ onSwitchChange }) {
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

export default AnalyticsModal;
