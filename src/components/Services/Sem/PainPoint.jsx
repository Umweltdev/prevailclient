import { Grid, Typography } from "@mui/material";
import React from "react";
import imago from "../assets/nic.png";

const PainPoint = ({ header, text, image }) => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "5vh 0",
        // background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
        gap: "4vw",
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
            // color: "white",
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
    </Grid>
  );
};

export default PainPoint;
