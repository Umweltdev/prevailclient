import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Grid } from "@mui/material";
import { TestimonialData } from "./assets/LandingData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    <Grid
      sx={{
        background: "#F7F7F7",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "@media (max-width: 600px)": {
          height: "65vh",
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
  );
};

export default Testimonials;
