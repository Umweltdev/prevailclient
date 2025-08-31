import { Box, CardMedia, Grid, Skeleton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./assets/about.module.css";

const SectionTwo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Grid
      container
      ref={ref}
      className={`${styles.sectionTwo} ${inView ? styles.visible : ""}`}
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
        className={`${styles.textSlideIn} ${inView ? styles.visible : ""}`}
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
          Our Story
        </Typography>
        
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#505660",
              "@media (max-width: 600px)": {
                fontSize: "4vw",
                textAlign: "justify",
              },
            }}
          >
            Founded in 2021, Prevail Agency emerged from a simple observation:
            Irish small businesses were being left behind by the digital
            revolution.
          </Typography>
          
          <Typography
            sx={{
              fontSize: "16px",
              color: "#505660",
              "@media (max-width: 600px)": {
                fontSize: "4vw",
                textAlign: "justify",
              },
            }}
          >
            While enterprise companies had access to cutting-edge
            technology and automation, local businesses struggled with outdated
            websites, manual processes, and disconnected systems.
          </Typography>
          
          <Typography
            sx={{
              fontSize: "16px",
              color: "#505660",
              "@media (max-width: 600px)": {
                fontSize: "4vw",
                textAlign: "justify",
              },
            }}
          >
            <Box component="span" fontWeight="bold">
              Our mission became clear:
            </Box> Bridge the technology gap and give every
            Irish business the tools they need to compete and thrive in the modern
            economy.
          </Typography>
          
          <Typography
            sx={{
              fontSize: "16px",
              color: "#505660",
              "@media (max-width: 600px)": {
                fontSize: "4vw",
                textAlign: "justify",
              },
            }}
          >
            Today, we're proud to be the trusted technology partner for over 200
            Irish businesses, from boutique salons in Dublin to artisan bakeries
            in Cork, helping them automate operations, increase revenue, and
            deliver exceptional customer experiences.
          </Typography>
        </Box>
      </Grid>
      
      <Box
        className={`${styles.imageSlideIn} ${inView ? styles.visible : ""}`}
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
            minHeight: "200px",
          },
        }}
      >
        {!imageLoaded && (
          <Skeleton
            variant="rectangular"
            width={330}
            height={250}
            sx={{
              borderRadius: "14px",
              "@media (max-width: 600px)": {
                width: "90%",
                height: "200px",
              },
            }}
          />
        )}
        <CardMedia
          component={"img"}
          image={
            "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720082297/Our-Mission_o3ls1q.webp"
          }
          alt="Our-Mission"
          onLoad={() => setImageLoaded(true)}
          sx={{
            maxWidth: "330px",
            maxHeight: "250px",
            width: "100%",
            height: "auto",
            display: imageLoaded ? "block" : "none",
            "@media (max-width: 600px)": {
              maxWidth: "90%",
            },
          }}
        />
      </Box>
    </Grid>
  );
};

export default SectionTwo;