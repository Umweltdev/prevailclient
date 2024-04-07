import { Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
//import landingImage1 from "../assets/brandd.png";

const useStyles = makeStyles({
  imagePlaform: {
    width: "80vw",
    height: "50vh",
    objectFit: "cover",
    borderRadius: "5px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",

    "@media (max-width: 600px)": {
      width: "unset",
      height: "unset",
    },
  },
  imageInit: {
    width: "37vw",
    borderRadius: "1vw",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    "@media (max-width: 600px)": {
      width: "95vw",
      height: "unset",
    },
  },
});

const SectionTwo = () => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        width: "80vw",
        display: "flex",
        // margin: "15vh auto",
        margin: "30vh auto 0 auto",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "7vw",
        "@media (max-width: 600px)": {
          width: "95vw",
          flexDirection: "column",
          margin: "13vh auto 0 auto",
          marginBottom: "1vh",
          // gap: "5vw",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1vw",
        },
      }}
    >
      <Grid
        sx={{
          width: "40vw",
          "@media (max-width: 600px)": {
            width: "95vw",
          },
        }}
      >
        <Typography
          sx={{
            display: "flex",
            fontSize: "3vw",
            fontWeight: "bold",
            color: "#494848",
            marginBottom: "3vh",
            "@media (max-width: 600px)": {
              fontSize: "6vw",
              margin: "2vh 0",
            },
          }}
        >
          Why Us
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2vw",
            color: "#636363",
            marginBottom: "3vh",
            // textAlign: "justify",
            width: "37vw",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              textAlign: "justify",
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
          marketing resources. That is why understanding the nuances of our
          market share, budgets, and effects is essential in a company’s
          strategy to promote themselves to their right & unique target
          audiences.
        </Typography>
      </Grid>
      <img
        className={classes.imageInit}
        style={{}}
        src="https://t4.ftcdn.net/jpg/00/96/54/53/360_F_96545306_cX6N4Fv2TTVRMKahA3aoCvxlUOGm2KkV.jpg"
        alt=""
      />
    </Grid>
  );
};

export default SectionTwo;
