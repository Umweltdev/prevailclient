import { useState } from "react";
import { Box, Stack, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "-5px",
        color: "white",
      }}
    >
      <ChevronRightIcon
        sx={{
          cursor: "pointer",
          fontSize: "45px",
        }}
      />
    </IconButton>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "-5px",
        zIndex: 10,
        color: "white",
      }}
    >
      <ChevronLeftIcon
        sx={{
          cursor: "pointer",
          fontSize: "45px",
        }}
      />
    </IconButton>
  );
}

const Carousel = ({ images }) => {
  const [mainSliderRef, setMainSliderRef] = useState(null);
  const [thumbnailSliderRef, setThumbnailSliderRef] = useState(null);
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: thumbnailSliderRef,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: true,
        },
      },
    ],
  };

  const thumbnailSettings = {
    dots: false,
    infinite: true,

    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    asNavFor: mainSliderRef,
  };
  return (
    <Stack direction="row" spacing={1}>
      <Box width={{ xs: "100%", sm: "70%" }}>
        <Slider {...settings} ref={(slider) => setMainSliderRef(slider)}>
          {images?.map((image, index) => (
            <div key={index} className="bookingMainCauImage">
              <img
                src={image}
                alt="house"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          ))}
        </Slider>
      </Box>

      <Box
        mt={2}
        display={{ xs: "none", sm: "block" }}
        sx={{
          cursor: "pointer",
          width: "30%",
        }}
      >
        <Slider
          {...thumbnailSettings}
          ref={(slider) => setThumbnailSliderRef(slider)}
        >
          {images?.map((image, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img src={image} alt="house" className="booking-carousel-image" />
            </div>
          ))}
        </Slider>
      </Box>
    </Stack>
  );
};

export default Carousel;
