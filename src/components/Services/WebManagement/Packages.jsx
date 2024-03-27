import React from "react";
import PackagesLayout from "../BrandIdentity/PackagesLayout";
import { Grid, Typography } from "@mui/material";

const Packages = () => {
  return (
    <div
      style={{
        margin: "5vh auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "@media (max-width: 600px)": {
          margin: "1vh auto",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "4vw",
          fontWeight: "bold",
          color: "#884ed9",
          margin: "5vh 0",
          fontFamily: `"Sarabun", sans-serif`,
          "@media (max-width: 600px)": {
            fontSize: "7vw",
            fontWeight: "bold",
            color: "#884ed9",
            margin: "1vh 0",
          },
        }}
      >
        Packages
      </Typography>
      <Grid
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10vh 0",
          gap: "2vw",
          "@media (max-width: 600px)": {
            backgroundColor: "white",
            display: "unset",
            justifyContent: "center",
            alignItems: "center",
            padding: "unset",
            gap: "2vh",
            margin: "2vh auto",
          },
        }}
      >
        <PackagesLayout
          packages={"Shopify Complete Package"}
          amount={"Original €2,000 once-off"}
          first={"SSL certificate"}
          second={"Domain set-up & hosting"}
          third={"Admin login"}
          fourth={"Basic website customisation"}
          sixth={"Subscribe"}
        />
        <PackagesLayout
          packages={"Shopify Ultimate Package"}
          amount={"Original €2,000 once-off"}
          first={"SSL certificate"}
          second={"Domain set-up & hosting"}
          third={"Admin login"}
          fourth={"Basic website customisation"}
          sixth={"Subscribe"}
        />
        <PackagesLayout
          packages={"Estate Agency Complete Platform"}
          amount={"Original €2,000 once-off"}
          first={"SSL certificate"}
          second={"Domain set-up & hosting"}
          third={"Admin login"}
          fourth={"Basic website customisation"}
          sixth={"Subscribe"}
        />
        <PackagesLayout
          packages={"Estate Agency Ultimate Platform"}
          amount={"Original €2,000 once-off"}
          first={"SSL certificate"}
          second={"Domain set-up & hosting"}
          third={"Admin login"}
          fourth={"Basic website customisation"}
          sixth={"Subscribe"}
        />
      </Grid>
    </div>
  );
};

export default Packages;
