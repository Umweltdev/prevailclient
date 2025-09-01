import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Chip,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ServiceSelector = () => {
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: "content-ad-campaign",
      title: "Content Ad Campaign",
      description:
        "Strategic content marketing and advertising campaigns to boost your brand visibility and engagement across digital platforms.",
      image:
        "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088563/Search-Engine-Marketing_m1ebvn.avif",
      route: "/service/search-engine-marketing",
      category: "Marketing",
    },
    {
      id: "brand-identity",
      title: "Brand Identity",
      description:
        "Comprehensive brand identity package including logo design, color schemes, typography, and brand guidelines for consistent messaging.",
      image:
        "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088563/Branding_trrcgh.avif",
      route: "/service/brand-identity-package",
      category: "Design",
    },
    {
      id: "web-development",
      title: "Web Development",
      description:
        "Custom website development solutions tailored to your business needs, from simple landing pages to complex web applications.",
      image:
        "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088569/Website-Development_gxpjci.avif",
      route: "/service/website-development",
      category: "Development",
    },
    {
      id: "trinity-system",
      title: "Trinity System",
      description:
        "Our comprehensive Trinity Plus system offering advanced business management tools and digital solutions for enterprise clients.",
      image:
        "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720088562/Digital-Accelerator_p0j4ty.avif",
      route: "/trinity/plus",
      category: "System",
    },
  ];

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
      {/* Heading Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: 6,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.8s ease-out",
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
          Explore Our Services
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
          Click on any service to learn more, or jump straight to the wizard to
          create your custom package.
        </Typography>
      </Box>

      {/* Services Grid */}
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} key={service.id}>
            <Card
              sx={{
                height: "100%",
                cursor: "pointer",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                boxShadow:
                  "0 10px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                opacity: inView ? 1 : 0,
                transform: inView
                  ? "translateY(0) scale(1)"
                  : "translateY(50px) scale(1)",
                transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${
                  index * 0.15
                }s`,
                "&:hover": {
                  transform: "translateY(-10px) scale(1.03)",
                  boxShadow:
                    "0 25px 50px rgba(110, 62, 244, 0.2), 0 0 0 1px rgba(110, 62, 244, 0.2)",
                  background: "rgba(255, 255, 255, 1)",
                },
                overflow: "hidden",
              }}
              onClick={() => navigate(service.route)}
            >
              <CardMedia
                component="img"
                height="220"
                image={service.image}
                alt={service.title}
                sx={{
                  objectFit: "cover",
                  transition: "all 0.4s ease",
                }}
              />
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Chip
                    label={service.category}
                    size="small"
                    sx={{
                      background: `linear-gradient(45deg, ${getCategoryColor(
                        service.category
                      )} 0%, ${getCategoryColor(service.category)}dd 100%)`,
                      color: "white",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      boxShadow: `0 2px 8px ${getCategoryColor(
                        service.category
                      )}40`,
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
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#4a5568",
                    lineHeight: 1.7,
                    fontSize: "1rem",
                  }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Step Wizard Button */}
      <Box
        sx={{
          textAlign: "center",
          mt: 8,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out 0.6s",
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/service/stepWizardPage")}
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
            boxShadow:
              "0 8px 25px rgba(110, 62, 244, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            "&:hover": {
              background: "linear-gradient(45deg, #5A2FC2 30%, #7C3AED 90%)",
              transform: "translateY(-4px) scale(1.05)",
            },
            "&:active": {
              transform: "translateY(-2px) scale(1.02)",
            },
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          Continue to Step Wizard
        </Button>
      </Box>
    </Container>
  );
};

export default ServiceSelector;
