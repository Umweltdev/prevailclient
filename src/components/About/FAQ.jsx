import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import Accordion from "./assets/Accordion";
import AccordionUsage from "./assets/Accordion";
import imago from "./About_Us/FAQ.webp";

const FAQ = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "70px",
        background: "#F9FAFC",

        "@media (max-width: 600px)": {
          width: "90vw",
          margin: "auto",
          padding: "50px 0",
          flexDirection: "column",
        },
      }}
      id="faqs"
    >
      <Grid
        sx={{
          pl: "5vw",
          pt: "5vh",
          "@media (max-width: 600px)": {
            pl: "unset",
            pt: "unset",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "38px",
            color: "#6E3EF4",
            fontWeight: "500",
            letterSpacing: "-0.38px",
          }}
        >
          FAQs
        </Typography>
        <AccordionUsage />
      </Grid>
      <Grid>
        <CardMedia
          component={"img"}
          image={imago}
          alt="FAQ"
          sx={{
            width: "50vw",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        />
      </Grid>
    </Box>
  );
};

export default FAQ;
