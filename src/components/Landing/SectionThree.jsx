import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import img1 from "./assets/Visual.png";
import img2 from "./assets/emojistar1.png";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#6A1B9A",
  color: "#fff",
  borderRadius: "20px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#5a0f8a",
  },
}));

const SectionThree = () => {
  return (
    <Box
      sx={{
        padding: "50px 0",
        backgroundColor: "#0A0C23",
        position: "relative",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          Join Happy Customers Who <br /> Already Trust With Us
        </Typography>
        <Typography
          sx={{ maxWidth: "600px", margin: "0 auto", marginBottom: "40px" }}
        >
          Connect the dots between Customer needs <br /> and your product delivery
          workflows
        </Typography>
        <CustomButton>Sign up</CustomButton>
      </Container>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <img src={img1} alt="Top Right Decorative Element" style={{ width: "200px" }} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <img src={img2} alt="Bottom Left Decorative Element" style={{ width: "200px" }} />
      </Box>
    </Box>
  );
};

export default SectionThree;
