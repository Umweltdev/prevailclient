import { Grid } from "@mui/material";
import React from "react";
import Header from "../components/PrivacyPolicy/Header";
import MainPage from "../components/PrivacyPolicy/MainPage";
import Footer from "../components/Footer/Footer";
import FooterNew from "../components/Footer/FooterNew";
import AppBarNav from "../components/Navbar/Appbar";

const PrivacyPolicy = () => {
  return (
    <Grid sx={{ background: "#fff" }}>
      <AppBarNav color="#000" />
      <Header />
      <MainPage />
      <FooterNew />
    </Grid>
  );
};

export default PrivacyPolicy;
