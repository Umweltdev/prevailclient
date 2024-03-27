import { Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import imago from "../assets/sect2.png";

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

const PainPoint = () => {
  const classes = useStyles()
  
  return (
    <Grid
      sx={{
        width: "80vw",
        display: "flex",
        marginBottom: "5vh",
        marginTop: "5vh",
        // paddingLeft: "10vw",
        // gap: "5vw",
        justifyContent: "center",
        alignItems: "center",
        gap: "6vw",
        margin: "10vh auto 20vh auto",
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
      <img
        className={classes.imageInit}
        style={{}}
        src="https://img.freepik.com/free-photo/mockup-tablet-bulk-products-store_482257-76266.jpg?t=st=1711560547~exp=1711564147~hmac=c27c4304684b89d1e12bd7c67313c82bcdaf17424bd07aeb7ea8d488bc2fa4c7&w=740"
        alt=""
      />
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
            fontSize: "2.5vw",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "3vh",
            "@media (max-width: 600px)": {
              fontSize: "6vw",
              margin: "2vh 0",
            },
          }}
        >
          Small and midsize enterprises
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
          Prevail is dedicated to helping SMEs and local businesses overcome the
          challenges of establishing a strong online presence in the face of
          tough competition and rapidly evolving technology. We understand the
          pain points of these businesses and offer comprehensive website
          development and management solutions that are both cutting-edge and
          user-friendly. Our services go beyond traditional website development
          models to provide a complete solution for your online presence.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PainPoint;
