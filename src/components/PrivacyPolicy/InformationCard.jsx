import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const InformationCard = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Paper
      elevation={2}
      sx={{
        background: "#F5F0FF",
        borderRadius: "10px",
        width: "382px",
        height: "65vh",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        justifyContent: "center",
        alignItems: "left",
        padding: "35px 1vw",
        // position: "-webkit-sticky",
        top: "100px",
        position: "sticky",
        "@media (max-width: 767px)": {
          display: "none",
        },
      }}
    >
      <Typography
        onClick={() => scrollToSection("information-we-collect")}
        sx={{
          color: "#1D0D40",
          fontSize: "16px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Information We Collect
      </Typography>
      <Box
        sx={{
          border: "1px solid rgba(29, 13, 64, 0.2)",
          width: "30%",
          alignItems: "left",
        }}
      ></Box>
      <Typography
        onClick={() => scrollToSection("use-of-information")}
        sx={{
          color: "#1D0D40",
          fontSize: "16px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Use of Information
      </Typography>
      <Box
        sx={{
          border: "1px solid rgba(29, 13, 64, 0.2)",
          width: "30%",
          alignItems: "left",
        }}
      ></Box>
      <Typography
        onClick={() => scrollToSection("client-expectations")}
        sx={{
          color: "#1D0D40",
          fontSize: "16px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Client Expectations
      </Typography>
      <Box
        sx={{
          border: "1px solid rgba(29, 13, 64, 0.2)",
          width: "30%",
          alignItems: "left",
        }}
      ></Box>
      <Typography
        onClick={() => scrollToSection("revisions-and-substantive-changes")}
        sx={{
          color: "#1D0D40",
          fontSize: "16px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Revisions and Substantive Changes
      </Typography>
      <Box
        sx={{
          border: "1px solid rgba(29, 13, 64, 0.2)",
          width: "30%",
          alignItems: "left",
        }}
      ></Box>
      <Typography
        onClick={() => scrollToSection("cancellation-policy")}
        sx={{
          color: "#1D0D40",
          fontSize: "16px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Cancellation Policy
      </Typography>
      <Box
        sx={{
          border: "1px solid rgba(29, 13, 64, 0.2)",
          width: "30%",
          alignItems: "left",
        }}
      ></Box>
      <Typography
        onClick={() => scrollToSection("confidentiality")}
        sx={{
          color: "#1D0D40",
          fontSize: "16px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Confidentiality
      </Typography>
      <Box
        sx={{
          border: "1px solid rgba(29, 13, 64, 0.2)",
          width: "30%",
          alignItems: "left",
        }}
      ></Box>
      <Typography
        onClick={() => scrollToSection("copyright-ownership")}
        sx={{
          color: "#1D0D40",
          fontSize: "16px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Copyright Ownership
      </Typography>
      <Box
        sx={{
          border: "1px solid rgba(29, 13, 64, 0.2)",
          width: "30%",
          alignItems: "left",
        }}
      ></Box>
      <Typography
        onClick={() => scrollToSection("sharing-of-information")}
        sx={{
          color: "#1D0D40",
          fontSize: "16px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Sharing of Information
      </Typography>
      <Box
        sx={{
          border: "1px solid rgba(29, 13, 64, 0.2)",
          width: "30%",
          alignItems: "left",
        }}
      ></Box>
      <Typography
        onClick={() => scrollToSection("data-security")}
        sx={{
          color: "#1D0D40",
          fontSize: "16px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Data Security
      </Typography>
      <Box
        sx={{
          border: "1px solid rgba(29, 13, 64, 0.2)",
          width: "30%",
          alignItems: "left",
        }}
      ></Box>
      <Typography
        onClick={() => scrollToSection("acceptance-of-terms")}
        sx={{
          color: "#1D0D40",
          fontSize: "16px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Acceptance of Terms
      </Typography>
      <Box
        sx={{
          border: "1px solid rgba(29, 13, 64, 0.2)",
          width: "30%",
          alignItems: "left",
        }}
      ></Box>
      <Typography
        onClick={() => scrollToSection("contact-us")}
        sx={{
          color: "#1D0D40",
          fontSize: "16px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Contact Us
      </Typography>
    </Paper>
  );
};

export default InformationCard;
