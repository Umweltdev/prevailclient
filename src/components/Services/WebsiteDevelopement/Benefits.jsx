import React from "react";
import BenefitCard from "./BenefitCard";
import { Grid, Typography } from "@mui/material";

const Benefits = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "@media (max-width: 600px)": {
          fontSize: "4vw",
          textAlign: "center",
          width: "95vw",
          marginTop: "6vh",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "4vw",
          fontWeight: "900",

          color: "#333",
          margin: "0 0 2vh 0",
          "@media (max-width: 600px)": {
            fontSize: "7vw",
            fontWeight: "900",
            color: "black",
            margin: "unset",
            marginTop: "6vh",
          },
        }}
      >
        Benefits
      </Typography>

      <Grid
        sx={{
          padding: "10vh 0",
          height: "100vh",
          "@media (max-width: 600px)": {
            height: "unset",
          },
        }}
      >
        <BenefitCard />
      </Grid>
    </div>
  );
};

export default Benefits;
