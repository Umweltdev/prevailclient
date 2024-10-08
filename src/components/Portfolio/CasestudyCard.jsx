// CasestudyCard.js
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";

export default function CasestudyCard({ image, text, index }) {
  return (
    <div>
      <Card
        sx={{
          width: 340,
          margin: "10px",
          borderRadius: "20px",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={image}
            sx={{ borderRadius: "20px" }}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {text}
            </Typography>

            {/* <Button
              sx={{
                background: "#884ed9",
                color: "white",
                fontSize: "13px",
                borderRadius: "25px",
                padding: "8px 18px",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#884ed9",
                  border: "1px solid #884ed9",
                },
              }}
            >
              Read More
            </Button> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
