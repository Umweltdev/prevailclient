import React from "react";
import { Card, CardMedia, Grid, Typography, Box } from "@mui/material";
import styles from "../BrandIdentity/assets/animation.module.css";
import { useInView } from "react-intersection-observer";

const TextImageComponent = ({ header, text, img }) => {

  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        width: "100vw",
        alignItems: "center",
        justifyContent: "space-between",
        "@media (max-width: 600px)": {
          display: "flex",
          width: "100vw",
          flexDirection: "column",
        },
      }}
    >
      <Grid
        className={inView ? styles.textSlideIn : ""}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "left",
          margin: "auto",
          // mr: "15vw",
          gap: "20px",
          width: "50vw",
          "@media (max-width: 600px)": {
            width: "90vw",
            flexDirection: "column",
            ml: "unset",
            mt: "40px",
            margin: "40px auto 0 auto",
          },
        }}
      >
        <Typography
          sx={{
            color: "#1D0D40",
            fontSize: "24px",
            fontWeight: " 500",
            width: "35vw",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        >
          {header}
        </Typography>
        <Typography
          sx={{
            color: "#505660;",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "150%",
            width: "35vw",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
          dangerouslySetInnerHTML={{ __html: text }}
        ></Typography>
      </Grid>
      <CardMedia
        component={"img"}
        className={inView ? styles.imageFadeIn : ""}
        image={img}
        sx={{
          width: "50vw",
          height: "100vh",
          "@media (max-width: 600px)": {
            width: "90vw",
            mt: "5vh",
            height: "unset",
            borderRadius: "14px",
          },
        }}
      />
    </Box>
  );
};

export default TextImageComponent;
