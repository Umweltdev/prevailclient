import React from "react";
import { Box, Typography, Paper, Container, Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarIcon from "@mui/icons-material/Star";

const useStyles = makeStyles((theme) => ({
  gradientBackground: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)",
    },
  },
  floatingElements: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    pointerEvents: "none",
    "& .floating-icon": {
      position: "absolute",
      color: "rgba(255,255,255,0.1)",
      animation: "$float 6s ease-in-out infinite",
      "&:nth-child(1)": {
        top: "10%",
        left: "10%",
        animationDelay: "0s",
      },
      "&:nth-child(2)": {
        top: "20%",
        right: "15%",
        animationDelay: "2s",
      },
      "&:nth-child(3)": {
        bottom: "15%",
        left: "20%",
        animationDelay: "4s",
      },
    },
  },
  "@keyframes float": {
    "0%, 100%": {
      transform: "translateY(0px) rotate(0deg)",
    },
    "50%": {
      transform: "translateY(-20px) rotate(180deg)",
    },
  },
  mainCard: {
    position: "relative",
    background: "linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)",
    borderRadius: "24px !important",
    padding: "48px 40px !important",
    boxShadow:
      "0 20px 60px rgba(0,0,0,0.1), 0 8px 20px rgba(0,0,0,0.06) !important",
    border: "1px solid rgba(255,255,255,0.2)",
    backdropFilter: "blur(10px)",
    transform: "translateY(0)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow:
        "0 32px 80px rgba(0,0,0,0.15), 0 16px 32px rgba(0,0,0,0.1) !important",
    },
    [theme.breakpoints.down("md")]: {
      padding: "32px 24px !important",
      borderRadius: "20px !important",
    },
  },
  chipContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "24px",
  },
  brandChip: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#ffffff",
    fontWeight: "600",
    fontSize: "14px",
    padding: "8px 16px",
    borderRadius: "20px",
    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
  },
  mainText: {
    background: "linear-gradient(135deg, #2D1B69 0%, #11998e 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "700 !important",
    lineHeight: "1.4 !important",
    marginBottom: "24px !important",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px !important",
    },
  },
  highlightText: {
    position: "relative",
    display: "inline-block",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: "2px",
      width: "100%",
      height: "8px",
      background:
        "linear-gradient(90deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)",
      borderRadius: "4px",
      zIndex: -1,
    },
  },
  ctaButton: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#ffffff",
    padding: "16px 32px",
    borderRadius: "50px",
    fontWeight: "600",
    fontSize: "16px",
    textTransform: "none",
    boxShadow: "0 8px 24px rgba(102, 126, 234, 0.4)",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 12px 32px rgba(102, 126, 234, 0.5)",
    },
  },
  decorativeElements: {
    position: "absolute",
    top: "20px",
    right: "20px",
    display: "flex",
    gap: "8px",
    "& .dot": {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      opacity: 0.6,
    },
  },
}));

const Last = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.gradientBackground}
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        py: { xs: 8, md: 12 },
      }}
    >
      <div className={classes.floatingElements}>
        <TrendingUpIcon className="floating-icon" sx={{ fontSize: 60 }} />
        <StarIcon className="floating-icon" sx={{ fontSize: 50 }} />
        <TrendingUpIcon className="floating-icon" sx={{ fontSize: 40 }} />
      </div>

      <Container maxWidth="lg">
        <Paper className={classes.mainCard}>
          <div className={classes.decorativeElements}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>

          <div className={classes.chipContainer}>
            <Chip
              label="Transform Your Business"
              className={classes.brandChip}
              icon={<StarIcon sx={{ color: "#ffffff !important" }} />}
            />
          </div>

          <Typography
            variant="h3"
            className={classes.mainText}
            sx={{
              fontSize: { xs: "24px", sm: "32px", md: "38px" },
              textAlign: "center",
              maxWidth: "900px",
              margin: "0 auto 32px auto",
            }}
          >
            At Prevail, we are committed to guiding you through each stage of
            the customer journey with strategic expertise and technological
            prowess. Let us help you transform potential interest into lasting
            customer loyalty.
          </Typography>

          <Box sx={{ textAlign: "center" }}>
            <button className={classes.ctaButton}>
              <TrendingUpIcon sx={{ fontSize: 20 }} />
              Start Your Journey Today
            </button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Last;
