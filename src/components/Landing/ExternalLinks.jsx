import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useState, useEffect } from "react";
import { styled, keyframes } from "@mui/material/styles";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const HeroSection = styled(Box)({
  minHeight: "100vh",
  background: `
    linear-gradient(135deg, 
      rgba(15, 32, 61, 0.95) 0%, 
      rgba(44, 62, 80, 0.9) 50%, 
      rgba(52, 73, 94, 0.85) 100%
    ),
    url("https://res.cloudinary.com/anthonyj5/image/upload/v1750178600/Screenshot_from_2025-06-17_17-39-35_vbagos.png")
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
  },
  "&::before": {
    background:
      "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
  },
  "&::after": {
    background:
      "radial-gradient(circle at 80% 20%, rgba(255, 193, 7, 0.2) 0%, transparent 50%)",
  },
});

const AnimatedBox = styled(Box)`
  animation: ${fadeInUp} 1s ease-out forwards;
`;

const FloatingLogo = styled(Box)`
  animation: ${float} 3s ease-in-out infinite;
`;

const GlowingButton = styled(Button)({
  background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
  borderRadius: "50px",
  padding: "16px 48px",
  fontSize: "1.1rem",
  fontWeight: "bold",
  textTransform: "none",
  boxShadow: "0 8px 32px rgba(102, 126, 234, 0.4)",
  transition: "all 0.3s ease",
  color: "white",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 12px 40px rgba(102, 126, 234, 0.6)",
    background: "linear-gradient(45deg, #764ba2 0%, #667eea 100%)",
  },
  "&:active": {
    transform: "translateY(0px)",
  },
});

const FeatureCard = styled(Card)({
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "20px",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    background: "rgba(255, 255, 255, 0.15)",
  },
});

const ExternalLinks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Direct Bookings",
      description: "Boost revenue with integrated booking system",
    },
    {
      title: "Guest Dashboard",
      description: "Streamlined guest management and communication",
    },
    {
      title: "Analytics & KPIs",
      description: "Visual insights to grow your business",
    },
    {
      title: "Brand Customization",
      description: "Reflect your unique hotel personality",
    },
  ];

  return (
    <HeroSection>
      <Container
        maxWidth="xl"
        sx={{ position: "relative", zIndex: 2, px: 4, py: 16 }}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={7}>
            <AnimatedBox sx={{ opacity: isVisible ? 1 : 0 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", mb: 4, gap: 3 }}
              >
                <FloatingLogo>
                  <Box
                    component="img"
                    src="/head-logo-1.png"
                    alt="Logo"
                    sx={{
                      width: { xs: 70, md: 90 },
                      height: "auto",
                      filter:
                        "drop-shadow(0 4px 12px rgba(255, 255, 255, 0.3))",
                    }}
                  />
                </FloatingLogo>
                <Box
                  sx={{
                    width: 2,
                    height: 60,
                    background:
                      "linear-gradient(to bottom, transparent, #667eea, transparent)",
                    opacity: 0.7,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: "#667eea",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  PREVAIL PLATFORM
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: "white",
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                  lineHeight: 1.1,
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Power Your Hotel with
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "block",
                  }}
                >
                  Purpose-Built Technology
                </Box>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  mb: 4,
                  lineHeight: 1.6,
                  maxWidth: 600,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                }}
              >
                Transform your hotel into an experience with our integrated
                platform. Streamline operations, boost direct bookings, and
                build stronger guest relationships.
              </Typography>

              <Grid container spacing={2} sx={{ mb: 5 }}>
                {features.map((feature, index) => (
                  <Grid item xs={6} md={3} key={index} sx={{ display: "flex" }}>
                    <FeatureCard
                      elevation={0}
                      sx={{ flex: 1, display: "flex", flexDirection: "column" }}
                    >
                      <CardContent
                        sx={{
                          p: 2,
                          textAlign: "center",
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{ color: "white", fontWeight: 600, mb: 1 }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </FeatureCard>
                  </Grid>
                ))}
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  justifyContent: "center",
                  position: "relative", // ensure stacking is correct
                  zIndex: 20,
                }}
              >
                <GlowingButton
                  size="large"
                  component="a"
                  href="https://crownstone.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Platform
                </GlowingButton>
              </Box>
            </AnimatedBox>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { xs: 300, md: 500 },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 250, md: 350 },
                  height: { xs: 250, md: 350 },
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(20px)",
                  animation: `${pulse} 4s ease-in-out infinite`,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: -20,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
                    animation: `${pulse} 4s ease-in-out infinite reverse`,
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    textAlign: "center",
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #667eea 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Hotel
                  <br />
                  Excellence
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, #667eea, transparent)",
          opacity: 0.5,
        }}
      />
    </HeroSection>
  );
};

export default ExternalLinks;
