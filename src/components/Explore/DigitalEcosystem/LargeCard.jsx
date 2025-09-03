import { Box, Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import React from 'react'

const LargeCard = ({text, header, icon}) => {
  return (
    <Card
     sx={{
        height: "530px",
        borderRadius: "20px",
        padding: "20px",
        width: "638px",
        background: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(10px)", 
        border: "1px solid rgba(255, 255, 255, 0.2)", 
        boxShadow: "none", 
        filter: `
          drop-shadow(0 0 8px rgba(173, 216, 230, 0.3)) // Light blue touch
          drop-shadow(0 0 8px rgba(200, 200, 200, 0.3)) // Faint gray for glassy effect
        `,
        transition: "all 0.3s ease", 
        "&:hover": {
          transform: "translateY(-5px)", 
          filter: `
            drop-shadow(0 0 12px rgba(173, 216, 230, 0.4)) // Enhanced light blue
            drop-shadow(0 0 12px rgba(200, 200, 200, 0.4)) // Enhanced gray
          `,
        },
        "@media (max-width: 600px)": {
          width: "90vw",
          padding: "10px",
          height: "unset",
        },
      }}
    >
      <CardContent>
        <Typography
           sx={{
            fontSize: "23px",
            fontWeight: "500",
            mb: "13px",
            color: "#000",
            "@media (max-width: 600px)": {
              width: "unset",
              textAlign: "center",
            },
          }}
          gutterBottom
        >
          {header}
        </Typography>
        <Typography
           sx={{
            fontSize: "16px",
            width: "582.049px",
            color: "#505660",
            fontWeight: "400",
            "@media (max-width: 600px)": {
              width: "unset",
              textAlign: "center",
            },
          }}
        >
          {text}
        </Typography>
      </CardContent>
      <Box
sx={{
          background: "rgba(255, 255, 255, 0.12)", // Adjusted opacity for inner box
          backdropFilter: "blur(5px)", // Subtle blur for inner box
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0px",
          borderRadius: "10px",
          width: "100%",
          height: "272px",
          border: "1px solid rgba(255, 255, 255, 0.3)", // Subtle border
        }}
      >
        <Box
                   sx={{
            width: "60%",
            height: "80%",
            background: "rgba(255, 255, 255, 0.18)", // Adjusted opacity for inner glass effect
            backdropFilter: "blur(5px)",
            borderRadius: "11px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <CardMedia
            component={"img"}
            image={icon}
            sx={{ width: "185px", margin: "auto" }}
          />
        </Box>
      </Box>
    </Card>
  );
}

export default LargeCard
