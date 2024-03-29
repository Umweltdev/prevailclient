import { Grid, Typography } from "@mui/material";
import React from "react";
import imago from "../assets/look.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  image: {
    width: "25vw",
    height: "450px",
    objectFit: "contain",
    borderRadius: "1vw",

    // shapeOutside: "inset(1% round 50%)",
    "@media (max-width: 600px)": {
      display: "none",
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
        // backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: "5vh 0",
        background: "#884ed9",
        gap: "9vw",
        height: "100vh",
        // width: "80vw",
        margin: "0 auto",
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
      <img className={classes.image} src={imago} alt="" />
      <Grid>
        <Typography sx={{ fontSize: "4vw", fontWeight: "900", color: "white" }}>
          Pain Points
        </Typography>
        <Typography
          sx={{
            fontSize: "1.4vw",
            width: "50vw",
            textAlign: "justify",
            textJustify: "distribute",
            color: "white",
            "@media (max-width: 600px)": {
              fontSize: "4.5vw",
              width: "90vw",
              textAlign: "justify",
              textJustify: "distribute",
            },
          }}
        >
          Managing digital marketing budgets and understanding how marketing
          expenses impact customer purchases can be a daunting task. Many
          businesses face obstacles when trying to optimise their marketing
          spend, which can result in inefficient budget allocation and reduced
          returns. The use of numerous spreadsheets, complicated jargon, and
          fear of making costly mistakes can make communication between the
          marketing and financial departments even more difficult. These
          challenges can impact not only the operations of your business but
          also your personal life.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PainPoint;
