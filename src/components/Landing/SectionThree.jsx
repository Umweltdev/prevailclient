import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "../../theme";
import AccordionUsage from "../ReusedComponents/Accordion";
import {
  Balance,
  Devices,
  Storefront,
  TipsAndUpdates,
  Workspaces,
} from "@mui/icons-material";

const gradient = "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)";

const useStyles = makeStyles({
  sThreeContainer: {
    background: "white",
    // height: "100vh",
    padding: "15vh 0",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "3vw",

    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  accordionHeader: {
    fontSize: "2.5vw",
    fontWeight: 900,
    backgroundImage: gradient,
    WebkitBackgroundClip: "text",
    color: "#884ed9",
    fontFamily: theme.typography.fontFamily,
    "@media (max-width: 600px)": {
      fontSize: 20,
      textAlign: "center",
    },
  },
});

const SectionThree = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.sThreeContainer}>
        <Typography variant={1} className={classes.accordionHeader}>
          Our Core Values Stand For
        </Typography>
        <AccordionUsage />
      </Box>
      <hr style={{ color: "#884ed9" }} />
    </>
  );
};

export default SectionThree;
