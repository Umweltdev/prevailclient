import { Grid, Typography } from "@mui/material";
import React from "react";
import imago from "../assets/nic.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  image: {
    width: "450px",
    height: "450px",
    objectFit: "contain",
    //   borderRadius: "50%",
    float: "left",
    shapeOutside: "inset(1% round 50%)",
    "@media (max-width: 600px)": {
      width: "80vw",
      height: "unset",
    },
  },
});

const PainPoint = ({ header, text, image }) => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "5vh 0",
        background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
        gap: "4vw",
        "@media (max-width: 600px)": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2vh 0",
          background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
          gap: "1vw",
        },
      }}
    >
      <Grid>
        {/* <Typography
          sx={{ fontSize: "4vw", fontWeight: "900", color: "#884ed9" }}
        >
          Pain Points
        </Typography> */}
        <Typography
          sx={{
            fontSize: "1.5vw",
            width: "40vw",
            textAlign: "justify",
            textJustify: "distribute",
            color: "white",
            "@media (max-width: 600px)": {
              fontSize: "4.5vw",
              width: "95vw",
              textAlign: "justify",
              textJustify: "distribute",
              color: "white",
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
       
        className={classes.image}
        src={imago}
        alt=""
      />
    </Grid>
  );
};

export default PainPoint;
