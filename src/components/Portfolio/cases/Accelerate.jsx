import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";

const Accelerate = () => {
  return (
    <Grid>
      <Card
        sx={{
          background: "#884ed9",
          width: "95vw",
          borderRadius: "16px",
          margin: "5vh auto",
          padding: "2vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",

          "@media (max-width: 600px)": {
            padding: "3vh 0",
            width: "95vw",
          },
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "2.5vw",
            "@media (max-width: 600px)": {
              fontSize: "3vh",
            },
          }}
        >
          Accelerate Your Growth
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "2.5vw",
            fontWeight: "bold",
            "@media (max-width: 600px)": {
              fontSize: "3vh",
            },
          }}
        >
          With Salt Marketing Today
        </Typography>
        <Grid
          sx={{
            padding: "3vh 0",
            gap: "1vw",
            display: "flex",
            flexWrap: "wrap",
            "@media (max-width: 600px)": {
              margin: "2vh auto",
            },
          }}
        >
          <Button
            sx={{
              background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
              padding: "1vh 3vw",
              color: "white",
              borderRadius: "10vw",
              fontWeight: "bold",
            }}
          >
            Request a Free Audit
          </Button>
          <Button
            sx={{
              background: "white",
              padding: "0.8vh 3vw",
              color: "blue",
              border: "1px solid blue",
              borderRadius: "10vw",
              fontWeight: "bold",
            }}
          >
            Book A Call
          </Button>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Accelerate;
