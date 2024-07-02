import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { slides as initialSlides } from "../assets/mpdData";
import {
  Container,
  Grid,
  Typography,
  Stack,
  Box,
  Button,
  SvgIcon,
  IconButton,
  Chip,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Solution = () => {
  const { user } = useContext(AuthContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(initialSlides);
  const intervalRef = useRef(null);

  // console.log(currentSlide);

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      showSlider("next");
    }, 7000);
  };

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
  };

  const showSlider = (type) => {
    stopAutoPlay();
    if (type === "next") {
      const rotatedSlides = [...slides.slice(1), slides[0]];
      setCurrentSlide(0);
      setSlides(rotatedSlides);
    } else {
      const lastSlideIndex = slides.length - 1;
      const rotatedSlides = [
        slides[lastSlideIndex],
        ...slides.slice(0, lastSlideIndex),
      ];
      setCurrentSlide(lastSlideIndex);
      setSlides(rotatedSlides);
    }
    startAutoPlay();
  };

  const nextSlide = () => {
    showSlider("next");
  };

  const prevSlide = () => {
    showSlider("prev");
  };

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 4) {
      return words.slice(0, 4).join(" ") + "...";
    }
    return description;
  };

  // console.log(slides[currentSlide]);

  return (
    <Box
      className="carousel1"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
      }}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <Box className="list">
        {slides.map((slide, index) => (
          <Box
            className={`item ${index === currentSlide ? "active" : ""}`}
            key={index}
          >
            <img src={slides[currentSlide].image} alt={slide.title} />
          </Box>
        ))}
      </Box>

      <Box className="thumbnail">
        {slides.map((slide, index) => (
          <Stack
            spacing={2}
            alignItems={"center"}
            className={` ${index === currentSlide ? "active" : ""}`}
            key={index}
            sx={{}}
          >
            <Box sx={{ width: 270, height: 250 }}>
              {" "}
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "30px",
                }}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "600",
                  color: "white",
                  textAlign: "center",
                }}
              >
                {slide.topic}
              </Typography>
              <Stack
                direction={"row"}
                spacing={{ xs: 0, md: 2 }}
                mt={2}
                justifyContent={{ xs: "space-between", md: "flex-start" }}
              >
                <a href={slide.link}>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      fontSize: "12px",

                      borderRadius: "100px",
                      borderColor: "white",
                      color: "white",

                      "&:hover": {
                        borderColor: "white",
                      },
                    }}
                  >
                    Learn more
                  </Button>
                </a>

                <Link to={user ? "/user/bookings" : "/contact-us"}>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      fontSize: "12px",

                      borderRadius: "100px",
                      borderColor: "white",
                      color: "white",

                      "&:hover": {
                        borderColor: "white",
                      },
                    }}
                  >
                    Book now
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Stack>
        ))}
      </Box>

      <Stack className="arrows">
        <Typography
          fontSize={{ xs: "30px", md: "42px" }}
          fontWeight={"600"}
          color={"white"}
          gutterBottom
        >
          {slides[currentSlide].topic}
        </Typography>
        <Stack direction={"row"} spacing={5}>
          <IconButton
            onClick={prevSlide}
            sx={{
              color: "white",
              border: "2px solid white",
            }}
          >
            <ArrowBackIos />
          </IconButton>
          <IconButton
            onClick={nextSlide}
            sx={{
              color: "white",
              border: "2px solid white",
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Stack>
      </Stack>

      {/* <Box className="arrows">
        <button id="prev" onClick={prevSlide}>
          {"<"}
        </button>
        <button id="next" onClick={nextSlide}>
          {">"}
        </button>
      </Box> */}
      {/* <Box className="time"></Box> */}
    </Box>
  );
};

export default Solution;
