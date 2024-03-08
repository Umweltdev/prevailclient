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
    header: "Brand Identity Package",
    text: "Establish a strong and cohesive brand identity that resonates across all customer touchpoints, from eye-catching logos and compelling marketing collateral to business cards and brochures. Collaborate closely with our design to develop a unique brand that sets your business apart in a competitive market and connects with your target audience. We do not believe in a one-size-fits-all mentality, that is why we offer a range of choices to perfectly align with your brand personality. For more information check out our “Brand Identity Package” page.",
  },
  {
    header: "Website Production & Management",
    text: "Get a state-of-the-art website that is not only visually stunning but also user-friendly and optimised for search engines. This means higher visibility, more traffic, and better engagement. Leverage technical expertise in innovative technologies like MERN Stack, Material UI, Microfrontend, and Microservice Architecture for a website at the forefront of innovation. Leave the technicalities to us; from content updates to security monitoring, we ensure your website runs smoothly, allowing you to focus on your core business operations. For more information check out our “Website Product & Management” page.",
  },
  {
    header: "Search Engine Marketing (SEM)",
    text: " Craft targeted and personalised advertising campaigns to enhance your brand's visibility across major search engines directing your target audiences to your digital presence. Prevail takes a comprehensive approach to Search Engine Optimisation (SEO). From regular SEO audits and keyword optimisation. In addition, we provide valuable insights into consumer behaviour, website, and marketing performance. Backlink monitoring, competitor research, and gap analysis contribute towards maintaining a competitive edge in the digital landscape. ",
  },
];

export default function AccordionUsage() {
  return (
    <Grid
      sx={{
        width: "40vw",
        "@media (max-width: 600px)": {
          width: "95vw",
        },
      }}
    >
      {advantages.map((data, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {data.header}
          </AccordionSummary>
          <AccordionDetails
            sx={{ textAlign: "justify", textJustify: "distribute" }}
          >
            {data.text}
          </AccordionDetails>
        </Accordion>
      ))}
    </Grid>
  );
}
