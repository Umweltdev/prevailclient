import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";


const useStyles = makeStyles({
  mainComponent: {
    background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
    height: "80vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10vh 15vw",
    margin: "15vh 0",
  },

  heroComponent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "top",
  },

  textHero: {
    color: "white",
    fontSize: "7vw",
    fontWeight: "bold",
  },

  text: {
    color: "white",
    fontSize: "3vw",
    fontWeight: "bold",
  },

  image: {
    width: "20vw",
    height: "20vw",
    borderRadius: "5px",
    objectFit: "cover"
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
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "top",
        }}
      >
        <Typography
          sx={{ color: "white", fontSize: "5vw", fontWeight: "bold" }}
        >
          {header}
        </Typography>
        <Typography className={classes.text}>{text}</Typography>
        {/* <Button>Live Website</Button> */}
      </Grid>
      <img className={classes.image} src={img} alt="" />
    </Grid>
  );
};

export default HeroSection;
