import { Grid, Typography } from "@mui/material";
import React from "react";

const Budget = () => {
  return (
    <Grid
      sx={{
        padding: "10vh 0",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "@media (max-width: 600px)": {
          padding: "5vh 0",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "1.6vw",
          width: "60vw",
          textAlign: "center",
          "@media (max-width: 600px)": {
            fontSize: "4.5vw",
            width: "95vw",
            textAlign: "center",
          },
        }}
      >
        Do not let budget constraints limit your growth. Embrace the digital age
        with the Marketing Price Displacement (MPD) API. Sign up now to
        transform your approach to pricing and marketing, and start reaping the
        benefits of a smarter, more agile business strategy. Your journey
        towards increased market share and proportional income growth begins
        here.
      </Typography>
    </Grid>
  );
};

export default Budget;
