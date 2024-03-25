import {
  AdsClick,
  Equalizer,
  Euro,
  Leaderboard,
  ShowChart,
  SsidChart,
  StackedLineChart,
  TrendingUp,
} from "@mui/icons-material";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const reultData = [
  {
    text: "Total Active Users",
    mainIcon: (
      <Leaderboard
        sx={{
          color: "#884ed9",
          fontSize: "4vw",
          "@media (max-width: 600px)": {
            fontSize: "15vw",
          },
        }}
      />
    ),
    subIcon: (
      <SsidChart
        sx={{
          color: "#884ed9",
          fontSize: "1.4vw",
          "@media (max-width: 600px)": {
            fontSize: "4.5vw",
          },
        }}
      />
    ),
    rate: "+89.4%",
    bigText: "43.7k",
  },
  {
    text: "Product",
    mainIcon: (
      <ShowChart
        sx={{
          color: "#884ed9",
          fontSize: "4vw",
          "@media (max-width: 600px)": {
            fontSize: "15vw",
          },
        }}
      />
    ),
    subIcon: (
      <TrendingUp
        sx={{
          color: "#884ed9",
          fontSize: "1.4vw",
          "@media (max-width: 600px)": {
            fontSize: "4vw",
          },
        }}
      />
    ),
    rate: "+20%",
    bigText: "108k",
  },
  {
    text: "Revenue",
    mainIcon: (
      <Euro
        sx={{
          color: "#884ed9",
          fontSize: "4vw",
          "@media (max-width: 600px)": {
            fontSize: "15vw",
          },
        }}
      />
    ),
    subIcon: (
      <TrendingUp
        sx={{
          color: "#884ed9",
          fontSize: "1.4vw",
          "@media (max-width: 600px)": {
            fontSize: "4.5vw",
          },
        }}
      />
    ),
    rate: "+70",
    bigText: "170k",
  },
  {
    text: "Clicks",
    mainIcon: (
      <AdsClick
        sx={{
          color: "#884ed9",
          fontSize: "4vw",
          "@media (max-width: 600px)": {
            fontSize: "15vw",
          },
        }}
      />
    ),
    subIcon: (
      <StackedLineChart
        sx={{
          color: "#884ed9",
          fontSize: "1.4vw",
          "@media (max-width: 600px)": {
            fontSize: "4.5vw",
          },
        }}
      />
    ),
    rate: "+50.4%",
    bigText: "100k",
  },
];

const Result = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "5vh 5vw",
        gap: "5vw",
        "@media (max-width: 600px)": {
          flexDirection: "column",
          padding: "2vh 0",
        },
      }}
    >
      <Grid>
        <Typography
          sx={{
            fontSize: "3vw",
            fontWeight: "bold",
            "@media (max-width: 600px)": {
              fontSize: "4.5vh",
            },
          }}
        >
          Results Achieved
        </Typography>
        <Grid
          sx={{
            background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
            height: "0.8vh",
            width: "10vw",
            margin: "3vh 0",
            "@media (max-width: 600px)": {
              height: "0.8vh",
              width: "40vw",
              margin: "1vh 0",
            },
          }}
        ></Grid>
        <Typography
          sx={{
            fontSize: "1.4vw",
            width: "45vw",
            color: "#333",
            "@media (max-width: 600px)": {
              fontSize: "4vw",
              width: "95vw",
              color: "#333",
              textAlign: "justify",
              textJustify: "distribute",
            },
          }}
        >
          Launching New Vision Cleaning's website was a big change in how they
          do business. The website gave the client a way to show off their
          services, interact with customers, and easily handle bookings. The
          branding and content services helped them stand out in Dublin's
          competitive cleaning services market by making them more visible in
          the market. The professional email setup made it easier for them to
          talk to each other and gave their clients more confidence.
        </Typography>
      </Grid>

      {/* CARD */}
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          "@media (max-width: 600px)": {
            justifyContent: "center", 
            alignItems: "center"
          },
        }}
      >
        {reultData.map((data, index) => (
          <Card
            key={index}
            sx={{
              width: "19vw",
              background: "white",
              color: "black",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              // gap: "2vh",
              borderRadius: "15px",
              padding: "15px 0 0 0",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
              "@media (max-width: 600px)": {
                width: "95vw",
              },
            }}
          >
            <Grid>
              <Typography
                sx={{
                  color: "#333",
                  fontSize: "1.1vw",
                  marginBottom: "2vh",
                  "@media (max-width: 600px)": {
                    fontSize: "4.5vw",
                  },
                }}
              >
                {data.text}
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  gap: "5px",
                  mb: "1vh",
                  // "@media (max-width: 600px)": {
                  //   fontSize: "4.5vw",
                  // },
                }}
              >
                {data.subIcon}
                <Typography
                  sx={{
                    color: "#333",
                    fontSize: "1vw",
                    fontWeight: "bold",
                    "@media (max-width: 600px)": {
                      fontSize: "4.5vw",
                    },
                  }}
                >
                  {data.rate}
                </Typography>
              </Grid>
              <Typography
                sx={{
                  color: "#333",
                  fontSize: "2.5vw",
                  fontWeight: "bold",
                  "@media (max-width: 600px)": {
                    fontSize: "6vw",
                  },
                }}
              >
                {data.bigText}
              </Typography>
            </Grid>
            <Grid>{data.mainIcon}</Grid>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default Result;
