import { Grid, Typography } from "@mui/material";
import React from "react";
import AccordionCase from "./Accordion";

const Problem = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "5vw",
        padding: "5vw",
      }}
    >
      <Grid>
        <Typography
          sx={{
            fontSize: "3vw",
            fontWeight: "bold",
          }}
        >
          Solutions Provided
        </Typography>
        <Grid
          sx={{
            background: "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
            height: "0.8vh",
            width: "10vw",
            margin: "3vh 0",
          }}
        ></Grid>
        <AccordionCase />
      </Grid>

      <Grid>
        <img
          style={{ width: "40vw", borderRadius: "1vw" }}
          src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </Grid>
    </Grid>
  );
};

export default Problem;
