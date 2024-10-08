import { Grid, Typography, Box, CardMedia, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import ReusedButton from "../ReusedComponents/ReusedButton";
import styles from "../Landing/assets/animation.module.css"
import { useInView } from "react-intersection-observer";

const TextImageService = ({ text, imageUrl, textHeader, url, alt }) => {

  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Grid
      ref={ref}
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "239px",
        "@media (max-width: 600px)": {
          width: "95vw",
          flexDirection: "column",
          margin: "auto",
          marginBottom: "1vh",
          gap: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        },
      }}
    >
      <Grid
        className={inView ? styles.textSlideIn : ""}
        item
        sx={{
          width: "34vw",
          "@media (max-width: 600px)": {
            width: "90vw",
          },
        }}
      >
        <Typography
          sx={{
            display: "flex",
            fontSize: "28px",
            fontWeight: "500",
            color: "#1D0D40",
            marginBottom: "20px",
            lineHeight: "110%",
            letterSpacing: "-0.28px",

            "@media (max-width: 600px)": {
              fontSize: "6vw",
              margin: "2vh 0",
            },
          }}
        >
          {textHeader}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#505660",
            marginBottom: "3vh",
            width: "34vw",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              textAlign: "justify",
              width: "100%",
            },
          }}
        >
          {text}
        </Typography>
        <Link rel="canonical" to={url}>
          <Link rel="canonical" to={url}>
            <ReusedButton text="Learn More" />
          </Link>
        </Link>
      </Grid>
      <CardMedia
        component={"img"}
        className={inView ? styles.imageFadeIn : ""}
        image={imageUrl}
        alt={alt}
        sx={{
          width: "34vw",
          height: "300px",
          borderRadius: "16px",
          "@media (max-width: 600px)": {
            width: "90vw",
            height: "365.756px",
            borderRadius: "16px",
          },
        }}
      />
    </Grid>
  );
};

export default TextImageService;
