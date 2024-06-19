import { CardMedia, Grid, Typography, Box } from "@mui/material";
import React from "react";
import imgBrand from "../assets/imagebrand1.png";

const ElevateYourPresence = () => {
  return (
    <Box sx={{ display: "flex", width: "100vw" }}>
      <CardMedia component={"img"} image={imgBrand} sx={{ width: "47vw" }} />
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          ml: "3.5vw",
          gap: "20px",
          width: "468px",
        }}
      >
        <Typography
          sx={{
            width: "385px",
            color: "#1D0D40",
            fontSize: "28px",
            fontWeight: " 500",
          }}
        >
          Elevate Your Presence with Prevail’s Brand Identity Package. 
        </Typography>
        <Typography
          sx={{
            width: "385px;",
            color: "#505660;",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "150%",
          }}
        >
          In today’s competitive digital and physical markets, establishing a
          distinctive brand identity is more crucial than ever. Prevail’s “Brand
          Identity Package” service is designed to lay a robust foundation for
          your business, ensuring you make a lasting impression whenever your
          brand appears. <br /> <br /> We partner with you to meticulously
          define and craft your unique brand identity, creating eye-catching
          logos and compelling marketing materials that ensure consistency and
          harmony across all marketing touchpoints. Our goal is to build brand
          identity that not only stands out but builds trust and resonance with
          your target audience. 
        </Typography>
      </Grid>
    </Box>
  );
};

export default ElevateYourPresence;
