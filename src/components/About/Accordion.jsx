import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography, Stack } from "@mui/material";
import { FAQs } from "./assets/SliderData";

export default function AccordionUsage() {
  // State to manage which accordion is expanded
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      {FAQs.map((data, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
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
                  background: "#B2B1FF",
                  height: "50px",
                  width: "50px !important",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {data.icon}
              </Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1D0D40",
                  width: "450px",
                  "@media (max-width: 600px)": {
                    width: "60vw",
                    fontSize: "16px",
                  },
                }}
              >
                {data.header}
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 4, pb: 4 }}>
            <Typography color={"#5E5472"}>{data.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
