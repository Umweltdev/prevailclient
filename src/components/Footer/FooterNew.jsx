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
              Address: Glencullen House, Kylemore Rd, Dublin 10, D10 K729
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
              Email: info@prevail.com
            </Typography>
            <Typography
              sx={{
                width: "269px",
                color: "#C1B2D5",
                fontSize: "16px",
                fontWeight: " 400",
              }}
            >
              Call Us: +2347-023-994-190
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
          <Typography
            sx={{
              color: "#C1B2D5",
              fontSize: "16px",
              fontWeight: " 400",
              mb: "5px",
            }}
          >
            Digital space
          </Typography>
          <Typography
            sx={{
              color: "#C1B2D5",
              fontSize: "16px",
              fontWeight: " 400",
            }}
          >
            Customer journey
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            Services
          </Typography>
          <Typography
            sx={{
              color: "#C1B2D5",
              fontSize: "16px",
              fontWeight: " 400",
              mb: "5px",
            }}
          >
            Brand Identity
          </Typography>
          <Typography
            sx={{
              color: "#C1B2D5",
              fontSize: "16px",
              fontWeight: " 400",
              mb: "5px",
            }}
          >
            Custom Website & Management
          </Typography>
          <Typography
            sx={{
              color: "#C1B2D5",
              fontSize: "16px",
              fontWeight: " 400",
              mb: "5px",
            }}
          >
            Website Development & Management
          </Typography>
          <Typography
            sx={{
              color: "#C1B2D5",
              fontSize: "16px",
              fontWeight: " 400",
              mb: "5px",
            }}
          >
            Search Engine Marketing (SEM)
          </Typography>
          <Typography
            sx={{
              color: "#C1B2D5",
              fontSize: "16px",
              fontWeight: " 400",
              mb: "5px",
            }}
          >
            Marketing Price Displacement (MPD)
          </Typography>
          <Typography
            sx={{
              color: "#C1B2D5",
              fontSize: "16px",
              fontWeight: " 400",
              mb: "5px",
            }}
          >
            Digital Accelerator Bundle
          </Typography>
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
            to={"/About"}
          >
            <Typography>About Us</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#C1B2D5" }}
            to={"/About/#faqs"}
          >
            <Typography>FAQ</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#C1B2D5" }}
            to={"/Contact"}
          >
            <Typography>Contact Us</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#C1B2D5" }}
            to={"/Services/privacypolicy"}
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
