import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Star } from "@mui/icons-material";
import { CardMedia, Grid } from "@mui/material";

const bull = <Star sx={{ color: "#FFBE4E", fontSize: "16px" }} />;

export default function TestimonialCard({ text, position, author, img }) {
  return (
    <Card
      sx={{
        width: "550px",
        height: "361px",
        background: "#FFF",
        boxShadow: 1,
        margin: "2vh auto 137px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "13px",
        "@media (max-width: 600px)": {
          width: "85vw",
          height: "35vh",
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
            "@media (max-width: 600px)": {
              pt: "25px",
            },
          }}
        >
          {bull}
          {bull}
          {bull}
          {bull}
          {bull}
          <Typography
            sx={{
              color: "var(--grey, #A6A6A6);",
              fontFamily: "Aeonik Pro",
              fontSize: "14px;",
              fontStyle: "normal;",
              fontWeight: "400;",
              lineHeight: "137%;" /* 19.18px */,
              letterSpacing: "-0.14px;",
              ml: "5px",
            }}
          >
            4.5
          </Typography>
        </Grid>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "140%" /* 28px */,
            letterSpacing: "-0.2px",
            width: "466px",
            "@media (max-width: 600px)": {
              fontSize: "16px",
              width: "75vw",
            },
          }}
        >
          “{text}”
        </Typography>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <CardMedia
            component="img"
            image={img}
            sx={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />

          <Grid>
            <Typography
              sx={{
                color: "#000",
                fontFamily: "Aeonik Pro",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "137%",
                letterSpacing: "-0.16px",
                "@media (max-width: 600px)": {
                  fontSize: "14px",
                  width: "75vw",
                },
              }}
            >
              {author}
            </Typography>
            <Typography
              sx={{
                color: "var(--grey, #A6A6A6);",
                fontFamily: "Aeonik Pro",
                fontSize: "14px;",
                fontStyle: "normal;",
                fontWeight: "400;",
                lineHeight: "137%;" /* 19.18px */,
                letterSpacing: "-0.14px;",
                mt: "5px",
                "@media (max-width: 600px)": {
                  fontSize: "14px",
                  width: "55vw",
                },
              }}
            >
              {position}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
