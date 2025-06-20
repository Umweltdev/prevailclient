import { Box, CardMedia, Fab, Typography } from "@mui/material";
import React from "react";

const ExternalLinks = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url("https://res.cloudinary.com/anthonyj5/image/upload/v1750178600/Screenshot_from_2025-06-17_17-39-35_vbagos.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: { xs: "unset", md: "100vh" },
        position: "relative", // Needed for absolute positioning of overlay
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Black with 50% opacity
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative", // This will place content above the overlay
          zIndex: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          color: "white", // White text for better contrast
          p: 4, // Add some padding
          height: "100%",
          alignItems: "center", // Center vertically
          justifyContent: "space-between", // Space between text and button
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            margin: "0px auto",
            flexDirection: { xs: "column", md: "row" },
            display: "flex",
            justifyContent: "center",
            alignItems: "top",
            gap: 2,
          }}
        >
          <Box sx={{ width: { xs: 80, md: 110 }, height: "auto" }}>
            <CardMedia
              component={"img"}
              image="/head-logo-1.png"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "70%" } }}>
            <Typography variant="h4" gutterBottom>
              Power Your Hotel with Purpose-Built Technology{" "}
            </Typography>
            <Typography variant="body1">
              Your hotel is more than a building - it’s an experience, a brand,
              and a business. The Prevail’s Hotel & BnB Platform gives you the
              tools to align your digital presence with your physical
              operations. No more missed bookings, outdated room descriptions,
              or generic listings. With a customisable website, integrated
              booking system, guest dashboards, and visual Key Performance
              Indicators (KPIs). Designed to reflect the hotel brand’s charm and
              manage day-to-day activities more efficiently. Prevail’s platform
              boosts direct bookings, streamlines operations, and builds
              stronger guest relationships. Whether you run a cosy BnB or a
              boutique hotel in the countryside, this platform connects your
              story, staff, and services under one intuitive system, so your
              business can grow the way it deserves to.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "30%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 4, md: "unset" },
          }}
        >
          <a
            href="https://crownstone.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Fab
              sx={{
                height: 500,
                width: 500,
                borderRadius: "50%",
              }}
              color="primary"
              variant="extended"
            >
              View
            </Fab>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default ExternalLinks;
