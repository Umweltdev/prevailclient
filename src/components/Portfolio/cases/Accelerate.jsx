import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Accelerate = () => {
  return (
    <Grid>
      <Card
        sx={{
          // background: "#884ed9",
          width: "95vw",
          borderRadius: "16px",
          margin: "5vh auto",
          padding: "2vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          background: "linear-gradient(45deg, #884ed9 30%, #be90fd 90%)",

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
          With Prevail Marketing and Management
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
          <Link textDecoration="none" to="/Stepper">
            <Button
              sx={{
                background: "#884ed9",
                padding: "1vh 3vw",
                color: "white",
                borderRadius: "10vw",
                fontWeight: "bold",
              }}
            >
              Request a Free Audit
            </Button>
          </Link>
          <Link textDecoration="none" to="/Stepper">
            <Button
              sx={{
                background: "#884ed9",
                padding: "1vh 3vw",
                color: "white",
                borderRadius: "10vw",
                fontWeight: "bold",
              }}
            >
              Book A Call
            </Button>
          </Link>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Accelerate;
