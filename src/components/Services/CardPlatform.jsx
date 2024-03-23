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
        }}
      >
        <Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "5vh 5vh 1vh 5vh",
              justifyContent: "space-between",
            }}
          >
            <Grid sx={{ marginBottom: "3vh" }}>
              <Typography
                sx={{ fontSize: "1vw", fontWeight: "bold", color: "#494848" }}
              >
                Fladh Murphy
              </Typography>
              <Typography sx={{ fontSize: "0.9vw", color: "#696969" }}>
                fladh.murphy@example.com
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{ color: "#494848", fontWeight: "900", fontSize: "1.4vw" }}
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
                <ToggleOn sx={{ color: "#884ed9", fontSize: "2.5vw" }} />
                <Typography
                  sx={{ color: "#4948484", fontSize: "1vw", fontWeight: "900" }}
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
            }}
          >
            <Typography
              sx={{ color: "#4948484", fontSize: "1vw", fontWeight: "900" }}
            >
              Panama Hat
            </Typography>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "15vw",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.9vw",
                  color: "#636363",
                  background: "#e7ecef",
                  padding: "0.6vh",
                  borderRadius: "0.2vw",
                }}
              >
                Sales tax - CA(8.5%)
              </Typography>
              <Typography
                sx={{ color: "#4948484", fontSize: "1vw", fontWeight: "900" }}
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
            }}
          >
            <Typography
              sx={{ color: "#4948484", fontSize: "1vw", fontWeight: "900" }}
            >
              Silked Sripped Bandana
            </Typography>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "15vw",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.9vw",
                  color: "#636363",
                  background: "#e7ecef",
                  padding: "0.6vh",
                  borderRadius: "0.2vw",
                }}
              >
                Sales tax - CA(8.5%)
              </Typography>
              <Typography
                sx={{ color: "#4948484", fontSize: "1vw", fontWeight: "900" }}
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
