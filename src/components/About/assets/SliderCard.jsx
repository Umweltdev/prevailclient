import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Star } from "@mui/icons-material";
import { CardMedia, Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const bull = <Star sx={{ color: "#FFBE4E", fontSize: "16px" }} />;

export default function SliderCard({ text, header, author, img }) {
  return (
    <Card
      sx={{
        width: "546.899px",
        height: "373px",
        background: "#F9F9F9",
        boxShadow: 3,
        margin: "0 auto 137px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "@media (max-width: 600px)": {
          width: "90vw",
          height: "30vh",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          gap: "31px",
          flexDirection: "column",
          "@media (max-width: 600px)": {
            gap: "20px",
            width: "80vw",
            height: "35vh",
            pt: "15px",
          },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
            background: "#B2B1FF",
            width: "70px",
            height: "70px",
            borderRadius: "50%",
          }}
        >
          <CardMedia
            component="img"
            image={img}
            sx={{
              width: "40px",
              height: "40px",
              objectFit: "cover",

              margin: "auto",
            }}
          />
        </Grid>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "110%" /* 28px */,
            letterSpacing: "-0.24px",
            width: "466px",
            color: "#000",
            "@media (max-width: 600px)": {
              fontSize: "16px",
              width: "75vw",
            },
          }}
        >
          {header}
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "140%" /* 28px */,
            letterSpacing: "-0.2px",
            width: "466px",
            color: "#505660",
            "@media (max-width: 600px)": {
              fontSize: "16px",
              width: "75vw",
            },
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
