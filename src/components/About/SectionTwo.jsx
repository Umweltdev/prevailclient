import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import imago from "./assets/image125.png";

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

const SectionTwo = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      sx={{
        // width: "80vw",
        display: "flex",
        flexDirection: "row",
        margin: "100px auto 0 auto",
        justifyContent: "center",
        alignItems: "center",
        gap: "239px",
        "@media (max-width: 600px)": {
          width: "95vw",
          flexDirection: "column",
          margin: "13vh auto 0 auto",
          marginBottom: "1vh",
          gap: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        },
      }}
    >
      <Grid
        item
        sx={{
          maxWidth: "468px",
          flexGrow: 1,
          "@media (max-width: 600px)": {
            width: "100%",
          },
        }}
      >
        <Typography
          sx={{
            display: "flex",
            fontSize: "28px",
            fontWeight: "500",
            color: "#1D0D40",
            marginBottom: "20px",
            lineHeight: "110%",
            letterSpacing: "-0.28px",
            "@media (max-width: 600px)": {
              fontSize: "6vw",
              margin: "2vh 0",
            },
          }}
        >
          Our Mission
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#505660",
            marginBottom: "3vh",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              textAlign: "justify",
              width: "100%",
            },
          }}
        >
          Prevail is not just a marketing firm; we are architects of bespoke
          solutions that fuse cutting-edge automation technology, profound
          consumer insights, and state-of-the-art marketing tactics. <br />
          <br /> Our approach transcends mere automation by integrating it with
          robust data analytics and creative flair, crafting marketing
          strategies that truly resonate with your target demographics. Our
          holistic strategy ensures sustained growth, even amongst the most
          challenging.
        </Typography>
      </Grid>
      <Box
        sx={{
          background: "#ECF1FA",
          width: "487px",
          height: "290px",
          borderRadius: "14px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "@media (max-width: 600px)": {
            width: "100%",
            height: "auto",
          },
        }}
      >
        <img
          style={{
            maxWidth: "330px",
            maxHeight: "250px",
            width: "100%",
            height: "auto",
          }}
          src={imago}
          alt=""
        />
      </Box>
    </Grid>
  );
};

export default SectionTwo;
