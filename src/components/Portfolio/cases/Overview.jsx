import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  //   imageCard: {
  //     background: "#e2ccf7",
  //     width: "80vw",
  //     display: "flex",
  //     flexDirection: "row",
  //     padding: "2vw",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     borderRadius: "2vw",
  //     color: "#333",
  //     margin: "5vh auto",
  //     "@media (max-width: 600px)": {
  //       background: "#e2ccf7",
  //       width: "95vw",
  //       display: "unset",
  //       flexDirection: "column",
  //       padding: "2vw",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       borderRadius: "2vw",
  //       color: "#333",
  //       margin: "5vh auto",
  //     },
  //   },
  //   overviewHeader: {
  //     fontSize: "7vw",
  //     "@media (max-width: 600px)": {
  //       fontSize: "7vh",
  //     },
  //   },
});

const Overview = () => {
  const classes = useStyles();
  return (
    <Grid
      sx={{
        background: "#e2ccf7",
        width: "80vw",
        display: "flex",
        flexDirection: "row",
        padding: "2vw",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "2vw",
        color: "#333",
        margin: "5vh auto",
        "@media (max-width: 600px)": {
          background: "#e2ccf7",
          width: "95vw",
          display: "flex",
          flexDirection: "column",
          padding: "2vh",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "2vw",
          color: "#333",
          margin: "5vh auto",
        },
      }}
    >
      <Grid>
        <Typography
          sx={{
            fontSize: "3vw",
            fontWeight: "bold",
            "@media (max-width: 600px)": {
              fontSize: "4.5vh",
              fontWeight: "bold",
            },
          }}
        >
          Overview
        </Typography>
        <Grid
          sx={{
            background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
            height: "0.8vh",
            width: "10vw",
            margin: "2vh 1vw",
            "@media (max-width: 600px)": {
              background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
              height: "0.5vh",
              width: "40vw",
              margin: "1vh 1vw",
            },
          }}
        ></Grid>
        <Typography
          sx={{
            fontSize: "1.3vw",
            width: "100%",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              width: "100%",
              textAlign: "justify",
              textJustify: "distribute",
            },
          }}
        >
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
          "@media (max-width: 600px)": {
            display: "none",
          },
        }}
      ></Grid>
      <Grid
        sx={{
          width: "35vw",
          "@media (max-width: 600px)": {
            width: "95vw",
            padding: "2vh",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "1.8vw",
            fontWeight: "bold",
            "@media (max-width: 600px)": {
              fontSize: "3vh",
              fontWeight: "bold",
            },
          }}
        >
          Type of Work
        </Typography>
        <Typography>Facebook Marketing</Typography>
        <Typography>Instagram Management</Typography>
      </Grid>
    </Grid>
  );
};

export default Overview;
