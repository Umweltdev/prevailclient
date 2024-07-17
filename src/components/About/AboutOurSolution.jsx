import React from "react";
import DrawerAppBarWhite from "../Navbar/Appbar";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FooterNew from "../Footer/FooterNew";
import SmoothScrollUp from "../utils/SmoothScrollUp";

const useStyle = makeStyles({
  mainContainer: {
    backgroundImage:
      "url(https://img.freepik.com/free-vector/white-technology-wallpaper-theme_23-2148416480.jpg?t=st=1710155356~exp=1710158956~hmac=63bb0e05d938195db306a2e0db1da7208c7150c207c173732d62e71e24dbc1d5&w=740)",
    height: "70vh",
    backgroundPosition: "center fixed",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: " fixed",
    backgroundSize: "cover",
    "@media (max-width: 600px)": { fontSize: "7vw", height: "40vh" },
  },

  hero: {
    padding: "30vh 0 0 5vw",
    "@media (max-width: 600px)": { padding: "20vh 0 0 10vw" },
  },

  heroText: {
    color: "#7097da",
    fontSize: "8vw",
    fontWeight: "bold",
    fontFamily: "Sarabun",
    "@media (max-width: 600px)": { fontSize: "10vw", fontWeight: "bold" },
  },

  imago: {
    width: "25vw",
    height: "25vw",
    objectFit: "cover",
    fontSize: "8vw",
    "@media (max-width: 600px)": {
      width: "85vw",
      height: "85vw",
      objectFit: "cover",
      fontSize: "8vw",
    },
  },
});

const AboutOurSolution = () => {
  const classes = useStyle();
  return (
    <Grid>
      <DrawerAppBarWhite />
      <Grid className={classes.mainContainer}>
        <Grid className={classes.hero}>
          <Typography variant="" className={classes.heroText}>
            Our Solution
          </Typography>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "2vw",
          "@media (max-width: 600px)": {
            flexDirection: "column",
            margin: "2vh 0",
          },
        }}
      >
        <Typography
          sx={{
            padding: "10vh 0",
            // margin: "0 auto",
            textAlign: "justify",
            width: "55vw",
            fontFamily: "Sarabun",
            "@media (max-width: 600px)": {
              padding: "3vh 0",
              // margin: "0 auto",
              textAlign: "justify",
              textJustify: "distribute",
              width: "95vw",
            },
          }}
        >
          This is where Prevail takes centre stage. We specialise in working
          closely with SMEs and local businesses, empowering them to
          differentiate themselves and position their brand effectively in front
          of their target audience. We believe in forging strong partnerships
          with our clients to develop tailored solutions that maximise both
          short-term and long-term growth. Our distinctive competencies lie in
          our seamless integration of automation, data analysis, and marketing
          strategies.
          <br /> Our ultimate goal is to enable businesses to thrive,
          irrespective of economic challenges, by providing innovative and
          holistic solutions. The Prevail approach is founded on a commitment to
          levelling the playing field for local businesses facing economic
          uncertainty. By emphasising collaboration and tailor-made strategies,
          we ensure that our clients have the tools to compete effectively in a
          dynamic digital landscape. Our focus is not just on marketing; it is
          on delivering results, sustaining growth, and prevailing against the
          odds.
        </Typography>
        <img
          className={classes.imago}
          src="https://img.freepik.com/free-vector/digital-lifestyle-concept-illustration_114360-7327.jpg?size=626&ext=jpg&ga=GA1.1.1056959296.1706817654&semt=sph"
          alt=""
        />
      </Grid>
      <SmoothScrollUp />
      <FooterNew />
    </Grid>
  );
};

export default AboutOurSolution;
