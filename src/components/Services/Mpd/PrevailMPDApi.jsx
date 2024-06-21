import React from "react";
import { Card, CardMedia, Grid, Typography, Box } from "@mui/material";
import icon1 from "../assets/dollar.svg";
import icon2 from "../assets/invoice.svg";
import icon3 from "../assets/presentation-board.svg";
import img from "../assets/image 145.png";
import { mpdDataApi } from "./mpdData";

const PrevailMPDApi = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        alignItems: "center",
        justifyContent: "space-between",
        "@media (max-width: 600px)": {
          display: "flex",
          width: "100vw",
          flexDirection: "column",
        },
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "left",
          margin: "auto",
          // mr: "15vw",
          gap: "20px",
          width: "30vw",
          "@media (max-width: 600px)": {
            width: "90vw",
            flexDirection: "column",
            ml: "unset",
            mt: "40px",
            margin: "40px auto 0 auto",
          },
        }}
      >
        <Typography
          sx={{
            color: "#1D0D40",
            fontSize: "28px",
            fontWeight: " 500",
            width: "385px",
          }}
        >
          Prevail MPD API 
        </Typography>
        <Typography
          sx={{
            color: "#505660;",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "150%",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        >
          If these challenges resonate with you, you’re not alone. Prevail’s MPD
          API is crafted to address these very issues, providing tools that
          offer insights into yield management and price elasticity.
        </Typography>
        <Box>
          <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
            {mpdDataApi.map((item, i) => (
              <Box key={i} sx={{ display: "flex", gap: "16px" }}>
                <CardMedia
                  component={"img"}
                  image={item.icon}
                  sx={{ width: "34px", height: "34px" }}
                />
                <Typography
                  sx={{
                    color: "#505660",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "160%",
                    width: "413px",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
      <CardMedia
        component={"img"}
        image={img}
        sx={{
          width: "50vw",
          "@media (max-width: 600px)": {
            width: "90vw",
            mt: "5vh",
            borderRadius: "14px",
          },
        }}
      />
    </Box>
  );
};

export default PrevailMPDApi;
