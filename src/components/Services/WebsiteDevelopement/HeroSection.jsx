import React from "react";
import { Typography, Grid, ThemeProvider, createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import landingImage1 from "../assets/rm.png";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    overflow: "visible",
    backgroundColor: "#white",
    // color: "#FFF",
    padding: "15vh 10vw",
    clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
    "@media (max-width: 600px)": {
      position: "unset",
      overflow: "hidden",
      backgroundColor: "white",
      color: "#FFF",
      paddingTop: "15vh",
      padding: "unset",
      clipPath: "unset",
    },
  },
  heroContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "1vw",
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
    width: "60vw",
    "@media (max-width: 600px)": {
      width: "100vw",
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
                color: "blue",
                "@media (max-width: 600px)": {
                  fontSize: "5vw",
                  fontWeight: "900",
                  textAlign: "center",
                },
              }}
            >
              Custom Website Development & Management
            </Typography>
            <Typography
              sx={{
                fontSize: "1vw",
                fontWeight: "600",
                width: "40vw",
                lineHeight: "4vh",
                color: "#7097da",
                "@media (max-width: 600px)": {
                  fontSize: "3vw",
                  fontWeight: "unset",
                  width: "95vw",
                  lineHeight: "unset",
                  color: "#7097da",
                  textAlign: "center",
                  margin: "0 auto",
                },
              }}
            >
              With Prevail’s “Custom Website Development & Management” service,
              you can embark on a digital transformation like never before. Our
              service offers two package options: the “Custom Website Executive
              Package” and the “Custom Website Elite Package”, both of which are
              tailored to your specific needs to create your dream website. This
              comprehensive solution is more than just a website - it is the key
              to your online success.
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