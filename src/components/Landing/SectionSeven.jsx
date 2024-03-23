import React from "react";
import "./assets/landing.css";
import rev from "./assets/rev.svg";
import AccordionUsage from "../ReusedComponents/BrandIdAccordion";
import { Link } from "react-router-dom";
import AccordionExpandDefault from "../ReusedComponents/AccordionDefault";
import BasicCard from "./CardOurCores";
import images from "./assets/land2.png";
import CarouselOne from "./CarouselOne";

const SectionSeven = () => {
  return (
    <div className="sectionSeven">
      <div>
        <img className="sectSevenImage" src={images} alt="" />
      </div>
      <div>
        <CarouselOne />
      </div>
    </div>
  );
};

export default SectionSeven;
