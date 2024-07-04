import { CardMedia, Grid, Typography, Box } from "@mui/material";
import React from "react";

const ElevateYourPresence = () => {
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
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column-reverse",
          mt: "40px",
          mb: "20px",
        },
      }}
    >
      <CardMedia
        component={"img"}
        image="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720084561/Elevate-Your-Presence_axb20s.avif"
        alt="Elevate-Your-Presence"
        sx={{
          width: "50vw",
          "@media (max-width: 600px)": {
            width: "90vw",
            borderRadius: "14px",
            mt: "4vh",
          },
        }}
      />
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "left",
          margin: "auto",
          gap: "20px",
          width: "30vw",
          "@media (max-width: 600px)": {
            width: "90vw",
            borderRadius: "14px",
            mr: "unset",
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
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        >
          Elevate Your Presence with Prevail’s Brand Identity Package. 
        </Typography>
        <Typography
          sx={{
            width: "30vw",
            color: "#505660;",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "150%",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
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
