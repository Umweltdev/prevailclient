import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CaseNavigation = ({ prevCase, nextCase, nextHeader, prevHeader }) => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10vh auto",
        width: "95vw",

        "@media (max-width: 600px)": {
          margin: "2vh auto",
        },
      }}
    >
      <Link style={{ textDecoration: "none" }} to={prevCase}>
        <Card
          sx={{
            background: "#884ed9",
            color: "white",
            height: "120px",
            width: "30vw",
            borderRadius: "16px",
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
            Previous Case Study
          </Typography>
          <Typography
            sx={{
              fontSize: "25px",
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

      {/* SECOND NAVIGATION */}
      <Link style={{ textDecoration: "none" }} to={nextCase}>
        <Card
          sx={{
            background: "#884ed9",
            color: "white",
            height: "120px",
            width: "30vw",
            borderRadius: "16px",
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
            Next Case Study
            <ArrowForward
              sx={{
                fontSize: "20px",
              }}
            />
          </Typography>
          <Typography
            sx={{
              fontSize: "25px",
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
    </Grid>
  );
};

export default CaseNavigation;
