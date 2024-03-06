import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "90vw",
    marginTop: "4vh",
  },

  textContainer: {
    width: "50vw",
  },
  image: {
    width: 200,
  },
}));

const TextImageService = ({ text, imageUrl, textHeader }) => {
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
        <Grid className={classes.textContainer}>
          <Typography color="blue" variant="h6">
            {textHeader}
          </Typography>
          <Typography variant="2">{text}</Typography>
        </Grid>
        <img src={imageUrl} alt="image" className={classes.image} />
      </Grid>
    </Grid>
  );
};

export default TextImageService;
