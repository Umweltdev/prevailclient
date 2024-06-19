import { CardMedia, Grid } from "@mui/material";
import React from "react";
import imageCard from "./assets/image 146.png";

const AboutUs = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: "200px",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        width: "501px",
        margin: "0 auto",
        
      }}
    >
      <Grid
        sx={{
          color: "#6E3EF4;",
          fontSize: "24px;",
          fontWeight: "400;",
          lineHeight: "110%;",
          letterSpacing: "-0.24px;",
        }}
      >
        About Us
      </Grid>
      <Grid
        sx={{
          color: "#1D0D40",
          fontSize: "38px;",
          fontWeight: "500;",
          letterSpacing: "-0.24px;",
          textAlign: "center",
        }}
      >
        Great companies are made by great people
      </Grid>
      <Grid
        sx={{
          color: "#505660",
          fontSize: "18px",
          fontWeight: "400",
          letterSpacing: "-0.24px",
          lineHeight: "150%",
          width: "917px",
          textAlign: "center",
        }}
      >
        In a word where economic fluctuations often diminish the purchasing
        power of individuals and small businesses alike, rising interest rates
        and unpredictable consumer demands pose substantial challenges.
        Small-to-medium-sized enterprises (SMEs) and local businesses frequently
        find themselves battling to maintain relevance in a marketplace where
        larger entities, armed with vast resources and advanced technological
        tools, dominate. This daunting scenario is the very challenge that fuels
        Prevail’s commitment and innovative approach. 
      </Grid>
      <CardMedia
        component={"img"}
        image={imageCard}
        sx={{
          width: "1210px;",
          height: "510px;",
          borderRadius: "15px",
          mt: "40px",
        }}
      />
    </Grid>
  );
};

export default AboutUs;
