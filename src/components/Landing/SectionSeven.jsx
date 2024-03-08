import React from "react";
import "./assets/landing.css";
import rev from "./assets/rev.svg";
import AccordionUsage from "../ReusedComponents/BrandIdAccordion";
import { Link } from "react-router-dom";
import AccordionExpandDefault from "../ReusedComponents/AccordionDefault";
import BasicCard from "./CardOurCores";

const SectionSeven = () => {
  return (
    <div className="sectionSeven">
      <BasicCard />

      <AccordionExpandDefault />
    </div>
  );
};

export default SectionSeven;
