import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import AccordionUsage from "./Accordion";
import styles from "./assets/animation.module.css"; // Import the new CSS module
import { useInView } from "react-intersection-observer";

const CoreValues = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Visibility threshold for the image
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Visibility threshold for the text
  });

  return (
    <Box
      sx={{
        display: "flex",
        gap: "60px",
        background: "#F9FAFC",
        flexDirection: "row-reverse",
        "@media (max-width: 600px)": {
          width: "100vw",
          margin: "auto",
          padding: "50px 0",
          flexDirection: "column-reverse",
        },
      }}
      id="faqs"
    >
      <Grid
        ref={textRef}
        className={textInView ? styles.slideInRight : styles.hidden}
        sx={{
          pl: "0",
          pt: "15vh",
          width: "50vw",
          "@media (max-width: 600px)": {
            pl: "5vw",
            pt: "unset",
            width: "90vw",
          },
        }}
      >
        <Box
          sx={{
            mb: "39px",
            width: "646.149px",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "38px",
              color: "#6E3EF4",
              fontWeight: "500",
              letterSpacing: "-0.38px",
              mb: "16px",
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
          >
            Our Core Values
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#505660",
              fontWeight: "400",
              lineHeight: "150%",
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
          >
            At Prevail, our commitment to redefining the digital landscape for
            small-to-medium-sized enterprises (SMEs) is deeply embedded in our
            core values. These values not only guide our strategies and
            decisions but also help us build meaningful relationships with the
            businesses we serve.
          </Typography>
        </Box>
        <Box
          sx={{
            mb: "39px",
            width: "646.149px",
            mt: "100px",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        >
          <AccordionUsage />
        </Box>
      </Grid>
      <Grid
        ref={imageRef}
        className={imageInView ? styles.slideInLeft : styles.hidden}
      >
        <CardMedia
          component={"img"}
          image="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720109211/Core-Values_r829ly.avif"
          alt="Core-Values"
          sx={{
            width: "50vw",
            "@media (max-width: 600px)": {
              width: "100vw",
              pl: "unset",
            },
          }}
        />
      </Grid>
    </Box>
  );
};

export default CoreValues;
