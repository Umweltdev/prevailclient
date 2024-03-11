import React from "react";
import { useParams } from "react-router-dom";
import DrawerAppBar from "../Navbar/Appbar";
import { Grid, Typography } from "@mui/material";
import { caseData } from "./assets/PortfolioData";
import FooterNew from "../Footer/FooterNew";
import HeroSection from "./cases/HeroSection";
import Overview from "./cases/Overview";
import Problem from "./cases/Problem";
import Solutions from "./cases/Solutions";

const CaseDetails = () => {
  const { index } = useParams();

  const cases = caseData[parseInt(index, 10)];

  if (!cases) {
    return <div>Blog not found</div>;
  }
  return (
    <Grid>
      <DrawerAppBar />
      <HeroSection header={cases.header} text={cases.text} img={cases.img} />
      <Overview />
      <Problem />
      <Solutions/>
      <FooterNew />
    </Grid>
  );
};

export default CaseDetails;
