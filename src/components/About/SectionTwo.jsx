import React, { useState } from "react";
import "./assets/about.css";
import { OurWhy } from "./assets/OurWhyObjects";

const SectionTwo = () => {
  const [dropDownStates, setDropDownStates] = useState(OurWhy.map(() => false));

  const toggleDropDown = (index) => {
    setDropDownStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="sTwoAboutContainer">
      <div className="sTwoAboutHero">
        <h1 className="sTwoAboutHeroHeader">OUR WHY</h1>
        <div className="sTwoAboutHeroLine"></div>
      </div>
      {OurWhy.map((data, index) => (
        <div key={index} className="sTwoAboutDropDown">
          <h1
            className="sTwoAbouDropHeader"
            onClick={() => toggleDropDown(index)}
          >
            {data.header}
          </h1>
          <div
            className={`sTwoAboutDropContent ${
              dropDownStates[index] ? "visible" : ""
            }`}
          >
            {dropDownStates[index] && <p>{data.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionTwo;
