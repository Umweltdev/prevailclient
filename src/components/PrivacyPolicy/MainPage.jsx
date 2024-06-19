import { Grid } from "@mui/material";
import React from "react";
import InformationCard from "./InformationCard";
import InformationPage from "./InformationPage";

const MainPage = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "top",
        margin: "15vh 0",
        gap: "75px",
      }}
    >
      <InformationCard />
      <InformationPage />
    </Grid>
  );
};

export default MainPage;
