import { Grid, Typography } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../../About/assets/about.module.css"
//import landingImage1 from "../assets/brandd.png";



const HeroComponent = ({ title }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Grid
      ref={ref}
      className={`${styles.aboutUsSection} ${inView ? styles.visible : ""}`}
      sx={{
        width: "100vw",
        display: "flex",
        height: "298px",
        margin: "auto",
        background: "#F9FAFC",
        "@media (max-width: 600px)": {
          width: "100vw",
          height: "265px",
          flexDirection: "column",
          marginBottom: "unset",
          margin: "0 auto 0 auto",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1vw",
        },
      }}
    >
      <Typography
        className={`${styles.aboutUsText} ${inView ? styles.visible : ""}`}
        sx={{
          margin: "auto",
          fontSize: "38px",
          fontWeight: "600",
          color: "#6E3EF4",
          mt: "176px",
          "@media (max-width: 600px)": {
            mt: "168px",
            fontSize: "24px",
            width: "90vw",
            textAlign: "center",
          },
        }}
      >
        {title}
      </Typography>
    </Grid>
  );
};

export default HeroComponent;
