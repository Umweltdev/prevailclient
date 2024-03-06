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
    header: "SSL Certificate",
    text: "Elevate your website's security by protecting customers' sensitive data with an SSL certification and gaining their trust with a secure browsing experience.",
  },
  {
    header: "Domain Set-up and Hosting",
    text: "Get top-notch domain registration and hosting setup for a seamless online presence.",
  },
  {
    header: "Website Customisation",
    text: "Tailor your online presence with advanced customisation, creating a unique and branded experience that leaves a lasting impression on your audience. ",
  },
  {
    header: "User Experience",
    text: "Elevate user experience with essential e-commerce features: search bar, shopping cart, wishlist, and responsive navbar. Make every interaction on your website effortless.",
  },
  {
    header: "SSL Certificate",
    text: "Elevate your website's security by protecting customers' sensitive data with an SSL certification and gaining their trust with a secure browsing experience.",
  },
  {
    header: "Advanced and Dynamic",
    text: "Capture your audience with an intuitive and visually stunning design that responds seamlessly to any device",
  },

  {
    header: "Titles and Meta Tags",
    text: "Boost your online visibility by optimising meta tags and titles.",
  },
  {
    header: "Admin Login and 3rd Party API Integrations",
    text: "Take control effortlessly with our admin panel that is designed for easy website management. With the option of adding third-party API and social media plug-in integrations for tailored functionality.",
  },
  {
    header: "404 Pages Fix / Redirection",
    text: "Say goodbye to frustrating 404 errors by redirecting the users to different page, providing a seamless user journey.",
  },
  {
    header: "Brainstorm and Website Development Sessions",
    text: "Collaborate effectively through brainstorming sessions to ensure your message and vision are accurate with a comprehensive track progress through presentations",
  },
  {
    header: "Technical Support and Revision",
    text: "Ensure a smooth post-launch experience with fine-tuning revision sessions and technical support to save time and resources and enjoy peace of mind.",
  },
 
];

export default function AccordionUsage() {
  return (
    <Grid sx={{width: "40vw"}}>
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
