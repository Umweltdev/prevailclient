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

const Solutions = () => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        width: "80vw",
        display: "flex",
        // margin: "15vh auto",
        margin: "5vh auto 0 auto",
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
        },
      }}
    >
     
      <Grid
        sx={{
          width: "40vw",
          "@media (max-width: 600px)": {
            width: "95vw",
          },
        }}
      >
        <Typography
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
          Solutions
        </Typography>
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
            },
          }}
        >
          This is where Prevail takes centre stage. We specialise in working closely with SMEs and local businesses, empowering them to differentiate themselves and position their brand effectively in front of their target audience. We believe in forging strong partnerships with our clients to develop tailored solutions that maximise both short-term and long-term growth. Our distinctive competencies lie in our seamless integration of automation, data analysis, and marketing strategies.
        </Typography>
      </Grid>
      <img
        className={classes.imageInit}
        style={{}}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShedynUjYH5YHcFMDXBp-N6Eyw3_9fQU5VjN1ullVUeg&s"
        alt=""
      />
    </Grid>
  );
};

export default Solutions;
