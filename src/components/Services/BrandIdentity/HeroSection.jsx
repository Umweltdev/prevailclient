import React from "react";
import { Typography, Grid, ThemeProvider, createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import landingImage1 from "../assets/brandd.png";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    backgroundColor: "#BA8BD9", // Lighter blue background
    color: "#29323C", // Darker blue text
    padding: "10vh 0", // Adjust padding for content

    "&::before": {
      display: "none",
    },

    "@media (max-width: 600px)": {
      padding: "15vh 0",
    },
  },

  heroContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 10vw", // Adjust padding based on layout choice

    "@media (max-width: 600px)": {
      flexDirection: "column",
      alignItems: "flex-start", // Text stacked on top of image on mobile
    },
  },

   textContainer: {
    width: "70vw", // Adjust based on layout choice (more space for text priority)
    marginBottom: "5vh", // Add spacing if image is below text

    "@media (max-width: 600px)": {
      width: "100%",
      textAlign: "center", // Center text on mobile
      marginBottom: "0", // Remove margin if stacked on image
    },
  },

  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    

  },
   textHeader: {
    fontSize: "5vw", // Increase header font size
    fontWeight: "bold", // Adjust font weight
    marginBottom: "2vh", // Add spacing after header
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
                  fontSize: "8vw",
                  fontWeight: "900",
                  textAlign: "center",
                  margin: "0 auto",
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
