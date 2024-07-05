import React from "react";
import { Typography, Grid, ThemeProvider, createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
//import landingImage1 from "../assets/pos.png";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    overflow: "visible",
    backgroundColor: "white",
    color: "#333",
    padding: "30vh 0",
    height: "100vh",
    "@media (max-width: 600px)": {
      position: "relative",
      overflow: "visible",
      backgroundColor: "white",
      color: "#333",
      padding: "15vh 0 1vh 0",
      height: "60vh",
    },
  },
  heroContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "7vw",
    padding: "0 10vw",

    "@media (max-width: 600px)": {
      display: "unset",
      flexDiection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "1vw",
      padding: "unset",
      margin: "0 auto",
    },
  },
  textContainer: {
    width: "70vw",
    "@media (max-width: 600px)": {
      width: "100%",
    },
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
    width: "37vw",
    borderRadius: "1vw",
    // height: "auto",
    // animation: "$bounce 2s infinite alternate",
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
  // "@keyframes bounce": {
  //   "0%": {
  //     transform: "translateY(0)",
  //   },
  //   "100%": {
  //     transform: "translateY(-20px)",
  //   },
  // },
}));

const HeroSection = ({ header, text, image }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.hero}>
        <Grid className={classes.heroContainer}>
          <Grid className={classes.textContainer}>
            <Typography
              sx={{
                fontSize: "3vw",
                fontWeight: "900",
                color: "#333",
                "@media (max-width: 600px)": {
                  fontSize: "7vw",
                  fontWeight: "900",
                  textAlign: "center",
                },
              }}
            >
              Marketing Price Displacement (MPD)
            </Typography>
            <Typography
              sx={{
                fontSize: "1vw",
                fontWeight: "600",
                width: "40vw",
                lineHeight: "4vh",
                color: "#333",
                "@media (max-width: 600px)": {
                  fontSize: "4vw",
                  fontWeight: "unset",
                  width: "95vw",
                  lineHeight: "unset",
                  color: "#333",
                  textAlign: "center",
                  margin: "0 auto",
                },
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
              src="https://img.freepik.com/premium-photo/multicolored-shopbags-bundle-dollars-coins-gray-background-shopping-concept_668389-686.jpg?w=740"
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
