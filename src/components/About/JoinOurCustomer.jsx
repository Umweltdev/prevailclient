import { Button, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import imago from "./assets/emojistar 1.png";
import imago2 from "./assets/Visual.png";

const JoinOurCustomer = () => {
  return (
    <Grid
      container
      sx={{
        background: "#0D0E30",
        color: "white",
        py: "147px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        "@media (max-width: 900px)": {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <CardMedia
        component={"img"}
        image={imago}
        sx={{
          width: "404px",
          position: "relative",
          top: "160px", 
          "@media (max-width: 900px)": {
            width: "80%",
            top: "0",
            marginBottom: "20px",
          },
        }}
      />
      <Grid
        item
        sx={{
          textAlign: "center",
          width: "674px",
          "@media (max-width: 900px)": {
            width: "100%",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "48px",
            fontWeight: "500",
            lineHeight: "110%",
            letterSpacing: "-0.48px",
            mb: "24px",
            "@media (max-width: 900px)": {
              fontSize: "8vw",
            },
          }}
        >
          Join Happy Customers Who Already Trust Us
        </Typography>
        <Typography
          sx={{
            color: "#8591AE",
            fontSize: "18px",
            fontWeight: "400",
            mb: "24px",
            "@media (max-width: 900px)": {
              fontSize: "4.5vw",
            },
          }}
        >
          Connect the dots between Customer needs and your product delivery
          workflows
        </Typography>
        <Button
          sx={{
            color: "#fff",
            background: "#6E3EF4",
            width: "144px",
            fontSize: "16px",
            borderRadius: "25px",
            "@media (max-width: 900px)": {
              width: "80%",
              fontSize: "4vw",
            },
          }}
        >
          Sign Up
        </Button>
      </Grid>
      <CardMedia
        component={"img"}
        image={imago2}
        sx={{
          width: "404px",
          position: "relative",
          top: "-147px", // Adjusted to align with the left image
          "@media (max-width: 900px)": {
            width: "80%",
            top: "0",
            marginTop: "20px",
          },
        }}
      />
    </Grid>
  );
};

export default JoinOurCustomer;
