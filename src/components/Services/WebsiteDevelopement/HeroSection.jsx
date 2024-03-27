import { Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import landingImage1 from "../assets/rm.png";

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
        Custom Website Development & Management
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
        With Prevail’s “Custom Website Development & Management” service, you can embark on a digital transformation like never before. Our service offers two package options: the “Custom Website Executive Package” and the “Custom Website Elite Package”, both of which are tailored to your specific needs to create your dream website. This comprehensive solution is more than just a website - it is the key to your online success..
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
