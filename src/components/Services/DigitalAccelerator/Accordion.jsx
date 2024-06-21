import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Box, Typography, Stack } from "@mui/material";
import PenSvg from "./assets/pen-tool.svg";
import WebsiteSvg from "./assets/website.svg";
import SearchSvg from "./assets/search.svg";


const advantages = [
  {
    header: "Brand Identity Package",
    text: "Craft a robust and unified brand identity that resonates at every customer interaction point. From captivating logos to compelling marketing materials such as business cards and brochures, we work closely with you to forge a distinctive brand that not only stands out in the competitive market but also strikes a chord with your target audience. At Prevail, we reject the “one-size-fits-all approach, opting instead for a spectrum of options that perfectly align with your brand’s personality. ",
    svg: PenSvg
  },
  {
    header: "Website Production & Management",
    text: "Get a state-of-the-art website that is not only visually stunning but also user-friendly and optimised for search engines. This means higher visibility, more traffic, and better engagement. Leverage technical expertise in innovative technologies like MERN Stack, Material UI, Microfrontend, and Microservice Architecture for a website at the forefront of innovation. Leave the technicalities to us; from content updates to security monitoring, we ensure your website runs smoothly, allowing you to focus on your core business operations. For more information check out our “Website Product & Management” page.",
    svg: WebsiteSvg

  },
  {
    header: "Search Engine Marketing (SEM)",
    text: " Craft targeted and personalised advertising campaigns to enhance your brand's visibility across major search engines directing your target audiences to your digital presence. Prevail takes a comprehensive approach to Search Engine Optimisation (SEO). From regular SEO audits and keyword optimisation. In addition, we provide valuable insights into consumer behaviour, website, and marketing performance. Backlink monitoring, competitor research, and gap analysis contribute towards maintaining a competitive edge in the digital landscape. ",
    svg: SearchSvg

  },
];

export default function AccordionUsage() {
  return (
    <Box>
      {advantages.map((data, index) => (
        <Accordion
          key={index}
          sx={{
            backgroundColor: "#F8F6FF",
            borderRadius: "10px",
            marginBottom: "10px",
            boxShadow: "none",
            "& .MuiButtonBase-root": {
              padding: "0 30px",
            },
            "&::before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Box
                sx={{
                  backgroundColor: "#EEE9FF",
                  height: "59px",
                  width: "59px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <img src={data.svg} />
              </Box>
              <Typography
              fontSize={{xs:"20px", md:"24px"}}
                sx={{
                  fontWeight: "600",
                  color: "#1D0D40",
                }}
              >
                {data.header}
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails
            sx={{ px: 4, pb: 4}}
          >
            <Typography color={"#5E5472"}>{data.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
