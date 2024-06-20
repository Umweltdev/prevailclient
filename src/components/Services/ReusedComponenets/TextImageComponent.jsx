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
          gap: "20px",
          ml: "10vw",
          width: "468px",
          "@media (max-width: 600px)": {
            width: "90vw",
            flexDirection: "column",
            ml: "unset",
            mt: "40px",
          },
        }}
      >
        <Typography
          sx={{
            color: "#1D0D40",
            fontSize: "28px",
            fontWeight: " 500",
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
          }}
          dangerouslySetInnerHTML={{ __html: text }}
        ></Typography>
      </Grid>
      <CardMedia
        component={"img"}
        image={img}
        sx={{
          width: "45vw",
          "@media (max-width: 600px)": {
            width: "90vw",
            mt: "5vh",
            borderRadius: "14px"
          },
        }}
      />
    </Box>
  );
};

export default TextImageComponent;
