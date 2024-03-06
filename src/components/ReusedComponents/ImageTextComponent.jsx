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
    textAlign: "right",
  },
  image: {
    width: 400,
  },
}));

const ImageTextComponent = ({ text, imageUrl, textHeader }) => {
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
      <Grid className={classes.container}>
        <img src={imageUrl} alt="image" className={classes.image} />
        <Grid className={classes.textContainer}>
          <Typography color="blue" variant="h4">
            {textHeader}
          </Typography>
          <Typography variant="h5">{text}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ImageTextComponent;
