import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "90vw",
    "@media (max-width: 600px)": {
      display: "unset",
      alignItems: "center",
      flexDirection: "column-reverse",
      justifyContent: "center",
      width: "95vw",
      marginTop: "2vh",
    },
  },

  textContainer: {
    width: "50vw",
    textAlign: "right",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  image: {
    width: 400,
    "@media (max-width: 600px)": {
      display: "none",
    },
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
        "@media (max-width: 600px)": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          margin: "0 auto",
        },
      }}
    >
      <Grid className={classes.container}>
        <img src={imageUrl} alt="image" className={classes.image} />
        <Grid className={classes.textContainer}>
          <Typography
            sx={{
              fontSize: "2.2vw",
              color: "blue",
              "@media (max-width: 600px)": {
                fontSize: 20,
                color: "blue",
              },
            }}
          >
            {textHeader}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.4vw",
              color: "#333",
              "@media (max-width: 600px)": {
                fontSize: 18,
                color: "#333",
                textAlign: "justify",
                textJustify: "distribute",
              },
            }}
          >
            {text}
          </Typography>
        </Grid>
        {/* <img src={imageUrl} alt="image" className={classes.image2} /> */}
      </Grid>
    </Grid>
  );
};

export default ImageTextComponent;
