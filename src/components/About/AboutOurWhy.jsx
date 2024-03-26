import React from "react";
import DrawerAppBarWhite from "../Navbar/Appbar";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FooterNew from "../Footer/FooterNew";

const useStyle = makeStyles({
  mainContainer: {
    backgroundImage:
      "url(https://img.freepik.com/free-vector/white-technology-wallpaper-theme_23-2148416480.jpg?t=st=1710155356~exp=1710158956~hmac=63bb0e05d938195db306a2e0db1da7208c7150c207c173732d62e71e24dbc1d5&w=740)",
    height: "70vh",
    backgroundPosition: "center fixed",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: " fixed",
    backgroundSize: "cover",
    "@media (max-width: 600px)": { fontSize: "7vw", height: "40vh" },
  },

  hero: {
    padding: "30vh 0 0 5vw",
    "@media (max-width: 600px)": { padding: "20vh 0 0 10vw" },
  },

  heroText: {
    color: "#7097da",
    fontSize: "8vw",
    fontWeight: "bold",
    fontFamily: "Sarabun",
    "@media (max-width: 600px)": { fontSize: "10vw", fontWeight: "bold" },
  },

  imago: {
    width: "25vw",
    height: "25vw",
    objectFit: "cover",
    fontSize: "8vw",
    "@media (max-width: 600px)": {
      width: "85vw",
      height: "85vw",
      objectFit: "cover",
      fontSize: "8vw",
    },
  },
});

const AboutOurWhy = () => {
  const classes = useStyle();

  return (
    <Grid>
      <DrawerAppBarWhite />
      <Grid className={classes.mainContainer}>
        <Grid className={classes.hero}>
          <Typography variant="" className={classes.heroText}>
            Our Why
          </Typography>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "2vw",
          "@media (max-width: 600px)": {
            flexDirection: "column",
            margin: "2vh 0",
          },
        }}
      >
        <Typography
          sx={{
            padding: "10vh 0",
            // margin: "0 auto",
            textAlign: "justify",
            width: "55vw",
            "@media (max-width: 600px)": {
              padding: "3vh 0",
              // margin: "0 auto",
              textAlign: "justify",
              fontFamily: "Sarabun",
              textJustify: "distribute",
              width: "95vw",
            },
          }}
        >
          Understanding the nuances of marketing budgets and effective
          strategies is essential to businesses. The costs associated with
          marketing can vary significantly, contingent on factors like a
          company's marketing budget, specific goals, and the number of
          marketing channels they choose to employ. It is a well-established
          industry guideline that businesses should allocate between 15% and 20%
          of their sales towards marketing expenses. However, the ultimate
          allocation hinges on a company's unique budget size, marketing
          strategy, ambition, and the manner in which it intends to utilise its
          marketing resources. <br />
          That is why understanding the nuances of our market share, budgets,
          and effects is essential in a company’s strategy to promote themselves
          to their right & unique target audiences. Our paramount concern is the
          current trend where large enterprises tend to dominate the digital
          landscape. They often do so by employing full-time programmers and
          have the financial capacity to invest in a plethora of SaaS solutions.
          Regrettably, this trend leads to a rapid erosion of market share for
          local businesses and SMEs, often catching them in financial distress
          before they even realise it. The stark reality is that local
          businesses and SMEs find it challenging to outcompete these industry
          giants and are losing their market share within their respective
          sectors.
        </Typography>
        <img
          className={classes.imago}
          src="https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18383.jpg?t=st=1710157543~exp=1710161143~hmac=bdee5066423ff5cd1b5d6911a2982fee98a4f1e05c9850f9e6d24728faf2b9a1&w=740"
          alt=""
        />
      </Grid>
      <FooterNew />
    </Grid>
  );
};

export default AboutOurWhy;
