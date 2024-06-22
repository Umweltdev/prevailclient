import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { TestimonialData } from "./assets/LandingData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        p: "100px 0 0 0",
        background: "#F9FAFC",
        "@media (max-width: 600px)": {
          p: "40px 0 0 0",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          mb: "20px",
          "@media (max-width: 600px)": {
            width: "90vw",
          },
        }}
      >
        <Typography
          sx={{ color: "#6E3EF4", fontSize: "24px", fontWeight: "400" }}
        >
          Testimonials
        </Typography>
        <Typography
          sx={{
            width: "684px",
            color: "#1D0D40",
            fontSize: "48px",
            fontWeight: "500",
            textAlign: "center",
            "@media (max-width: 600px)": {
              width: "90vw",
              fontSize: "32px",
            },
          }}
        >
          See What Our Customers Are Saying
        </Typography>
        <Typography
          sx={{
            width: "629.297px",
            color: "#505660",
            fontSize: "16px",
            fontWeight: "400",
            textAlign: "center",
            "@media (max-width: 600px)": {
              width: "90vw",
              fontSize: "16px",
            },
          }}
        >
          Discover how our tailored strategies have transformed businesses,
          straight from those who've experienced remarkable growth with Prevail.
        </Typography>

        <Button
          sx={{
            color: "#fff",
            background: "#6E3EF4",
            width: "144px",
            borderRadius: "5vw",
          }}
        >
          Learn More
        </Button>
      </Box>
      <Grid
        sx={{
          background: "#F9FAFC",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "@media (max-width: 600px)": {
            height: "55vh",
          },
        }}
      >
        <Slider {...settings} style={{ width: "85%" }}>
          {TestimonialData.map((data, i) => (
            <div key={i} style={{ padding: "5vh" }}>
              <TestimonialCard
                img={data.img}
                text={data.text}
                author={data.author}
                position={data.position}
              />
            </div>
          ))}
        </Slider>
      </Grid>
    </Box>
  );
};

export default Testimonials;
