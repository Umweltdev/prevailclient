import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, Button, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const face3 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FF6B6B'/%3E%3C/svg%3E";
const face8 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%234ECDC4'/%3E%3C/svg%3E";
const face9 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M20 80 L80 20 M75 25 L80 20 L75 15 M25 75 L20 80 L15 75' stroke='%23fff' stroke-width='3' fill='none'/%3E%3C/svg%3E";
const face11 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='25' fill='none' stroke='%23333' stroke-width='3'/%3E%3Ccircle cx='50' cy='50' r='10' fill='%23333'/%3E%3C/svg%3E";
const face12 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFE66D'/%3E%3C/svg%3E";
const face13 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M30 60 Q50 40 70 60 Q50 80 30 60' fill='%23FF8E53'/%3E%3C/svg%3E";

// CSS animations
const animationStyles = `
  @keyframes zoomFadeIn {
    0% {
      opacity: 0;
      transform: scale(0.8) translateY(30px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slideInLeft {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    0% {
      opacity: 0;
      transform: translateX(50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInUp {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(110, 62, 244, 0.3);
    }
    50% {
      box-shadow: 0 0 40px rgba(110, 62, 244, 0.6);
    }
  }

  .zoom-fade-in {
    animation: zoomFadeIn 0.8s ease-out forwards;
  }

  .slide-in-left {
    animation: slideInLeft 0.8s ease-out 0.2s forwards;
    opacity: 0;
  }

  .slide-in-right {
    animation: slideInRight 0.8s ease-out 0.4s forwards;
    opacity: 0;
  }

  .slide-in-up {
    animation: slideInUp 0.8s ease-out 0.6s forwards;
    opacity: 0;
  }

  .floating {
    animation: float 3s ease-in-out infinite;
  }

  .pulsing {
    animation: pulse 2s ease-in-out infinite;
  }

  .rotating {
    animation: rotate 10s linear infinite;
  }

  .glowing {
    animation: glow 2s ease-in-out infinite;
  }

  .gradient-text {
    background: linear-gradient(102deg, #6E3EF4 10.45%, #409AFF 64.21%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .enhanced-button {
    background: linear-gradient(135deg, #6E3EF4, #409AFF);
    border: none;
    border-radius: 50px;
    padding: 12px 32px;
    color: white;
    font-weight: 600;
    text-transform: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(110, 62, 244, 0.3);
    position: relative;
    overflow: hidden;
  }

  .enhanced-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  .enhanced-button:hover::before {
    left: 100%;
  }

  .enhanced-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(110, 62, 244, 0.4);
  }

  .image-hover {
    transition: all 0.3s ease;
  }

  .image-hover:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }

  .parallax-bg {
    background: linear-gradient(135deg, 
      rgba(209, 196, 233, 0.8), 
      rgba(255, 255, 255, 0.9), 
      rgba(187, 222, 251, 0.8)
    );
    background-size: 200% 200%;
    animation: gradientShift 8s ease infinite;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* Mobile-specific optimizations */
  @media (max-width: 767px) {
    .floating {
      animation: float 4s ease-in-out infinite;
    }
    
    .rotating {
      animation: rotate 15s linear infinite;
    }
    
    .pulsing {
      animation: pulse 3s ease-in-out infinite;
    }
  }
`;

