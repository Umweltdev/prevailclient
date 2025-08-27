import React from "react";
import { Grid } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderData } from "./assets/SliderData";
import SliderCard from "./assets/SliderCard"

const Sliders = () => {
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
        background: "#fff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "@media (max-width: 600px)": {
          height: "70vh",
          padding: "5vh 0",
        },
      }}
    >
      <Slider {...settings} style={{ width: "90%" }}>
        {sliderData.map((data, i) => (
          <Grid key={i} style={{ padding: "5vh" }}>
            <SliderCard
              icon={data.icon}
              text={data.text}
              header={data.header}
            />
          </Grid>
        ))}
      </Slider>
    </Grid>
  );
};

export default Sliders;
