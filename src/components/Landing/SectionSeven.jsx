import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import imago from "./assets/rocket.png";
import CardNoBorder from "./assets/CardNoBorder";
import { DigitalAcelerator } from "./assets/LandingData";
import ReusedButton from "../ReusedComponents/ReusedButton";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <Box
      sx={{
        p: "100px 0 0 0",
        "@media (max-width: 600px)": {
          p: "40px 0 0 0",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          mb: "66px",
          "@media (max-width: 600px)": {
            width: "90vw",
          },
        }}
      >
        <Typography
          sx={{ color: "#6E3EF4", fontSize: "24px", fontWeight: "400" }}
        >
          Product
        </Typography>
        <Typography
          sx={{
            width: "684px",
            color: "#1D0D40",
            fontSize: "48px",
            fontWeight: "500",
            textAlign: "center",
            "@media (max-width: 600px)": {
              width: "90vw",
              fontSize: "32px",
            },
          }}
        >
          Digital Accelerator bringing agility to your enterprise
        </Typography>
        <Typography
          sx={{
            width: "629.297px",
            color: "#505660",
            fontSize: "16px",
            fontWeight: "400",
            textAlign: "center",
            "@media (max-width: 600px)": {
              width: "90vw",
              fontSize: "16px",
            },
          }}
        >
          Discover how our Digital Accelerator Bundle package serves as your
          strategic gateway to digital success. This exclusive, comprehensive
          solution is crafted to enhance your online visibility and impact
          through three key services: Website Production, Brand Identity, and
          Search Engine Optimisation (SEO).  
        </Typography>

        <Link to={"/services/digitalaccelerator"}>
          <ReusedButton text={"Learn More"} />
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "70px",
          background: "#F9FAFC",

          "@media (max-width: 600px)": {
            width: "90vw",
            margin: "auto",
            padding: "50px 0",
            flexDirection: "column",
          },
        }}
        id="faqs"
      >
        <Grid
          sx={{
            pl: "5vw",
            pt: "5vh",
            width: "50vw",
            "@media (max-width: 600px)": {
              pl: "unset",
              pt: "unset",
              width: "90vw",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "38px",
              color: "#1D0D40",
              fontWeight: "500",
              letterSpacing: "-0.38px",
              width: "553px",
              "@media (max-width: 600px)": {
                width: "90vw",
                fontSize: "24px",
              },
            }}
          >
            Why Opt for Our Digital Accelerator Bundle Package? 
          </Typography>
          <Box
            sx={{
              mt: "61px",
              display: "flex",
              flexDirection: "column",
              gap: "57px",
            }}
          >
            {DigitalAcelerator.map((data, i) => (
              <CardNoBorder
                header={data.header}
                text={data.text}
                icon={data.icon}
              />
            ))}
          </Box>
          {/* <AccordionUsage /> */}
        </Grid>
        <Grid>
          <CardMedia
            component={"img"}
            image={imago}
            sx={{
              width: "50vw",
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default FAQ;
