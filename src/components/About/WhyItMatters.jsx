import { Box, CardMedia, Grid, Skeleton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./assets/about.module.css";

const WhyItMatters = () => {
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

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Grid
      container
      ref={sectionRef}
      className={`${styles.whyItMatters} ${
        sectionInView ? styles.visible : ""
      }`}
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        margin: "100px auto 0 auto",
        justifyContent: "center",
        alignItems: "center",
        gap: "239px",
        "@media (max-width: 600px)": {
          width: "90vw",
          flexDirection: "column",
          margin: "5vh auto 0 auto",
          marginBottom: "1vh",
          gap: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        },
      }}
    >
      <Box>
        <Grid
          ref={textRef}
          className={`${styles.textSlideIn} ${
            textInView ? styles.visible : ""
          }`}
          item
          sx={{
            width: "485px",
            "@media (max-width: 600px)": {
              width: "100%",
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
            How We Work
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#505660",
              marginBottom: "3vh",
              "@media (max-width: 600px)": {
                fontSize: "4vw",
                textAlign: "justify",
                width: "100%",
              },
            }}
          >
            A proven process that delivers results
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            maxWidth: "468px",
            "@media (max-width: 600px)": {
              width: "100%",
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
            How We Do It
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#505660",
              marginBottom: "3vh",
              "@media (max-width: 600px)": {
                fontSize: "4vw",
                textAlign: "justify",
                width: "100%",
              },
            }}
          >
            Collaboration sits at the core of our operations. By fostering close
            partnerships with our clients, we delve deep into their unique
            challenges and opportunities. <br /> <br />
            Our team of seasoned experts leverages this intimate knowledge along
            with our prowess in digital strategy and consumer behaviour, to
            devise customised solutions that deliver tangible results.
          </Typography>
        </Grid>
      </Box>
      <Box
        ref={imageRef}
        className={`${styles.imageSlideIn} ${
          imageInView ? styles.visible : ""
        }`}
        sx={{
          width: "485px",
          maxHeight: "636px",
          height: "auto",
          borderRadius: "14px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:
            imageLoaded || imageError ? "transparent" : "#ECF1FA",
          "@media (max-width: 600px)": {
            width: "90vw",
            height: "auto",
          },
        }}
      >
        {!imageLoaded && !imageError && (
          <Skeleton
            variant="rectangular"
            width={485}
            height={636}
            sx={{
              borderRadius: "14px",
              "@media (max-width: 600px)": {
                width: "90vw",
                height: "auto",
              },
            }}
          />
        )}
        <CardMedia
          component={"img"}
          image={
            "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720110083/Why-It-Matters_kijum4.avif"
          }
          alt="Why-It-Matters"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          sx={{
            width: "485px",
            maxHeight: "636px",
            height: "auto",
            borderRadius: "14px",
            display: imageLoaded ? "block" : "none",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        />
        {imageError && (
          <Typography
            variant="body1"
            color="error"
            sx={{
              position: "absolute",
              textAlign: "center",
              width: "100%",
              padding: "20px",
            }}
          >
            Error loading image.
          </Typography>
        )}
      </Box>
    </Grid>
  );
};

export default WhyItMatters;
