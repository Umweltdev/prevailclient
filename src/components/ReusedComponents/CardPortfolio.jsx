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
        maxWidth: "350px",
        // height: "400px",
        display: "flex",
        borderRadius: "16px",
        flexDirection: "column",
        padding: "0 0 2vh 0",
        "@media (max-width: 600px)": {
          maxWidth: 345,
          // height: 440,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <CardMedia
        sx={{
          height: 180,
          objectFit: "cover",
          borderRadius: "16px",
          "@media (max-width: 600px)": {
            height: 170,
          },
        }}
        image={img}
        title="green iguana"
      />
      <CardContent sx={{ padding: "2vh" }}>
        <Typography
          sx={{
            // textJustify: "distribute",
            fontSize: "18  px",
            color: "#333",
            margin: "2vh 0 0 0",
            // fontWeight: "bold",
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
            // textJustify: "distribute",
            fontSize: "13px",
            color: "#333",
            marginTop: "1vh",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              color: "#333",
              margin: "0.1vh 0",
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
            background:
              gradient || "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
            padding: "5px 15px",
            borderRadius: "5vw",
            color: "white",
            fontSize: "13px",
            textTransform: "none",

            // fontWeight: "bold",
            // boxShadow:
            //   "0px 1px 2px -1px rgba(255,105,135,0.5), 0px 3px 5px 0px rgba(255,105,135,0.3), 0px 1px 9px 0px rgba(255,105,135,0.2)",
            "@media (max-width: 600px)": {
              boxShadow: "unset",
              fontWeight: "unset",
              padding: "1vh 3vw",
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
