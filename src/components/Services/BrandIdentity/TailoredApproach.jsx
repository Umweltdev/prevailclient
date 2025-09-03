import { CardMedia, Grid, Typography, Box, Card, } from "@mui/material";
import React from "react";
import { TailoredApproachData } from "../assets/serviceData";
import mugs from "../assets/mug.png";
import styles from "../BrandIdentity/assets/animation.module.css"
import { useInView } from "react-intersection-observer";
import {
 
  Rocket,
  
} from '@mui/icons-material';
const TailoredApproach = () => {
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

        "@media (max-width: 600px)": {
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "40px auto",
        },
      }}
    >
      <CardMedia
        component={"img"}
        className={inView ? styles.imageFadeIn : ""}
        image="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720084560/Approach-to-Brand-Needs-_vuyvaf.avif"
        alt="Approach-to-Brand-Needs-"
        sx={{
          width: "50vw",
          "@media (max-width: 600px)": {
            display: "none",
          },
        }}
      />
      <Grid
        className={inView ? styles.textSlideIn : ""}
        sx={{
          display: "flex",
          flexDirection: "column",
          //   alignItems: "center",
          justifyContent: "center",
          pl: "5vw",
          gap: "20px",
          width: "50vw",
          mt: "10px",
          "@media (max-width: 600px)": {
            width: "90vw",
            pl: "unset",
            margin: "auto",
          },
        }}
      >
        <Typography
          sx={{
            width: "385px",
            color: "#1D0D40",
            fontSize: "28px",
            fontWeight: "500",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        >
          Our Tailored Approach to Your Brand Needs 
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
        >
          Recognising these challenges, our “Brand Identity Package” service is
          specifically tailored to meet the needs of businesses striving to
          carve out an unique space in the marketplace. Your business isn’t just
          a client; you are an integral part of the branding process. We dive
          deep into heart of your business, embracing your vision and values,
          and bring them to life through every aspect of your brand identity.
          <br />
          <br />
          Imagine the pride and confidence you will feel seeing your brand
          identity not only look cohesive but also strongly resonate with your
          target audience.  
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mt: "16px",
            gap: "36px",
            "@media (max-width: 600px)": {
              width: "100vw",
              flexDirection: "column",
            },
          }}
        >
          {TailoredApproachData.map((data, i) => (
            <Box
              key={i}
              sx={{
                width: "20vw",
                gap: "16px",
                "@media (max-width: 600px)": {
                  width: "90vw",
                  gap: "14px",
                },
              }}
            >
              <CardMedia
                component={"img"}
                image={data.img}
                sx={{
                  width: "34px",
                  height: "34px",
                  mb: "18px",
                  "@media (max-width: 600px)": {
                    width: "15vw",
                    height: "15vw",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "18px",
                  fontWeight: "500",
                  mb: "18px",
                }}
              >
                {data.header}
              </Typography>
              <Typography
                sx={{ color: "#505660", fontSize: "16px", fontWeight: "400" }}
              >
                {data.text}
              </Typography>
            </Box>
          ))}

          <Card
            sx={{
             
              color: "#fff",
              width: "42vw",
              // height: "206px",
              background: "#7f4dc7",
             border: `1px solid #604889`,
              // mt: "43px",
              padding: "20px",
              borderRadius: "10px",
              backdropFilter: 'blur(10px)',
              boxShadow: "3",
              "@media (max-width: 600px)": {
                height: "auto",
                mt: "unset",
                padding: "20px",
                margin: "auto",
                width: "90vw",
                ml: "unset",
              },
            }}
          >
           
            
            <Typography
              sx={{
                width: "40vw",
                margin: "auto",
                // mt: "45px",
                fontSize: "16px",
                fontWeight: "500",
                color: "white",

                "@media (max-width: 600px)": {
                  width: "80vw",
                  mt: "unset",
                  fontSize: "4vw",
                },
              }}
            >
              At Prevail, we understand the power of a well-crafted brand
              identity and are dedicated to transforming your business vision
              into a visual reality that captivates and engages your ideal
              customers. Join us, and let’s build a brand that stands the test
              of time. 
            </Typography>
            
          </Card>
          
          <CardMedia
            component={"img"}
            image={
              "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437624/Slide-61_iem3ne.avif"
            }
            sx={{
              width: "42vw",
              borderRadius: "5px",
              boxShadow: "3",
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default TailoredApproach;
