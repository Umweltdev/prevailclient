import { Box, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import { semData } from "./semData";

const OfferSection = () => {
  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        flexWrap: "wrap",
        gap: "5vw",
        p: "50px 0",
      }}
    >
      {semData.map((item, i) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "",
            flexDirection: "column",
            width: "340.619px",
            gap: "14px",
          }}
        >
          <Box
            sx={{
              background: "#B2B1FF",
              height: "59px",
              width: "59px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component={"img"}
              image={item.img}
              sx={{
                width: "34px",
                height: "34px",
                margin: "auto",
              }}
            />
          </Box>

          <Typography
            sx={{ color: "#000", fontSize: "22px", fontWeight: "500" }}
          >
            {item.header}
          </Typography>
          <Typography
            sx={{
              color: "#505660",
              fontSize: "18px",
              fontWeight: "400",
              width: "340.619px",
            }}
          >
            {item.text}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default OfferSection;
