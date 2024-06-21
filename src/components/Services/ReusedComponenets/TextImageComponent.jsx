import React from "react";
import { Card, CardMedia, Grid, Typography, Box } from "@mui/material";

const TextImageComponent = ({ header, text, img }) => {
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
          {header}
        </Typography>
        <Typography
          sx={{
            color: "#505660;",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "150%",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
          dangerouslySetInnerHTML={{ __html: text }}
        ></Typography>
      </Grid>
      <CardMedia
        component={"img"}
        image={img}
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

export default TextImageComponent;
