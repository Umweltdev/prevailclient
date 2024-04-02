import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../assets/portfolio.css";

const CaseNavigation = ({
  prevCase,
  nextCase,
  nextHeader,
  prevHeader,
  nextNav,
  prevNav,
}) => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "5vh auto",
        width: "95vw",

        "@media (max-width: 600px)": {
          margin: "2vh auto",
        },
      }}
    >
      <Link style={{ textDecoration: "none" }} to={prevCase}>
        <Card
          sx={{
            color: "white",
            height: "120px",
            width: "23vw",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #be90fd 30%, #884ed9 90%)",

            "@media (max-width: 600px)": {
              height: "100px",
              width: "45vw",
            },
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              fontSize: "15px",
              padding: "20px 0 0 20px",
              "@media (max-width: 600px)": {
                fontSize: "13px",
              },
            }}
          >
            <ArrowBack
              sx={{
                fontSize: "20px",
              }}
            />
            {nextNav}
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              padding: "0 0 0 20px",
              fontWeight: 500,
              "@media (max-width: 600px)": {
                fontSize: "15px",
              },
            }}
          >
            {nextHeader}
          </Typography>
        </Card>
      </Link>

      {/* SECOND NAVIGATION */}
      <Link style={{ textDecoration: "none" }} to={nextCase}>
        <Card
          sx={{
            color: "white",
            height: "120px",
            width: "23vw",
            borderRadius: "16px",
            background: "linear-gradient(45deg, #884ed9 30%, #be90fd 90%)",

            "@media (max-width: 600px)": {
              height: "100px",
              width: "45vw",
            },
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              fontSize: "15px",
              padding: "20px 0 0 20px",
              "@media (max-width: 600px)": {
                fontSize: "13px",
              },
            }}
          >
            {prevNav}
            <ArrowForward
              sx={{
                fontSize: "20px",
              }}
            />
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              padding: "0 0 0 20px",
              fontWeight: 500,
              "@media (max-width: 600px)": {
                fontSize: "15px",
              },
            }}
          >
            {prevHeader}
          </Typography>
        </Card>
      </Link>
    </Grid>
  );
};

export default CaseNavigation;
