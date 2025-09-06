import * as React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  FiberManualRecord as FiberManualRecordIcon,
} from "@mui/icons-material";

const images = [
  {
    title: "Shopify Platform",
    text: "We specialise in crafting customised websites on Shopify, enhancing online presence with sales, SEO, and management tools.",
    imgPath:
      "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg",
  },
  {
    title: "Real Estate Platform",
    text: "Comprehensive service package for real estate, featuring SEO-optimised content, responsive design, and admin dashboards.",
    imgPath:
      "https://img.freepik.com/free-photo/real-estate-housing-brokerage-concept_53876-120663.jpg",
  },
  {
    title: "Holistic Website Development",
    text: "We don’t just build websites; we create digital experiences that are visually stunning and functionally superior.",
    imgPath:
      "https://img.freepik.com/premium-photo/office-responsive-devices-design-website-3d-rendering_72104-3783.jpg",
  },
];

export default function EnhancedCarousel() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const maxSteps = images.length;

  React.useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.imgPath;
    });
  }, []);

  const handleNext = React.useCallback(() => {
    setActiveStep((prev) => (prev + 1) % maxSteps);
  }, [maxSteps]);

  const handleBack = React.useCallback(() => {
    setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
  }, [maxSteps]);

  const handleDotClick = (step) => {
    setActiveStep(step);
  };

  React.useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeStep, isHovered, handleNext]);

  return (
    <Box
      sx={{
        position: "relative",
        height: isMobile ? "70vh" : "85vh",
        width: "100%",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 10px 35px rgba(0,0,0,0.2)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((step, index) => (
        <Box
          key={step.title}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundImage: `url(${step.imgPath})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === activeStep ? 1 : 0,
            transition: "opacity 1.2s ease-in-out, transform 1.2s ease-in-out",
            transform: `scale(${index === activeStep ? 1 : 1.05})`,
          }}
        />
      ))}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.7) 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          px: { xs: 2, sm: 3, md: 5 },
          opacity: 1,
          transition: "opacity 0.8s ease-in-out",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          fontWeight="bold"
          gutterBottom
          sx={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
        >
          {images[activeStep].title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: "650px",
            mb: 3,
            fontSize: isMobile ? "1rem" : "1.25rem",
            textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
            px: { xs: 1, sm: 0 },
          }}
        >
          {images[activeStep].text}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size={isMobile ? "medium" : "large"}
          sx={{
            borderRadius: "50px",
            px: 5,
            py: 1.5,
            fontSize: isMobile ? "0.9rem" : "1rem",
            textTransform: "none",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          Learn More
        </Button>
      </Box>
      <IconButton
        aria-label="previous slide"
        onClick={handleBack}
        sx={{
          position: "absolute",
          top: "50%",
          left: theme.spacing(isMobile ? 1 : 2),
          transform: "translateY(-50%)",
          bgcolor: "rgba(0,0,0,0.4)",
          color: "#fff",
          "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
          p: isMobile ? 1 : 1.5,
        }}
      >
        <KeyboardArrowLeft fontSize={isMobile ? "medium" : "large"} />
      </IconButton>
      <IconButton
        aria-label="next slide"
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: theme.spacing(isMobile ? 1 : 2),
          transform: "translateY(-50%)",
          bgcolor: "rgba(0,0,0,0.4)",
          color: "#fff",
          "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
          p: isMobile ? 1 : 1.5,
        }}
      >
        <KeyboardArrowRight fontSize={isMobile ? "medium" : "large"} />
      </IconButton>
      <Box
        sx={{
          position: "absolute",
          bottom: theme.spacing(isMobile ? 2 : 3),
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: { xs: 0.5, sm: 1 },
        }}
      >
        {images.map((_, index) => (
          <IconButton
            key={index}
            aria-label={`go to slide ${index + 1}`}
            onClick={() => handleDotClick(index)}
            sx={{
              p: 0.5,
              color:
                index === activeStep
                  ? theme.palette.primary.main
                  : "rgba(255,255,255,0.6)",
              transition: "color 0.3s",
            }}
          >
            <FiberManualRecordIcon
              sx={{
                fontSize: isMobile ? "12px" : "14px",
                transform: index === activeStep ? "scale(1.3)" : "scale(1)",
                transition: "transform 0.3s",
              }}
            />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}
