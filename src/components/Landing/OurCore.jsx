import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  CardContent,
  CardActions,
} from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import BrandingIcon from "@mui/icons-material/Brush";
import WebsiteIcon from "@mui/icons-material/Language";
import APIIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import ReusedButton from "../ReusedComponents/ReusedButton";
import { useInView } from "react-intersection-observer";
import styles from "./animation.module.css";

const services = [
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
    title: "Search Engine Marketing",
    description:
      "We offer more than just exposure; our holistic approach includes targeted advertising, refined SEO practices, and ongoing optimization to ensure you capture and keep the attention of your ideal audience.",
    icon: <SearchIcon style={{ fontSize: 40, color: "#6A1B9A" }} />,
    link: "/Services/sem",
  },
  {
    title: "Marketing Price Displacement API",
    description:
      "Our 'Marketing Price Displacement (MPD)' API transforms how you allocate your marketing budget. This tool isn’t just about spending; it’s about investing smartly through dynamic pricing and yield management, giving you control over your financial strategies and boosting your marketing efficiency.",
    icon: <APIIcon style={{ fontSize: 40, color: "#6A1B9A" }} />,
    link: "/Services/mpd",
  },
];

const ServiceCard = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  marginBottom: "20px",
}));

const OurCore = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      sx={{
        padding: "100px 0",
        backgroundImage: `linear-gradient(135deg, #FFFFFF 0%, #F3E5F5 50%, #FFFFFF 100%)`,
      }}
      ref={sectionRef} // Reference for the whole section
    >
      <Container>
        <div
          className={`${styles.headerFade} ${
            headerInView ? styles.headerVisible : ""
          }`}
          ref={headerRef}
        >
          <Typography
            variant="h6"
            sx={{ color: "#6A1B9A", marginBottom: "20px", textAlign: "center" }}
          >
            Services
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            The Ultimate Products We Serve
          </Typography>
          <Typography
            sx={{
              maxWidth: "600px",
              margin: "0 auto",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Prevail stands out by crafting tailored strategies and solutions
            that are data-driven and creatively inspired.
          </Typography>
          <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
            <Link to={"/Services"}>
              <ReusedButton text={"Learn More"} />
            </Link>
          </Box>
        </div>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={6}>
            <div
              className={`${styles.serviceCard} ${
                sectionInView ? styles.visible : ""
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <ServiceCard>
                <CardContent sx={{ textAlign: "left" }}>
                  {services[0].icon}
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: "10px" }}
                  >
                    {services[0].title}
                  </Typography>
                  <Typography sx={{ marginTop: "10px", fontSize: "14px" }}>
                    {services[0].description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ justifyContent: "flex-start", paddingLeft: "16px" }}
                >
                  <Link to={services[0].link}>
                    <ReusedButton text={"Learn More"} />
                  </Link>
                </CardActions>
              </ServiceCard>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div
              className={`${styles.serviceCard} ${
                sectionInView ? styles.visible : ""
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <ServiceCard>
                <CardContent sx={{ textAlign: "left" }}>
                  {services[1].icon}
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: "10px" }}
                  >
                    {services[1].title}
                  </Typography>
                  <Typography sx={{ marginTop: "10px", fontSize: "14px" }}>
                    {services[1].description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ justifyContent: "flex-start", paddingLeft: "16px" }}
                >
                  <Link to={services[1].link}>
                    <ReusedButton text={"Learn More"} />
                  </Link>
                </CardActions>
              </ServiceCard>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div
              className={`${styles.serviceCard} ${
                sectionInView ? styles.visible : ""
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <ServiceCard>
                <CardContent sx={{ textAlign: "left" }}>
                  {services[2].icon}
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: "10px" }}
                  >
                    {services[2].title}
                  </Typography>
                  <Typography sx={{ marginTop: "10px", fontSize: "14px" }}>
                    {services[2].description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ justifyContent: "flex-start", paddingLeft: "16px" }}
                >
                  <Link to={services[2].link}>
                    <ReusedButton text={"Learn More"} />
                  </Link>
                </CardActions>
              </ServiceCard>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div
              className={`${styles.serviceCard} ${
                sectionInView ? styles.visible : ""
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <ServiceCard>
                <CardContent sx={{ textAlign: "left" }}>
                  {services[3].icon}
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: "10px" }}
                  >
                    {services[3].title}
                  </Typography>
                  <Typography sx={{ marginTop: "10px", fontSize: "14px" }}>
                    {services[3].description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ justifyContent: "flex-start", paddingLeft: "16px" }}
                >
                  <Link to={services[3].link}>
                    <ReusedButton text={"Learn More"} />
                  </Link>
                </CardActions>
              </ServiceCard>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurCore;
