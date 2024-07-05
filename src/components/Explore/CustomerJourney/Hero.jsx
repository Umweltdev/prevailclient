import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import styles from "../assets/explore.module.css"; // Import the animation CSS

const Hero = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: subtitleRef, inView: subtitleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: bodyRef, inView: bodyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #d1c4e9, #ffffff, #bbdefb)",
        padding: "2rem 0",
        minHeight: "10vh", // Ensure full height of the viewport
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container sx={{ padding: "2rem" }}>
        <div
          ref={titleRef}
          className={`${styles.textContainer} ${
            titleInView ? styles.visible : ""
          }`}
        >
          <Typography
            variant="h6"
            pt="176px"
            align="center"
            color="primary"
            gutterBottom
          >
            Customer Journey
          </Typography>
        </div>
        <div
          ref={subtitleRef}
          className={`${styles.textContainer} ${
            subtitleInView ? styles.visible : ""
          }`}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Enhance Your Customer Journey
            <br /> with Prevail’s Expert Services
          </Typography>
        </div>
        <div
          ref={bodyRef}
          className={`${styles.textContainer} ${
            bodyInView ? styles.visible : ""
          }`}
        >
          <Typography variant="body1" align="center">
            Are you ready to take your business to the next level? Imagine
            having a comprehensive view of your customer’s journey, from the
            moment they discover your business to the point where they become
            loyal advocates. The Customer Journey (CJ) strategy offers a
            powerful marketing tool that enables you to gain a deeper
            understanding of your customers' experiences from the beginning
            until the end. When crafted with care, it can weave together a
            compelling story of your customer’s journey with your business and
            leave a lasting impact that resonates with them.
          </Typography>
        </div>
      </Container>
    </Box>
  );
};

export default Hero;
