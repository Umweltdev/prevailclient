import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import payment from "./assets/payment.png";
import conn from "./assets/conn.png";
import "./assets/landing.css";
import {
  AdsClick,
  Devices,
  Label,
  QueryStats,
  Schedule,
} from "@mui/icons-material";
import "./assets/landing.css";
import { makeStyles } from "@mui/styles";
import "../../main.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { images } from "./assets/LandingData";

const useStyles = makeStyles({
  imageProduct: {
    width: "1.7vw",
    "@media (max-width: 600px)": { width: "5vw" },
  },

  mainImage: {
    width: "65vw",
    height: "28vw",
    objectFit: "cover",
    borderRadius: "16px",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;",
    animation: "$fadeInOut 0.5s ease-in-out forwards",

    "@media (max-width: 600px)": {
      width: "95vw",
      height: "50vh",
      borderRadius: "16px",
    },
  },

  imgGrid: {
    width: "50vw",
    position: "relative",
    marginRight: "15vw",
    transform: "translateX(0%)",
    animation: "$fadeInOut 0.5s ease-in-out forwards",
    "@media (max-width: 600px)": {
      width: "100%",
      marginRight: "unset",
      margin: "0 auto",
    },
  },
  overlay: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "left",
    justifyContent: "center",
    padding: "2vw",
    borderRadius: "16px",
    flexDirection: "column",
    animation: "$fadeInOut 0.5s ease-in-out forwards",
    opacity: 0,
  },

  "@keyframes fadeInOut": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
});

function YourTools() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isOverlayVisible, setIsOverlayVisible] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const classes = useStyles();

  const handleStepChange = (step) => {
    setActiveStep(step); // Update the active step immediately
    setIsOverlayVisible(false); // Start the fade-out animation
    setTimeout(() => {
      setIsOverlayVisible(true); // After a short delay, start the fade-in animation
    }, 100); // Adjust the delay as needed for proper timing
  };

  return (
    <Grid
      sx={{
        padding: "10vh 0 0 0",
        width: "90vw",
        margin: "5vh auto",
        fontFamily: ["Saraburn", "sans-serif"].join(","),
        "@media (max-width: 600px)": { width: "95vw" },
      }}
      justifyContent="center"
    >
      <Typography
        sx={{
          fontSize: "2.8vw",
          mb: "2vh",
          letterSpacing: "1px",
          color: "#484949",
          fontWeight: "900",
          "@media (max-width: 600px)": { fontSize: "7vw", textAlign: "center" },
        }}
      >
        Our Core Values
      </Typography>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2vw",
          "@media (max-width: 600px)": { flexDirection: "column" },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "2vh",
            "@media (max-width: 600px)": { textAlign: "center", gap: "1vh" },
          }}
        >
          {images.map((step, index) => (
            <Grid
              onClick={() => handleStepChange(index)}
              key={index}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <Grid display="flex" alignItems="center">
                <Typography
                  sx={{
                    color: "#333",
                    fontSize: "1.3vw",
                    fontWeight: "900",
                    marginRight: "0.5vw",
                    "@media (max-width: 600px)": { fontSize: "5vw" },
                  }}
                >
                  {step.smallIcon}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.3vw",
                    color: "#333",
                    "@media (max-width: 600px)": { fontSize: "5vw" },
                  }}
                >
                  {step.title}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>

        <Grid className={classes.imgGrid}>
          <img
            src={images[activeStep].imgPath}
            alt={images[activeStep].label}
            className={classes.mainImage}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <Grid
            className={`${classes.overlay} ${
              isOverlayVisible ? "visible" : ""
            }`}
            sx={{
              position: "absolute",
              bottom: isHovered ? "0" : "-50px",
              top: "0",
              left: "0",
              width: "65vw",
              height: "28vw",
              background: "rgba(0,0,0,0.2)",
              display: "flex",
              alignItems: "left",
              justifyContent: "center",
              padding: "2vw",
              borderRadius: "16px",
              flexDirection: "column",
              animation: "$fadeInOut 0.5s ease-in-out forwards",
              "@media (max-width: 600px)": {
                width: "95vw",
                height: "50vh",
              },
            }}
          >
            <Typography
              variant="h4"
              color="white"
              sx={{
                fontWeight: "bold",
                textAlign: "left",
                mb: "5vh",
                "@media (max-width: 600px)": {
                  mb: "3vh",
                  width: "90vw",
                  fontSize: "7vw",
                },
              }}
            >
              {images[activeStep].title}{" "}
            </Typography>
            <Typography
              variant="h6"
              color="white"
              sx={{
                textAlign: "left",
                width: "50vw",
                fontWeight: "900",
                "@media (max-width: 600px)": {
                  width: "90vw",
                  fontSize: "4.5vw",
                },
              }}
            >
              {images[activeStep].subTitle}{" "}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default YourTools;
