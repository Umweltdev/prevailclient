import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  imageCard: {
    background: "#e2ccf7",
    width: "80vw",
    display: "flex",
    padding: "2vw",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "2vw",
    color: "#333",
    margin: "5vh auto",
  },

  overviewHeader: {
    fontSize: "7vw",
  },
});

const Overview = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.imageCard}>
      <Grid>
        <Typography sx={{ fontSize: "3vw", fontWeight: "bold" }}>
          Overview
        </Typography>
        <Grid
          sx={{
            background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
            height: "0.8vh",
            width: "10vw",
            margin: "2vh 1vw",
          }}
        ></Grid>
        <Typography sx={{ fontSize: "1.3vw", width: "100%" }}>
          A cleaning company based in Dublin called New Vision Cleaning
          approached us with a clear need: they wanted to start an online
          presence for their company but were unable to do so due to the owner's
          busy schedule and a lack of digital and branding expertise.
        </Typography>
      </Grid>
      <Grid
        sx={{
          background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
          height: "14vh",
          width: "1vw",
          margin: "2vh 2vw",
        }}
      ></Grid>
      <Grid sx={{ width: "35vw" }}>
        <Typography sx={{ fontSize: "1.8vw", fontWeight: "bold" }}>
          Type of Work
        </Typography>
        <Typography>Facebook Marketing</Typography>
        <Typography>Instagram Management</Typography>
      </Grid>
    </Grid>
  );
};

export default Overview;
