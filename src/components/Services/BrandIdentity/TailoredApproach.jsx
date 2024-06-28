import { CardMedia, Grid, Typography, Box, Card } from "@mui/material";
import React from "react";
import imgBrand from "../assets/image134.png";
import { TailoredApproachData } from "../assets/serviceData";

const TailoredApproach = () => {
  return (
    <Box
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
        image={imgBrand}
        sx={{
          width: "50vw",
          "@media (max-width: 600px)": {
            display: "none",
          },
        }}
      />
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          //   alignItems: "center",
          justifyContent: "center",
          pl: "5vw",
          gap: "20px",
          width: "50vw",
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
            mt: "46px",
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
              color: "white",
              width: "585px",
              height: "206px",
              background:
                "linear-gradient(349deg, #350079 11.15%, #904AEA 92.99%)",
              mt: "43px",
              borderRadius: "10px",
              "@media (max-width: 600px)": {
                height: "216px",
                margin: "auto",
                width: "90vw",
                ml: "unset",
              },
            }}
          >
            <Typography
              sx={{
                width: "519px",
                margin: "auto",
                mt: "45px",
                fontSize: "16px",
                fontWeight: "500",
                "@media (max-width: 600px)": {
                  width: "80vw",
                  mt: "20px",
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
        </Box>
      </Grid>
    </Box>
  );
};

export default TailoredApproach;
