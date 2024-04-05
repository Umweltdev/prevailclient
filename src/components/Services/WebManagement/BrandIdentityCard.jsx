import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { brandManagementCard } from "../assets/ServicesData";
import { Grid } from "@mui/material";

export default function BrandIdentityCard() {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      sx={{
        marginTop: "2vh",
        "@media (max-width: 600px)": {
          margin: "0 auto",
         
        },
      }}
    >
      {brandManagementCard.map((data, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              borderRadius: "1.5rem", // Increase border radius
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box shadow
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: `"Sarabun", sans-serif` }} // Set font family to Sarabun
              >
                {data.header}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: `"Sarabun", sans-serif` }} // Set font family to Sarabun
              >
                {data.text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
