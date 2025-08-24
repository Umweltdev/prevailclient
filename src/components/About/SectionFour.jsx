import { Box, CardMedia, Grid, Skeleton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./assets/about.module.css"; // Import the animation CSS

const SectionFour = () => {
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

  return (
    <Grid
      container
      ref={sectionRef}
      className={`${styles.sectionFour} ${sectionInView ? styles.visible : ""}`}
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
          flexDirection: "column-reverse",
          margin: "13vh auto 0 auto",
          marginBottom: "1vh",
          gap: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        },
      }}
    >
      <Box
        ref={imageRef}
        className={`${styles.imageSlideIn} ${
          imageInView ? styles.visible : ""
        }`}
        sx={{
          width: "485px",
          height: "290px",
          borderRadius: "14px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: imageLoaded ? "transparent" : "#ECF1FA",
          "@media (max-width: 600px)": {
            maxWidth: "90vw",
            width: "90vw",
            height: "auto",
          },
        }}
      >
        {!imageLoaded && (
          <Skeleton
            variant="rectangular"
            width={485}
            height={290}
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
            "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720110083/What-We-Do_gn0opz.avif"
          }
          alt="What-We-Do"
          onLoad={() => setImageLoaded(true)}
          sx={{
            width: "485px",
            height: "290px",
            borderRadius: "14px",
            display: imageLoaded ? "block" : "none",
            "@media (max-width: 600px)": {
              maxWidth: "90vw",
              width: "90vw",
            },
          }}
        />
      </Box>

      <Grid
        ref={textRef}
        className={`${styles.textSlideIn} ${textInView ? styles.visible : ""}`}
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
          Our Core Values
        </Typography>

        <Typography
          sx={{
            display: "flex",
            fontSize: "18px",
            fontWeight: "400",
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
          These principles guide everything we do
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
          <b>Innovation:</b> We constantly explore new technologies and
          approaches to keep our clients ahead of the curve.
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
          <b>Partnership Approach:</b> Your success is our success. We work as
          an extension of your team, not just another vendor.
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
          <b>Simplicity Matters :</b> Complex problems don't need complex
          solutions. We make powerful technology accessible and easy to use.
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
          <b>Results-Driven :</b> Beautiful design means nothing without
          results. Every decision is measured by its impact on your business.
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
          <b>Local Focus:</b> We understand Irish businesses because we are one.
          Local knowledge, global standards.
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
          <b>Partnership Approach:</b> Your success is our success. We work as
          an extension of your team, not just another vendor.
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
          <b>Speed and Agility:</b> The market moves fast, and so do we. Quick
          deployment, rapid iteration, continuous improvement.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SectionFour;
