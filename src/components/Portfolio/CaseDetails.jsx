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
import Result from "./cases/Result";
import Testimonials from "./cases/Testimonials";
import FacebookCreatives from "./cases/FacebookCreatives";
import Accelerate from "./cases/Accelerate";
import CaseNavigation from "./cases/CaseNavigation";

const CaseDetails = () => {
  const { index } = useParams();

  const currentIndex = parseInt(index, 10);
  const currentCase = caseData[currentIndex];

  if (!currentCase) {
    return <div>Case study not found</div>;
  }

  
  const prevIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;
  const prevCaseUrl = prevIndex >= 0 ? `/Portfolio/${prevIndex}` : null;
  const nextCaseUrl = nextIndex < caseData.length ? `/Portfolio/${nextIndex}` : null;

  return (
    <Grid>
      <DrawerAppBar />
      <HeroSection
        header={currentCase.header}
        text={currentCase.text}
        img={currentCase.img}
      />
      <Overview />
      <Problem />
      <Solutions />
      <Result />
      <Testimonials />
      <FacebookCreatives />
      <Accelerate />
      <CaseNavigation
        prevCase={prevCaseUrl}
        nextCase={nextCaseUrl}
        prevHeader={prevCaseUrl ? caseData[prevIndex].header : ""}
        nextHeader={nextCaseUrl ? caseData[nextIndex].header : ""}
      />
      
      <FooterNew />
    </Grid>
  );
};

export default CaseDetails;
