import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Container,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ServiceSelector = () => {
  const [selectedServices, setSelectedServices] = React.useState([]);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: "content-ad-campaign",
      title: "Content Ad Campaign",
      description: "Strategic content marketing and advertising campaigns to boost your brand visibility and engagement across digital platforms.",
      image: "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088563/Search-Engine-Marketing_m1ebvn.avif",
      route: "/service/search-engine-marketing",
      category: "Marketing",
      features: ["Social Media Ads", "Content Strategy", "Performance Analytics"],
    },
    {
      id: "brand-identity",
      title: "Brand Identity",
      description: "Comprehensive brand identity package including logo design, color schemes, typography, and brand guidelines for consistent messaging.",
      image: "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088563/Branding_trrcgh.avif",
      route: "/service/brand-identity-package",
      category: "Design",
      features: ["Logo Design", "Brand Guidelines", "Marketing Collateral"],
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom website development solutions tailored to your business needs, from simple landing pages to complex web applications.",
      image: "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088569/Website-Development_gxpjci.avif",
      route: "/service/website-development",
      category: "Development",
      features: ["Responsive Design", "Custom Development", "SEO Optimization"],
    },
    {
      id: "trinity-system",
      title: "Trinity System",
      description: "Our comprehensive Trinity Plus system offering advanced business management tools and digital solutions for enterprise clients.",
      image: "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088562/Digital-Accelerator_p0j4ty.avif",
      route: "/trinity/plus",
      category: "System",
      features: ["Business Management", "Digital Tools", "Enterprise Solutions"],
    },
  ];

  const handleServiceToggle = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleNavigateToServices = () => {
    if (selectedServices.length === 0) {
      // Navigate to general services page if no specific service selected
      navigate("/service-landing-page");
    } else {
      // Navigate to step wizard page with selected services as query params
      const selectedParams = selectedServices.join(",");
      navigate(`/service/stepWizardPage?selected=${selectedParams}`);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Marketing: "#FF6B6B",
      Design: "#4ECDC4",
      Development: "#45B7D1",
      System: "#96CEB4",
    };
    return colors[category] || "#884ed9";
  };

  return (
    <Container
      ref={ref}
      maxWidth="lg"
      sx={{
        py: 8,
        minHeight: "100vh",
        background: "transparent",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          mb: 6,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.8s ease-out",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 800,
            color: "#1a1a2e",
            mb: 2,
            fontSize: { xs: "2.5rem", md: "4rem" },
            textShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          Select Your Services
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#4a5568",
            mb: 4,
            maxWidth: "600px",
            mx: "auto",
            fontSize: { xs: "1.1rem", md: "1.3rem" },
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          Choose the services that best fit your business needs. Select multiple
          services to create your custom solution package.
        </Typography>
        
        {selectedServices.length > 0 && (
          <Box 
            sx={{ 
              mb: 4,
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              p: 3,
              border: "1px solid rgba(255, 255, 255, 0.2)",
              maxWidth: "500px",
              mx: "auto",
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2, 
                color: "#1a1a2e",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <CheckCircleIcon sx={{ color: "#4ade80" }} />
              {selectedServices.length} Service{selectedServices.length > 1 ? 's' : ''} Selected
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
              {selectedServices.map((serviceId) => {
                const service = services.find((s) => s.id === serviceId);
                return (
                  <Chip
                    key={serviceId}
                    label={service?.title}
                    onDelete={() => handleServiceToggle(serviceId)}
                    sx={{
                      background: "linear-gradient(45deg, #6E3EF4 30%, #8B5CF6 90%)",
                      color: "white",
                      fontWeight: 600,
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      backdropFilter: "blur(5px)",
                      "& .MuiChip-deleteIcon": {
                        color: "rgba(255, 255, 255, 0.8)",
                        "&:hover": {
                          color: "white",
                        },
                      },
                    }}
                  />
                );
              })}
            </Box>
          </Box>
        )}
      </Box>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} key={service.id}>
            <Card
              sx={{
                height: "100%",
                cursor: "pointer",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                border: selectedServices.includes(service.id)
                  ? "2px solid #6E3EF4"
                  : "2px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "24px",
                boxShadow: selectedServices.includes(service.id)
                  ? "0 20px 40px rgba(110, 62, 244, 0.3), 0 0 0 1px rgba(110, 62, 244, 0.1)"
                  : "0 10px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                opacity: inView ? 1 : 0,
                transform: inView
                  ? selectedServices.includes(service.id)
                    ? "translateY(0) scale(1.02)"
                    : "translateY(0) scale(1)"
                  : "translateY(50px) scale(1)",
                transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
                "&:hover": {
                  transform: "translateY(-12px) scale(1.03)",
                  boxShadow: "0 25px 50px rgba(110, 62, 244, 0.2), 0 0 0 1px rgba(110, 62, 244, 0.2)",
                  background: "rgba(255, 255, 255, 1)",
                },
                position: "relative",
                overflow: "hidden",
                "&::before": selectedServices.includes(service.id) ? {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, #6E3EF4, #8B5CF6, #A855F7)",
                  zIndex: 1,
                } : {},
              }}
              onClick={() => handleServiceToggle(service.id)}
            >
              {selectedServices.includes(service.id) && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    background: "linear-gradient(45deg, #4ade80 0%, #22c55e 100%)",
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 3,
                    boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
                    animation: "pulse 2s infinite",
                    "@keyframes pulse": {
                      "0%": {
                        boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.7)",
                      },
                      "70%": {
                        boxShadow: "0 0 0 10px rgba(34, 197, 94, 0)",
                      },
                      "100%": {
                        boxShadow: "0 0 0 0 rgba(34, 197, 94, 0)",
                      },
                    },
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "white",
                      fontSize: 24,
                    }}
                  />
                </Box>
              )}
              
              <CardMedia
                component="img"
                height="220"
                image={service.image}
                alt={service.title}
                sx={{
                  objectFit: "cover",
                  filter: selectedServices.includes(service.id)
                    ? "brightness(0.8) saturate(1.2)"
                    : "brightness(1)",
                  transition: "all 0.4s ease",
                  position: "relative",
                }}
              />
              
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Chip
                    label={service.category}
                    size="small"
                    sx={{
                      background: `linear-gradient(45deg, ${getCategoryColor(service.category)} 0%, ${getCategoryColor(service.category)}dd 100%)`,
                      color: "white",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: `0 2px 8px ${getCategoryColor(service.category)}40`,
                    }}
                  />
                </Box>
                
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    color: "#1a1a2e",
                    mb: 3,
                    fontSize: { xs: "1.4rem", md: "1.6rem" },
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4a5568",
                    mb: 4,
                    lineHeight: 1.7,
                    fontSize: "1rem",
                  }}
                >
                  {service.description}
                </Typography>
                
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ 
                      color: "#6E3EF4", 
                      mb: 2, 
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Key Features
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {service.features.map((feature, idx) => (
                      <Chip
                        key={idx}
                        label={feature}
                        size="small"
                        sx={{
                          background: "linear-gradient(45deg, #f8fafc 0%, #e2e8f0 100%)",
                          color: "#475569",
                          fontSize: "0.8rem",
                          fontWeight: 500,
                          border: "1px solid #e2e8f0",
                          "&:hover": {
                            background: "linear-gradient(45deg, #e2e8f0 0%, #cbd5e1 100%)",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedServices.length > 0 && (
        <Box
          sx={{
            textAlign: "center",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out 0.6s",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={handleNavigateToServices}
            endIcon={<ArrowForwardIcon />}
            sx={{
              background: "linear-gradient(45deg, #6E3EF4 30%, #8B5CF6 90%)",
              color: "white",
              px: 6,
              py: 3,
              borderRadius: "50px",
              textTransform: "none",
              fontSize: "1.2rem",
              fontWeight: 700,
              letterSpacing: "0.5px",
              boxShadow: "0 8px 25px rgba(110, 62, 244, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              "&:hover": {
                background: "linear-gradient(45deg, #5A2FC2 30%, #7C3AED 90%)",
                transform: "translateY(-4px) scale(1.05)",
                boxShadow: "0 12px 35px rgba(110, 62, 244, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2)",
              },
              "&:active": {
                transform: "translateY(-2px) scale(1.02)",
              },
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {selectedServices.length === 1
              ? "Continue to Next Step"
              : `Continue with ${selectedServices.length} Services`}
          </Button>
          
          <Typography
            variant="body2"
            sx={{ 
              mt: 3, 
              color: "#64748b", 
              fontStyle: "italic",
              fontSize: "0.95rem",
            }}
          >
            Click on services to select/deselect them
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default ServiceSelector;