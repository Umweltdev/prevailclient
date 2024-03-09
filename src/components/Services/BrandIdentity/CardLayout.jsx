import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { brandIdentityCard } from "../assets/ServicesData";
import { Grid } from "@mui/material";

export default function BrandIdentityCard() {
  return (
    <Grid
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1vw",
        "@media (max-width: 600px)": {
          gap: "1vh",
          margin: "2vh auto",
          justifyContent: "center"
        },
      }}
    >
      {brandIdentityCard.map((data, index) => (
        <Card
          sx={{
            width: 300,
            "@media (max-width: 600px)": { width: "95vw", marginTop: "2vh" },
          }}
          key={index}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.header}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.text}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
}
