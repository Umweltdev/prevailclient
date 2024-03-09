import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BasicButtons from "./Button";



export default function BasicCard({ headerText, text, icon }) {
  return (
    <Card
      sx={{
        width: 370,
        height: 420,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",

        "@media (max-width: 600px)": {
          width: "90vw",
          height: 345,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          gap: "0",
        },
      }}
    >
      <CardContent>
        {icon}
        {/* <img
          style={{
            width: "5vw",
            display: "block",
            margin: "auto",
            padding: "3vh 0",
          }}
          src={icon}
          alt=""
        /> */}
        <Typography
          sx={{
            fontSize: 20,
            textAlign: "center",
            fontWeight: "bold",
            padding: "2vh 0",
            "@media (max-width: 600px)": {
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
              padding: "1vh 0",
            },
          }}
          color="text.secondary"
          gutterBottom
        >
          {headerText}
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            textAlign: "center",
            "@media (max-width: 600px)": {
              fontSize: 14,
              textAlign: "center",
            },
          }}
          variant="body2"
        >
          {text}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          padding: "6vh 0 2vh 0",
          "@media (max-width: 600px)": {
            padding: "0",
          },
        }}
      >
        <BasicButtons text="Learn More" />
      </CardActions>
    </Card>
  );
}
