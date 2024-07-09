import { Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../logo.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  image: {
    width: "8vw",
    marginBottom: "3vh",
    "@media (max-width: 600px)": {
      width: "10vh",
      marginBottom: "3vh",
    },
  },
});

const SubmitStepper = () => {
  const classes = useStyles()

  return (
    <Grid
      sx={{
        // margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img className={classes.image} src={Logo} alt="" />
      <Typography
        sx={{
          textAlign: "center",
          width: "60vw",
          "@media (max-width: 600px)": {
            width: "80vw",
            textAlign: "justify",
            fontSize: "15px"
            // alignJustify: "distribute",
          },
        }}
      >
        We appreciate your time and effort in completing this questionnaire.
        Your responses will provide us with valuable insights into your
        business. This understanding will enable us to create customised and
        effective strategies and tactics to enhance your establishment and
        improve customer interactions throughout their journey. We are excited
        to collaborate and help you achieve your ultimate business goals.
      </Typography>
    </Grid>
  );
};

export default SubmitStepper;
