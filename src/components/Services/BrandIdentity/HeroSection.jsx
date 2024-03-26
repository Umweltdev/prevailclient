import { Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import landingImage1 from "../assets/brandd.png";

const useStyles = makeStyles({
  imagePlaform: {
    width: "78vw",
    height: "50vh",
    objectFit: "cover",
    borderRadius: "5px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",

    "@media (max-width: 600px)": {
      width: "unset",
      height: "unset",
    },
  },
  imageInit: {
    width: "37vw",
    borderRadius: "1vw",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    "@media (max-width: 600px)": {
      width: "95vw",
      height: "unset",
    },
  },
});

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Grid
          sx={{
            width: "78vw",
            display: "flex",
            marginBottom: "5vh",
            marginTop: "5vh",
            paddingLeft: "10vw",
            // gap: "5vw",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "5vw",
            "@media (max-width: 600px)": {
              width: "95vw",
              flexDirection: "column",
              marginBottom: "1vh",
              // gap: "5vw",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1vw",
            },
          }}
        >
          {/* <spline-viewer
            style={{ width: "37vw", height: "40vh" }}
            url="https://prod.spline.design/kqWnRSHfs03RcYiO/scene.splinecode"
          ></spline-viewer> */}
           <Grid
            sx={{
              width: "37vw",
              "@media (max-width: 600px)": {
                width: "95vw",
              },
            }}
          >
            <Typography
              sx={{
                display: "flex",
                fontSize: "1.8vw",
                fontWeight: "bold",
                color: "#494848",
                marginBottom: "3vh",
                "@media (max-width: 600px)": {
                  fontSize: "6vw",
                  margin: "2vh 0",
                },
              }}
            >
              Brand Identity
            </Typography>
            <Typography
              sx={{
                fontSize: "1.4vw",
                color: "#636363",
                marginBottom: "3vh",
                textAlign: "justify",
                width: "37vw",
                "@media (max-width: 600px)": {
                  fontSize: "4vw",
                  textAlign: "justify",
                  width: "95vw",
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
          <img
            className={classes.imageInit}
            style={{}}
            src={landingImage1}
            alt=""
          />
        </Grid>
      
  );
};

export default HeroSection;
