import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import connect from "./assets/connect.png";
import data from "./assets/data.png";
import bulb from "./assets/bulb.png";
import badge from "./assets/badge.png";
import { Box, Typography } from "@mui/material";
import {
  Balance,
  Devices,
  Storefront,
  TipsAndUpdates,
  Workspaces,
} from "@mui/icons-material";
import theme from "../../theme";

const goalsObj = [
  {
    icon: <Storefront sx={{ color: "#884ED7" }} />,
    mainText: "Empowering Local Businesses",
    subText: `Recognise the struggle of local SMEs in the current economic climate. Prevail is committed to empowering these businesses, providing them with the tools and resources to compete effectively against larger enterprises.`,
  },
  {
    icon: <Devices sx={{ color: "#884ED7" }} />,
    mainText: "Innovative and Accessible Technology",
    subText: `Address the gap in technology accessibility between large corporations and “small-to-medium-sized" enterprises (SMEs). Prevail will focus on bringing innovative, affordable tech solutions to local businesses, allowing them to harness automation and other advancements without the need for full-time programmers.`,
  },
  {
    icon: <TipsAndUpdates sx={{ color: "#884ED7" }} />,
    mainText: "Adaptive Business Strategies",
    subText: `Understand the volatility in consumer demands and behaviours. Prevail offers insights and tools to help local businesses quickly adapt to changing market conditions, ensuring they remain competitive and responsive to consumer needs.`,
  },
  {
    icon: <Balance sx={{ color: "#884ED7" }} />,
    mainText: "Market Equity and Fair Competition",
    subText: `Address the challenge of market share decline for local businesses. Prevail stands for creating a more equitable market where local businesses can compete fairly with larger enterprises, ensuring diversity and choice in the market.`,
  },
];

export default function AccordionUsage() {
  return (
    <Box
      borderRadius={1}
      sx={{
        backgroundColor: "white",
        padding: "2vw",
        borderRadius: "1vw",
        fontFamily: theme.typography.fontFamily,
      }}
    >
      {goalsObj.map((data, index) => (
        <Accordion
          disableGutters
          key={index}
          sx={{
            width: "50vw",
            fontFamily: theme.typography.fontFamily,
            "@media (max-width: 600px)": {
              width: "95vw",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            variant="center"
            sx={{
              display: "flex",
              alignItems: "center",

              "@media (max-width: 600px)": {
                fontSize: "4vw",
              },
            }}
          >
            {data.icon}

            <Typography
              sx={{
                margin: "auto",
                fontSize: theme.typography.fontSize,
                fontFamily: theme.typography.fontFamily,
                "@media (max-width: 600px)": {
                  fontSize: "4vw",
                  fontWeight: "bold",
                  textAlign: "center",
                },
              }}
            >
              {data.mainText}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              textAlign: "justify",
              textJustify: "distribute",
              fontFamily: theme.typography.fontFamily,
              "@media (max-width: 600px)": {
                fontSize: "4vw",
              },
            }}
          >
            {data.subText}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
