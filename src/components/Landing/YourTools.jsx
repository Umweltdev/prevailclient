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

const images = [
  {
    icon: (
      <Label
        sx={{
          fontSize: "5vw",
          "@media (max-width: 600px)": { fontSize: "10vw" },
        }}
      />
    ),
    smallIcon: (
      <Label
        sx={{
          fontSize: "2vw",
          color: "#884ed9",
          marginTop: "0.5vh",
          "@media (max-width: 600px)": {
            fontSize: "10vw",
          },
        }}
      />
    ),
    link: "brand",
    title: "Branding",
    subTitle: `Our “Brand Identity Package” service is the foundation for creating a lasting impression. We collaborate closely with you to define their unique brand identity, crafting eye-catching logos and compelling marketing collateral.`,
    imgPath:
      "https://img.freepik.com/free-photo/individuality-concept-umbrellas_23-2149125649.jpg?t=st=1711270757~exp=1711274357~hmac=51a2ec8f73178aa7293ace5ccf90ecc194e71f21c0ca878b7a67cd8e49a09f36&w=826",
  },
  {
    icon: (
      <Devices
        sx={{
          fontSize: "5vw",
          "@media (max-width: 600px)": { fontSize: "10vw" },
        }}
      />
    ),
    smallIcon: (
      <Devices
        sx={{
          fontSize: "2vw",
          color: "#884ed9",
          marginTop: "0.5vh",
          "@media (max-width: 600px)": {
            fontSize: "10vw",
          },
        }}
      />
    ),
    link: "website",
    title: "Website Development",
    subTitle: `Prevail's groundbreaking "Website Production & Management" service, is a strategic initiative designed to empower SMEs and local businesses with a robust online presence that not only captivates but also seamlessly engages with their target audience.`,
    imgPath:
      "https://img.freepik.com/premium-photo/floating-devices-mockup-with-responsive-website-design-3d-rendering_72104-3791.jpg?w=826",
  },
  {
    icon: (
      <AdsClick
        sx={{
          fontSize: "5vw",
          "@media (max-width: 600px)": { fontSize: "10vw" },
        }}
      />
    ),
    smallIcon: (
      <AdsClick
        sx={{
          fontSize: "2vw",
          color: "#884ed9",
          marginTop: "0.5vh",
          "@media (max-width: 600px)": {
            fontSize: "10vw",
          },
        }}
      />
    ),
    link: "sem",
    title: "Search Engine Marketing",
    subTitle: `Our "Search Engine Marketing (SEM)” service is the gateway to getting businesses in front of their ideal target audience. Our SEM service goes beyond the basics, providing a comprehensive approach around targeted advertising, SEO, performance metrics and continuous adjustment & reports."`,
    imgPath:
      "https://img.freepik.com/free-photo/search-engine-marketing-collage_23-2150808831.jpg?t=st=1711271059~exp=1711274659~hmac=7b190138e2382f531300f2816f94b9baa977607b49514bd14b4d2f81eee48315&w=740",
  },
  {
    icon: (
      <QueryStats
        sx={{
          fontSize: "5vw",
          "@media (max-width: 600px)": { fontSize: "10vw" },
        }}
      />
    ),
    smallIcon: (
      <QueryStats
        sx={{
          fontSize: "2vw",
          color: "#884ed9",
          marginTop: "0.5vh",
          "@media (max-width: 600px)": {
            fontSize: "10vw",
          },
        }}
      />
    ),
    link: "mpd",
    title: "Marketing Price Displacement API",
    subTitle:
      "The “Marketing Cost Displacement (MCD)” API is not just a tool; it is a strategic asset. By seamlessly integrating a blend of elastic pricing and yield management. SMEs and local businesses can gain the power of budget allocation in their marketing spend.",
    imgPath:
      "https://img.freepik.com/premium-photo/world-cost-rising-global-crisis-inflation-concept-shopping-cart-with-percentage-cubes-stacked-coins-red-growth-graph-global-crisis-inflation-rising-prices_256259-3421.jpg?w=740",
  },
];

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
    transition: "transform 0.5s ease-in-out",
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
    transition: "transform 0.5s ease-in-out",
    "@media (max-width: 600px)": {
      width: "100%",
      marginRight: "unset",
      margin: "0 auto",
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
    setActiveStep(step);
    // setIsOverlayVisible(true);
  };

  return (
    <Grid
      sx={{
        padding: "10vh 0 0 0",
        width: "90vw",
        margin: "5vh auto",
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
        Resources
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
            sx={{
              position: "absolute",
              bottom: isHovered ? "0" : "-50px",
              top: "0",
              left: "0",
              width: "65vw",
              height: "28vw",
              background: "rgba(0,0,0,0.7)",
              display: "flex",
              alignItems: "left",
              justifyContent: "center",
              padding: "2vw",
              borderRadius: "16px",
              flexDirection: "column",
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
