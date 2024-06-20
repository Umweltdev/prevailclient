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
    <Box
      sx={{
        width: "42vw",
        backgroundColor: "#F9FAFC",
        "@media (max-width: 600px)": {
          width: "90vw",
          margin: "20px auto",
        },
      }}
    >
      {FAQs.map((data, i) => (
        <Accordion
          key={i}
          defaultExpanded={i === 0}
          sx={{
            backgroundColor: "#F9FAFC",
            width: "100%", // Ensures it takes up full width of its parent Box
            "@media (max-width: 600px)": {
              width: "85vw",
              margin: "auto",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${i}-content`}
            id={`panel${i}-header`}
            sx={{
              fontSize: "24px",
              fontWeight: "400",
              height: "118px",
              width: "100%",
              "@media (max-width: 600px)": {
                width: "85vw",
                fontSize: "16px",
                height: "unset",
                margin: "auto",
              },
            }}
          >
            {data.header}
          </AccordionSummary>
          <AccordionDetails
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              "@media (max-width: 600px)": {
                width: "85vw",
                fontSize: "16px",
                height: "unset",
                margin: "auto",
              },
            }}
          >
            {data.text}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
