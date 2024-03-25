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
        height: "73vh",
        display: "flex",
        borderRadius: "16px",
        flexDirection: "column",
        padding: "2vh",
        // margin: '5vh 0',
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",

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
      <CardMedia
        sx={{
          minHeight: "35vh",
          objectFit: "cover",
          borderRadius: "16px",
          "@media (max-width: 600px)": {
            height: "20vh",
          },
        }}
        image={img}
        title="green iguana"
      />
    
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
              margin: "0 0 2vh 0",
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
              padding: "1vh 10vw",
              fontSize: "3vw",
            },
          }}
        >
          Learn More
        </Button>
      
    </Card>
  );
}
