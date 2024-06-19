import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import imago from "./assets/img12.png";

const WhyItMatters = () => {
  return (
    <Grid
      container
      sx={{
        // width: "80vw",
        display: "flex",
        flexDirection: "row",
        margin: "100px auto 0 auto",
        justifyContent: "center",
        alignItems: "center",
        gap: "255px",
        "@media (max-width: 600px)": {
          width: "95vw",
          flexDirection: "column",
          margin: "13vh auto 0 auto",
          marginBottom: "1vh",
          gap: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        },
      }}
    >
      <Box>
        <Grid
          item
          sx={{
            maxWidth: "468px",
            flexGrow: 1,
            "@media (max-width: 600px)": {
              width: "100%",
            },
          }}
        >
          <Typography
            sx={{
              display: "flex",
              fontSize: "28px",
              fontWeight: "500",
              color: "#1D0D40",
              marginBottom: "20px",
              lineHeight: "110%",
              letterSpacing: "-0.28px",
              "@media (max-width: 600px)": {
                fontSize: "6vw",
                margin: "2vh 0",
              },
            }}
          >
            Why It Matters
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#505660",
              marginBottom: "3vh",
              "@media (max-width: 600px)": {
                fontSize: "4vw",
                textAlign: "justify",
                width: "100%",
              },
            }}
          >
            In an era where large enterprises often overshadow smaller players,
            Prevail enables local businesses and SMEs to not only compete but to
            redefine standards of excellence within their industries.
            <br /> <br /> We equip these businesses with the tools to harness
            the full potential of digital technology and strategic marketing,
            building a durable competitive edge. Together, we can ensure that
            your business doesn’t just survive; it prevails. 
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            maxWidth: "468px",
            flexGrow: 1,
            "@media (max-width: 600px)": {
              width: "100%",
            },
          }}
        >
          <Typography
            sx={{
              display: "flex",
              fontSize: "28px",
              fontWeight: "500",
              color: "#1D0D40",
              marginBottom: "20px",
              lineHeight: "110%",
              letterSpacing: "-0.28px",
              "@media (max-width: 600px)": {
                fontSize: "6vw",
                margin: "2vh 0",
              },
            }}
          >
            How We Do It
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#505660",
              marginBottom: "3vh",
              "@media (max-width: 600px)": {
                fontSize: "4vw",
                textAlign: "justify",
                width: "100%",
              },
            }}
          >
            Collaboration sits at the core of our operations. By fostering close
            partnerships with our clients, we delve deep into their unique
            challenges and opportunities. <br /> <br />
            Our team of seasoned experts leverages this imitate knowledge along
            with our prowess in digital strategy and consumer behaviour, to
            devise customised solutions that deliver tangible results.
          </Typography>
        </Grid>
      </Box>

      <img
        style={{
          maxWidth: "487px",
          maxHeight: "636px",
          width: "100%",
          height: "auto",
        }}
        src={imago}
        alt=""
      />
    </Grid>
  );
};

export default WhyItMatters;
