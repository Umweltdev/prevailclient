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
        // justifyContent: "center",
        justifyContent: "space-between",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          // justifyContent: "center",
          gap: "20px",
          ml: "10vw",
          width: "468px",
        }}
      >
        <Typography
          sx={{
            color: "#1D0D40",
            fontSize: "28px",
            fontWeight: " 500",
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
          }}
        >
          If these challenges resonate with you, you’re not alone. Prevail’s MPD
          API is crafted to address these very issues, providing tools that
          offer insights into yield management and price elasticity.
        </Typography>
        <Box>
          <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
            {mpdDataApi.map((item, i) => (
              <Box key={i} sx={{display: "flex", gap: "16px"}}>
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
      <CardMedia component={"img"} image={img} sx={{ width: "45vw" }} />
    </Box>
  );
};

export default PrevailMPDApi;
