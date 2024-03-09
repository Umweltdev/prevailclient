import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function AccordionUsage({ text, header }) {
  return (
    <div>
      <Accordion sx={{ width: "23vw" }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: "#8843d9", fontWeight: "bold" }} />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ fontSize: "2vw", color: "#8843d9", fontWeight: "900" }}
        >
          {header}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            fontSize: "1vw",
            textAlign: "justify",
            textJustify: "distribute",
          }}
        >
          {text}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
