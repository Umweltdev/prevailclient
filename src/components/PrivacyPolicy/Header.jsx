import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import InformationCard from "./InformationCard";

const Header = () => {
  return (
    <Grid
      sx={{
        pt: "176px",
        // background: "linear-gradient(135deg, #DDD4EF, #F9FAFC, white)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          textAlign: "center",
          width: "817px",
          margin: "0 auto",
          "@media (max-width: 767px)": {
            width: "90vw",
          },
        }}
      >
        <Typography
          sx={{ color: "#6E3EF4", fontSize: "24px", fontWeight: "400;" }}
        >
          Privacy Policy
        </Typography>
        <Typography
          sx={{ color: "#1D0D40", fontSize: "38px", fontWeight: 500 }}
        >
          Prevail’s Privacy Policy 
        </Typography>
        <Typography
          sx={{
            fontSize: "18px;",
            fontWeight: "400",
            color: "505660",
          }}
        >
          Welcome to Prevail. We respect your privacy and are committed to
          protecting your personal information. This Privacy Policy explains how
          we collect, use, and share information about you when you use our
          services, interact with us, or visit our websites. 
        </Typography>
      </Box>
    </Grid>
  );
};

export default Header;
