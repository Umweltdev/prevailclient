import { Card, CardMedia, Grid, Typography, Box } from "@mui/material";
import React from "react";

const ImageTextComponent = ({ img, header, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <CardMedia component={"img"} image={img} sx={{ width: "47vw" }} />
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          // justifyContent: "center",
          mr: "15vw",
          gap: "20px",
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
          {header}
        </Typography>
        <Typography
          sx={{
            color: "#505660;",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "150%",
          }}
          dangerouslySetInnerHTML={{ __html: text }}
        ></Typography>
      </Grid>
    </Box>
  );
};

export default ImageTextComponent;
