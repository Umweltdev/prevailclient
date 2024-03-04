import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    maxWidth: "90vw",
  },

  textContainer: {
    width: "50vw",
  },
  image: {
    width: 400,
  },
}));

const ImageTextComponent = ({ text, imageUrl }) => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6}>
          <img src={imageUrl} alt="image" className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.textContainer}>
          <Typography variant="body1">{text}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ImageTextComponent;
