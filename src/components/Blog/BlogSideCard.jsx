import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Favorite, Share } from "@mui/icons-material";
import { Grid } from "@mui/material";

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
        backgroundColor: "#909090",
        margin: "auto",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "0.5vw",
        padding: "2.5vh 0 0 0",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: "1.2vw", fontWeight: "bold", color: "#fff" }}
          color="text.secondary"
          gutterBottom
        >
          {category}
        </Typography>
        <Typography
          sx={{
            width: "20vw",
            fontSize: "0.9vw",
            color: "white",
            textAlign: "justify",
            textJustify: "distribute",
            // wordSpacing: "10px",
            margin: "0 0 2.5vh 0",
          }}
          color="text.secondary"
          gutterBottom
        >
          {header}
        </Typography>
        <Grid>
          <Typography
            sx={{
              textTransform: "capitalize",
              color: "#909090",
              background: "#fff",
              fontSize: "0.9vw",
              borderRadius: "25px",
              width: "12vw",
              textAlign: "center",
              padding: "1vh 1vw",
            }}
          >
            Date: {date}
          </Typography>
        </Grid>
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
              color: "#909090",
              background: "#fff",
              fontSize: "2vw",
              padding: "5px",
              borderRadius: "50%",
              fontWeight: "100",
            }}
          />
          <Favorite
            sx={{
              // color: "#909090",
              color: "#ffbaba",
              background: "#fff",
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
