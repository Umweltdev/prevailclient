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
        maxWidth: 345,
        height: 420,
        display: "flex",
        // justifyContent: "top",
        flexDirection: "column",
      }}
    >
      <CardMedia
        sx={{ height: 180, objectFit: "cover" }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {header}
        </Typography>
        <Typography height="200" variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          sx={{
            background:
              gradient || "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
            padding: "1vh 2vw",
            borderRadius: "5vw",
            color: "white",
            fontWeight: "bold",
            boxShadow:
              "0px 1px 2px -1px rgba(255,105,135,0.5), 0px 3px 5px 0px rgba(255,105,135,0.3), 0px 1px 9px 0px rgba(255,105,135,0.2)",
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
