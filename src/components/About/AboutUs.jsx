import { useState } from "react";
import { CardMedia, Grid, Skeleton } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./assets/about.module.css";

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Grid
      container
      ref={ref}
      className={`${styles.aboutUsSection} ${inView ? styles.visible : ""}`}
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: "200px",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        width: "100%",
        minHeight: "100vh",
        margin: "0 auto",
        background: "linear-gradient(135deg, #d1c4e9, #ffffff, #bbdefb)",
        "@media (max-width: 600px)": {
          width: "100vw",
        },
      }}
    >
      <Grid
        className={`${styles.aboutUsText} ${inView ? styles.visible : ""}`}
        sx={{
          color: "#6E3EF4",
          fontSize: "24px",
          fontWeight: "400",
          lineHeight: "110%",
          letterSpacing: "-0.24px",
        }}
      >
        About Us
      </Grid>
      <Grid
        className={`${styles.aboutUsText} ${inView ? styles.visible : ""}`}
        sx={{
          color: "#1D0D40",
          fontSize: "38px",
          fontWeight: "500",
          letterSpacing: "-0.24px",
          textAlign: "center",
          "@media (max-width: 600px)": {
            width: "80vw",
          },
        }}
      >
        Great companies are made by great people
      </Grid>
      <Grid
        className={`${styles.aboutUsText} ${inView ? styles.visible : ""}`}
        sx={{
          color: "#505660",
          fontSize: "18px",
          fontWeight: "400",
          letterSpacing: "-0.24px",
          lineHeight: "150%",
          width: "917px",
          textAlign: "center",
          "@media (max-width: 600px)": {
            width: "90vw",
          },
        }}
      >
        In a world where economic fluctuations often diminish the purchasing
        power of individuals and small businesses alike, rising interest rates
        and unpredictable consumer demands pose substantial challenges.
        Small-to-medium-sized enterprises (SMEs) and local businesses frequently
        find themselves battling to maintain relevance in a marketplace where
        larger entities, armed with vast resources and advanced technological
        tools, dominate. This daunting scenario is the very challenge that fuels
        Prevail’s commitment and innovative approach.
      </Grid>
      {!imageLoaded && (
        <Skeleton
          variant="rectangular"
          width={1210}
          height={510}
          sx={{
            borderRadius: "15px",
            mt: "40px",
            "@media (max-width: 600px)": {
              width: "90vw",
              height: "210px",
            },
          }}
        />
      )}
      <CardMedia
        ref={ref}
        component={"img"}
        image={
          "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720110085/Working-Together_cvbkzp.avif"
        }
        alt="Working-Together"
        className={`${styles.aboutUsImage} ${
          inView ? styles.visible : ""
        }`}
        sx={{
          width: "1210px",
          height: "510px",
          borderRadius: "15px",
          mt: "40px",
          display: imageLoaded ? "block" : "none",
          mb: "20px",
          "@media (max-width: 600px)": {
            width: "90vw",
            height: "210px",
            objectFit: "cover",
          },
        }}
        onLoad={() => setImageLoaded(true)}
      />
    </Grid>
  );
};

export default AboutUs;
