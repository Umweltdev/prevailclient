import React from "react";
import { Typography, Grid, ThemeProvider, createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import landingImage1 from "../assets/bak.png";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    overflow: "visible",
    backgroundColor: "#884ed9",
    color: "#FFF",
    padding: "15vh 10vw",
    // Add the clip-path property for the diagonal line
    clipPath: "polygon(0 0, 100% 100, 100% 50%, 50% 100%)",
  },
  heroContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10vw",
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
  // Add a new class for the diagonal line with blue color
  diagonalLine: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "50%",
    height: "100%",
    backgroundColor: "blue",
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
              sx={{ fontSize: "3vw", fontWeight: "900", color: "#fff" }}
            >
              Search Engine Marketing (SEM)
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
