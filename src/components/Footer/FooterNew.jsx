import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Divider,
  Fab,
} from "@mui/material";
import { styled } from "@mui/system";
import img1 from "./assets/newlogo.svg";
import Subscribe from "./Subscribe";
import {
  Facebook,
  Instagram,
  KeyboardArrowUp,
  LinkedIn,
  X,
  YouTube,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import ChatBotLauncher from "./ChatbotLauncher";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#6A1B9A",
  color: "#fff",
  borderRadius: "20px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#5a0f8a",
  },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "#3E2162",
  borderRadius: "20px",
  marginRight: "10px",
  width: "350px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    "& input::placeholder": {
      color: "#fff", // Set placeholder text color to white
    },
  },
  "& .MuiInputBase-input": {
    color: "#fff", // Set input text color to white
  },
}));

const FooterNew = () => {
  const scrollToTop = () => {
    const duration = 2000;
    const start = window.pageYOffset;
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime();

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animateScroll = () => {
      const currentTime =
        "now" in window.performance ? performance.now() : new Date().getTime();
      const elapsed = currentTime - startTime;

      window.scrollTo(0, easeInOutQuad(elapsed, start, -start, duration));

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();
  };

  return (
    <Box
      sx={{
        backgroundColor: "#3E2162",
        color: "#fff",
        padding: "10px 0",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      {/* =============================== Chat Box ================= */}

      <Box
        sx={{ textAlign: "flex-start", marginBottom: "40px", margin: "auto" }}
        id={"email_subscription"}
      >
        <Subscribe />
      </Box>
      <Grid
        sx={{
          margin: "auto",
          display: "flex",
          gap: "7vw",
          "@media (max-width: 600px)": {
            flexWrap: "wrap",
            ml: "10vw",
          },
        }}
      >
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: "flex-start", gap: "5px" }}>
            <img
              src={img1}
              alt="Prevail Agency Logo"
              style={{ marginBottom: "20px" }}
            />
            <Typography
              sx={{
                width: "269px",
                color: "#C1B2D5",
                fontSize: "16px",
                fontWeight: " 400",
                mb: "5px",
              }}
            >
              Company Registration: 737779
            </Typography>
            <Typography
              sx={{
                width: "269px",
                color: "#C1B2D5",
                fontSize: "16px",
                fontWeight: " 400",
                mb: "5px",
              }}
            >
              Email: info@prevailagency.ie
            </Typography>
            <Typography
              sx={{
                width: "269px",
                color: "#C1B2D5",
                fontSize: "16px",
                fontWeight: " 400",
              }}
            >
              VAT Number: IE9484135G
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            Explore Prevail
          </Typography>
          <Link
            style={{ textDecoration: "none", color: "#C1B2D5" }}
            to={"/explore/digital-ecosystem"}
          >
            <Typography>Digital Ecosystem</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#C1B2D5" }}
            to={"/explore/customer-journey"}
          >
            <Typography>Customer Journey</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            Services
          </Typography>
          <Link
            style={{ textDecoration: "none", color: "#C1B2D5" }}
            to={"/service/service-landing-page"}
          >
            <Typography>Services</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#C1B2D5" }}
            to={"/service/brand-identity-package"}
          >
            <Typography>Brand Identity</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#C1B2D5" }}
            to={"/service/custom-website-development"}
          >
            <Typography>Custom Website Development</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#C1B2D5" }}
            to={"/service/website-development"}
          >
            <Typography>Website Development</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#C1B2D5" }}
            to={"/service/search-engine-marketing"}
          >
            <Typography>Search Engine Marketing (SEM)</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#C1B2D5" }}
            to={"/service/marketing-pricing-displacement"}
          >
            <Typography>Marketing Price Displacement (MPD)</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#C1B2D5" }}
            to={"/service/digital-accelerator-bundle"}
          >
            <Typography>Digital Accelerator Bundle</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            Our company
          </Typography>
          <Link
            style={{ textDecoration: "none", color: "#C1B2D5" }}
            to={"/about-us"}
          >
            <Typography>About Us</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#C1B2D5" }}
            to={"/about-us/#faq"}
          >
            <Typography>FAQ</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#C1B2D5" }}
            to={"/contact-us"}
          >
            <Typography>Contact Us</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#C1B2D5" }}
            to={"/privacypolicy"}
          >
            <Typography>Privacy Policy</Typography>
          </Link>
        </Grid>
      </Grid>
      {/* =================CHATBOT========================= */}

      <Grid
        sx={{
          position: "relative",
          left: "85vw",
          bottom: "1vh",

          "@media (max-width: 767px)": {
            left: "80vw",
          },
        }}
      >
        <ChatBotLauncher />
        <Fab
          sx={{
            background: "#6E3EF4",
            color: "#fff",
            "&:hover": { background: "#6E3EF4", color: "#fff" },
          }}
          onClick={scrollToTop}
        >
          <KeyboardArrowUp />
        </Fab>
      </Grid>
      <Grid
        sx={{
          backgroundColor: "#3E2162",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 10vw",
          color: "#C1B2D5",
          borderTop: "1px solid #C1B2D5", // Set the top border to white
          mt: "7vh",
          "@media (max-width: 767px)": {
            padding: "1rem 0",
            flexDirection: "column",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "13px",
            position: "bottom",
            color: "#C1B2D5",
            "@media (max-width: 767px)": {
              mb: "2vh",
              textAlign: "center",
              fontSize: "11px",
            },
          }}
        >
          ©2023-2024 Prevailagency. All rights reserved
        </Typography>
        <Grid
          sx={{
            fontSize: "13px",
            position: "bottom",
            display: "flex",
            color: "#C1B2D5",
            gap: "30.6px",
            "@media (max-width: 767px)": {
              fontSize: "2.5vw",
              position: "bottom",
            },
          }}
        >
          <Facebook />
          <Instagram />
          <X />
          <LinkedIn />
          <YouTube />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterNew;
