import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  CardContent,
  CardActions,
  Chip,
} from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import BrandingIcon from "@mui/icons-material/Brush";
import WebsiteIcon from "@mui/icons-material/Language";
import APIIcon from "@mui/icons-material/Settings";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Branding Excellence",
    description:
      "Dive into Prevail's exclusive 'Brand Identity Package'. We do more than just logo creation and marketing materials; we embark on a creative partnership to forge your distinctive brand identity that not only stands out but resonates deeply with your audience.",
    icon: <BrandingIcon />,
    link: "/service/brand-identity-package",
    color: "#FF6B6B",
    gradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)",
    category: "Creative",
  },
  {
    title: "Website Mastery",
    description:
      "With our innovative 'Website Production' service, we craft captivating online platforms for SMEs and local enterprises. Our strategic approach ensures your website not only looks great but functions seamlessly, engaging your visitors and converting them into loyal customers.",
    icon: <WebsiteIcon />,
    link: "/service/website-development",
    color: "#4ECDC4",
    gradient: "linear-gradient(135deg, #4ECDC4 0%, #6FDDDD 100%)",
    category: "Development",
  },
{
  title: "Content Ad Campaign",
  description:
    "Drive engagement with content-driven ad campaigns tailored to your audience. We blend storytelling, creativity, and data insights to deliver campaigns that boost visibility, strengthen brand identity, and maximize ROI.",
  icon: <SearchIcon />,
  link: "/service/conten-ad-campaign",
  color: "#FF8A65",
  gradient: "linear-gradient(135deg, #FF8A65 0%, #FFB199 100%)",
  category: "Marketing",
},
{
  title: "Trinity System",
  description:
    "The Trinity System unites strategy, creativity, and technology into a powerful growth engine. By integrating marketing efforts, data-driven insights, and digital tools, we help businesses achieve consistency, scalability, and lasting impact in the digital landscape.",
  icon: <APIIcon />,
  link: "/service/trinity-plus",
  color: "#6C63FF",
  gradient: "linear-gradient(135deg, #6C63FF 0%, #9C9BFF 100%)",
  category: "Technology",
},

];

const ServiceCard = styled("div")(({ theme, serviceColor, serviceGradient }) => ({
  backgroundColor: "#ffffff",
  borderRadius: "24px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  
  "&:hover": {
    transform: "translateY(-12px) scale(1.02)",
    boxShadow: `0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px ${serviceColor}20`,
    
    "& .service-icon": {
      transform: "scale(1.1) rotate(5deg)",
      background: serviceGradient,
    },
    
    "& .service-arrow": {
      transform: "translateX(8px)",
    },
    
    "& .service-category": {
      transform: "scale(1.05)",
    }
  },
  
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: serviceGradient,
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  
  "&:hover::before": {
    opacity: 1,
  }
}));

const IconContainer = styled(Box)(({ serviceColor, serviceGradient }) => ({
  width: "80px",
  height: "80px",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `${serviceColor}15`,
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  marginBottom: "20px",
  position: "relative",
  
  "& svg": {
    fontSize: "40px",
    color: serviceColor,
    transition: "all 0.3s ease",
  },
  
  "&::after": {
    content: '""',
    position: "absolute",
    top: "-2px",
    left: "-2px",
    right: "-2px",
    bottom: "-2px",
    borderRadius: "22px",
    background: serviceGradient,
    opacity: 0,
    zIndex: -1,
    transition: "opacity 0.3s ease",
  }
}));

const StyledButton = styled("button")(({ serviceColor }) => ({
  background: "transparent",
  border: `2px solid ${serviceColor}30`,
  borderRadius: "50px",
  padding: "12px 24px",
  color: serviceColor,
  fontWeight: 600,
  fontSize: "14px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  textDecoration: "none",
  
  "&:hover": {
    background: serviceColor,
    color: "#ffffff",
    borderColor: serviceColor,
    transform: "translateY(-2px)",
    boxShadow: `0 8px 25px ${serviceColor}40`,
  }
}));

