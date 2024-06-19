import { Paper, Typography } from "@mui/material";
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
        height: "870px",
        display: "flex",
        flexDirection: "column",
        gap: "36px",
        justifyContent: "center",
        alignItems: "center",
        padding: "35px 0",
      }}
    >
      <Typography
        onClick={() => scrollToSection("information-we-collect")}
        sx={{
          color: "#1D0D40",
          fontSize: "24px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Information We Collect
      </Typography>
      <Typography
        onClick={() => scrollToSection("use-of-information")}
        sx={{
          color: "#1D0D40",
          fontSize: "24px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Use of Information
      </Typography>
      <Typography
        onClick={() => scrollToSection("client-expectations")}
        sx={{
          color: "#1D0D40",
          fontSize: "24px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Client Expectations
      </Typography>
      <Typography
        onClick={() => scrollToSection("revisions-and-substantive-changes")}
        sx={{
          color: "#1D0D40",
          fontSize: "24px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Revisions and Substantive Changes
      </Typography>
      <Typography
        onClick={() => scrollToSection("cancellation-policy")}
        sx={{
          color: "#1D0D40",
          fontSize: "24px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Cancellation Policy
      </Typography>
      <Typography
        onClick={() => scrollToSection("confidentiality")}
        sx={{
          color: "#1D0D40",
          fontSize: "24px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Confidentiality
      </Typography>
      <Typography
        onClick={() => scrollToSection("copyright-ownership")}
        sx={{
          color: "#1D0D40",
          fontSize: "24px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Copyright Ownership
      </Typography>
      <Typography
        onClick={() => scrollToSection("sharing-of-information")}
        sx={{
          color: "#1D0D40",
          fontSize: "24px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Sharing of Information
      </Typography>
      <Typography
        onClick={() => scrollToSection("data-security")}
        sx={{
          color: "#1D0D40",
          fontSize: "24px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Data Security
      </Typography>
      <Typography
        onClick={() => scrollToSection("acceptance-of-terms")}
        sx={{
          color: "#1D0D40",
          fontSize: "24px",
          fontWeight: "500",
          width: "289px",
          cursor: "pointer",
        }}
      >
        Acceptance of Terms
      </Typography>
      <Typography
        onClick={() => scrollToSection("contact-us")}
        sx={{
          color: "#1D0D40",
          fontSize: "24px",
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
