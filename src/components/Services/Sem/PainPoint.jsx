import { Grid, Typography } from "@mui/material";
import React from "react";
import imago from "../assets/nic.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  image: {
    width: "38vw",
    // height: "450px",
    objectFit: "cover",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px;",
    borderRadius: "1vw",
    // float: "left",
    // shapeOutside: "inset(1% round 50%)",
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
        padding: "10vh 0",
        gap: "4vw",
        "@media (max-width: 600px)": {
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          padding: "2vh 0",
        },
      }}
    >
      <img
        className={classes.image}
        src="https://img.freepik.com/free-photo/cheerful-young-woman-poses-torn-yellow-paper-hole-wall-emotional-expressive-shouting-calling-with-speaker_155003-39643.jpg?t=st=1711470439~exp=1711474039~hmac=ec09f07205e91443642f252ad603a6a2bae10d50bb0ed86464ccc80ae269e071&w=740"
        alt=""
      />
      <Grid>
        <Typography
          sx={{ fontSize: "4vw", fontWeight: "900", color: "#884ed9" }}
        >
          Pain Points
        </Typography>
        <Typography
          sx={{
            fontSize: "1.5vw",
            width: "40vw",
            textAlign: "justify",
            textJustify: "distribute",
            "@media (max-width: 600px)": {
              fontSize: "4.5vw",
              width: "90vw",
              textAlign: "justify",
              textJustify: "distribute",
            },
          }}
        >
          The digital marketing landscape can seem like a complex maze. It can
          be tough for your business to stand out. It is like trying to be heard
          in a bustling crowd. Our SEM service is like giving you a microphone,
          ensuring your voice reaches the right audience. In addition, we know
          budgets can be tight. That is why our approach focuses on targeted
          strategies that make every dollar count, avoiding the scattergun
          approach that can drain resources without delivering results.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PainPoint;
