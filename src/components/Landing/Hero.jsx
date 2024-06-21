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
import face3 from "./assets/face3.svg";
import face4 from "./assets/face4.svg";
import face5 from "./assets/face5.svg";
import face6 from "./assets/face6.svg";
import face7 from "./assets/face7.svg";
import face8 from "./assets/globe.png";
import face9 from "./assets/pencil.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Grid
      sx={{
        // padding: "3rem",
        display: "flex",
        background: "linear-gradient(135deg, #d1c4e9, #ffffff, #bbdefb)",
        flexDirection: "row",
        pt: "256px",
        pb: "100px",
        // height: "100vh",
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
      {/* <Grid alignItems="center"> */}
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
          Prevail is a cutting-edge marketing agency specialising in redefining
          the way businesses.
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
          onClick={() => navigate("/get-started")}
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
            <CardMedia
              sx={{
                width: "241px",
                "@media (max-width: 767px)": {
                  width: "35vw",
                  height: "35vw",
                },
              }}
              component={"img"}
              image={face2}
            />
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
                }}
                component={"img"}
                image={face9}
              />
            </Box>
            {/* <CardMedia
              sx={{ width: "367px" }}
              component={"img"}
              image={face3}
            /> */}
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
            image={face5}
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
        <Box></Box>
      </Grid>
      {/* <Grid item xs={12} md={4.5}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "280px",
            "@media (max-width: 767px)": {
              margin: "auto",
            },
          }}
        >
          {[face1, face2, face3, face4, face5, face6, face7].map(
            (face, index) => (
              <Box
                key={index}
                sx={{
                  //👩🏻‍💻
                  width:
                    index === 0
                      ? "170px"
                      : index === 1
                      ? "110px"
                      : index === 2
                      ? "125px"
                      : index === 3
                      ? "155px"
                      : index === 4
                      ? "110px"
                      : index === 5
                      ? "85px"
                      : index === 6
                      ? "85px"
                      : "140px",
                  height: "110px",
                  borderRadius:
                    index === 0 || index === 2 || index === 3
                      ? "25px"
                      : index === 5 || index === 6
                      ? "50% / 25%"
                      : "50%", // Vertical ellipse for face6 and face7
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={face}
                  alt={`Face ${index + 1}`}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            )
          )}
        </Box>
      </Grid> */}
    </Grid>
  );
};

export default Hero;
