import { Grid } from "@mui/material";
import React from "react";
import TextImageComponent from "../ReusedComponenets/TextImageComponent";
import ImageTextComponent from "../ReusedComponenets/ImageTextComponent";
//import img3 from "../assets/image 145.png";
//import PrevailMPDApi from "./PrevailMPDApi";
//import KeyBenefits from "./KeyBenefits";

const MainPage = () => {
  return (
    <Grid>
      <TextImageComponent
        img="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720090508/Master-Your-Market_hzsxcr.avif"
        alt={"Overcoming-Marketing-Challenges"}
        header={
          "Welcome to the Future of Digital Marketing: Master Your Market with Prevail’s MPD API "
        }
        text={`In the fast-paced digital world, small and medium-sized enterprises (SMEs) and local businesses often struggle to keep pace with the vast resources of larger competitors. This challenge can hinder their market visibility and profitability. Recognising this gap, Prevail introduces the revolutionary Marketing Price Displacement (MPD) API – a tool designed to empower these businesses with strategies that were once the exclusive domain of major corporations.  <br/><br/>With our MPD API, businesses can achieve the perfect balance between cost-efficiency and market visibility, making advanced pricing strategies like elastic pricing and yield management accessible and easy to manage. `}
      />
      <ImageTextComponent
        img="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720090509/Overcoming-Marketing-Challenges_bie6ig.avif"
        alt={"Master-Your-Market"}
        header={"Overcoming Marketing Challenges	 "}
        text={`Navigating the digital marketing landscape often feels like an uphill battle for many businesses. Challenges such as managing budgets, optimising marketing spend, and bridging the communication gap between marketing and financial departments can significantly deter a company’s growth. <br/><br/>These hurdles are compounded by the need to juggle numerous spreadsheets, decode complex jargon, and avoid expensive mistakes – all of which can extend beyond professional life and impact personal well-being. `}
      />
      
    </Grid>
  );
};

export default MainPage;
