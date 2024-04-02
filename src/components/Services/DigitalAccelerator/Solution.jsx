import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
// import payment from "./assets/payment.png";
// import conn from "./assets/conn.png";
// import "./assets/landing.css";
import {
  AdsClick,
  Devices,
  Label,
  QueryStats,
  Schedule,
} from "@mui/icons-material";
// import "./assets/landing.css";
import { makeStyles } from "@mui/styles";

const images = [
  {
    icon: (
      <Label
        sx={{
          fontSize: "3.5vw",
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
    title: "Brand Identity Package",
    subTitle: `Establish a strong and cohesive brand identity that resonates across all customer touchpoints, from eye-catching logos and compelling marketing collateral to business cards and brochures. Collaborate closely with our design to develop a unique brand that sets your business apart in a competitive market and connects with your target audience. We do not believe in a one-size-fits-all mentality, that is why we offer a range of choices to perfectly align with your brand personality. For more information check out our “Brand Identity Package” page.`,
    imgPath:
      "https://images.unsplash.com/photo-1580569214296-5cf2bffc5ccd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: (
      <Devices
        sx={{
          fontSize: "3.5vw",
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
    title: "Website Production & Management",
    subTitle: `Get a state-of-the-art website that is not only visually stunning but also user-friendly and optimised for search engines. This means higher visibility, more traffic, and better engagement. Leverage technical expertise in innovative technologies like MERN Stack, Material UI, Microfrontend, and Microservice Architecture for a website at the forefront of innovation. Leave the technicalities to us; from content updates to security monitoring, we ensure your website runs smoothly, allowing you to focus on your core business operations. For more information check out our “Website Product & Management” page.`,
    imgPath:
      "https://img.freepik.com/premium-photo/floating-devices-mockup-with-responsive-website-design-3d-rendering_72104-3791.jpg?w=826",
  },
  {
    icon: (
      <AdsClick
        sx={{
          fontSize: "3.5vw",
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
    title: "Search Engine Marketing (SEM)",
    subTitle: `Craft targeted and personalised advertising campaigns to enhance your brand's visibility across major search engines directing your target audiences to your digital presence. Prevail takes a comprehensive approach to Search Engine Optimisation (SEO). From regular SEO audits and keyword optimisation. In addition, we provide valuable insights into consumer behaviour, website, and marketing performance. Backlink monitoring, competitor research, and gap analysis contribute towards maintaining a competitive edge in the digital landscape."`,
    imgPath:
      "https://img.freepik.com/free-photo/search-engine-marketing-collage_23-2150808808.jpg?t=st=1711488563~exp=1711492163~hmac=4a0800013b698779e5e186550041ef92865991bfa4a6c86e70723d0e7a809bd0&w=826",
  },
];

const useStyles = makeStyles({
  mainImage: {
    width: "37vw",
    // height: "23vw",
    objectFit: "cover",
    borderRadius: "16px",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;",
    "@media (max-width: 600px)": {
      width: "95vw",
      height: "50vh",
      borderRadius: "16px",
    },
  },

  imageAcc: {
    margin: "0 auto",
    marginBottom: "5vh",
    width: "80vw",
    height: "60vh",
    objectFit: "cover",
    boxShadow:
      "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;",
    borderRadius: "1vw",
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
    setIsOverlayVisible(true);
  };

  return (
    <Grid
      sx={{
        padding: "5vh 0vw",
        margin: "5vh auto",
        display: "flex",
        flexDirection: "column",
        "@media (max-width: 600px)": { width: "95vw" },
      }}
    >
      <img
        className={classes.imageAcc}
        src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <Typography
        sx={{
          fontSize: "3vw",
          //   mb: "2vh",
          letterSpacing: "1px",
          textAlign: "center",
          color: "#484949",
          fontWeight: "900",
          marginBottom: "6vh",
          "@media (max-width: 600px)": { fontSize: "7vw", textAlign: "center" },
        }}
      >
        Solution
      </Typography>
      <Grid
        sx={{
          display: "flex",
          alignItems: "top",
          justifyContent: "center",
          margin: "0 auto",
          gap: "5vw",
          "@media (max-width: 600px)": { flexDirection: "column" },
        }}
      >
        <Grid
          sx={{
            // height: "40vh",
            // width: "60vw",
            width: "40vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "top",
            // margin: "0 auto",
          }}
        >
          <Typography
            sx={{ fontSize: "1.8vw", fontWeight: "900", marginBottom: "3vh" }}
          >
            {images[activeStep].title}
          </Typography>
          <Typography sx={{ fontSize: "1.3vw", marginBottom: "3vh" }}>
            {images[activeStep].subTitle}
          </Typography>
        </Grid>

        <Grid
          sx={{
            // width: "40vw",
            // transition: " 1s ease-in-out",
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
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "82vw",
          margin: "0 auto",
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
              // fontWeight: "900",
              fontSize: "1vw",
              color: activeStep === index ? "#884ed9" : "#333",
              fontWeight: activeStep === index ? "bold" : "none",
              width: "40vw",
              "&:hover": {
                backgroundColor: "#dcdcdc",
                color: "#333",
                fontWeight: "bold",
                borderRadius: "1vh",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
              },
            }}
          >
            {step.title}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
}

export default YourTools;
