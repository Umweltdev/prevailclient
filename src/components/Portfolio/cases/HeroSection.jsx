import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  //   mainComponent: {
  //     background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
  //     height: "80vh",
  //     display: "flex",
  //     justifyContent: "space-between",
  //     alignItems: "center",
  //     padding: "10vh 15vw",
  //     margin: "15vh 0",
  //   },

  //   heroComponent: {
  //     display: "flex",
  //     flexDirection: "column",
  //     justifyContent: "center",
  //     alignItems: "top",
  //   },

  //   textHero: {
  //     color: "white",
  //     fontSize: "7vw",
  //     fontWeight: "bold",
  //   },

  text: {
    color: "white",
    fontSize: "3vw",
    fontWeight: "bold",
  },

  image: {
    width: "20vw",
    height: "20vw",
    borderRadius: "5px",
    objectFit: "cover",
    "@media (max-width: 600px)": {
      width: "95vw",
      height: "60vw",
      borderRadius: "5px",
      objectFit: "cover",
      marginTop: "2vh"
    },
  },
});

const HeroSection = ({ header, text, img }) => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
        height: "80vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10vh 15vw",
        margin: "15vh 0",
        "@media (max-width: 600px)": {
          background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "unset",
          alignItems: "center",
          padding: "10vh 1vh 0 1vh",
          margin: "10vh 0",
        },
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "top",
          "@media (max-width: 600px)": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "top",
          },
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "5vw",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "top",
            "@media (max-width: 600px)": {
              color: "white",
              fontSize: "5vh",
              fontWeight: "bold",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "top",
            },
          }}
        >
          {header}
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "3vw",
            fontWeight: "bold",
            "@media (max-width: 600px)": {
              color: "white",
              fontSize: "2vh",
              fontWeight: "unset",
            },
          }}
        >
          {text}
        </Typography>
        {/* <Button>Live Website</Button> */}
      </Grid>
      <img className={classes.image} src={img} alt="" />
    </Grid>
  );
};

export default HeroSection;
