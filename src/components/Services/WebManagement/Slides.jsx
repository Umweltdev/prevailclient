import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import {
  Box,
  Button,
  Typography,
  Container,
  Paper,
  IconButton,
  Grid,
  Stack,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import image1 from "./assets/main.png";
import image2 from "./assets/image2.png";

const data = [
  {
    topic: "Hospitality",
    image: image1,
  },
  {
    topic: "Labour Effect",
    image: image2,
  },
];

const SwipeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      goToNextSlide();
    }, 7000);
  };

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToNextSlide,
    onSwipedRight: goToPrevSlide,
  });

  return (
    <Box
      {...handlers}
      position="relative" 
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
      sx={{
        backgroundImage: `url(${data[currentIndex].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // borderRadius: "10px",
      }}
    >
      {/* <Box
        position="absolute"
        bottom={80}
        width="100%"
        display={{ xs: "none", md: "block" }}
      >
        <Grid container justifyContent="center" spacing={2}>
          {data.map((slide, index) => (
            <Grid item key={index}>
              <Box
                width={200}
                height={150}
                borderRadius={"8px"}
                border={index === currentIndex ? 2 : 1}
                borderColor={
                  index === currentIndex ? "primary.main" : "grey.500"
                }
                overflow="hidden"
                onClick={() => goToSlide(index)}
                sx={{
                  cursor: "pointer",
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box> */}
      <Stack
        position="absolute"
        left={{ md: 120 }}
        top="70%"
        transform="translateY(-50%)"
      >
        <Typography
          fontSize={"32px"}
          fontWeight={"600"}
          color={"white"}
          gutterBottom
        >
          {data[currentIndex].topic}
        </Typography>
        <Stack
          direction={"row"}
          spacing={5}
          justifyContent={{ xs: "space-between", md: "left" }}
        >
          <IconButton
            onClick={goToPrevSlide}
            sx={{
              color: "white",
              border: "2px solid white",
            }}
          >
            <ArrowBackIos />
          </IconButton>
          <IconButton
            onClick={goToNextSlide}
            sx={{
              color: "white",
              border: "2px solid white",
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SwipeCarousel;
