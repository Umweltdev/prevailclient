import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { FAQs } from "./SliderData";

export default function AccordionUsage() {
  return (
    <Box sx={{ width: "42vw", backgroundColor: "#F9FAFC" }}>
      {FAQs.map((data, i) => (
        <Accordion
          sx={{ backgroundColor: "#F9FAFC" }}
          key={i}
          defaultExpanded={i === 0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${i}-content`}
            id={`panel${i}-header`}
            sx={{ fontSize: "24px", fontWeight: "400", height: "118px" }}
          >
            {data.header}
          </AccordionSummary>
          <AccordionDetails sx={{ fontSize: "16px", fontWeight: "400" }}>
            {data.text}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
