import { Grid } from "@mui/material";
import React from "react";
import Header from "../components/PrivacyPolicy/Header";
import MainPage from "../components/PrivacyPolicy/MainPage";
import Footer from "../components/Footer/Footer";
import FooterNew from "../components/Footer/FooterNew";

const PrivacyPolicy = () => {
  return (
    <Grid
      sx={{ background: "linear-gradient(135deg, #DDD4EF, #F9FAFC, white)" }}
    >
      <Header />
      <MainPage />
      <FooterNew />
    </Grid>
  );
};

export default PrivacyPolicy;
