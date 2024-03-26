import React from "react";
import PackagesLayout from "./PackagesLayout";
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
          display: "flex",
          gap: "2vw",
          "@media (max-width: 600px)": {
            display: "unset",
          },
        }}
      >
        <PackagesLayout
          packages="Brand Identity Starter Package"
          amount="Original €700 once-off"
          first="Logo design concept (up to 2 proposals)"
          second="Business card concept"
          third={"Colour scheme"}
          fourth={"Typography"}
          fifth={"Letterhead design or invoice design"}
          sixth={"Subscribe Now"}
        />
        <PackagesLayout
          packages="Brand Identity Elite Package"
          amount="Original €1,000 once-off"
          first="Everything in the “Brand Identity Starter Package”"
          second="Logo design concept (up to 4 proposals)"
          third={"Business card concept (up to 2 proposals)"}
          fourth={"Sd design concept (up to 2 proposals)"}
          //fifth={"Letterhead design or invoice design"}
          sixth={"Subscribe Now"}
          // seventh={"brochure design concept (up to 2 proposals)"}
          // eigth={"Package or envelope design"}
          //seventeen={"Subscribe Now"}
        />
      </Grid>
    </div>
  );
};

export default Packages;
