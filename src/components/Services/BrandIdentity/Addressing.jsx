import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Addressing = () => {
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
          flexDirection: "column",
        },
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "left",
          margin: "auto",
          // mr: "15vw",
          gap: "20px",
          width: "30vw",
          "@media (max-width: 600px)": {
            width: "90vw",
            flexDirection: "column",
            ml: "unset",
            mt: "40px",
            margin: "40px auto 0 auto",
          },
        }}
      >
        <Typography
          sx={{
            color: "#1D0D40",
            fontSize: "28px",
            fontWeight: " 500",
            width: "385px",
          }}
        >
          Addressing Today’s Branding Challenges 
        </Typography>
        <Typography
          sx={{
            width: "468px",
            color: "#505660;",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "150%",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        >
          In the fast-paced and crowded marketplace of today, merely having a
          good product or service is not enough. SMEs and local businesses, in
          particular, face the daunting challenge of standing out. Without a
          strong brand identity, your business might get lost in the digital
          noise, overlooked by potential customers who are bombarded with
          choices. This lack of distinction can prevent you from achieving the
          recognition your brand deserves. 
        </Typography>
      </Grid>
      <CardMedia
        component={"img"}
        image="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720084559/Addressing-Branding-Challenges-_auzm2j.avif"
        alt="Addressing-Branding-Challenges-"
        sx={{
          width: "50vw",
          "@media (max-width: 600px)": {
            width: "90vw",
            mt: "5vh",
            borderRadius: "14px",
          },
        }}
      />
    </Box>
  );
};

export default Addressing;
