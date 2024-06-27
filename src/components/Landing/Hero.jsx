import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import face1 from "./assets/face1.svg";
import face2 from "./assets/face2.svg";
import face3 from "./assets/Union.png";
import face4 from "./assets/face4.svg";
import face5 from "./assets/face5.svg";
import face6 from "./assets/face6.svg";
import face7 from "./assets/face7.svg";
import face8 from "./assets/globe.png";
import face9 from "./assets/pencil.png";
import face10 from "./assets/face10.svg";
import face11 from "./assets/eye.png";
import face12 from "./assets/Unions.svg";
import face13 from "./assets/hands-new.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Grid
      sx={{
        display: "flex",
        background: "linear-gradient(135deg, #d1c4e9, #ffffff, #bbdefb)",
        flexDirection: "row",
        pt: "256px",
        pb: "100px",
        justifyContent: "center",
        alignItems: "top",
        "@media (max-width: 767px)": {
          flexDirection: "column",
          width: "100vw",
          pt: "168px",
          pl: "5vw",
        },
      }}
    >
      <Grid>
        <Typography
          sx={{
            fontSize: "64px",
            color: "#1D0D40",
            width: "632px",
            fontWeight: "500",
            fontFamily: "Aeonik Pro",
            "@media (max-width: 767px)": {
              width: "90vw",
              fontSize: "40px",
              lineHeight: "unset",
              marginBottom: "unset",
              fontWeight: "500",
              alignItems: "center",
            },
          }}
        >
          Your Partner in Accelerating the
        </Typography>
        <Typography
          sx={{
            fontSize: "64px",
            background:
              "linear-gradient(102deg, #6E3EF4 10.45%, #409AFF 64.21%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            width: "632px",
            fontWeight: "500",
            "@media (max-width: 767px)": {
              fontSize: "40px",
              lineHeight: "unset",
              marginBottom: "unset",
              fontWeight: "500",
            },
          }}
        >
          Digital Space
        </Typography>

        <Typography
          sx={{
            margin: "1rem 0",
            fontSize: "1.25rem",
            lineHeight: 1.5,
            width: "487px",
            "@media (max-width: 767px)": {
              width: "90vw",
            },
          }}
        >
          Our goal is to help businesses thrive and create their unique online presence 
          by providing innovative and holistic solutions.

        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#450fad",
            color: "white",
            textTransform: "none",
            borderRadius: "50px",
            padding: "0.5rem 2rem",
            "&:hover": {
              backgroundColor: "#3a0d96",
            },
          }}
          onClick={() => navigate("/Contact")}
        >
          Get started
        </Button>
      </Grid>

      <Grid
        sx={{
          "@media (max-width: 767px)": {
            width: "90vw",
            pt: "80px",
            margin: "auto",
            ml: "unset",
          },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              position: "relative",
              "@media (max-width: 767px)": {
                width: "90vw",
              },
            }}
          >
            <CardMedia
              sx={{
                width: "367px",
                "@media (max-width: 767px)": {
                  width: "55vw",
                  height: "35vw",
                  borderRadius: "35%",
                },
              }}
              component={"img"}
              image={face1}
            />
            <Box
              sx={{
                position: "relative",
                width: "241px",
                "@media (max-width: 767px)": {
                  width: "35vw",
                  height: "35vw",
                },
              }}
            >
              <CardMedia
                sx={{
                  width: "100%",
                  height: "100%",
                }}
                component={"img"}
                image={face2}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "-60px",
                  left: "-60px",
                  width: "50%",
                  "@media (max-width: 767px)": {
                    width: "70%",
                  },
                }}
              >
                <CardMedia
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                  component={"img"}
                  image={face3}
                />
                <CardMedia
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "50%",
                    "@media (max-width: 767px)": {
                      width: "70%",
                    },
                  }}
                  component={"img"}
                  image={face11}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "190px",
                height: "190px",
                background: "#8555ED",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "@media (max-width: 767px)": {
                  width: "35vw",
                  height: "35vw",
                },
              }}
            >
              <CardMedia
                sx={{
                  width: "80px",
                  "@media (max-width: 767px)": {
                    width: "50px",
                  },
                }}
                component={"img"}
                image={face9}
              />
            </Box>
            <CardMedia
              sx={{
                width: "425px",
                height: "190px",
                borderRadius: "25%",
                "@media (max-width: 767px)": {
                  width: "55vw",
                  height: "35vw",
                  borderRadius: "40%",
                },
              }}
              component={"img"}
              image={face4}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              position: "relative",
              width: "205px",
              height: "205px",
              borderRadius: "50%",
              "@media (max-width: 767px)": {
                width: "30vw",
                height: "30vw",
              },
            }}
          >
            <CardMedia
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
              component={"img"}
              image={face5}
            />
            <CardMedia
              sx={{
                position: "absolute",
                top: "-5%",
                left: "85%",
                transform: "translate(-50%, -50%)",
                width: "50%",
                "@media (max-width: 767px)": {
                  width: "60%",
                },
              }}
              component={"img"}
              image={face12}
            />
            <CardMedia
              sx={{
                position: "absolute",
                top: "-5%",
                left: "85%",
                transform: "translate(-50%, -50%)",
                width: "30%",
                "@media (max-width: 767px)": {
                  width: "50%",
                },
              }}
              component={"img"}
              image={face13}
            />
          </Box>
          <CardMedia
            sx={{
              width: "205px",
              height: "205px",
              borderRadius: "50%",
              "@media (max-width: 767px)": {
                width: "30vw",
                height: "30vw",
              },
            }}
            component={"img"}
            image={face8}
          />
          <CardMedia
            sx={{
              width: "205px",
              height: "205px",
              borderRadius: "50%",
              "@media (max-width: 767px)": {
                width: "30vw",
                height: "30vw",
              },
            }}
            component={"img"}
            image={face7}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
