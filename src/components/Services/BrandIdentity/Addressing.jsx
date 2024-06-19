import { Box, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import imagebrand2 from "../assets/imagebrand2.png"

const Addressing = () => {
  return (
    <Box sx={{ display: "flex", width: "100vw" }}>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          gap: "20px",
          width: "468px",
        }}
      >
        <Typography
          sx={{
            width: "385px",
            color: "#1D0D40",
            fontSize: "28px",
            fontWeight: " 500",
          }}
        >
          Addressing Today’s Branding Challenges 
        </Typography>
        <Typography
          sx={{
            width: "468px",
            color: "#505660;",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "150%",
          }}
        >
          In the fast-paced and crowded marketplace of today, merely having a
          good product or service is not enough. SMEs and local businesses, in
          particular, face the daunting challenge of standing out. Without a
          strong brand identity, your business might get lost in the digital
          noise, overlooked by potential customers who are bombarded with
          choices. This lack of distinction can prevent you from achieving the
          recognition your brand deserves. 
        </Typography>
      </Grid>
      <CardMedia component={"img"} image={imagebrand2} sx={{ width: "47vw" }} />
    </Box>
  );
}

export default Addressing
