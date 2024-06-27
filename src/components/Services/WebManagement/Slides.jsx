import React from "react";
import Slider from "react-slick";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Container,
  Stack,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import image1 from "./assets/image1.png";

const data = [
  {
    topic: "Hospitality",
    description:
      "Ability to increase efficiency, reduced cost, and enhance competitiveness.",
    image:
      "https://s3-alpha-sig.figma.com/img/7579/d217/2943d0f5e4d00d50471beb2f909cf214?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rbh5YSbPvrAhQFTpDrcoI0c-t9OOQmLToqsMRNkaVo2iBjLoSYgZ9upsSJcHqd-Zjeew~EGpA9HS1a0~GBFLrSSIT3PXmGjQkz7w8FKSnvXiLEF-dS4CQs~MRLEf24sK8iE5duY7qdFf9TpEJBuDKBFUYgXoq0s4aKyQPCaOgEArRioMtplnRBqtMeebsxi6FW1r7q0SmGRV36GhL8RlKXlM-M49JEKoBAXgr2~AwDJ2BvG~3ziQrKgv7cjxDU6ubcidFARMZu6rulJ-rQAx0po3ofM9-XI6W~9jbtw4yFfT-bPX-V5dzy4aZAhA3IVaNyy5hKsKWhemTzVEDwst6w__",
    link: "#hospitality",
  },
  {
    topic: "Shopify",
    description:
      "Choose how often to adjust your marketing spend (daily, weekly, monthly, quarterly) for strategic flexibility.",
    image:
      "https://s3-alpha-sig.figma.com/img/a40e/4e04/c924e90fb938391951edca3c9066d10f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hr-T4scZMU19irWM0Ef4NuH2o3c0CixjnIntBn1fr3m8b7USjGj--mv1sa7rkWrEKk0gDeF~OVrQ1OFX2iCO6j7dnP0EJsS-jqOLa14wWxgeaiuLOWqHsGlZ7quGXXDIYrTjbFTTHVYRaNmI5jwvGOwE20HhIr4QApXzqT2xlfSy687fnat5vp5LlmbqflFKhqtRGlAi-wMqQCJfy5iaAPLnTP1mVUHXnV2JiJ8FwEzQDmZ8L68776O~18LLyqFQIiIkhud0J~N~3HWBY0QRIQ2Bw5uuk0aQRBFn9EIVGmedPuomDk7wXNXl9Nn8gDWIG~8i1~uaxlnadk2KlCgebg__",
    link: "#shopify",
  },
  {
    topic: "Real Estate",
    description:
      "Ability to connect to a digital Ads platform and database through an API.",
    image:
      "https://s3-alpha-sig.figma.com/img/4791/1b70/c848d1cae61924eb41fd79dca2d8e4cf?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IKVw-zLqRLbGY9E2hcRNf5hLaD-0Q5gX3mOlHJppZmteQAWpc6XsWdLBc0rXy6gkiqnBah7FJS6gNQz9UkQIc~OJpoIKXfksq~Be40r8m5bmfKlhufCzcir5HNmW-p-rRVjup6giGQMM70cUjroU3T-sK92BapZB5mzZV7dVnoIbiIdyRgSu4CRg9RKrF~HS4E3RPyzYbn~uqZ2TPqGcyoyjsWoc4Bb79gR~m-NyuaZIigAZE6AcaH806kUGuP-G4CQr5a5pxQhseLO4zE-jtKfrc~0t0T5uQs9TPJrGSqlRH9NLhP01NkkpLmUGtgDtvuAqzaF-lbYAAiDza1OsYw__",
    link: "#real-estate",
  },
  // Add more slides if needed
];

const SingleCarousel = () => {
  const { user } = useContext(AuthContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box
      position="relative"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container
        maxWidth="md"
        sx={{
          padding: 0,
        }}
      >
        <Slider {...settings}>
          {data.map((slide, index) => (
            <Box key={index} position="relative">
              <Box
                sx={{
                  height: "400px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  position: "relative",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  overflow: "hidden",
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.topic}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 0,
                  }}
                />
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    py: 3,
                    px:2.5,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: "6px",
                  }}
                >
                  <Typography
                    fontSize={{ xs: "30px", md: "42px" }}
                    fontWeight={"600"}
                    color={"white"}
                    gutterBottom
                  >
                    {slide.topic}
                  </Typography>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    mt={2}
                    // justifyContent={"spa"}
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

                    <Link to={user ? "/user/bookings" : "/contact"}>
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
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        color: "white",
        border: "2px solid white",
        borderRadius: "50%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        right: 16,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        color: "white",
        border: "2px solid white",
        borderRadius: "50%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        left: 16,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );
};

export default SingleCarousel;
