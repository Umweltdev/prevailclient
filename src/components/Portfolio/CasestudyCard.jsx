// CasestudyCard.js
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function CasestudyCard({ image, text, index }) {
  return (
    <Grid>
      <Card sx={{ width: 340 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {text}
            </Typography>

            <Button
              sx={{
                background: "#884ed9",
                color: "white",
              }}
            >
              Read More.
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
