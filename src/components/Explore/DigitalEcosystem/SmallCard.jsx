import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const SmallCard = ({ header, text, icon }) => {
  return (
    <Card
      sx={{
        height: "530px",
        borderRadius: "20px",
        padding: "20px",
        width: "497px",
        "@media (max-width: 600px)": {
          width: "90vw",
          padding: "10px",
          height: "unset",
        },
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: "23px",
            fontWeight: "500",
            mb: "13px",
            "@media (max-width: 600px)": {
              width: "unset",
              textAlign: "center",
            },
          }}
          gutterBottom
        >
          {header}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            width: "450px",
            color: "#505660",
            fontWeight: "400",
            lineHeight: "150%",
            "@media (max-width: 600px)": {
              width: "unset",
              textAlign: "center",
            },
          }}
        >
          {text}
        </Typography>
      </CardContent>
      <Box
        sx={{
          background: "#F7F8FA",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
          borderRadius: "10px",
          width: "96.5%",
          height: "249px",
        }}
      >
        <Box
          sx={{
            width: "60%",
            height: "75%",
            background: "#fff",
            borderRadius: "11px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component={"img"}
            image={icon}
            sx={{ width: "140px", margin: "auto" }}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default SmallCard;
