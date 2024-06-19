import { Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import landingImage1 from "../assets/brandd.png";

const useStyles = makeStyles({
  imagePlaform: {
    width: "80vw",
    height: "50vh",
    objectFit: "cover",
    borderRadius: "5px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",

    "@media (max-width: 600px)": {
      width: "unset",
      height: "unset",
    },
  },
  imageInit: {
    width: "37vw",
    borderRadius: "1vw",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    "@media (max-width: 600px)": {
      width: "95vw",
      height: "unset",
    },
  },
});

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        width: "100vw",
        display: "flex",
        height: "298px",
        margin: "auto",
        background: "#F9FAFC",
        "@media (max-width: 600px)": {
          width: "95vw",
          height: "60vh",
          flexDirection: "column",
          marginBottom: "unset",
          margin: "15vh auto 0 auto",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1vw",
        },
      }}
    >
      <Typography
        sx={{
          margin: "auto",
          fontSize: "38px",
          fontWeight: "500",
          color: "#6E3EF4",
          mt: "176px"
        }}
      >
        Brand Identity Package
      </Typography>
    </Grid>
  );
};

export default HeroSection;
