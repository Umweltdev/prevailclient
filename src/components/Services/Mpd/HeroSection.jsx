import React from "react";
import { Typography, Grid, ThemeProvider, createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import landingImage1 from "../assets/pos.png";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    overflow: "visible",
    backgroundColor: "#884ed9",
    color: "#FFF",
    padding: "15vh 10vw",
    // clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
  },
  heroContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // gap: "10vw",
    padding: "0 10vw",
  },
  textContainer: {
    width: "70vw",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "100",
  },
  textHeader: {
    fontSize: "4vw",
    fontWeight: "900",
  },
  image: {
    height: "auto",
    animation: "$bounce 2s infinite alternate",
  },
  "@keyframes bounce": {
    "0%": {
      transform: "translateY(0)",
    },
    "100%": {
      transform: "translateY(-20px)",
    },
  },
}));

const HeroSection = ({ header, text, image }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.hero}>
        <Grid className={classes.heroContainer}>
          <Grid className={classes.textContainer}>
            <Typography
              sx={{ fontSize: "3vw", fontWeight: "900", color: "#fff" }}
            >
              Marketing Price Displacement (MPD)
            </Typography>
            <Typography
              sx={{
                fontSize: "1vw",
                fontWeight: "600",
                width: "40vw",
                lineHeight: "4vh",
                color: "#fff",
              }}
            >
              Welcome to the future of digital marketing with Prevail's
              Marketing Price Displacement (MPD) API. We understand that small
              and medium-sized enterprises (SMEs) and local businesses face
              unique challenges in the ever-changing digital landscape. It can
              be difficult to keep up with the resources of large-scale
              marketing departments from major competitors. That's why our MPD
              API is designed to be your strategic asset, bringing advanced
              strategies of elastic pricing and yield management right to your
              fingertips. With our API, you can strike the right balance between
              visibility and affordability.
            </Typography>
          </Grid>
          <Grid className={classes.imageContainer}>
            <img
              sx={{}}
              src={landingImage1}
              alt="Your Image"
              className={classes.image}
            />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default HeroSection;
