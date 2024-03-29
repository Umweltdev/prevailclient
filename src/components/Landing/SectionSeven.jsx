import React from "react";
import "./assets/landing.css";
import rev from "./assets/rev.svg";
import AccordionUsage from "../ReusedComponents/BrandIdAccordion";
import { Link } from "react-router-dom";
import AccordionExpandDefault from "../ReusedComponents/AccordionDefault";
import BasicCard from "./CardOurCores";
import images from "./assets/land2.png";
import CarouselOne from "./CarouselOne";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  imageCarousel: {
    width: "25vw",
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
});

const SectionSeven = () => {
  const classes = useStyles();
  return (
    <div className="sectionSeven">
      <div>
        <CarouselOne />
      </div>
      <div>
        <img className={classes.imageCarousel} src={images} alt="" />
      </div>
    </div>
  );
};

export default SectionSeven;
