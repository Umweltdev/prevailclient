import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import imago from "../assets/as.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  imago: {
    width: "40vw",
    height: "50vh",
    // height: "400px",
    objectFit: "cover",
    // position: "fixed",
    //   borderRadius: "50%",
    borderRadius: "1vw",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;",
    float: "left",
    shapeOutside: "inset(1% round 50%)",
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
});

const PainPoint = ({ header, text, image }) => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "15vh 0",
        height: "100vh",
        // background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
        gap: "4vw",
        "@media (max-width: 600px)": {
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          padding: "2vh 0",
        },
      }}
    >
      <img
        className={classes.imago}
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <Grid>
        <Typography
          sx={{ fontSize: "4vw", fontWeight: "900", color: "#884ed9" }}
        >
          Pain Points
        </Typography>
        <Typography
          sx={{
            fontSize: "1.4vw",
            width: "40vw",
            // textAlign: "justify",
            // textJustify: "distribute",
            // color: "white",
            "@media (max-width: 600px)": {
              fontSize: "4.5vw",
              width: "90vw",
              textAlign: "justify",
              textJustify: "distribute",
            },
          }}
        >
          We understand how difficult it can be to stand out in the competitive
          digital marketplace, which can be frustrating. You may have put a lot
          of effort into your business, but you lack a digital presence, or your
          current digital presence doesn't reflect your passion due to being
          outdated. You feel like you're missing out on opportunities to connect
          with your audience. It's like having a beautiful storefront in a
          hidden alley.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PainPoint;
