import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import imago from "../assets/image 154.png";

const SpecialImageTextComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        alignItems: "center",
        justifyContent: "space-between",
        
        "@media (max-width: 600px)": {
          display: "flex",
          width: "100vw",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column-reverse",
          mt: "40px",
          mb: "20px",
        },
      }}
    >
      <CardMedia
        component={"img"}
        image={imago}
        sx={{
          width: "50vw",
          height: "100vh",
          "@media (max-width: 600px)": {
            width: "90vw",
            borderRadius: "14px",
            mt: "4vh",
          },
        }}
      />
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "left",
          margin: "auto",
          gap: "20px",
          width: "50vw",
          // pl: "5vw",
          "@media (max-width: 600px)": {
            width: "90vw",
            borderRadius: "14px",
            mr: "unset",
            margin: "40px auto 0 auto",
          },
        }}
      >
        <Typography
          sx={{
            color: "#1D0D40",
            fontSize: "24px",
            fontWeight: " 500",
            width: "40vw",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        >
          Unleashing the Power of SEM for Local Businesses and SMEs
        </Typography>
        <Typography
          sx={{
            color: "#505660;",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "150%",
            width: "40vw",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        >
          At Prevail, we resonate deeply with the aspirations of local
          businesses and small-to-medium enterprises (SMEs) dreaming of growth,
          recognition, and success. In today's competitive digital marketplace,
          merely existing isn't enough—you need to stand out. That's where our
          Search Engine Marketing (SEM) service comes into play, a true
          game-changer for your business. <br />
          <br />
          Our comprehensive approach not only enhances visibility but ensures
          your marketing efforts resonate with your core mission and
          objectives. Our SEM strategy encompasses target advertising, technical
          site audit, website optimisation, meticulous search engine
          optimisation, real-time performance tracking, and continual
          adjustments based on detailed reports. This holistic approach is
          designed to align perfectly with your business's goal, providing a
          clear path to increased visibility and success. 
        </Typography>
      </Grid>
    </Box>
  );
};

export default SpecialImageTextComponent;
