import React from "react";
import { Box, Container, Grid, Typography, Button, TextField, Divider } from "@mui/material";
import { styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import img1 from "./assets/newlogo.svg";

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
  return (
    <Box sx={{ backgroundColor: "#3E2162", color: "#fff", padding: "40px 0" }}>
      <Container>
        <Box sx={{ textAlign: "flex-start", marginBottom: "40px" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "5px" }}>
                Subscribe to our Newsletter
              </Typography>
              <Typography>
                Follow our Newsletter to stay updated
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
                <CustomTextField
                  variant="outlined"
                  placeholder="Enter your email address"
                />
                <CustomButton>Sign Up</CustomButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: "flex-start" }}>
              <img src={img1} alt="Prevail Agency Logo" style={{ marginBottom: "20px" }} />
              <Typography>
                Address: Glencullen House, Kylemore Rd, Dublin 10, D10 K729
              </Typography>
              <Typography>Email: info@prevail.com</Typography>
              <Typography>Call Us: +2347-023-994-190</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
              Explore Prevail
            </Typography>
            <Typography>Digital space</Typography>
            <Typography>Customer journey</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
              Services
            </Typography>
            <Typography>Brand Identity</Typography>
            <Typography>Custom Website & Management</Typography>
            <Typography>Website Development & Management</Typography>
            <Typography>Search Engine Marketing (SEM)</Typography>
            <Typography>Marketing Price Displacement (MPD)</Typography>
            <Typography>Digital Accelerator Bundle</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
              Our company
            </Typography>
            <Typography>About Us</Typography>
            <Typography>FAQ</Typography>
            <Typography>Contact Us</Typography>
            <Typography>Privacy Policy</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ backgroundColor: "#fff", marginTop: "40px" }} />
        <Grid container spacing={4} sx={{ marginTop: "20px" }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
              <Typography>©2023-2024 Prevail Agency. All rights reserved</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
              <FacebookIcon sx={{ margin: "0 10px", cursor: "pointer" }} />
              <InstagramIcon sx={{ margin: "0 10px", cursor: "pointer" }} />
              <TwitterIcon sx={{ margin: "0 10px", cursor: "pointer" }} />
              <LinkedInIcon sx={{ margin: "0 10px", cursor: "pointer" }} />
              <YouTubeIcon sx={{ margin: "0 10px", cursor: "pointer" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterNew;
