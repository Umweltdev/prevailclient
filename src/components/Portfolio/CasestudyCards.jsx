import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

{/*const useStyles = makeStyles({
  imageInit: {
    width: "27.5vw",
    borderRadius: "1vw",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    "@media (max-width: 600px)": {
      width: "95vw",
      height: "unset",
    },
  },
})*/}

export default function CasestudyCards({ header, text, index }) {
  //const classes = useStyles()
  return (
    <Grid
          sx={{
            width: "50vw",
            display: "flex",
            marginBottom: "5vh",
            // gap: "5vw",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "5vw",
            "@media (max-width: 600px)": {
              width: "95vw",
              flexDirection: "column",
              marginBottom: "1vh",
              // gap: "5vw",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1vw",
            },
          }}
        >
          <Grid
            sx={{
              width: "70vw",
              "@media (max-width: 600px)": {
                width: "70vw",
              },
            }}
          >
            <Typography
              sx={{
                display: "flex",
                fontSize: "1.8vw",
                fontWeight: "bold",
                color: "#494848",
                marginBottom: "3vh",
                "@media (max-width: 600px)": {
                  fontSize: "6vw",
                  margin: "2vh 0",
                },
              }}
            >
              {header}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.1vw",
                color: "#636363",
                marginBottom: "3vh",
                textAlign: "justify",
                width: "50vw",
                "@media (max-width: 600px)": {
                  fontSize: "4vw",
                  textAlign: "justify",
                  width: "95vw",
                },
              }}
            >
             {text}
            </Typography>
          </Grid>
          {/* <spline-viewer
            style={{ width: "37vw", height: "40vh" }}
            url="https://prod.spline.design/kqWnRSHfs03RcYiO/scene.splinecode"
          ></spline-viewer> */}
        </Grid>
  );
}
