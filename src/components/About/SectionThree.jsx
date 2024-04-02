import { Add } from "@mui/icons-material";
import { useState } from "react";
import { FAQS } from "./assets/OurWhyObjects";
import AccordionUsage from "../ReusedComponents/FaqAccordion";
import "./SectionThree.css";

const SectionThree = () => {
  // State to manage the visibility of each FAQ item
  const [isDropDownVisible, setDropDownVisible] = useState(
    new Array(FAQS.length).fill(false)
  );

  // Function to toggle the visibility of the <p> tag for a specific FAQ item
  const toggleDropDown = (index) => {
    setDropDownVisible((prev) =>
      prev.map((value, i) => (i === index ? !value : false))
    );
  };

  return (
    <div className="sThreeAboutContainer">
      <div className="sThreeHeroSection">
        <h1 className="sThreeAbouHero sarabun-thin">Frequently Asked Questions</h1>
      </div>
      <div className="sThreeHeroFAQS">
        {FAQS.map((data, index) => (
          <AccordionUsage key={index} header={data.question} headerText={data.answer} />
        ))}
      </div>
    </div> 
  );
};

export default SectionThree;
