import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function AccordionUsage({ header, headerText, gradient }) {
  return (
    <div>
      <Accordion sx={{ width: "40vw" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "white"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            background:
              gradient || "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
              fontSize: "1vw",
              color: "white",
              fontWeight: "900",
              height: "10vh"
          }}
        >
          {header}
        </AccordionSummary>
        <AccordionDetails>{headerText}</AccordionDetails>
      </Accordion>
    </div>
  );
}