const HeroSection = styled(Box)({
  textAlign: "center",
  marginBottom: "80px",
  position: "relative",
  
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-50px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100px",
    height: "100px",
    background: "linear-gradient(45deg, #6A1B9A, #9C4DCC)",
    borderRadius: "50%",
    opacity: 0.1,
    filter: "blur(40px)",
  }
});

const OurCore = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Box
      sx={{
        padding: "120px 0",
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)",
        position: "relative",
        overflow: "hidden",
        
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, #6A1B9A10 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, #4ECDC410 0%, transparent 50%),
            radial-gradient(circle at 40% 70%, #FF6B6B10 0%, transparent 50%)
          `,
          pointerEvents: "none",
        }
      }}
    >
      <Container maxWidth="xl">
        <HeroSection>
          <Chip 
            label="Our Services" 
            sx={{ 
              background: "linear-gradient(45deg, #6A1B9A, #9C4DCC)",
              color: "white",
              fontWeight: 600,
              fontSize: "14px",
              marginBottom: "24px",
              padding: "8px 16px",
              height: "auto"
            }} 
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              marginBottom: "24px",
              background: "linear-gradient(135deg, #1a202c 0%, #4a5568 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              lineHeight: 1.2,
            }}
          >
            The Ultimate Products
            <br />
            <span style={{ 
              background: "linear-gradient(135deg, #6A1B9A 0%, #9C4DCC 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              We Serve
            </span>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#64748b",
              lineHeight: 1.6,
              fontSize: "1.2rem",
              fontWeight: 400,
            }}
          >
            Prevail stands out by crafting tailored strategies and solutions
            that are data-driven and creatively inspired, designed to elevate your brand to new heights.
          </Typography>
        </HeroSection>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Link 
                to={service.link} 
                style={{ textDecoration: "none", display: "block" }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <ServiceCard 
                  serviceColor={service.color}
                  serviceGradient={service.gradient}
                >
                  <CardContent sx={{ padding: "40px", paddingBottom: "20px" }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "20px" }}>
                      <IconContainer 
                        className="service-icon"
                        serviceColor={service.color}
                        serviceGradient={service.gradient}
                      >
                        {service.icon}
                      </IconContainer>
                      <Box sx={{ flex: 1 }}>
                        <Chip
                          label={service.category}
                          className="service-category"
                          size="small"
                          sx={{
                            background: `${service.color}20`,
                            color: service.color,
                            fontWeight: 600,
                            marginBottom: "12px",
                            transition: "transform 0.3s ease",
                          }}
                        />
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: "#1a202c",
                            marginBottom: "16px",
                            lineHeight: 1.3,
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        color: "#64748b",
                        fontSize: "16px",
                        lineHeight: 1.7,
                        marginBottom: "0",
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ padding: "20px 40px 40px" }}>
                    <StyledButton serviceColor={service.color}>
                      Learn More
                      <ArrowForwardIcon 
                        className="service-arrow"
                        sx={{ 
                          fontSize: "18px",
                          transition: "transform 0.3s ease",
                        }} 
                      />
                    </StyledButton>
                  </CardActions>
                </ServiceCard>
              </Link>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", marginTop: "80px" }}>
          <Link to="/service-landing-page" style={{ textDecoration: "none" }}>
            <StyledButton 
              serviceColor="#6A1B9A"
              sx={{
                fontSize: "16px",
                padding: "16px 32px",
                background: "linear-gradient(135deg, #6A1B9A 0%, #9C4DCC 100%)",
                color: "white",
                border: "none",
                
                "&:hover": {
                  background: "linear-gradient(135deg, #5A1589 0%, #8C3DBC 100%)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 40px #6A1B9A40",
                }
              }}
            >
              Explore All Services
              <ArrowForwardIcon sx={{ fontSize: "20px" }} />
            </StyledButton>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default OurCore;