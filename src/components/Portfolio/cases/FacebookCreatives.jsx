import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  image: {
    width: 400,
    "@media (max-width: 600px)": {
      width: "95vw",
    },
  },
});

const FacebookCreatives = () => {
  const classes = useStyles();
  return (
    <Grid
      sx={{
        padding: "2vh 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        sx={{
          padding: "2vh 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.3vw",
            fontWeight: "bold",
            color: "#ba8bd9",
            "@media (max-width: 600px)": {
              fontSize: "3vh",
            },
          }}
        >
          Our Work
        </Typography>
        <Typography
          sx={{
            fontSize: "4vw",
            fontWeight: "bold",
            "@media (max-width: 600px)": {
              fontSize: "4vh",
              textAlign: "center",
            },
          }}
        >
          Facebook Creatives
        </Typography>
        <Grid
          sx={{
            background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
            height: "0.8vh",
            width: "10vw",
            margin: "2vh 0",
            "@media (max-width: 600px)": {
              width: "30vw",
              margin: "1vh 0",
            },
          }}
        ></Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3vh",
          flexWrap: "wrap",
        }}
      >
        <img
          className={classes.image}
          src="https://img.freepik.com/free-psd/cleaning-service-square-flyer-social-media-post-instagram-banner-template_84443-1018.jpg?t=st=1710236491~exp=1710240091~hmac=2bb44592bd96ed765f6d46ca675b787f073d9f7e641bfcc4d0b7efe97e79b7f8&w=740"
          alt=""
        />
        <img
          className={classes.image}
          src="https://img.freepik.com/free-psd/real-estate-property-instagram-post-social-media-banner-design-template_84443-953.jpg?t=st=1710236491~exp=1710240091~hmac=8789a63af321174bfa38a0a6b2224e1d5504be17b901f75ff153d047f6591797&w=740"
          alt=""
        />
        <img
          className={classes.image}
          src="https://img.freepik.com/free-psd/real-estate-luxury-house-property-instagram-post-social-media-instagram-banner-template_84443-893.jpg?t=st=1710236575~exp=1710240175~hmac=171c76a1b569c59805f1c2f2ea5be0d1a074609a2bce29e459b3f30b781595cb&w=740"
          alt=""
        />
        <img
          className={classes.image}
          src="https://img.freepik.com/free-psd/real-estate-luxury-house-property-instagram-post-social-media-instagram-banner-template_84443-895.jpg?t=st=1710236609~exp=1710240209~hmac=ab06f00e49d470ba935a20e4913027b413e23429392cdb537d7079e3bb4981f1&w=740"
          alt=""
        />
        <img
          className={classes.image}
          src="https://img.freepik.com/free-psd/real-estate-property-instagram-post-social-media-banner-design-template_84443-962.jpg?t=st=1710236644~exp=1710240244~hmac=d8bbc6e7fcac2c6351df49227c0fbbeb405ce48cef39537dc10e72a61fa42c39&w=740"
          alt=""
        />
        <img
          className={classes.image}
          src="https://img.freepik.com/premium-psd/real-estate-luxury-house-property-instagram-post-social-media-instagram-banner-template_84443-888.jpg?w=740"
          alt=""
        />
      </Grid>
      {/* <Grid sx={{ padding: "2vh 0", gap: "1vw", display: "flex", flexWrap: "wrap"}}>
        <Button
          sx={{
            background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
            padding: "1vh 3vw",
            color: "white",
            borderRadius: "10vw",
            fontWeight: "bold",
          }}
        >
          Previous Case Study
        </Button>
        <Button
          sx={{
            background: "white",
            padding: "0.8vh 3vw",
            color: "blue",
            border: "1px solid blue",
            borderRadius: "10vw",
            fontWeight: "bold",
          }}
        >
         Next Case Study
        </Button>
      </Grid> */}
    </Grid>
  );
};

export default FacebookCreatives;
