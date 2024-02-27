import { Add } from "@mui/icons-material";
import { useState } from "react";
import { FAQS } from "./assets/OurWhyObjects";

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
        <h1 className="sThreeAbouHero">Frequently Asked Questions</h1>
      </div>
      <div className="sThreeHeroFAQS">
        {FAQS.map((data, index) => (
          <div key={index} className="sThreeAboutLeft">
            <h2
              className="sThreeAbouHeader"
              onClick={() => toggleDropDown(index)}
            >
              {data.question} <Add />
            </h2>
            {/* Show the <p> tag only if isDropDownVisible for this FAQ is true */}
            {isDropDownVisible[index] && (
              <p className="sThreeAboutText">{data.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
