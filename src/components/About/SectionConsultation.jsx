import React from "react";
import consult from "./assets/consult.svg";
import "./SectionConsultation.css"; 

const SectionConsultation = () => {
  return (
    <div className="consultation">
      <img className="img-consult" src={consult} alt="" />
    </div>
  );
};

export default SectionConsultation;
