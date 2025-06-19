import { Box, Card, CardMedia, Fab, Typography } from "@mui/material";
import React from "react";

const CardExternal = ({ title, desc, image }) => {
  return (
    <Card
      sx={{
        display: "flex",
        // width: "100%",
        minHeight: 300,
        borderRadius: 3,
        width: {xs:"100%", md: "40%"},
        mt: 4,
        "@media (max-width: 600px)": {
          flexDirection: "column",
          minHeight: "auto",
        },
      }}
    >
      {/* Left Content (40%) */}
      <Box
        sx={{
          width: "50%", // Fixed 40% width
          bgcolor: "#B2B1FF",
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          "@media (max-width: 600px)": {
            width: "100%",
          },
        }}
      >
        <Box>
          <CardMedia
            component="img"
            image="/assets/crownstone.png"
            sx={{
              width: 200,
              height: "auto",
              maxWidth: "100%", // Ensure image doesn't overflow
            }}
          />
          <Typography variant="h6" mt={2}>
            {title}
          </Typography>
          <Typography mt={2} fontWeight={300} variant="subtitle1">
            {desc}{" "}
          </Typography>
        </Box>
      </Box>

      {/* Right Image with Overlay (60%) */}
      <Box
        sx={{
          width: "50%", // Fixed 60% width
          position: "relative",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: 300,
          "@media (max-width: 600px)": {
            width: "100%",
            minHeight: 300,
          },
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        />

        {/* FAB Button */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          <Fab size="large" color="primary">
            View
          </Fab>
        </Box>
      </Box>
    </Card>
  );
};

export default CardExternal;
