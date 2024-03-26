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
import { makeStyles } from "@mui/styles";

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

const useStyles = makeStyles({
  imageHeader: {
    width: "42vw",
    height: "28vw",
    objectFit: "cover",
    borderRadius: "16px",
    "@media (max-width: 600px)": {
      width: "95vw",
      height: "30vh",
      objectFit: "cover",
      borderRadius: "1vw",
    },
  },
});

function CarouselOne() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isOverlayVisible, setIsOverlayVisible] = React.useState(false);
  const classes = useStyles()

  const handleStepChange = (step) => {
    setActiveStep(step);
    setIsOverlayVisible(true);
  };

  return (
    <Grid
      sx={{
        padding: "18vh 0 0 0",
        width: "60vw",
        margin: "5vh auto",
        "@media (max-width: 600px)": {
          fontSize: "10vw",
          margin: "1vh auto",
          padding: "1vh 0 0 0",
          width: "95vw",
        },
      }}
      justifyContent="center"
    >
      <Grid sx={{}}>
        <Typography
          sx={{
            fontSize: "1.5vw",
            mb: "3vh",
            letterSpacing: "1px",
            // height: "10vh",
            // color: "#333",
            fontWeight: "900",
            color: "#884ed9",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              mb: "1vh",
            },
          }}
        >
          Digital Accelerator
        </Typography>
        <Typography
          sx={{
            fontSize: "2.8vw",
            mb: "3vh",
            letterSpacing: "1px",
            // height: "10vh",
            color: "#484949",
            fontWeight: "900",
            "@media (max-width: 600px)": {
              fontSize: "7vw",
              mb: "1vh",
            },
          }}
        >
          Bring agility to your enterprise
        </Typography>
        <Typography
          sx={{
            textAlign: "justify",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              textJustify: "distribute",
              mb: "1vh",
            },
          }}
        >
          Revolutionise your online presencewith our exclusivebundle. The{" "}
          <Link
            style={{
              textDecoration: "none",
              fontFamily: "Sarabun",
              fontWeight: "900",
            }}
            to={`/digitalaccelerator`}
          >
            {" "}
            "Digital Accelarator Bundle package"{" "}
          </Link>
          This all-encompassing package seamlessly integrates three core
          services- [website Production & Management]. [Brand Identitiy
          package], and [Search Engine Marketing(SEM)]. Prevail's
          <Link
            style={{
              textDecoration: "none",
              fontFamily: "Sarabun",
              fontWeight: "900",
            }}
            to={`/digitalaccelerator`}
          >
            "Digital Accelerator Bundle Package"
          </Link>
          service is not just a bundle of services. it is your strategic gateway
          to cohesive, impactful, and cost effective digital presence. Elevate
          your brand with Prevails integrated solutions.
        </Typography>

        <Button
          size="small"
          sx={{
            color: "white",
            background: "#884ed9",
            margin: "3vh 0",
            textTransform: "capitalize",
            padding: "1vh 2vw",
            borderRadius: "25px",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              padding: "1vh 10vw",
              textJustify: "distribute",
              mb: "4vh",
            },
          }}
        >
          Learn More
        </Button>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2vw",
          "@media (max-width: 600px)": {
            flexDirection: "column",
          },
        }}
      >
        {/* LEFT */}
        <Grid
          sx={{
            width: "20vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "3vh",
            textAlign: "left",
            "@media (max-width: 600px)": {
              width: "95vw",
            },
          }}
        >
          {images.map((data, index) => (
            <Grid>
              <Typography
                sx={{
                  color: "#333",
                  fontSize: "1.2vw",
                  fontWeight: "900",
                  "@media (max-width: 600px)": {
                    fontSize: "6vw",
                  },
                }}
              >
                {data.title}
              </Typography>
              <Typography
                sx={{
                  color: "#696969",
                  fontSize: "1vw",
                  "@media (max-width: 600px)": {
                    fontSize: "4vw",
                    textAlign: "justify",
                    textJustify: "center",
                  },
                }}
              >
                {data.subTitle}
              </Typography>
            </Grid>
          ))}
        </Grid>
        {/* RIGHT */}
        <Grid
          sx={{
            width: "50vw",
            transition: " 1s ease-in-out",
            position: "relative",
            "@media (max-width: 600px)": {
              width: "95vw",
            },
          }}
        >
          <img
            src={images[activeStep].imgPath}
            alt={images[activeStep].label}
            className={classes.imageHeader}
            style={{}}
          />
          <Grid
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "28vw",
              background: "rgba(136,78,217,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(0px)",
              borderRadius: "1vw",
              flexDirection: "column",
              "@media (max-width: 600px)": { width: "95vw", height: "30vh" },
            }}
          ></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CarouselOne;
