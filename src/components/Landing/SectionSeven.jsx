import React from "react";
import { Box, Container, Grid, Typography, Button, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import BrandingIcon from "@mui/icons-material/Brush";
import EfficiencyIcon from "@mui/icons-material/AccessTime";
import SynergyIcon from "@mui/icons-material/GroupWork";
import image from "./assets/rocket.png";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  //alignItems: "center",
  marginBottom: "20px",
}));

const SectionSeven = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", padding: "50px 0" }}>
      <Container>
        <Typography variant="h6" sx={{ color: "#6A1B9A", textAlign: "center", marginBottom: "20px" }}>
          Product
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}>
          Digital Accelerator bringing agility to your enterprise
        </Typography>
        <Typography sx={{ textAlign: "flex-start", maxWidth: "600px", margin: "0 auto", marginBottom: "40px" }}>
          Discover how our Digital Accelerator Bundle package serves as your strategic gateway to digital success. This exclusive, comprehensive solution is crafted to enhance your online visibility and impact through three key services: Website Production, Brand Identity, and Search Engine Optimisation (SEO).
        </Typography>
        <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
          <Button variant="contained" color="primary">
            Learn more
          </Button>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
          Why Opt for Our Digital Accelerator Bundle Package?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <StyledCard>
              <BrandingIcon sx={{ fontSize: 40, color: "#6A1B9A", marginBottom: "5px", textAlign: "flex-start", paddingLeft: "10px" }} />
              <CardContent sx={{ textAlign: "flex-start" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Unified Brand Presence
                </Typography>
                <Typography>
                  Achieve a seamless and powerful brand image. We synchronise the aesthetics of your website with your brand identity and SEO strategies, ensuring every component works together to maximise your online impact.
                </Typography>
              </CardContent>
            </StyledCard>
            <StyledCard>
              <EfficiencyIcon sx={{ fontSize: 40, color: "#6A1B9A", marginBottom: "5px", textAlign: "flex-start", paddingLeft: "10px" }} />
              <CardContent sx={{ textAlign: "flex-start" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Time & Resource Efficiency
                </Typography>
                <Typography>
                  Consolidate your digital strategy with our integrated approach. Combining website development, branding, and marketing into one efficient package frees up your time and resources, letting you concentrate on what’s essential—your business’s growth.
                </Typography>
              </CardContent>
            </StyledCard>
            <StyledCard>
              <SynergyIcon sx={{ fontSize: 40, color: "#6A1B9A", marginBottom: "5px", textAlign: "flex-start", paddingLeft: "10px" }} />
              <CardContent sx={{ textAlign: "flex-start" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Strategic Synergy
                </Typography>
                <Typography>
                  Harness the power of combined efforts. Our package melds website design, brand messaging, and targeted SEO into a unified strategy, enhancing the coherence and effectiveness of your digital presence. We deliver sustainable, impactful results that support your long-term success.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              component="img"
              src={image}
              alt="Rocket Image"
              sx={{ width: "85%", height: "auto", borderRadius: "5px" }}
            />
          </Grid>
        </Grid>
        <Box sx={{ backgroundColor: "#6A1B9A", color: "#fff", borderRadius: "10px", padding: "30px", marginTop: "40px" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "left" }}>
            Elevate Your Brand with Prevail
          </Typography>
          <Typography sx={{ marginTop: "10px", marginBottom: "10px", textAlign: "left", maxWidth: "50%" }}>
            Choose our Digital Accelerator Bundle Package and set the stage for a future-proof digital presence that is comprehensive, impactful, and cost-effective. Embrace the digital transformation designed to take your brand to new heights.
          </Typography>
          <Typography sx={{ fontStyle: "italic", textAlign: "right" }}>
            Prevail – Your Partner in Success
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionSeven;
