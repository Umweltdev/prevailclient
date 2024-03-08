import React from "react";
import { Typography, Grid, ThemeProvider, createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import landingImage1 from "../assets/brandd.png";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#884ed9",
    color: "#FFF",
    paddingTop: "10vh",

    "&::before": {
      position: "absolute",
      top: 0,
      left: -50,
      width: "150%",
      height: "150%",
      backgroundColor: "#dccefa",
      transformOrigin: "top right",
      transform: "skewY(-45deg)",
      margin: "0 auto",
    },

    "@media (max-width: 600px)": {
      position: "unset",
      overflow: "hidden",
      backgroundColor: "#884ed9",
      color: "#FFF",
      paddingTop: "10vh",
      width: "unset",
      height: "unset",
      left: "unset",
      
    },
  },
  heroContainer: {
    display: "flex",
    flexDiection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 10vw",

    "@media (max-width: 600px)": {
      display: "unset",
      flexDiection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "10vw",
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
    // "@media (max-width: 600px)": {
    //   display: "none",
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
                fontSize: "4vw",
                fontWeight: "900",
                color: "white",
                "@media (max-width: 600px)": {
                  fontSize: "7vw",
                  fontWeight: "900",
                  textAlign: "center",
                },
              }}
            >
              Brand Identity
            </Typography>
            <Typography
              sx={{
                fontSize: "1vw",
                fontWeight: "600",
                width: "40vw",
                lineHeight: "4vh",
                color: "white",
                "@media (max-width: 600px)": {
                  fontSize: "3vw",
                  fontWeight: "unset",
                  width: "95vw",
                  lineHeight: "unset",
                  color: "white",
                  textAlign: "center",
                },
              }}
            >
              Creating a cohesive brand identity is crucial in today's crowded
              digital and physical landscape. Our "Brand Identity Package"
              service lays the foundation for a lasting impression. We closely
              collaborate with you to define your unique brand identity,
              crafting eye-catching logos and compelling marketing materials,
              ensuring a harmonious visual identity that resonates across all
              marketing touchpoints.
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
