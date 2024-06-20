import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import Accordion from "./assets/Accordion";
import AccordionUsage from "./assets/Accordion";
import imago from "./assets/image128.png";

const FAQ = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "70px",
        background: "#F9FAFC",
        padding: "143px 0",
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
          "@media (max-width: 600px)": {
            pl: "unset",
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
