import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";

const CaseNavigation = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10vh auto",
        gap: "10px",
      }}
    >
      <Card
        sx={{
          background: "#884ed9",
          color: "white",
          height: "120px",
          width: "520px",
          borderRadius: "16px",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            fontSize: "15px",
            padding: "20px 0 0 20px",
          }}
        >
          <ArrowBack
            sx={{
              fontSize: "20px",
            }}
          />
          Previous Case Study
        </Typography>
        <Typography
          sx={{
            fontSize: "25px",
            padding: "0 0 0 20px",
            fontWeight: 500,
          }}
        >
          Previous Case Study
        </Typography>
      </Card>
      <Card
        sx={{
          background: "#884ed9",
          color: "white",
          height: "120px",
          width: "520px",
          borderRadius: "16px",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            fontSize: "15px",
            padding: "20px 0 0 20px",
          }}
        >
          Next Case Study
          <ArrowForward
            sx={{
              fontSize: "20px",
            }}
          />
        </Typography>
        <Typography
          sx={{
            fontSize: "25px",
            padding: "0 0 0 20px",
            fontWeight: 500,
          }}
        >
          Next Case Study
        </Typography>
      </Card>
    </Grid>
  );
};

export default CaseNavigation;
