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
    "@media (max-width: 600px)": {
      width: "95vw",
      height: "50vh",
      borderRadius: "16px",
    },
  },

  maindiv: {},
});

function YourTools() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isOverlayVisible, setIsOverlayVisible] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const classes = useStyles();

  const handleStepChange = (step) => {
    setActiveStep(step);
    setIsOverlayVisible(true);
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
          // height: "10vh",
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
        {/* LEFT */}
        <Grid
          sx={{
            // width: "15vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "5vh",
            "@media (max-width: 600px)": { textAlign: "center", gap: "1vh" },
          }}
        >
          <Link style={{ textDecoration: "none" }} to={"/Services/brand"}>
            <Grid>
              <Typography
                sx={{
                  color: "#333",
                  fontSize: "1.3vw",
                  fontWeight: "900",
                  "@media (max-width: 600px)": {
                    fontSize: "5vw",
                  },
                }}
              >
                Branding
              </Typography>
            </Grid>
          </Link>

          <Link style={{ textDecoration: "none" }} to={"/Services/website"}>
            <Grid>
              <Typography
                sx={{
                  color: "#333",
                  fontSize: "1.3vw",
                  fontWeight: "900",
                  "@media (max-width: 600px)": {
                    fontSize: "5vw",
                  },
                }}
              >
                Website Development
              </Typography>
            </Grid>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/Services/sem"}>
            <Grid>
              <Typography
                sx={{
                  color: "#333",
                  fontSize: "1.3vw",
                  fontWeight: "900",
                  "@media (max-width: 600px)": {
                    fontSize: "5vw",
                  },
                }}
              >
                Search Engine Marketing
              </Typography>
            </Grid>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/Services/mpd"}>
            <Grid>
              <Typography
                sx={{
                  color: "#333",
                  fontSize: "1.3vw",
                  fontWeight: "900",
                  "@media (max-width: 600px)": {
                    fontSize: "5vw",
                  },
                }}
              >
                Marketing Price Displacement API
              </Typography>
            </Grid>
          </Link>
        </Grid>

        {/* RIGHT */}
        <Grid
          sx={{
            width: "50vw",
            transition: " 1s ease-in-out",
            position: "relative",
            marginRight: "15vw",
            "@media (max-width: 600px)": {
              width: "100%",
              marginRight: "unset",
              margin: "0 auto",
            },
          }}
        >
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
              background: "rgba(136,78,217,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              //   backdropFilter: "blur(1px)",
              borderRadius: "16px",
              flexDirection: "column",
              "@media (max-width: 600px)": {
                width: "95vw",
                height: "50vh",
                // position: "unset",
              },
            }}
          >
            <Typography
              variant="h4"
              color="white"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                width: "30vw",
                mb: "7vh",
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
                textAlign: "center",
                width: "60vw",
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
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "90vw",
        }}
      >
        {images.map((step, index) => (
          <Button
            key={index}
            onClick={() => handleStepChange(index)}
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-around",
              marginTop: "5vh",
              padding: "1vh 0vw",
              fontWeight: "900",
              fontSize: "1vw",
              color: activeStep === index ? "#a16ad9" : "#909090",
              width: "30vw",
              borderTop: activeStep === index ? "3px solid #a16ad9" : "none",
            }}
          >
            {step.icon}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
}

export default YourTools;
