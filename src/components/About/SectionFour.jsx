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
      display: "none",
    },
  },
});

const SectionFour = () => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        width: "80vw",
        display: "flex",
        // margin: "15vh auto",
        margin: "5vh auto 10vh auto",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "7vw",
        "@media (max-width: 600px)": {
          margin: "0 auto",
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
      <img
        className={classes.imageInit}
        style={{}}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaDu3kkFF00jEXnh7hoioYHH_74oK5Lfn22eBytczPouJudRWqzNumfNDOrQxCZrXkQMc&usqp=CAU"
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
          Our paramount concern is the current trend where large enterprises
          tend to dominate the digital landscape. They often do so by employing
          full-time programmers and have the financial capacity to invest in a
          plethora of SaaS solutions. Regrettably, this trend leads to a rapid
          erosion of market share for local businesses and SMEs, often catching
          them in financial distress before they even realise it. The stark
          reality is that local businesses and SMEs find it challenging to
          outcompete these industry giants and are losing their market share
          within their respective sectors.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SectionFour;
