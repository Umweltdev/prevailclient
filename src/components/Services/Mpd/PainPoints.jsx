import { Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  image: {
    width: "40vw",
    // height: "450px",
    objectFit: "cover",
    borderRadius: "1vw",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",

    // shapeOutside: "inset(1% round 50%)",
    "@media (max-width: 600px)": {
      width: "95vw",
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
        gap: "5vw",
        height: "100vh",
        // width: "80vw",
        margin: "0 auto",
        "@media (max-width: 600px)": {
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          padding: "1vh 0",
          color: "#333",
          height: "100vh",
        },
      }}
    >
      <img
        className={classes.image}
        src="https://img.freepik.com/free-photo/accountant-calculating-profit-with-financial-analysis-graphs_74855-4937.jpg?w=740"
        alt=""
      />
      <Grid>
        <Typography
          sx={{
            fontSize: "4vw",
            fontWeight: "900",
            color: "white",
            "@media (max-width: 600px)": {
              fontSize: "7vw",
              color: "#333",
            },
          }}
        >
          Pain Points
        </Typography>
        <Typography
          sx={{
            fontSize: "1.4vw",
            width: "40vw",
            textAlign: "justify",
            textJustify: "distribute",
            color: "#fff",
            "@media (max-width: 600px)": {
              fontSize: "4.5vw",
              width: "90vw",
              textAlign: "justify",
              textJustify: "distribute",
              color: "#333",
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
