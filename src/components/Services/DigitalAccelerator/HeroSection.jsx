import React from "react";
import { Typography, Grid, ThemeProvider, createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import landingImage1 from "../assets/pk.png";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  hero: {
    // position: "relative",
    // overflow: "visible",
    backgroundColor: "#fff",
    color: "#333",
    padding: "17vh 0vw 5vh 0vh",
    height: "100vh",
    margin: "0 auto",
    // Add the clip-path property for the diagonal line
    // clipPath: "polygon(0 0, 100% 100, 100% 50%, 50% 100%)",

    "@media (max-width: 600px)": {
      position: "unset",
      overflow: "hidden",
      backgroundColor: "#white",
      color: "#333",
      paddingTop: "15vh",
      width: "unset",
      height: "100vh",
      left: "unset",
      clipPath: "unset",
      padding: "10vh 0vw 0vh 0vh",
    },
  },
  heroContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "3vw",
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
  // imageContainer: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   zIndex: "100",
  //   // height: "10vh",
  //   // "@media (max-width: 600px)": {
  //   //   width: "100vw",
  //   // },
  // },
  textHeader: {
    fontSize: "4vw",
    fontWeight: "900",
  },
  image: {
    height: "auto",
    width: "42vw",
    borderRadius: "1vw",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
    "@media (max-width: 600px)": {
      width: "90vw",
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
  spline: {
    width: "20vw",
    height: "30vh",
  },
}));

const HeroSection = ({ header, text, image }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.hero}>
        {/* Add the diagonal line element */}
        {/* <div className={classes.diagonalLine}></div> */}
        <Grid className={classes.heroContainer}>
          <Grid className={classes.textContainer}>
            <Typography
              sx={{
                fontSize: "1.5vw",
                fontWeight: "900",
                color: "#884ed9",
                marginBottom: "1.5vh",
                "@media (max-width: 600px)": {
                  fontSize: "4vw",
                  fontWeight: "900",
                  textAlign: "center",
                  margin: "0 auto",
                },
              }}
            >
              Starter Pack
            </Typography>
            <Typography
              sx={{
                fontSize: "3vw",
                fontWeight: "900",
                color: "#333",
                marginBottom: "1vh",
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
                fontSize: "1.3vw",
                // fontWeight: "600",
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
                  margin: "2vh auto",
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
          {/* <img
              sx={{}}
              src="https://img.freepik.com/premium-photo/rocket-coming-out-laptop-screen-white-background-ai-digital-illustration-concept-ideas-start-up-generative-ai_620624-6796.jpg?w=740"
              alt="Your Image"
              className={classes.image}
            /> */}
          {/* <spline-viewer url="https://prod.spline.design/qcQ3N9XvycPUNkgo/scene.splinecode"></spline-viewer> */}
          <spline-viewer
            className={classes.spline}
            url="https://prod.spline.design/qcQ3N9XvycPUNkgo/scene.splinecode"
          ></spline-viewer>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default HeroSection;
