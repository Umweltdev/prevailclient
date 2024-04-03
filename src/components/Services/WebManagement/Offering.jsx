import { Grid, Typography } from "@mui/material";
import React from "react";
import BrandIdentityCard from "./BrandIdentityCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  imagePlaform: {
    width: "78vw",
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

const Offering = () => {
  
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "4vw",
        justifyContent: "center",
        alignItems: "top",
        margin: "0 auto",
        backgroundColor: "white",
        padding: "10vh 5vw",
        "@media (max-width: 600px)": {
          display: "flex",
          flexDirection: "column",
          gap: "4vw",
          justifyContent: "center",
          alignItems: "top",
          margin: "unset",
          backgroundColor: "#7097da",
          padding: "2vh 0",
        },
      }}
    >
      <Grid sx={{ textAlign: "justify" }}>
      <Typography
              sx={{
                display: "flex",
                fontSize: "1.8vw",
                fontWeight: "bold",
                color: "#494848",
                marginBottom: "3vh",
                "@media (max-width: 600px)": {
                  fontSize: "6vw",
                  margin: "2vh 0",
                },
              }}
            >
          Offering
        </Typography>
        <Typography
              sx={{
                fontSize: "1.4vw",
                color: "#636363",
                marginBottom: "3vh",
                textAlign: "justify",
                width: "37vw",
                "@media (max-width: 600px)": {
                  fontSize: "4vw",
                  textAlign: "justify",
                  width: "95vw",
                },
              }}
            >
         We are excited to introduce Prevail's groundbreaking "Website Production & Management" service, a strategic initiative designed to empower SMEs and local businesses with a robust online presence that not only captivates but also seamlessly engages with their target audience. Our comprehensive service goes beyond the conventional website development model but a state-of-the-art website.
        </Typography>
      </Grid>
      <Grid
        sx={{
          "@media (max-width: 600px)": {
            margin: "0 auto",
          },
        }}
      >
        <BrandIdentityCard />
      </Grid>
    </Grid>
  );
};

export default Offering;
