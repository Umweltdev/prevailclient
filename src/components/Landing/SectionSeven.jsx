import { Box, CardMedia, Grid, Typography, Container } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import CardNoBorder from "./assets/CardNoBorder";
import { DigitalAcelerator } from "./assets/LandingData";
import ReusedButton from "../ReusedComponents/ReusedButton";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import styles from "./assets/animation.module.css";
import { styled } from "@mui/material/styles";

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "scale(1.02)",
    filter: "brightness(1.1) contrast(1.1)",
  },
}));

const FAQ = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardRefs = useRef(DigitalAcelerator.map(() => React.createRef()));
  const [cardInView, setCardInView] = useState(
    DigitalAcelerator.map(() => false)
  );

  useEffect(() => {
    cardRefs.current.forEach((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCardInView((prev) => {
              const newInView = [...prev];
              newInView[index] = true;
              return newInView;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
  }, []);

  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* Hero Section with Enhanced Design */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 8, md: 15 },
          background:
            "linear-gradient(135deg, #f8faff 0%, #ffffff 50%, #f0f4ff 100%)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(110, 62, 244, 0.05) 0%, transparent 50%)",
            pointerEvents: "none",
          },
        }}
        id="DAB_call_to_action"
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Enhanced Badge */}
            <Box
              ref={titleRef}
              className={titleInView ? styles.fadeInUp : styles.hidden}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 3,
                py: 1.5,
                background: "linear-gradient(135deg, #6E3EF4 0%, #8B5CF6 100%)",
                color: "white",
                fontSize: "14px",
                fontWeight: 600,
                borderRadius: "50px",
                mb: 4,
                boxShadow: "0 8px 32px rgba(110, 62, 244, 0.3)",
                "&::before": {
                  content: '"✨"',
                  fontSize: "16px",
                },
              }}
            >
              Product
            </Box>

            {/* Main Title with Better Typography */}
            <Typography
              ref={textRef}
              className={textInView ? styles.fadeInUp : styles.hidden}
              sx={{
                fontSize: { xs: "28px", sm: "36px", md: "52px" },
                fontWeight: 700,
                color: "#1D0D40",
                lineHeight: 1.2,
                mb: 3,
                maxWidth: "800px",
                background: "linear-gradient(135deg, #1D0D40 0%, #2D1B69 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.02em",
              }}
            >
              Digital Accelerator Bundle brings{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(135deg, #6E3EF4 0%, #8B5CF6 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Agility
              </Box>{" "}
              to Your Enterprise
            </Typography>

            {/* Enhanced Description */}
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                color: "#64748B",
                lineHeight: 1.7,
                mb: 5,
                maxWidth: "680px",
                fontWeight: 400,
              }}
            >
              Discover how our Digital Accelerator Bundle package serves as your
              strategic gateway to digital success. This exclusive,
              comprehensive solution enhances your online visibility through
              three essential services.
            </Typography>

            {/* Enhanced CTA Button */}
            <Box sx={{ position: "relative" }}>
              <Link to="/service/digital-accelerator-bundle">
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 2,
                    px: 6,
                    py: 2,
                    background:
                      "linear-gradient(135deg, #6E3EF4 0%, #8B5CF6 100%)",
                    color: "white",
                    borderRadius: "50px",
                    fontSize: "16px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 12px 40px rgba(110, 62, 244, 0.3)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 16px 50px rgba(110, 62, 244, 0.4)",
                    },
                    "&::after": {
                      content: '"→"',
                      fontSize: "18px",
                      transition: "transform 0.3s ease",
                    },
                    "&:hover::after": {
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  Learn More
                </Box>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Full-Screen Split Features Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
        id="faqs"
      >
        {/* Left Side - Cards Grid */}

        {/* Full-Screen Split Features Section */}
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
          }}
          id="faqs"
        >
          {/* Left Side - Cards Grid */}
          <Box
            sx={{
              flex: 1,
              background: "linear-gradient(135deg, #f8faff 0%, #ffffff 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: { xs: 3, md: 6 },
              py: { xs: 6, lg: 8 },
              minHeight: { xs: "auto", lg: "100vh" },
            }}
          >
            <Box sx={{ maxWidth: "800px", width: "100%" }}>
              {/* Section Header */}
              <Box sx={{ textAlign: "center", mb: 8 }}>
                <Typography
                  sx={{
                    fontSize: { xs: "28px", sm: "36px", lg: "42px" },
                    fontWeight: 700,
                    color: "#1D0D40",
                    mb: 3,
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Why Choose Our{" "}
                  <Box
                    component="span"
                    sx={{
                      background:
                        "linear-gradient(135deg, #6E3EF4 0%, #8B5CF6 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Digital Accelerator
                  </Box>{" "}
                  Bundle?
                </Typography>
                <Box
                  sx={{
                    width: "100px",
                    height: "4px",
                    background:
                      "linear-gradient(135deg, #6E3EF4 0%, #8B5CF6 100%)",
                    borderRadius: "2px",
                    mx: "auto",
                  }}
                />
              </Box>

              {/* Cards Grid - Changed to single column layout */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                {DigitalAcelerator.map((data, i) => (
                  <Box
                    key={i}
                    ref={cardRefs.current[i]}
                    className={`${
                      cardInView[i] ? styles.slideInLeft : styles.hidden
                    } ${styles[`delay-${i}`]}`}
                    sx={{
                      p: 6,
                      background: "white",
                      borderRadius: "24px",
                      boxShadow: "0 10px 50px rgba(0, 0, 0, 0.08)",
                      border: "1px solid rgba(110, 62, 244, 0.1)",
                      transition: "all 0.4s ease",
                      width: "100%",
                      maxWidth: "650px",
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: "center",
                      gap: 4,
                      "&:hover": {
                        transform: "translateY(-12px)",
                        boxShadow: "0 25px 70px rgba(110, 62, 244, 0.2)",
                        borderColor: "rgba(110, 62, 244, 0.3)",
                      },
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "20px",
                        background:
                          "linear-gradient(135deg, #6E3EF4 0%, #8B5CF6 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 10px 30px rgba(110, 62, 244, 0.3)",
                        flexShrink: 0,
                      }}
                    >
                      <Box
                        component="img"
                        src={data.icon}
                        alt={data.header}
                        sx={{
                          width: 36,
                          height: 36,
                          filter: "brightness(0) invert(1)",
                        }}
                      />
                    </Box>

                    {/* Content */}
                    <Box 
                      sx={{ 
                        flex: 1, 
                        textAlign: { xs: "center", sm: "left" } 
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "24px",
                          fontWeight: 600,
                          color: "#1D0D40",
                          mb: 2,
                          lineHeight: 1.3,
                        }}
                      >
                        {data.header}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "16px",
                          color: "#64748B",
                          lineHeight: 1.7,
                        }}
                      >
                        {data.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Right Side - Image */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              minHeight: { xs: "60vh", lg: "100vh" },
              background: "linear-gradient(135deg, #f8faff 0%, #ffffff 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
                pointerEvents: "none",
                zIndex: 1,
              },
            }}
          >
            <Box
              ref={imageRef}
              className={imageInView ? styles.slideInRight : styles.hidden}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720109209/DAB-Rocket_f6h8ic.avif"
                alt="DAB-Rocket"
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  // filter: "drop-shadow(0 30px 60px rgba(0, 0, 0, 0.3))",
                  maxHeight: "90%",
                }}
              />
            </Box>

            {/* Floating elements */}
            <Box
              sx={{
                position: "absolute",
                top: "15%",
                right: "10%",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "20%",
                left: "5%",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.15)",
                zIndex: 1,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;