import React from "react";
import { Typography, Grid, ThemeProvider, createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import landingImage1 from "../assets/bak.png";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  hero: {
    // position: "relative",
    overflow: "visible",
    backgroundColor: "#fff",
    color: "#FFF",
    padding: "29vh 10vw",
    width: "80vw",
    margin: "auto",
    // clipPath: "polygon(0 0, 100% 100, 100% 50%, 50% 100%)",
    "@media (max-width: 600px)": {
      backgroundColor: "#884ed9", // Remove the background color
      borderBottom: "1px solid #FFF", // Add a solid white border at the bottom
      clipPath: "unset",
      padding: "13vh 0 1vh 0",
    },
  },

  heroContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "8vw",
    margin: "auto",
    // padding: "0 10vw",

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
    "@media (max-width: 600px)": {
      width: "100vw",
    },
  },
  textHeader: {
    fontSize: "4vw",
    fontWeight: "900",
  },
  imago: {
    width: "40vw",
    borderRadius: "1vw",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    // height: "auto",
    // animation: "$bounce 2s infinite alternate",
    "@media (max-width: 600px)": {
      width: "70vw",
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
  // Add a new class for the diagonal line with blue color
  // diagonalLine: {
  //   position: "absolute",
  //   top: 0,
  //   right: 0,
  //   width: "50%",
  //   height: "100%",
  //   backgroundColor: "blue",
  //   "@media (max-width: 600px)": {
  //     position: "unset",
  //     backgroundColor: "unset",
  //     height: "60%",
  //     width: "unset",
  //   },
  // },
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
                fontSize: "3vw",
                fontWeight: "900",
                color: "#333",
                "@media (max-width: 600px)": {
                  fontSize: "7vw",
                  fontWeight: "900",
                  textAlign: "center",
                  margin: "3vh 0 0 0",
                },
              }}
            >
              Search Engine Marketing (SEM)
            </Typography>
            <Typography
              sx={{
                fontSize: "1.3vw",
                // fontWeight: "600",
                width: "40vw",
                lineHeight: "4vh",
                color: "#333 ",
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
              In the heart of every local business and SME beats a dream - a
              vision of growth, recognition, and success. At Prevail, we
              understand this dream and share it. In the digital marketplace,
              standing out is necessary, and our Search Engine Marketing (SEM)
              service can be a game-changer. Our comprehensive approach includes
              targeted advertising, search engine optimisation, real-time
              performance metrics, and continuous adjustment and reports that
              align with our client's missions and objectives.
            </Typography>
          </Grid>
          <Grid className={classes.imageContainer}>
            <img
              sx={{}}
              src="https://img.freepik.com/free-photo/search-engine-marketing-concept_23-2150833507.jpg?w=740"
              alt="Your Image"
              className={classes.imago}
            />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default HeroSection;
