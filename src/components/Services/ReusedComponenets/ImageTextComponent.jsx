import { Card, CardMedia, Grid, Typography, Box } from "@mui/material";
import React from "react";

const ImageTextComponent = ({ img, header, text }) => {
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
        image={img}
        sx={{
          width: "50vw",
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
          {header}
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
          dangerouslySetInnerHTML={{ __html: text }}
        ></Typography>
      </Grid>
    </Box>
  );
};

export default ImageTextComponent;
