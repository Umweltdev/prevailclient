import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { serviceCard } from "../Services/assets/ServicesData";
import "./assets/blog.css";
// import { Email, Facebook, Instagram, Twitter } from "@mui/icons-material";
import Footer from "../Footer/Footer";
import DrawerAppBar from "../Navbar/Appbar";
import { Box, Typography } from "@mui/material";

const ServiceDetails = () => {
  // Access the parameters from the URL
  const { index } = useParams();

  // Assuming `blogBlurbs` is available in the same scope
  const service = serviceCard[parseInt(index, 8)];

  if (!service) {
    // Handle the case when the service with the specified index is not found
    return <div>service not found</div>;
  }

  return (
    <div style={{ paddingTop: "10vh" }}>
      <DrawerAppBar />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h4">{service.header}</Typography>
        <img src={service.img} alt="" />
      </Box>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