const Hero = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: subTextRef, inView: subTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageGroupRef, inView: imageGroupInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <style>{animationStyles}</style>
      <Grid
        className="parallax-bg"
        sx={{
          display: "flex",
          flexDirection: "row",
          pt: "120px",
          pb: "100px",
          justifyContent: "center",
          alignItems: "flex-start",
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          px: { xs: 2, sm: 4, md: 6 },
          "@media (max-width: 767px)": {
            flexDirection: "column",
            pt: "100px",
            pb: "60px",
            px: 3,
            minHeight: "auto",
            alignItems: "center",
          },
        }}
      >
        {/* Decorative floating elements */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
            opacity: 0.6,
            "@media (max-width: 767px)": {
              width: "30px",
              height: "30px",
              top: "5%",
              left: "10%",
            },
          }}
          className="floating"
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "linear-gradient(45deg, #FFE66D, #FF8E53)",
            opacity: 0.7,
            "@media (max-width: 767px)": {
              width: "25px",
              height: "25px",
              bottom: "10%",
              right: "15%",
            },
          }}
          className="floating pulsing"
        />

        {/* Content Section */}
        <Grid 
          sx={{ 
            position: "relative", 
            maxWidth: "650px",
            pr: { xs: 0, md: 4 },
            mb: { xs: 4, md: 0 },
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Box
            sx={{
              background: "linear-gradient(135deg, rgba(110, 62, 244, 0.05), rgba(64, 154, 255, 0.05))",
              borderRadius: { xs: "20px", md: "30px" },
              padding: { xs: "24px", sm: "32px", md: "40px" },
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 20px 40px rgba(110, 62, 244, 0.1)",
            }}
          >
            <Typography
              ref={headingRef}
              className={headingInView ? "zoom-fade-in" : ""}
              sx={{
                fontSize: { xs: "32px", sm: "45px", md: "64px" },
                color: "#1D0D40",
                fontWeight: "600",
                fontFamily: "system-ui, -apple-system, sans-serif",
                lineHeight: { xs: 1.2, md: 1.1 },
                mb: { xs: 1, md: 1 },
                textShadow: "0 2px 4px rgba(29, 13, 64, 0.1)",
                letterSpacing: "-0.02em",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Your Partner in Accelerating the
            </Typography>
            <Typography
              className="gradient-text"
              sx={{
                fontSize: { xs: "32px", sm: "45px", md: "64px" },
                fontWeight: "700",
                mb: { xs: 3, md: 4 },
                position: "relative",
                letterSpacing: "-0.02em",
                textAlign: { xs: "center", md: "left" },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: { xs: -8, md: -15 },
                  left: { xs: "50%", md: 0 },
                  width: { xs: "80%", md: "100%" },
                  height: { xs: "4px", md: "6px" },
                  background: "linear-gradient(102deg, #6E3EF4 10.45%, #409AFF 64.21%)",
                  borderRadius: "3px",
                  transform: headingInView ? 
                    { xs: "translateX(-50%) scaleX(1)", md: "scaleX(1)" } : 
                    { xs: "translateX(-50%) scaleX(0)", md: "scaleX(0)" },
                  transformOrigin: { xs: "center", md: "left" },
                  transition: "transform 0.8s ease 0.5s",
                },
              }}
            >
              Digital Space
            </Typography>
            
            <Box
              sx={{
                height: "4px",
                background: "linear-gradient(90deg, rgba(110, 62, 244, 0.2), rgba(64, 154, 255, 0.2))",
                borderRadius: "2px",
                mb: 3,
                width: { xs: "60px", md: "80px" },
                mx: { xs: "auto", md: 0 },
              }}
            />
            
            <Typography
              ref={subTextRef}
              className={subTextInView ? "slide-in-left" : ""}
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
                lineHeight: 1.7,
                color: "#2C2C2C",
                fontWeight: "400",
                mb: { xs: 3, md: 4 },
                letterSpacing: "0.01em",
                position: "relative",
                textAlign: { xs: "center", md: "left" },
                px: { xs: 2, md: 0 },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: { xs: "50%", md: "-20px" },
                  top: "0",
                  bottom: "0",
                  width: { xs: "2px", md: "3px" },
                  background: "linear-gradient(180deg, #6E3EF4, #409AFF)",
                  borderRadius: "2px",
                  transform: { xs: "translateX(-50%)", md: "none" },
                  display: { xs: "none", md: "block" },
                },
              }}
            >
              Our goal is to help businesses thrive and create their unique online
              presence by providing innovative and holistic solutions.
            </Typography>
            
            <Box 
              ref={buttonRef}
              className={buttonInView ? "slide-in-up" : ""}
              sx={{ 
                display: "flex", 
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "center", sm: "center" }, 
                gap: { xs: 2, sm: 2 },
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                className="enhanced-button"
                onClick={() => navigate("/contact-us")}
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.2, md: 1.5 },
                  width: { xs: "200px", sm: "auto" },
                }}
              >
                Get Started
              </Button>
              <Typography
                sx={{
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                  color: "#6B7280",
                  fontWeight: "500",
                  opacity: 0.8,
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Start your digital journey today
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Images Section */}
        <Grid
          ref={imageGroupRef}
          className={imageGroupInView ? "slide-in-right" : ""}
          sx={{
            position: "relative",
            transform: { xs: "translateY(0)", md: "translateY(-60px)" },
            width: { xs: "100%", md: "auto" },
            maxWidth: { xs: "100%", sm: "600px" },
            mx: { xs: "auto", md: 0 },
          }}
        >
          <Box>
            {/* First row of images */}
            <Box
              sx={{
                display: "flex",
                position: "relative",
                mb: { xs: 2, md: 3 },
                gap: { xs: 1, sm: 2 },
                justifyContent: "center",
              }}
            >
              <CardMedia
                className="image-hover floating"
                sx={{
                  width: { xs: "45vw", sm: "280px", md: "367px" },
                  height: { xs: "35vw", sm: "220px", md: "300px" },
                  borderRadius: { xs: "25%", md: "30%" },
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  maxWidth: "350px",
                  maxHeight: "280px",
                }}
                component={"img"}
                image={
                  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720079292/Landing-View-1_ropr5f.webp"
                }
                alt="Landing-View-1"
              />
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "30vw", sm: "180px", md: "241px" },
                  maxWidth: "220px",
                }}
              >
                <CardMedia
                  className="image-hover pulsing"
                  sx={{
                    width: "100%",
                    height: { xs: "35vw", sm: "220px", md: "300px" },
                    maxHeight: "280px",
                    borderRadius: { xs: "35%", md: "45%" },
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  component={"img"}
                  image={
                    "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720079290/Landing-View-2_xnoeyf.webp"
                  }
                  alt="Landing-View-2"
                />
                <Box
                  className="rotating"
                  sx={{
                    position: "absolute",
                    top: { xs: "-30px", sm: "-45px", md: "-60px" },
                    left: { xs: "-30px", sm: "-45px", md: "-60px" },
                    width: { xs: "40px", sm: "60px", md: "80px" },
                    height: { xs: "40px", sm: "60px", md: "80px" },
                  }}
                >
                  <CardMedia
                    sx={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
                    }}
                    component={"img"}
                    image={face3}
                    alt="Union"
                  />
                  <CardMedia
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: { xs: "60%", md: "50%" },
                    }}
                    component={"img"}
                    image={face11}
                    alt="eye"
                  />
                </Box>
              </Box>
            </Box>

            {/* Second row of images */}
            <Box 
              sx={{ 
                display: "flex", 
                gap: { xs: 1, sm: 2 }, 
                mb: { xs: 2, md: 3 },
                justifyContent: "center",
              }}
            >
              <Box
                className="glowing floating"
                sx={{
                  width: { xs: "25vw", sm: "140px", md: "190px" },
                  height: { xs: "25vw", sm: "140px", md: "190px" },
                  maxWidth: "170px",
                  maxHeight: "170px",
                  background: "linear-gradient(135deg, #8555ED, #6E3EF4)",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 10px 30px rgba(133, 85, 237, 0.3)",
                }}
              >
                <CardMedia
                  sx={{
                    width: { xs: "40px", sm: "60px", md: "80px" },
                    filter: "brightness(0) invert(1)",
                  }}
                  component={"img"}
                  image={face9}
                  alt="pencil"
                />
              </Box>
              <CardMedia
                className="image-hover"
                sx={{
                  width: { xs: "50vw", sm: "320px", md: "425px" },
                  height: { xs: "25vw", sm: "140px", md: "190px" },
                  maxWidth: "400px",
                  maxHeight: "170px",
                  borderRadius: { xs: "35%", md: "45%" },
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                component={"img"}
                image={
                  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720079290/Landing-View-3_irfnkj.webp"
                }
                alt="Landing-View-3"
              />
            </Box>

            {/* Third row of images */}
            <Box 
              sx={{ 
                display: "flex", 
                gap: { xs: 1, sm: 2 },
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "25vw", sm: "150px", md: "205px" },
                  height: { xs: "25vw", sm: "150px", md: "205px" },
                  maxWidth: "180px",
                  maxHeight: "180px",
                  borderRadius: "50%",
                }}
              >
                <CardMedia
                  className="image-hover floating"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  component={"img"}
                  image={
                    "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720079289/Landing-View-4_n1jfb5.webp"
                  }
                  alt="Landing-View-4"
                />
                <Box
                  className="pulsing"
                  sx={{
                    position: "absolute",
                    top: { xs: "5%", md: "-5%" },
                    left: { xs: "75%", md: "85%" },
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <CardMedia
                    sx={{
                      width: { xs: "50px", sm: "70px", md: "100px" },
                      height: { xs: "50px", sm: "70px", md: "100px" },
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
                    }}
                    component={"img"}
                    image={face12}
                    alt="Unions"
                  />
                  <CardMedia
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: { xs: "70%", md: "60%" },
                    }}
                    component={"img"}
                    image={face13}
                    alt="hands-new"
                  />
                </Box>
              </Box>
              <CardMedia
                className="image-hover rotating"
                sx={{
                  width: { xs: "25vw", sm: "150px", md: "205px" },
                  height: { xs: "25vw", sm: "150px", md: "205px" },
                  maxWidth: "180px",
                  maxHeight: "180px",
                  borderRadius: "50%",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                component={"img"}
                image={face8}
                alt="globe"
              />
              <CardMedia
                className="image-hover floating"
                sx={{
                  width: { xs: "25vw", sm: "150px", md: "205px" },
                  height: { xs: "25vw", sm: "150px", md: "205px" },
                  maxWidth: "180px",
                  maxHeight: "180px",
                  borderRadius: "50%",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                component={"img"}
                image={
                  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720079287/Landing-View-5_idby0s.webp"
                }
                alt="Landing-View-5"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;