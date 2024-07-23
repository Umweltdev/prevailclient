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

const data = [
  {
    topic: "Hospitality",
    description: "Ability to increase efficiency, reduced cost, and enhance competitiveness.",
    image: "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720087059/Hospitality-Carousel_xqw1xh.avif",
    alt: "Hospitality-Carousel",
    link: "/website-development#hospitality",
  },
  {
    topic: "Shopify",
    description: "Choose how often to adjust your marketing spend (daily, weekly, monthly, quarterly) for strategic flexibility.",
    image: "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720087059/Shopify-Carousel_yza6pk.avif",
    alt: "Shopify-Carousel",
    link: "/website-development#shopify",
  },
  {
    topic: "Real Estate",
    description: "Ability to connect to a digital Ads platform and database through an API.",
    image: "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720087059/Real-Estate-Authority_akxsy5.avif",
    alt: "Real-Estate-Authority",
    link: "/website-development#real-estate",
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

  const navigate = useNavigate();
  const contact = () => {
    navigate("/contact-us");
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
                  alt={slide.alt}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 0,
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const altElement = document.getElementById(`alt-${index}`);
                    if (altElement) {
                      altElement.style.display = 'block';
                    }
                  }}
                />
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    py: 3,
                    px: 2.5,
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
                        onClick={contact}
                      >
                        Book now
                      </Button>
                    </Link>
                  </Stack>
                  <Typography
                    id={`alt-${index}`}
                    style={{ display: 'none', color: 'white', marginTop: '16px' }}
                  >
                    {slide.alt}
                  </Typography>
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
