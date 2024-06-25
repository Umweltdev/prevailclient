import { Button, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import imago from "./assets/aboutT.svg";
import imago2 from "./assets/aboutTT.svg";

const JoinOurCustomer = () => {
  return (
    <Grid
      container
      sx={{
        background: "#0D0E30",
        color: "white",
        py: "147px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "80vh",
        "@media (max-width: 900px)": {
          flexDirection: "column",
          alignItems: "center",
          py: "100px",
        },
      }}
    >
      <CardMedia
        component={"img"}
        image={imago}
        sx={{
          width: "374px",
          position: "absolute",
          bottom: "0",
          left: "0",
          "@media (max-width: 900px)": {
            display: "none",
          },
        }}
      />
      <Grid
        item
        sx={{
          textAlign: "center",
          width: "674px",
          "@media (max-width: 900px)": {
            width: "310px",
            margin: "auto",
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
              fontSize: "32px",
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
            mb: "34px",
            width: "398px",
            margin: "auto",
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
            mt: "24px",
            "@media (max-width: 900px)": {
              width: "60%",
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
          width: "324px",
          position: "absolute",
          top: "0",
          right: "0",
          "@media (max-width: 900px)": {
            display: "none",
          },
        }}
      />
    </Grid>
  );
};

export default JoinOurCustomer;
