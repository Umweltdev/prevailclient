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
          Challenges Faced
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
          style={{ width: "40vw" }}
          src="https://saltmarketing.ie/wp-content/uploads/navan-8.png"
          alt=""
        />
      </Grid>
    </Grid>
  );
};

export default Problem;
