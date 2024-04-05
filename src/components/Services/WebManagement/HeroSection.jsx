import { Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import landingImage1 from "../assets/web.png";

const useStyles = makeStyles({
  // imagePlaform: {
  //   width: "78vw",
  //   height: "50vh",
  //   objectFit: "cover",
  //   borderRadius: "5px",
  //   boxShadow:
  //     "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",

  //   "@media (max-width: 600px)": {
  //     width: "unset",
  //     height: "unset",
  //   },
  // },
  imageInit: {
    width: "40vw",
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
        width: "70vw",
        display: "flex",
        margin: "auto",
        marginTop: "10vh",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        gap: "6vw",
        "@media (max-width: 600px)": {
          width: "95vw",
          flexDirection: "column",
          marginBottom: "1vh",
          // gap: "5vw",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1vw",
          height: "60vh"
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
          margin: "auto",
          "@media (max-width: 600px)": {
            width: "95vw",
          },
        }}
      >
        <Typography
          sx={{
            display: "flex",
            fontSize: "2.5vw",
            fontWeight: "bold",
            color: "#494848",
            marginBottom: "3vh",
            "@media (max-width: 600px)": {
              fontSize: "6vw",
              margin: "2vh 0",
            },
          }}
        >
          Website Development & Management
        </Typography>
        <Typography
          sx={{
            fontSize: "1.4vw",
            color: "#636363",
            marginBottom: "3vh",
            // textAlign: "justify",
            width: "37vw",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              textAlign: "justify",
              width: "95vw",
            },
          }}
        >
          In today's fast-paced digital world, small to medium-sized enterprises
          (SMEs) and local businesses face unique challenges. The need for a
          robust and dynamic online presence is more critical than ever.
          Understanding this, Prevail proudly introduces our innovative "Website
          Production & Management" service, a game-changer in digital solutions.
        </Typography>
      </Grid>
      <img
        className={classes.imageInit}
        style={{}}
        src="https://img.freepik.com/premium-photo/two-software-coders-analyzing-source-code-looking-errors-laptop-checking-big-tv-monitor-it-agency-office-programmers-working-cyber-security-innovation-busy-company-space_482257-59139.jpg?w=826"
        alt=""
      />
    </Grid>
  );
};

export default HeroSection;
