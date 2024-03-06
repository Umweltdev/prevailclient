import { Grid, Typography } from "@mui/material";
import React from "react";
import imago from "../assets/sect2.png";

const ServiceDetails2 = ({ header, text, image }) => {
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
      <img style={{ width: "50vw" }} src={imago} alt="" />
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
          }}
        >
          In today's fast-paced, competitive world, merely existing is not
          enough. Small and local businesses often struggle to stand out in the
          crowded marketplace. Your brand might be getting lost in the digital
          noise, and potential customers may not even notice you.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ServiceDetails2;
