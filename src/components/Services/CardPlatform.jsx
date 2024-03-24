import { Grid, Typography, Card, Button } from "@mui/material";
import React from "react";
import coke from "./assets/coke1.png";
import sprite from "./assets/sprite1.png";
import visa from "./assets/visa.png";
import face from "./assets/face.png";
import {
  Apple,
  ArrowForward,
  ArrowForwardIos,
  Close,
  ToggleOn,
} from "@mui/icons-material";

const CardPlatform = () => {
  return (
    <Grid>
      <Card
        sx={{
          width: "38vw",
          marginTop: "20vh",
          marginLeft: "10vw",
          marginRight: "10vw",
          borderRadius: "0.7vw",
          position: "relative",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
          "@media (max-width: 600px)": {
            position: "unset",
            marginTop: "2vh",
            marginRight: "unset",
            marginLeft: "unset",
            width: "95vw",
          },
        }}
      >
        <Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "5vh 5vh 1vh 5vh",
              justifyContent: "space-between",
              "@media (max-width: 600px)": {
                padding: "3vh 3vh 1vh 3vh",
              },
            }}
          >
            <Grid
              sx={{
                marginBottom: "3vh",
                "@media (max-width: 600px)": {
                  marginBottom: "1vh",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: "#494848",
                  "@media (max-width: 600px)": {
                    fontSize: "4vw",
                  },
                }}
              >
                Fladh Murphy
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9vw",
                  color: "#696969",
                  "@media (max-width: 600px)": {
                    fontSize: "3vw",
                  },
                }}
              >
                fladh.murphy@example.com
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  color: "#494848",
                  fontWeight: "900",
                  fontSize: "1.4vw",
                  "@media (max-width: 600px)": {
                    fontSize: "4vw",
                  },
                }}
              >
                Items
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <ToggleOn
                  sx={{
                    color: "#884ed9",
                    fontSize: "2.5vw",
                    "@media (max-width: 600px)": {
                      fontSize: "8vw",
                    },
                  }}
                />
                <Typography
                  sx={{
                    color: "#4948484",
                    fontSize: "1vw",
                    fontWeight: "900",
                    "@media (max-width: 600px)": {
                      fontSize: "3.5vw",
                    },
                  }}
                >
                  Calculate tax automatically
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={{ border: "0.1vh solid #d3d3d3" }}></Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              padding: "1.3vw 5vh",
              "@media (max-width: 600px)": {
                padding: "1vh 5vw",
              },
            }}
          >
            <Typography
              sx={{
                color: "#4948484",
                fontSize: "1vw",
                fontWeight: "900",
                "@media (max-width: 600px)": {
                  fontSize: "4vw",
                },
              }}
            >
              Panama Hat
            </Typography>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "15vw",
                alignItems: "center",
                "@media (max-width: 600px)": {
                  width: "unset",
                  gap: "2vw",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.9vw",
                  color: "#636363",
                  background: "#e7ecef",
                  padding: "0.6vh",
                  borderRadius: "0.2vw",
                  "@media (max-width: 600px)": {
                    fontSize: "3vw",
                  },
                }}
              >
                Sales tax - CA(8.5%)
              </Typography>
              <Typography
                sx={{
                  color: "#4948484",
                  fontSize: "1vw",
                  fontWeight: "900",
                  "@media (max-width: 600px)": {
                    fontSize: "3vw",
                  },
                }}
              >
                €37.00
              </Typography>
            </Grid>
          </Grid>
          <Grid sx={{ border: "0.1vh solid #d3d3d3" }}></Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              padding: "1.3vw 5vh",
              "@media (max-width: 600px)": {
                padding: "1vh 5vw",
              },
            }}
          >
            <Typography
              sx={{
                color: "#4948484",
                fontSize: "1vw",
                fontWeight: "900",
                "@media (max-width: 600px)": {
                  fontSize: "4vw",
                },
              }}
            >
              Silked Sripped Bandana
            </Typography>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "15vw",
                alignItems: "center",
                "@media (max-width: 600px)": {
                  width: "unset",
                  gap: "2vw",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.9vw",
                  color: "#636363",
                  background: "#e7ecef",
                  padding: "0.6vh",
                  borderRadius: "0.2vw",
                  "@media (max-width: 600px)": {
                    fontSize: "3vw",
                  },
                }}
              >
                Sales tax - CA(8.5%)
              </Typography>
              <Typography
                sx={{
                  color: "#4948484",
                  fontSize: "1vw",
                  fontWeight: "900",
                  "@media (max-width: 600px)": {
                    fontSize: "3vw",
                  },
                }}
              >
                €45.00
              </Typography>
            </Grid>
          </Grid>
          <Grid sx={{ border: "0.1vh solid #d3d3d3" }}></Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              padding: "1.3vw 5vh",
              "@media (max-width: 600px)": {
                padding: "1vh 5vw",
              },
            }}
          >
            <Button sx={{ textTransform: "capitalize" }}>Add Item</Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default CardPlatform;
