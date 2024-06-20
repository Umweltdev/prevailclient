import { Button, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import imago from "../assets/cube-helix 1.png";
import imago2 from "../assets/cube-helix 2.png";

const TakeAction = () => {
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
          py: "107px",
        },
      }}
    >
      <CardMedia
        component={"img"}
        image={imago2}
        sx={{
          width: "205px",
          position: "relative",
          top: "-160px",
          "@media (max-width: 900px)": {
            display: "none",
          },
        }}
      />
      <Grid
        item
        sx={{
          textAlign: "center",
          width: "50vw",
          left: "24vw",
          position: "absolute",
          "@media (max-width: 900px)": {
            width: "90vw",
            position: "unset",
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
          Take Action Now
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
          Don’t let budget constraints hold you back. Sign up for the Marketing
          Price Displacement API today and begin your journey toward a smarter,
          more agile business strategy. With Prevail, the path to enhanced
          market presence and profitability is just a few click away. 
        </Typography>
        <Button
          sx={{
            color: "#fff",
            background: "#6E3EF4",
            width: "144px",
            fontSize: "16px",
            borderRadius: "25px",
            "@media (max-width: 900px)": {
              width: "50%",
              fontSize: "4vw",
            },
          }}
        >
          Sign Up
        </Button>
      </Grid>
      <CardMedia
        component={"img"}
        image={imago}
        sx={{
          width: "547px",
          position: "relative",
          top: "147px",
          right: "-100px",
          "@media (max-width: 900px)": {
            display: "none",
          },
        }}
      />
    </Grid>
  );
};

export default TakeAction;
