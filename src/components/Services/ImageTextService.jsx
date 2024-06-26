import { Button, CardMedia, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ImageTextService = ({ text, imageUrl, textHeader, url }) => {
  return (
    <Stack
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center", // Center content horizontally
        alignItems: "center", // Center content vertically
        gap: "239px", // Add a gap between items
        "@media (max-width: 600px)": {
          width: "95vw",
          flexDirection: "column-reverse",
          margin: "auto",
          marginBottom: "1vh",
          gap: "20px", // Gap for small screens
          justifyContent: "center", // Center content on small screens
          alignItems: "center",
        },
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt=""
        sx={{
          width: "34vw",
          height: "300px",
          borderRadius: "16px",
          "@media (max-width: 600px)": {
            width: "90vw",
            height: "365.756px",
            borderRadius: "16px",
          },
        }}
      />
      <Grid
        item
        sx={{
          width: "34vw",
          "@media (max-width: 600px)": {
            width: "90vw",
          },
        }}
      >
        <Typography
          sx={{
            display: "flex",
            fontSize: "28px",
            fontWeight: "500",
            color: "#1D0D40",
            marginBottom: "20px",
            lineHeight: "110%",
            letterSpacing: "-0.28px",
            "@media (max-width: 600px)": {
              fontSize: "6vw",
              margin: "2vh 0",
              width: "90vw",
            },
          }}
        >
          {textHeader}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#505660",
            marginBottom: "3vh",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
            },
          }}
        >
          {text}
        </Typography>
        <Link to={url}>
          <Button
            sx={{
              color: "#fff",
              background: "#1D0D40",
              border: "1px solid #1D0D40",
              width: "144px",
              borderRadius: "25px",
              alignSelf: "center", // Center button
              "&:hover": {
                color: "#fff",
                background: "#1D0D40",
              },
              "@media (max-width: 600px)": {
                margin: "0 auto",
                justifyContent: "center",
              },
            }}
          >
            Learn more
          </Button>
        </Link>
      </Grid>
    </Stack>
  );
};

export default ImageTextService;
