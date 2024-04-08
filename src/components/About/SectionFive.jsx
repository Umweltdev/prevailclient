import { Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
//import landingImage1 from "../assets/brandd.png";

const useStyles = makeStyles({
  imagePlaform: {
    width: "80vw",
    height: "50vh",
    objectFit: "cover",
    borderRadius: "5px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",

    "@media (max-width: 600px)": {
      width: "unset",
      height: "unset",
    },
  },
  imageInit: {
    width: "37vw",
    borderRadius: "1vw",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    "@media (max-width: 600px)": {
      width: "95vw",
      height: "unset",
    },
  },
});

const SectionFive = () => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        width: "80vw",
        display: "flex",
        // margin: "15vh auto",
        margin: "10vh auto",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "7vw",
        "@media (max-width: 600px)": {
          width: "95vw",
          flexDirection: "column",
          marginBottom: "1vh",
          // gap: "5vw",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1vw",
          margin: "2vh auto 0 auto",
        },
      }}
    >
      <img
        className={classes.imageInit}
        style={{}}
        src="https://imageio.forbes.com/specials-images/imageserve/61bd343aecd04efd3b8fba2a/problem-solving--solution--systems-thinking--light-bulb/0x0.jpg?format=jpg&crop=2347,1320,x0,y115,safe&width=960"
        alt=""
      />
      <Grid
        sx={{
          width: "40vw",
          "@media (max-width: 600px)": {
            width: "95vw",
          },
        }}
      >
        {/* <Typography
          sx={{
            display: "flex",
            fontSize: "3vw",
            fontWeight: "bold",
            color: "#494848",
            marginBottom: "3vh",
            "@media (max-width: 600px)": {
              fontSize: "6vw",
              margin: "2vh 0",
            },
          }}
        >
          Our Why
        </Typography> */}
        <Typography
          sx={{
            fontSize: "1.2vw",
            color: "#636363",
            marginBottom: "3vh",
            // textAlign: "justify",
            width: "37vw",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              textAlign: "justify",
              width: "95vw",
              marginTop: "2vh"
            },
          }}
        >
          Our ultimate goal is to enable businesses to thrive, irrespective of
          economic challenges, by providing innovative and holistic solutions.
          The Prevail approach is founded on a commitment to levelling the
          playing field for local businesses facing economic uncertainty. By
          emphasising collaboration and tailor-made strategies, we ensure that
          our clients have the tools to compete effectively in a dynamic digital
          landscape. Our focus is not just on marketing; it is on delivering
          results, sustaining growth, and prevailing against the odds.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SectionFive;
