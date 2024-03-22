import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Favorite, Share } from "@mui/icons-material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BlogSideCard({ header, category, img, date }) {
  return (
    <Card
      sx={{
        minWidth: "30vw",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        margin: "auto",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "0.5vw",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: "1vw" }}
          color="text.secondary"
          gutterBottom
        >
          {category}
        </Typography>
        <Typography
          sx={{
            width: "20vw",
            fontSize: "0.9vw",
            letterSpacing: "1px",
            textAlign: "justify",
            textJustify: "distribute",
            margin: "0 0 2.5vh 0",
          }}
          color="text.secondary"
          gutterBottom
        >
          {header}
        </Typography>
        <CardActions>
          <Button
            sx={{
              textTransform: "capitalize",
              color: "#333",
              background: "#c3d2ef",
              fontSize: "10px",
              borderRadius: "25px",
              padding: "0.4vw 2vw",
              margin: "0",
            }}
          >
            Date: {date}
          </Button>
        </CardActions>
      </CardContent>
      <CardContent>
        <img
          style={{
            width: "6vw",
            height: "6vw",
            objectFit: "cover",
            borderRadius: "5px",
          }}
          src={img}
          alt="image"
        />

        <CardActions>
          <Share
            sx={{
              color: "black",
              background: "#c3d2ef",
              fontSize: "2vw",
              padding: "5px",
              borderRadius: "50%",
              fontWeight: "100",
            }}
          />
          <Favorite
            sx={{
              color: "black",
              background: "#c3d2ef",
              fontSize: "2vw",
              padding: "5px",
              borderRadius: "50%",
              fontWeight: "100",
            }}
          />
        </CardActions>
      </CardContent>
    </Card>
  );
}
