import { Grid, Typography } from "@mui/material";
import React from "react";
import imago from "../assets/mirr.png";

const PainPoint = ({ header, text, image }) => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: "5vh 0",
      }}
    >
      <img
        style={{
          width: "450px",
          height: "450px",
          objectFit: "contain",
          //   borderRadius: "50%",
          float: "left",
          shapeOutside: "inset(1% round 50%)",
        }}
        src={imago}
        alt=""
      />
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