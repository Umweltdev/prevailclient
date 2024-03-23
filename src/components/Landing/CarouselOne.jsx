import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import payment from "./assets/payment.png";
import conn from "./assets/conn.png";
import { AdsClick, Devices, Label, Schedule } from "@mui/icons-material";
import "./assets/landing.css";

const images = [
  {
    icon: <Devices sx={{ color: "#884ed9", fontSize: "5vw" }} />,
    title: "Unified Brand Presence",
    subTitle: `Ensure consistency across your online presence from website esthetics to bend identity and SEO campaigns`,
    imgPath:
      "https://img.freepik.com/free-vector/gradient-responsive-website-design_52683-89071.jpg?t=st=1711220479~exp=1711224079~hmac=99dee8e2d2800f18fcd1a0bc9e86e63a245ef3f9276f0cac799cc1b1e42998ce&w=740",
  },
  {
    icon: <Schedule sx={{ color: "#884ed9", fontSize: "5vw" }} />,
    title: "Time & resource Efficiency",
    subTitle: `See Valuable time and resources by entrusting all aspects of your digital presence - website, branding and Marketing.`,
    imgPath:
      "https://img.freepik.com/premium-photo/african-woman-using-laptop-smartphone-tablet-writing-notebook-office-her-business-online-shopping-home-with-virtual-icon_1091882-513.jpg?w=740",
  },
  {
    icon: <AdsClick sx={{ color: "#884ed9", fontSize: "5vw" }} />,
    title: "Strategic Synergy",
    subTitle:
      "Achieve a seamless synergy between website aesthetics brand messaging and targeted SEO strategies. ensuring a cohesive and impactful brand presence.",
    imgPath:
      "https://img.freepik.com/premium-photo/mature-asian-woman-entrepreneur-business-owner-standing-working-home-office-with-her-clay-ceramic-product-smilling-looking-camera_126277-1485.jpg?w=740",
  },
];

function CarouselOne() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isOverlayVisible, setIsOverlayVisible] = React.useState(false);

  const handleStepChange = (step) => {
    setActiveStep(step);
    setIsOverlayVisible(true);
  };

  return (
    <Grid
      sx={{ padding: "18vh 0 0 0", width: "60vw", margin: "5vh auto" }}
      justifyContent="center"
    >
      <Grid sx={{}}>
        <Typography
          sx={{
            fontSize: "1.4vw",
            mb: "3vh",
            letterSpacing: "1px",
            // height: "10vh",
            color: "#884ed9",
            fontWeight: "900",
          }}
        >
          Digital Accelerator
        </Typography>
        <Typography
          sx={
            {
              // width: "vw",
            }
          }
        >
          Revolutionise your online presencewith our exclusivebundle. The{" "}
          <Link style={{ textDecoration: "none" }} to={`/digitalaccelerator`}>
            {" "}
            <span className="span">
              "Digital Accelarator Bundle package"
            </span>{" "}
          </Link>
          This all-encompassing package seamlessly integrates three core
          services- [website Production & Management]. [Brand Identitiy
          package], and [Search Engine Marketing(SEM)]. Prevail's
          <Link style={{ textDecoration: "none" }} to={`/digitalaccelerator`}>
            <span className="span">"Digital Accelerator Bundle Package"</span>
          </Link>
          service is not just a bundle of services. it is your strategic gateway
          to cohesive, impactful, and cost effective digital presence. Elevate
          your brand with Prevails integrated solutions.
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          //   gap: "1vw",
        }}
      >
        {/* LEFT */}
        <Grid
          sx={{
            width: "20vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "5vh",
          }}
        >
          <Grid>
            <Typography
              sx={{ color: "#333", fontSize: "1.7vw", fontWeight: "900" }}
            >
              Millions
            </Typography>
            <Typography sx={{ color: "#696969", fontSize: "1.2vw" }}>
              BMW owners using Connected Drive Store
            </Typography>
          </Grid>

          <Grid>
            <Typography
              sx={{ color: "#333", fontSize: "1.7vw", fontWeight: "900" }}
            >
              350+
            </Typography>
            <Typography sx={{ color: "#696969", fontSize: "1.2vw" }}>
              US dealerships{" "}
            </Typography>
          </Grid>

          <Grid sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{ color: "#333", fontSize: "1.5vw", fontWeight: "900" }}
            >
              Product used
            </Typography>
            <Grid>
              <Grid sx={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                <img style={{ width: "1.7vw" }} src={payment} alt="" />
                <Typography sx={{ color: "#696969", fontSize: "1.2vw" }}>
                  Payments
                </Typography>
              </Grid>
              <Grid sx={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                <img style={{ width: "1.7vw" }} src={conn} alt="" />
                <Typography sx={{ color: "#696969", fontSize: "1.2vw" }}>
                  Connect
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* RIGHT */}
        <Grid
          sx={{
            width: "50vw",

            transition: " 1s ease-in-out",
            position: "relative",
          }}
        >
          <img
            src={images[activeStep].imgPath}
            alt={images[activeStep].label}
            style={{
              width: "45vw",
              height: "25vw",
              objectFit: "cover",
              borderRadius: "1vw",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "rgba(136,78,217,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(1px)",
              borderRadius: "16px",
              flexDirection: "column"
            }}
          >
            <Typography
              variant="h4"
              color="white"
              sx={{ fontWeight: "bold", textAlign: "center", width: "30vw", mb: "7vh" }}
            >
              {images[activeStep].title}{" "}
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{ fontWeight: "bold", textAlign: "center", width: "30vw" }}
            >
              {images[activeStep].subTitle}{" "}
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
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
              color: "#333",
              width: "25vw",
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

export default CarouselOne;
