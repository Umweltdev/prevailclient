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
import { Box } from "@mui/material";

const SectionThree = ({ gradient }) => {
  return (
    <Box
      sx={{
        background:
          gradient || "linear-gradient(45deg, #A16AD9 30%, #70A1E3 90%)",
      }}
      className="sThreeContainer"
    >
      <h1 className="sThreeHero">Our Core Values Stands For</h1>
      <AccordionUsage />
    </Box>
  );
};

export default SectionThree;
