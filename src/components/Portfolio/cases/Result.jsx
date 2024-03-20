import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Result = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "5vh 5vw",
        gap: "6vw",
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
      <Grid>
        <Card
          sx={{
            width: "40vw",
            background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
            color: "white",
            "@media (max-width: 600px)": {
              width: "95vw",
            },
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              gap: "6vw",
              alignItems: "center",
              padding: "3vw 3vw",
              "@media (max-width: 600px)": {
                display: "flex",
                flexWrap: "unset",
                justifyContent: "space-around",
                gap: "unset",
                alignItems: "center",
                padding: "2vh 3vw",
              },
            }}
          >
            <Grid
              sx={{
                textAlign: "center",
                lineHeight: "0",
              }}
            >
              <Typography
                sx={{
                  fontSize: "4vw",
                  fontWeight: "bold",
                  "@media (max-width: 600px)": {
                    fontSize: "3vh",
                    fontWeight: "bold",
                  },
                }}
              >
                880
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.3vw",
                  "@media (max-width: 600px)": {
                    fontSize: "4vw",
                  },
                }}
              >
                Clicks
              </Typography>
            </Grid>
            <Grid
              sx={{
                textAlign: "center",
                lineHeight: "1vh",
              }}
            >
              <Typography
                sx={{
                  fontSize: "4vw",
                  fontWeight: "bold",
                  "@media (max-width: 600px)": {
                    fontSize: "3vh",
                    fontWeight: "bold",
                  },
                }}
              >
                671
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.3vw",
                  "@media (max-width: 600px)": {
                    fontSize: "4vw",
                  },
                }}
              >
                Cost
              </Typography>
            </Grid>
            <Grid
              sx={{
                textAlign: "center",
                lineHeight: "1vh",
              }}
            >
              <Typography
                sx={{
                  fontSize: "4vw",
                  fontWeight: "bold",
                  "@media (max-width: 600px)": {
                    fontSize: "3vh",
                    fontWeight: "bold",
                  },
                }}
              >
                3.78k
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.3vw",
                  "@media (max-width: 600px)": {
                    fontSize: "4vw",
                  },
                }}
              >
                Revenue
              </Typography>
            </Grid>
            <Grid
              sx={{
                textAlign: "center",
                lineHeight: "1vh",
              }}
            >
              <Typography
                sx={{
                  fontSize: "4vw",
                  fontWeight: "bold",
                  "@media (max-width: 600px)": {
                    fontSize: "3vh",
                    fontWeight: "bold",
                  },
                }}
              >
                5.64x
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.3vw",
                  "@media (max-width: 600px)": {
                    fontSize: "4vw",
                  },
                }}
              >
                ROAS
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Result;
