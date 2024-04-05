import { Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import imago from "../assets/nic.png";

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
const PainPoint = () => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        width: "80vw",
        display: "flex",
        margin: "5vh auto 10vh auto",
        height: "80vh",
        // marginTop: "5vh",
        // paddingLeft: "10vw",
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
            fontSize: "2vw",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "3vh",
            "@media (max-width: 600px)": {
              fontSize: "6vw",
              margin: "2vh 0",
              textAlign: "center"
            },
          }}
        >
          Digital Landscape & Technical Difficulties
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
              textAlign: "center",
              width: "95vw",
            },
          }}
        >
          In the vast digital landscape, technical challenges often overshadow
          the aspirations of local businesses. Many SMEs struggle with a generic
          online presence that fails to capture the essence of their brand.
          Prevail understands the frustration of navigating through complex web
          development processes to find a distinctive identity that goes beyond
          cookie-cutter designs. That is why our “Custom Website Development &
          Management” service is designed to simplify the technicalities,
          transparency, and engaging features tailored to your business needs.
        </Typography>
      </Grid>
      <img
        className={classes.imageInit}
        style={{}}
        src="https://img.freepik.com/free-photo/beautiful-stylish-staff-sitting-office-desk-using-laptop-listening-colleague_146671-15596.jpg?t=st=1711557988~exp=1711561588~hmac=e8f9e9f1a52c4397e8f47c4944845ee587db6ae260157183b67dea721207ba98&w=740"
        alt=""
      />
    </Grid>
  );
};

export default PainPoint;
