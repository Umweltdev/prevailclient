import { Card, CardMedia, Grid, Typography, Box } from "@mui/material";
import React from "react";
import styles from "../BrandIdentity/assets/animation.module.css";
import { useInView } from "react-intersection-observer";

const ImageTextComponent = ({ img, header, text, alt }) => {

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
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column-reverse",
          mt: "40px",
          mb: "20px",
        },
      }}
    >
      <CardMedia
        component={"img"}
        className={inView ? styles.imageFadeIn : ""}
        image={img}
        alt={alt}
        sx={{
          width: "50vw",
          height: "100vh",
          "@media (max-width: 600px)": {
            height: "unset",
            width: "90vw",
            borderRadius: "14px",
            mt: "4vh",
          },
        }}
      />
      <Grid
        className={inView ? styles.textSlideIn : ""}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "left",
          margin: "auto",
          gap: "20px",
          width: "50vw",
          // pl: "5vw",
          "@media (max-width: 600px)": {
            width: "90vw",
            borderRadius: "14px",
            mr: "unset",
            margin: "40px auto 0 auto",
          },
        }}
      >
        <Typography
          sx={{
            color: "#1D0D40",
            fontSize: "24px",
            fontWeight: " 500",
            width: "40vw",
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
            width: "40vw",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
          dangerouslySetInnerHTML={{ __html: text }}
        ></Typography>
      </Grid>
    </Box>
  );
};

export default ImageTextComponent;
