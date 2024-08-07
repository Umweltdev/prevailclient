import { useState } from "react";
import { CardMedia, Grid, Typography, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./assets/animation.module.css"; // Import animation styles
import ReusedButton from "../ReusedComponents/ReusedButton";
import { useInView } from "react-intersection-observer";

const SectionTwo = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Adjust as needed
  });

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Grid
      ref={ref}
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        gap: "88px",
        margin: "auto",
        "@media (max-width: 600px)": {
          flexDirection: "column",
          marginBottom: "1vh",
          gap: "1vw",
          margin: "85px auto",
          height: "unset",
          width: "100vw",
        },
      }}
    >
      {!imageLoaded && (
        <Skeleton
          variant="rectangular"
          width={603.677}
          height={402.351}
          sx={{
            borderRadius: "14px",
            "@media (max-width: 600px)": {
              width: "90vw",
              height: "unset",
              borderRadius: "5vw",
            },
          }}
        />
      )}
      <CardMedia
        component="img"
        className={inView ? styles.imageFadeIn : ""}
        sx={{
          width: "603.677px",
          height: "402.351px",
          borderRadius: "14px",
          objectFit: "cover",
          display: imageLoaded ? "block" : "none",
          "@media (max-width: 600px)": {
            width: "90vw",
            height: "unset",
            borderRadius: "5vw",
          },
        }}
        image="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720109209/Empowering-Others_bh2qxl.avif"
        alt="Empowering-Others"
        onLoad={() => setImageLoaded(true)}
      />
      <Grid
        className={inView ? styles.textSlideIn : ""}
        sx={{
          width: "548.266px",
          "@media (max-width: 600px)": {
            width: "90vw",
            height: "unset",
            borderRadius: "5vw",
            mt: "55px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5vw",
            color: "#884ed9",
            marginBottom: "2vh",
            textAlign: "justify",
            fontWeight: "bold",
            width: "40vw",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              textAlign: "justify",
              width: "95vw",
              margin: "2vh auto",
            },
          }}
        >
          About Us
        </Typography>

        <Typography
          sx={{
            fontSize: "38px",
            color: "#1D0D40",
            marginBottom: "24px",
            fontWeight: "500",
            width: "40vw",
            "@media (max-width: 600px)": {
              fontSize: "7vw",
              width: "95vw",
            },
          }}
        >
          Our Mission is to empower you with innovative solutions that drive
          long-term success.
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            color: "#505660",
            marginBottom: "4vh",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              width: "95vw",
              marginBottom: "1vh",
            },
          }}
        >
          Prevail is a cutting-edge marketing agency specialising in redefining
          how businesses navigate the digital landscape. Prevail is not just a
          marketing agency but a strategic partner for businesses in the digital
          age. We aim to help businesses thrive, regardless of economic
          challenges, by providing innovative and holistic solutions.
        </Typography>
        <Link to={"/about-us"}>
          <ReusedButton text={"Learn More"} />
        </Link>
      </Grid>
    </Grid>
  );
};

export default SectionTwo;
