import { Grid, Typography } from "@mui/material";
import React from "react";
import imago from "../assets/sect2.png";

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
        style={{
          width: "450px",
          height: "450px",
          objectFit: "contain",
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
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              width: "90vw",
              textAlign: "justify",
              textJustify: "distribute",
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
