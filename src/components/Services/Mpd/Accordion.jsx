import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const advantages = [
  {
    header: "Valuable Gains",
    text: "Bringing the magic of yield management and automated price adjustments based on models of elasticity.",
  },
  {
    header: "Labour Effect",
    text: "Ability to increase efficiency, reduced cost, and enhance competitiveness.",
  },
  {
    header: "Tailored Redistribution Frequency",
    text: "Choose how often to adjust your marketing spend (daily, weekly, monthly, quarterly) for strategic flexibility.",
  },
  {
    header: "Digital Connection",
    text: "Ability to connect to a digital Ads platform and database through an API.",
  },
  {
    header: "Holistic Expense Tracking",
    text: "Gain a comprehensive understanding of all marketing expenses and their impact",
  },
  {
    header: "Price Estimator",
    text: "Gain insightful price estimator quotations on an admin frontend portal built by Prevail or sent as a spreadsheet pdf.",
  },

  {
    header: "Version Update",
    text: "Customers who purchase version 1 will get first access to version 2",
  },
];

export default function AccordionUsage() {
  return (
    <Grid sx={{ width: "40vw" }}>
      {advantages.map((data, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {data.header}
          </AccordionSummary>
          <AccordionDetails>{data.text}</AccordionDetails>
        </Accordion>
      ))}
    </Grid>
  );
}
