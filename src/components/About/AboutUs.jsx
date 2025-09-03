import { useState } from "react";
import { CardMedia, Grid, Skeleton, Box } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./assets/about.module.css";
import { CheckCircle } from "@mui/icons-material"; // Import the CheckCircle icon from MUI

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
        pt: { xs: "100px", sm: "200px" },
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        width: "100%",
        minHeight: "100vh",
        margin: "0 auto",
        background: "linear-gradient(135deg, #d1c4e9, #ffffff, #bbdefb)",
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
          fontSize: { xs: "24px", sm: "38px" },
          fontWeight: "500",
          letterSpacing: "-0.24px",
          textAlign: "center",
          "@media (max-width: 600px)": {
            width: "80vw",
          },
        }}
      >
        Empowering Irish Businesses to Prevail
      </Grid>
      <Grid
        className={`${styles.aboutUsText} ${inView ? styles.visible : ""}`}
        sx={{
          color: "#505660",
          fontSize: { xs: "14px", sm: "18px" },
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
        We transform local SMEs with modern technology, smart automation, and
        stunning design that drives real results.
      </Grid>

      {/* Added your section using MUI components */}
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 2, sm: 0 },
          mt: 2,
        }}
      >
        <Grid
          item
          sx={{ display: "flex", alignItems: "center", gap: 1, mx: { sm: 2 } }}
        >
          <CheckCircle sx={{ width: 16, height: 16, color: "green" }} />
          <Box component="span" sx={{ fontSize: "14px", color: "gray" }}>
            Client Focused
          </Box>
        </Grid>
        <Grid
          item
          sx={{ display: "flex", alignItems: "center", gap: 1, mx: { sm: 2 } }}
        >
          <CheckCircle sx={{ width: 16, height: 16, color: "green" }} />
          <Box component="span" sx={{ fontSize: "14px", color: "gray" }}>
            Support Available
          </Box>
        </Grid>
        <Grid
          item
          sx={{ display: "flex", alignItems: "center", gap: 1, mx: { sm: 2 } }}
        >
          <CheckCircle sx={{ width: 16, height: 16, color: "green" }} />
          <Box component="span" sx={{ fontSize: "14px", color: "gray" }}>
            Service Standards
          </Box>
        </Grid>
        <Grid
          item
          sx={{ display: "flex", alignItems: "center", gap: 1, mx: { sm: 2 } }}
        >
          <CheckCircle sx={{ width: 16, height: 16, color: "green" }} />
          <Box component="span" sx={{ fontSize: "14px", color: "gray" }}>
            Founded in Dublin
          </Box>
        </Grid>
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
        className={`${styles.aboutUsImage} ${inView ? styles.visible : ""}`}
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
