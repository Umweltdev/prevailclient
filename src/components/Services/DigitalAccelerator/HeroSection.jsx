import React from "react";
import { Typography, Grid, ThemeProvider, createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import landingImage1 from "../assets/pk.png";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    overflow: "visible",
    backgroundColor: "#884ed9",
    color: "#FFF",
    padding: "20vh 10vw 5vh 10vh",
    // Add the clip-path property for the diagonal line
    clipPath: "polygon(0 0, 100% 100, 100% 50%, 50% 100%)",

    "@media (max-width: 600px)": {
      position: "unset",
      overflow: "hidden",
      backgroundColor: "#884ed9",
      color: "#FFF",
      paddingTop: "15vh",
      width: "unset",
      height: "unset",
      left: "unset",
      clipPath: "unset",
      padding: "unset",
    },
  },
  heroContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10vw",
    padding: "0 10vw",
    "@media (max-width: 600px)": {
      display: "unset",
      flexDiection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "11vw",
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
    // "@media (max-width: 600px)": {
    //   width: "100vw",
    // },
  },
  textHeader: {
    fontSize: "4vw",
    fontWeight: "900",
  },
  image: {
    height: "auto",
    animation: "$bounce 2s infinite alternate",
    "@media (max-width: 600px)": {
      width: "70vw",
    },
  },
  "@keyframes bounce": {
    "0%": {
      transform: "translateY(0)",
    },
    "100%": {
      transform: "translateY(-20px)",
    },
  },
  // Add a new class for the diagonal line with blue color
  diagonalLine: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "50%",
    height: "100%",
    backgroundColor: "blue",
    "@media (max-width: 600px)": {
      position: "unset",
      backgroundColor: "unset",
      height: "unset",
      width: "unset",
    },
  },
}));

const HeroSection = ({ header, text, image }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.hero}>
        {/* Add the diagonal line element */}
        <div className={classes.diagonalLine}></div>
        <Grid className={classes.heroContainer}>
          <Grid className={classes.textContainer}>
            <Typography
              sx={{
                fontSize: "3vw",
                fontWeight: "900",
                color: "#fff",
                "@media (max-width: 600px)": {
                  fontSize: "8vw",
                  fontWeight: "900",
                  textAlign: "center",
                  margin: "0 auto",
                },
              }}
            >
              Digital Accelerator
            </Typography>
            <Typography
              sx={{
                fontSize: "1vw",
                fontWeight: "600",
                width: "40vw",
                lineHeight: "4vh",
                color: "#fff",
                "@media (max-width: 600px)": {
                  fontSize: "4.5vw",
                  fontWeight: "unset",
                  width: "95vw",
                  lineHeight: "unset",
                  color: "white",
                  textAlign: "center",
                  margin: "0 auto",
                },
              }}
            >
              Attention SMEs and local businesses in Ireland! The digital
              landscape is evolving rapidly, and it is no longer an option to
              stay competitive, but a necessity. Imagine having a cutting-edge
              website, a brand identity that resonates with your audience, and a
              marketing strategy that puts you at the top of search results.
              This is not just a dream; it is possible with our "Digital
              Accelerator" bundle. This package seamlessly integrates three core
              services: Website Production & Management, Brand Identity Package,
              and Search Engine Marketing (SEM). The "Digital Accelerator"
              bundle is more than just a bundle of services—it's your strategic
              gateway to a cohesive, impactful, and cost-effective digital
              presence.
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
