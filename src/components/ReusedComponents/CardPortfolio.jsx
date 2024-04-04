import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  imago: {
    minHeight: "40vh",
    objectFit: "cover",
    borderRadius: "16px",
    "@media (max-width: 600px)": {
      minHeight: "20vh",
    },
  },
});

export default function MediaCard({ header, text, img, gradient }) {
  const classes = useStyles();

  return (
    <Card
      sx={{
        width: "39vw",
        height: "77vh",
        display: "flex",
        borderRadius: "16px",
        flexDirection: "column",
        padding: "2vh",
        // margin: '5vh 0',
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px;",

        "@media (max-width: 600px)": {
          width: "95vw",
          height: "unset",
          display: "flex",
          flexDirection: "column",
          boxShadow: " rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
          margin: "unset",
        },
      }}
    >
      <Typography
        sx={{
          // textJustify: "distribute",
          fontSize: "1.9vw",
          wordSpacing: "-4px",
          color: "#333",
          margin: "1vh 0",
          // fontWeight: "500",
          fontWeight: "bold",
          "@media (max-width: 600px)": {
            fontSize: "4vw",
            color: "#333",
            margin: "1vh 0",
            fontWeight: "bold",
          },
        }}
      >
        {header}
      </Typography>
      <CardMedia className={classes.imago} image={img} title="green iguana" />

      <Typography
        sx={{
          // textAlign: "justify",
          // textJustify: "distribute",
          fontSize: "1.2vw",
          color: "#333",
          marginTop: "4vh",
          wordSpacing: "-2px",
          // letterSpacing: "1px",

          "@media (max-width: 600px)": {
            fontSize: "4vw",
            color: "#333",
            margin: "2vh 0",
          },
        }}
      >
        {text}
      </Typography>

      <Button
        // size="small"
        // variant="contained"
        sx={{
          background: "#884ed9",
          padding: "5px 15px",
          borderRadius: "5vw",
          color: "white",
          fontSize: "1.2vw",
          textTransform: "none",
          margin: "4vh 0 1vh 0",
          transition: "0.5s ease-in-out",
          width: "12vw",

          "&:hover": { background: "#884ed9", color: "white" },
          "@media (max-width: 600px)": {
            boxShadow: "unset",
            fontWeight: "unset",
            padding: "0.5vh 4vw",
            fontSize: "4vw",
            width: "32vw",
            borderRadius: "5vh",
            margin: "1vh 0",
          },
        }}
      >
        Learn More
      </Button>
    </Card>
  );
}
