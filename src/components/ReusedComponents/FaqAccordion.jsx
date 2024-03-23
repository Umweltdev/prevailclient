import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export default function AccordionUsage({ header, headerText, gradient }) {
  return (
    <Grid>
      <Accordion
        sx={{
          width: "40vw",
          "@media (max-width: 600px)": {
            width: "95vw",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            background: "#A16AD9",
              //gradient || "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
            fontSize: "1vw",
            color: "white",
            fontWeight: "900",
            height: "10vh",
            "@media (max-width: 600px)": {
              height: "9vh",
              fontSize: "3vw",
            },
          }}
        >
          {header}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            fontSize: "1.3vw",

            "@media (max-width: 600px)": {
              fontSize: "4vw",
              textAlign: "justify",
              textJustify: "distribute",
            },
          }}
        >
          {headerText}
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
