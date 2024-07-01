import { Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import img1 from "../CJ/Active-Evaluation.webp"

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

const Evaluation = () => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        width: "80vw",
        display: "flex",
        // margin: "15vh auto",
        margin: "10vh auto 0 auto",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "7vw",
        height: "100vh",
        "@media (max-width: 600px)": {
          width: "95vw",
          height: "60vh",
          flexDirection: "column",
          marginBottom: "unset",
          margin: "15vh auto 0 auto",
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
              fontSize: "3vw",
              margin: "2vh 0",
            },
          }}
        >
          Active Evaluation: Showcase and Compare
        </Typography>
        <Typography
          sx={{
            fontSize: "1.5vw",
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
            During this, customers actively look around, just like window-shopping – comparing different brands for what they offer, and what is the best value for their money. At Prevail, our “Website Production” service ensures that your online presence is not only striking but also informative and user-friendly. 

Your website serves as your digital storefront, providing extensive product information, customer testimonials, blogs, and FAQs. Alongside, our SEM strategies, particularly pay-per-click (PPC) advertising, play a vital role by placing targeted ads that attract and engage potential customers who are actively seeking solutions. 
        </Typography>
      </Grid>
      <img
        className={classes.imageInit}
        style={{}}
        src={img1}
      />
    </Grid>
  );
};

export default Evaluation;
