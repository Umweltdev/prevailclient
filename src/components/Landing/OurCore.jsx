import React from "react";
import { Box, Container, Grid, Typography, Button, Card, CardContent, CardActions } from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import BrandingIcon from "@mui/icons-material/Brush";
import WebsiteIcon from "@mui/icons-material/Language";
import APIIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import ReusedButton from "../ReusedComponents/ReusedButton";

const services = [
  {
    title: "Search Engine Marketing",
    description:
      "We offer more than just exposure; our holistic approach includes targeted advertising, refined SEO practices, and ongoing optimization to ensure you capture and keep the attention of your ideal audience.",
    icon: <SearchIcon style={{ fontSize: 40, color: "#6A1B9A" }} />,
    link: "/Services/sem",
  },
  {
    title: "Branding Excellence",
    description:
      "Dive into Prevail's exclusive 'Brand Identity Package'. We do more than just logo creation and marketing materials; we embark on a creative partnership to forge your distinctive brand identity that not only stands out but resonates deeply with your audience.",
    icon: <BrandingIcon style={{ fontSize: 40, color: "#6A1B9A" }} />,
    link: "/Services/brand",
  },
  {
    title: "Website Mastery",
    description:
      "With our innovative 'Website Production' service, we craft captivating online platforms for SMEs and local enterprises. Our strategic approach ensures your website not only looks great but functions seamlessly, engaging your visitors and converting them into loyal customers.",
    icon: <WebsiteIcon style={{ fontSize: 40, color: "#6A1B9A" }} />,
    link: "/Services/website",
  },
  {
    title: "Marketing Price Displacement API",
    description:
      "Our 'MPD' API transforms how you allocate your marketing budget. This tool isn't just about spending; it's about investing smartly through dynamic pricing and yield management, giving you control over your financial strategies and boosting your marketing efficiency.",
    icon: <APIIcon style={{ fontSize: 40, color: "#6A1B9A" }} />,
    link: "/Services/mpd",
  },
];

const ServiceCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const OurCore = () => {
  return (
    <Box
      sx={{
        padding: "100px 0",
        backgroundImage: `linear-gradient(135deg, #FFFFFF 0%, #F3E5F5 50%, #FFFFFF 100%)`,
      }}
    >
      <Container>
        <Typography
          variant="h6"
          sx={{ color: "#6A1B9A", marginBottom: "20px", textAlign: "center" }}
        >
          Services
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}
        >
          The Ultimate products we serve
        </Typography>
        <Typography
          sx={{
            maxWidth: "600px",
            margin: "0 auto",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Prevail is a cutting-edge marketing agency specialising in redefining
          how businesses navigate the digital landscape.
        </Typography>
        <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
          <Link to={"/Services"}>
            <ReusedButton text={"Learn More"} />
          </Link>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <ServiceCard>
                <CardContent sx={{ textAlign: "left" }}>
                  {service.icon}
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: "10px" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography sx={{ marginTop: "10px", fontSize: "14px" }}>
                    {service.description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ justifyContent: "flex-start", paddingLeft: "16px" }}
                >
                  <Link to={service.link}>
                    <ReusedButton text={"Learn More"} />
                  </Link>
                </CardActions>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurCore;
