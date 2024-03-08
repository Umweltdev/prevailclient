import { Grid, Typography } from "@mui/material";
import React from "react";
import BrandIdentityCard from "./CardLayout";

const ServiceDetails3 = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "4vw",
        justifyContent: "center",
        alignItems: "top",
        margin: "0 auto",
        backgroundColor: "#7097da",
        padding: "10vh 5vw",
        "@media (max-width: 600px)": {
          display: "flex",
          flexDirection: "column",
          gap: "4vw",
          justifyContent: "center",
          alignItems: "top",
          margin: "unset",
          backgroundColor: "#7097da",
          padding: "10vh 5vw",
        },
      }}
    >
      <Grid sx={{ textAlign: "justify" }}>
        <Typography
          sx={{
            fontSize: "4vw",
            textAlign: "justify",
            fontWeight: "bold",
            color: "white",
            "@media (max-width: 600px)": {
              fontSize: "7vw",
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
            },
          }}
        >
          Offering
        </Typography>
        <Typography
          sx={{
            width: "30vw",
            fontSize: "1.5vw",
            textAlign: "justify",
            fontWeight: "bold",
            margin: "0 auto",
            color: "white",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
              width: "95vw",
            },
          }}
        >
          Here's where our "Brand Identity Package" service comes into play,
          addressing your pain point with precision. Our collaborative process
          is the heartbeat of our success. We work closely with you, the
          heartbeat of your business, to weave your unique vision and values
          into every aspect of your brand identity. Imagine the pride and
          confidence you'll feel when your brand identity is not just cohesive
          but also deeply resonates with your target audience.
        </Typography>
      </Grid>
      <Grid>
        <BrandIdentityCard />
      </Grid>
    </Grid>
  );
};

export default ServiceDetails3;
