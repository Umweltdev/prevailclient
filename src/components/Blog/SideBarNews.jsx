import { Grid, Typography } from "@mui/material";
import React from "react";

const SideBarNews = ({ header, img }) => {
  return (
    <Grid
      sx={{
        display: "flex",
        gap: "2vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{
          width: "10vw",
          borderRadius: "5px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          height: "13vh",
        }}
        src={img}
        alt=""
      />
      <Typography sx={{ width: "20vw" }}>{header}</Typography>
    </Grid>
  );
};

export default SideBarNews;
