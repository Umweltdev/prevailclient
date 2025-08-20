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
          "@media (max-width: 767px)": {
            flexDirection: "column",
            width: "100vw",
            pt: "168px",
            pl: "5vw",
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
          }}
          className="floating pulsing"
        />

        <Grid 
          sx={{ 
            position: "relative", 
            maxWidth: "650px",
            pr: 4,
            "@media (max-width: 767px)": {
              pr: 0,
            },
          }}
        >
          <Box
            sx={{
              background: "linear-gradient(135deg, rgba(110, 62, 244, 0.05), rgba(64, 154, 255, 0.05))",
              borderRadius: "30px",
              padding: "40px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 20px 40px rgba(110, 62, 244, 0.1)",
              "@media (max-width: 767px)": {
                padding: "20px",
                borderRadius: "20px",
              },
            }}
          >
            <Typography
              ref={headingRef}
              className={headingInView ? "zoom-fade-in" : ""}
              sx={{
                fontSize: "64px",
                color: "#1D0D40",
                fontWeight: "600",
                fontFamily: "system-ui, -apple-system, sans-serif",
                lineHeight: 1.1,
                mb: 1,
                textShadow: "0 2px 4px rgba(29, 13, 64, 0.1)",
                letterSpacing: "-0.02em",
                "@media (max-width: 767px)": {
                  fontSize: "40px",
                  lineHeight: "unset",
                  marginBottom: "unset",
                  fontWeight: "500",
                },
              }}
            >
              Your Partner in Accelerating the
            </Typography>
            <Typography
              className="gradient-text"
              sx={{
                fontSize: "64px",
                fontWeight: "700",
                mb: 4,
                position: "relative",
                letterSpacing: "-0.02em",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -15,
                  left: 0,
                  width: "100%",
                  height: "6px",
                  background: "linear-gradient(102deg, #6E3EF4 10.45%, #409AFF 64.21%)",
                  borderRadius: "3px",
                  transform: headingInView ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.8s ease 0.5s",
                },
                "@media (max-width: 767px)": {
                  fontSize: "40px",
                  lineHeight: "unset",
                  marginBottom: "2rem",
                  fontWeight: "500",
                  "&::after": {
                    height: "4px",
                    bottom: -10,
                  },
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
                width: "80px",
              }}
            />
            
            <Typography
              ref={subTextRef}
              className={subTextInView ? "slide-in-left" : ""}
              sx={{
                fontSize: "1.3rem",
                lineHeight: 1.7,
                color: "#2C2C2C",
                fontWeight: "400",
                mb: 4,
                letterSpacing: "0.01em",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: "-20px",
                  top: "0",
                  bottom: "0",
                  width: "3px",
                  background: "linear-gradient(180deg, #6E3EF4, #409AFF)",
                  borderRadius: "2px",
                },
                "@media (max-width: 767px)": {
                  fontSize: "1.2rem",
                  "&::before": {
                    left: "-15px",
                    width: "2px",
                  },
                },
              }}
            >
              Our goal is to help businesses thrive and create their unique online
              presence by providing innovative and holistic solutions.
            </Typography>
            
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                className="enhanced-button"
                onClick={() => navigate("/contact-us")}
                sx={{
                  fontSize: "1.1rem",
                  px: 4,
                  py: 1.5,
                }}
              >
                Get Started
              </Button>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: "#6B7280",
                  fontWeight: "500",
                  opacity: 0.8,
                }}
              >
                Start your digital journey today
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid
          ref={imageGroupRef}
          className={imageGroupInView ? "slide-in-right" : ""}
          sx={{
            position: "relative",
            transform: "translateY(-60px)", // Moved images up by 60px
            "@media (max-width: 767px)": {
              width: "90vw",
              pt: "80px",
              margin: "auto",
              ml: "unset",
              transform: "translateY(-30px)", // Less movement on mobile
            },
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                position: "relative",
                mb: 3,
                "@media (max-width: 767px)": {
                  width: "90vw",
                },
              }}
            >
              <CardMedia
                className="image-hover floating"
                sx={{
                  width: "367px",
                  height: "300px",
                  borderRadius: "30%",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  "@media (max-width: 767px)": {
                    width: "55vw",
                    height: "35vw",
                    borderRadius: "35%",
                  },
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
                  width: "241px",
                  ml: 2,
                  "@media (max-width: 767px)": {
                    width: "35vw",
                    height: "35vw",
                  },
                }}
              >
                <CardMedia
                  className="image-hover pulsing"
                  sx={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "45%",
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
                    top: "-60px",
                    left: "-60px",
                    width: "50%",
                    "@media (max-width: 767px)": {
                      width: "70%",
                    },
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
                      width: "50%",
                      "@media (max-width: 767px)": {
                        width: "70%",
                      },
                    }}
                    component={"img"}
                    image={face11}
                    alt="eye"
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              <Box
                className="glowing floating"
                sx={{
                  width: "190px",
                  height: "190px",
                  background: "linear-gradient(135deg, #8555ED, #6E3EF4)",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 10px 30px rgba(133, 85, 237, 0.3)",
                  "@media (max-width: 767px)": {
                    width: "35vw",
                    height: "35vw",
                  },
                }}
              >
                <CardMedia
                  sx={{
                    width: "80px",
                    filter: "brightness(0) invert(1)",
                    "@media (max-width: 767px)": {
                      width: "50px",
                    },
                  }}
                  component={"img"}
                  image={face9}
                  alt="pencil"
                />
              </Box>
              <CardMedia
                className="image-hover"
                sx={{
                  width: "425px",
                  height: "190px",
                  borderRadius: "45%",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  "@media (max-width: 767px)": {
                    width: "55vw",
                    height: "35vw",
                    borderRadius: "40%",
                  },
                }}
                component={"img"}
                image={
                  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720079290/Landing-View-3_irfnkj.webp"
                }
                alt="Landing-View-3"
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box
              sx={{
                position: "relative",
                width: "205px",
                height: "205px",
                borderRadius: "50%",
                "@media (max-width: 767px)": {
                  width: "30vw",
                  height: "30vw",
                },
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
                  top: "-5%",
                  left: "85%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <CardMedia
                  sx={{
                    width: "100px",
                    height: "100px",
                    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
                    "@media (max-width: 767px)": {
                      width: "60px",
                      height: "60px",
                    },
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
                    width: "60%",
                    "@media (max-width: 767px)": {
                      width: "80%",
                    },
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
                width: "205px",
                height: "205px",
                borderRadius: "50%",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                "@media (max-width: 767px)": {
                  width: "30vw",
                  height: "30vw",
                },
              }}
              component={"img"}
              image={face8}
              alt="globe"
            />
            <CardMedia
              className="image-hover floating"
              sx={{
                width: "205px",
                height: "205px",
                borderRadius: "50%",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                "@media (max-width: 767px)": {
                  width: "30vw",
                  height: "30vw",
                },
              }}
              component={"img"}
              image={
                "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720079287/Landing-View-5_idby0s.webp"
              }
              alt="Landing-View-5"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;