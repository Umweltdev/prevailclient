import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import imago from "./About_Us/What-We-Do.webp";


const SectionFour = () => {
  
  return (
    <Grid
      container
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        margin: "100px auto 0 auto",
        justifyContent: "center",
        alignItems: "center",
        gap: "239px",
        "@media (max-width: 600px)": {
          width: "90vw",
          flexDirection: "column-reverse",
          margin: "13vh auto 0 auto",
          marginBottom: "1vh",
          gap: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        },
      }}
    >
      <CardMedia
        component={"img"}
        image={imago}
        alt="What-We-Do"
        sx={{
          width: "485px",
          height: "290px",
          borderRadius: "14px",
          "@media (max-width: 600px)": {
            maxWidth: "90vw",
            width: "90vw",
          },
        }}
      />

      <Grid
        item
        sx={{
          width: "485px",
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
          What We Do
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
    </Grid>
  );
};

export default SectionFour;
