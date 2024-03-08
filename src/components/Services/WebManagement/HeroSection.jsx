import React from "react";
import { Typography, Grid, ThemeProvider, createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import landingImage1 from "../assets/web.png";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    overflow: "visible",
    backgroundColor: "#884ed9",
    color: "#FFF",
    padding: "15vh 10vw",
    clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",

    "@media (max-width: 600px)": {
      position: "unset",
      overflow: "hidden",
      backgroundColor: "#884ed9",
      color: "#FFF",
      paddingTop: "unset",
      width: "unset",
      height: "unset",
      left: "unset",
      padding: "8vh 1vw",
    },
  },
  heroContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 10vw",

    "@media (max-width: 600px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 10vw",
    },
  },
  textContainer: {
    width: "70vw",
    "@media (max-width: 600px)": {
      width: "90vw",
      paddingTop: "10vh",
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
                fontSize: "3vw",
                fontWeight: "900",
                color: "#fff",
                "@media (max-width: 600px)": {
                  fontSize: "6vw",
                  fontWeight: "900",
                  color: "#fff",
                  textAlign: "center",
                },
              }}
            >
              Website Development & Management
            </Typography>
            <Typography
              sx={{
                fontSize: "1vw",
                fontWeight: "600",
                width: "40vw",
                lineHeight: "4vh",
                color: "#fff",
                "@media (max-width: 600px)": {
                  fontSize: "4vw",
                  fontWeight: "unset",
                  width: "95vw",
                  lineHeight: "unset",
                  color: "#fff",
                  textAlign: "center"
                },
              }}
            >
              In today's fast-paced digital world, small to medium-sized
              enterprises (SMEs) and local businesses face unique challenges.
              The need for a robust and dynamic online presence is more critical
              than ever. Understanding this, Prevail proudly introduces our
              innovative "Website Production & Management" service, a
              game-changer in digital solutions.
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
