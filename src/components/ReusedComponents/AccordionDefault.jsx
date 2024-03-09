import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";

export default function AccordionExpandDefault() {
  return (
    <Grid
      sx={{
        width: "100%",
        maxWidth: 675,
        margin: "0 auto",
        "@media (max-width: 600px)": {
          maxWidth: "95vw",
        },
      }}
    >
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontWeight: "bold" }}>
            Unified Brand Presence
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              textAlign: "justify",
              textJustify: "distribute",
              "@media (max-width: 600px)": {
                fontSize: "4vw",
              },
            }}
          >
            Ensure consistency across your online presence from website
            esthetics to bend identity and SEO campaigns
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontWeight: "bold" }}>
            Time & Resorce Efficiency
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              textAlign: "justify",
              textJustify: "distribute",
              "@media (max-width: 600px)": {
                fontSize: "4vw",
              },
            }}
          >
            See Valuable time and resources by entrusting all aspects of your
            digital presence - website, branding and Marketing.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontWeight: "bold" }}>Strategic Synergy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              textAlign: "justify",
              textJustify: "distribute",
              "@media (max-width: 600px)": {
                fontSize: "4vw",
              },
            }}
          >
            Achieve a seamless synergy/ between website aesthetics brand
            messaging and targeted SEO strategies. ensuring a cohesive and
            impactful brand presence.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
