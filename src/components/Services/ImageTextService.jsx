import { Button, CardMedia, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ReusedButton from "../ReusedComponents/ReusedButton";
import styles from "../Landing/assets/animation.module.css"
import { useInView } from "react-intersection-observer";

const ImageTextService = ({ text, imageUrl, textHeader, url, alt }) => {

  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Stack
      ref={ref}
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center", // Center content horizontally
        alignItems: "center", // Center content vertically
        gap: "239px", // Add a gap between items
        "@media (max-width: 600px)": {
          width: "95vw",
          flexDirection: "column-reverse",
          margin: "auto",
          marginBottom: "1vh",
          gap: "20px", // Gap for small screens
          justifyContent: "center", // Center content on small screens
          alignItems: "center",
        },
      }}
    >
      <CardMedia
        component="img"
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
      <Grid
        item
        className={inView ? styles.textSlideIn : ""}
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
              width: "90vw",
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
            "@media (max-width: 600px)": {
              fontSize: "4vw",
            },
          }}
        >
          {text}
        </Typography>
        <Link to={url}>
          <ReusedButton text="Learn More" />
        </Link>
      </Grid>
    </Stack>
  );
};

export default ImageTextService;
