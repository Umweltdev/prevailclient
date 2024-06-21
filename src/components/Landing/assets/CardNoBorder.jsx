import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";

const CardNoBorder = ({ text, header, icon }) => {
  return (
    <Card
      sx={{
        display: "flex",
        gap: "16px",
        alignItems: "left",
        justifyContent: "center",
        boxShadow: "none",
        border: "none",
        flexDirection: "column",
        background: "inherit",
        width: "438px",
      }}
    >
      <CardMedia component={"img"} sx={{ width: "56px" }} image={icon} />
      <Typography
        sx={{ fontSize: "28px", fontWeight: "500", color: "#1D0D40" }}
      >
        {header}
      </Typography>
      <Typography
        sx={{
          color: "#505660",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "160%",
        }}
      >
        {text}
      </Typography>
    </Card>
  );
};

export default CardNoBorder;
