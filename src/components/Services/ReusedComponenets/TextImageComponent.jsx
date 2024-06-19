import React from "react";
import { Card, CardMedia, Grid, Typography, Box } from "@mui/material";

const TextImageComponent = ({header, text, img}) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
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
      <CardMedia component={"img"} image={img} sx={{ width: "45vw" }} />
    </Box>
  );
};

export default TextImageComponent;
