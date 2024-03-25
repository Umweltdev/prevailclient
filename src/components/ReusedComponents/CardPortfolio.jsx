import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



export default function MediaCard({ header, text, img, gradient }) {
  return (
    <Card
      sx={{
        width: "37vw",
        // height: "430px",
        display: "flex",
        borderRadius: "16px",
        flexDirection: "column",
        padding: "0 0 1.5vh 0",
        boxShadow: " rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
        "@media (max-width: 600px)": {
          width: "90vw",
          // height: 440,
          display: "flex",
          flexDirection: "column",
          boxShadow: " rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
          margin: "5vw",
        },
      }}
    >
      <CardMedia
        sx={{
          height: "35vh",
          objectFit: "cover",
          borderRadius: "16px",
          "@media (max-width: 600px)": {
            height: "20vh",
          },
        }}
        image={img}
        title="green iguana"
      />
      <CardContent sx={{ padding: "2vh" }}>
        <Typography
          sx={{
            // textJustify: "distribute",
            fontSize: "1.7vw",
            wordSpacing: "-3px",
            color: "#333",
            margin: "2vh 0",
            // fontWeight: "500",
            // letterSpacing: "1px",
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
        <Typography
          sx={{
            textAlign: "justify",
            textJustify: "distribute",
            fontSize: "1",
            color: "#333",
            marginTop: "1vh",
            wordSpacing: "-2px",
            // letterSpacing: "1px",

            "@media (max-width: 600px)": {
              fontSize: "4vw",
              color: "#333",
              margin: "0 0 2vh 0",
            },
          }}
        >
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          // size="small"
          // variant="contained"
          sx={{
            background: "#884ed9",
            padding: "5px 15px",
            borderRadius: "5vw",
            color: "white",
            fontSize: "13px",
            textTransform: "none",
            margin: "0 0 1vh 0",
            transition: "0.5s ease-in-out",

            "&:hover": { background: "#884ed9", color: "white" },
            "@media (max-width: 600px)": {
              boxShadow: "unset",
              fontWeight: "unset",
              padding: "1vh 10vw",
              fontSize: "3vw",
            },
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
