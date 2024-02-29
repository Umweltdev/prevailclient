import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BasicButtons from "./Button";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({ headerText, text, icon }) {
  return (
    <Card
      sx={{
        width: 405,
        height: 450,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
          sx={{ fontSize: 20, textAlign: "center", padding: "2vh 0" }}
          color="text.secondary"
          gutterBottom
        >
          {headerText}
        </Typography>
        <Typography sx={{ fontSize: 14, textAlign: "center" }} variant="body2">
          {text}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "2vh 0 5vh 0" }}>
        <BasicButtons text="Learn More" />
      </CardActions>
    </Card>
  );
}
