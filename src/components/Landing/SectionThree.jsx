import React, { useState } from "react";
import {
  Add,
  BlurCircular,
  Remove,
  AddTask,
  GroupWork,
  GroupWorkOutlined,
  Groups,
  Gavel,
  Insights,
} from "@mui/icons-material";
import "./assets/landing.css";

import AccordionUsage from "../ReusedComponents/Accordion";
import { Box, Typography } from "@mui/material";

const gradient = "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)";

const SectionThree = () => {
  return (
    <Box className="sThreeContainer">
      <Typography
        variant="h5"
        sx={{
          fontSize: 30,
          fontWeight: 900,
          backgroundImage: gradient,
          WebkitBackgroundClip: "text",
          color: "transparent",
          "@media (max-width: 600px)": {
            fontSize: 20,
            textAlign: "center"
          },
        }}
      >
        Our Core Values Stands For
      </Typography>
      <AccordionUsage />
    </Box>
  );
};

export default SectionThree;
