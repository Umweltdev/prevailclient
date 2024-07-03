import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import imago from "./About_Us/Our-Mission.webp";
import styles from "./assets/about.module.css"; // Import the animation CSS

const SectionTwo = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Grid
      container
      ref={sectionRef}
      className={`${styles.sectionTwo} ${sectionInView ? styles.visible : ""}`}
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        margin: "100px auto 0 auto",
        justifyContent: "center",
        alignItems: "center",
        gap: "239px",
        "@media (max-width: 600px)": {
          width: "95vw",
          flexDirection: "column",
          margin: "13vh auto 0 auto",
          marginBottom: "1vh",
          gap: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        },
      }}
    >
      <Grid
        ref={textRef}
        className={`${styles.textSlideIn} ${textInView ? styles.visible : ""}`}
        sx={{
          width: "485px",
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
          Our Mission
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#505660",
            marginBottom: "3vh",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              textAlign: "justify",
              width: "90vw",
            },
          }}
        >
          Prevail is not just a marketing firm; we are architects of bespoke
          solutions that fuse cutting-edge automation technology, profound
          consumer insights, and state-of-the-art marketing tactics. <br />
          <br /> Our approach transcends mere automation by integrating it with
          robust data analytics and creative flair, crafting marketing
          strategies that truly resonate with your target demographics. Our
          holistic strategy ensures sustained growth, even amongst the most
          challenging.
        </Typography>
      </Grid>
      <Box
        ref={imageRef}
        className={`${styles.imageSlideIn} ${
          imageInView ? styles.visible : ""
        }`}
        sx={{
          background: "#ECF1FA",
          width: "485px",
          height: "290px",
          borderRadius: "14px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "@media (max-width: 600px)": {
            width: "90vw",
            height: "auto",
          },
        }}
      >
        <CardMedia
          component={"img"}
          image={imago}
          alt="Our-Mission"
          sx={{
            maxWidth: "330px",
            maxHeight: "250px",
            width: "100%",
            height: "auto",
            "@media (max-width: 600px)": {
              maxWidth: "90vw",
              width: "90vw",
            },
          }}
        />
      </Box>
    </Grid>
  );
};

export default SectionTwo;
