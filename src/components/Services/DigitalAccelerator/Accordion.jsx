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
    header: "Website Production",
    text: "Launch a state-of-the-art website that marries stunning visual design with exceptional user-friendliness, optimised for top search engine performance. This translates to heightened visibility, increased traffic, and superior engagement. Our technical expertise spans cutting-edge technologies like MERN Stack, Material UI, Micro-frontend, and Microservice Architecture, placing your website at the forefront of innovation. Leave the complexities to us; from continuous content updates to security monitoring, we ensure your website operates flawlessly so you can focus on your core business activities.",
    svg: WebsiteSvg

  },
  {
    header: "Search Engine Optimisation",
    text: "Elevate your website’s visibility and enhance user experience with Prevail’s comprehensive SEO services. We meticulously optimise essential elements such as page titles, meta descriptions, and content structuring, alongside refining your website’s architecture with strategic linking and clear section labelling. Out offerings include tailored keyword optimisation, complete setup of essential Google tools, and detailed competitor analysis to deliver actionable insights. By marrying technical expertise with creative strategies, we aim to boost your search rankings, enrich user experiences, and convert visitors into loyal customers.",
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
              fontSize={{xs:"18px", md:"24px"}}
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
