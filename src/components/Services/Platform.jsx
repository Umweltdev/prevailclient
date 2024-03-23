import { Close } from "@mui/icons-material";
import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import coke from "./assets/coke.png";
import CardService from "./CardService";
import CardPlatform from "./CardPlatform";

const Platform = () => {
  return (
    <Grid sx={{ padding: "0 0 5vh 0", margin: "0 auto", width: "80vw" }}>
      <Grid sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontSize: "1.3vw",
            color: "#884ed9",
            marginBottom: "3vh",
            fontWeight: "900",
          }}
        >
          Unified Platform
        </Typography>
        <Typography
          sx={{
            fontSize: "2.5vw",
            color: "#333",
            textWeight: "bold",
            fontWeight: "bold",
            width: "50vw",
            marginBottom: "3vh",
          }}
        >
          Support customers with any business model
        </Typography>
        <Typography
          sx={{
            fontSize: "1.4vw",
            color: "#636363",
            width: "50vw",
            marginBottom: "10vh",
          }}
        >
          Give customers access to Stripe’s entire suite of features: our
          products are designed to work together, making it easy to expand your
          offerings with minimal engineering investment.
        </Typography>
      </Grid>
      <Grid sx={{ display: "flex", gap: "4vw" }}>
        <Grid sx={{ width: "35vw", marginBottom: "5vh" }}>
          <Typography
            sx={{
              display: "flex",
              fontSize: "1.9vw",
              fontWeight: "bold",
              marginBottom: "2vh",
            }}
          >
            Launch global payments
          </Typography>
          <Typography
            sx={{
              fontSize: "1.4vw",
              color: "#636363",
              marginBottom: "2vh",
            }}
          >
            Help your customers increase revenue by optimising the checkout
            experience. Stripe supports 135+ currencies and 50+ global payment
            methods like Link, Apple Pay, ACH, and SEPA Direct Debit that can
            help increase conversion by as much as 50%.
          </Typography>
        </Grid>
        <Grid sx={{ width: "35vw" }}>
          <Typography
            sx={{
              display: "flex",
              fontSize: "1.8vw",
              fontWeight: "bold",
              color: "#494848",
              marginBottom: "3vh",
            }}
          >
            Automate tax calculation and collection compliance
          </Typography>
          <Typography
            sx={{
              fontSize: "1.4vw",
              color: "#636363",
              marginBottom: "3vh",
            }}
          >
            Stripe Tax makes it easier for your users to simplify tax compliance
            by offering a reliable, easy-to-integrate tax automation solution.
            Stripe Tax is optimised for tax calculation in 40+ countries and all
            US states.
          </Typography>
        </Grid>
      </Grid>
      <Grid sx={{ display: "flex", gap: "5vw" }}>
        <CardService />
        <CardPlatform />
      </Grid>
    </Grid>
  );
};

export default Platform;
