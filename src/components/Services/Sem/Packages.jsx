import React from "react";
import { Grid, Typography } from "@mui/material";
import WhitePackageLayout from "../ReusedComponenets/WhitePackageLayout";
import PurplePackageLayout from "../ReusedComponenets/PurplePackageLayout";

const Packages = () => {
  return (
    <div
      style={{
        margin: "30px auto 0 auto",
        padding: "30px 0 50px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#F9FAFC",
        "@media (max-width: 600px)": {
          margin: "1vh auto 0 auto",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "48px",
          fontWeight: "bold",
          color: "45px",
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
        Choose Your Package
      </Typography>
      <Grid
        sx={{
          display: "flex",
          // gap: "2vw",
          "@media (max-width: 600px)": {
            display: "unset",
            gap: "5vw",
          },
        }}
      >
        <WhitePackageLayout
          packages="SEM Silver Package"
          //info="Forever free, even after the launch"
          button="Book now"
          height="700px"
          mobileHeight={"750px"}
        />
        <PurplePackageLayout
          packages="SEM Platinum Package"
          //info="Forever free, even after the launch"
          button="Book now"
          height="800px"
          mobileHeight={"850px"}
        />
      </Grid>
    </div>
  );
};

export default Packages;
