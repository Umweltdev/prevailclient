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

const goalsObj = [
  {
    icon: <AddTask />,
    mainText: "Transparency",
    subText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
              consequatur voluptates possimus quo voluptate, exercitationem aut,
              enim tempore provident atque aspernatur. Architecto doloremque
              adipisci minus officia impedit? Odit, adipisci dolores.`,
  },
  {
    icon: <Groups />,
    mainText: "Collaboration",
    subText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
              consequatur voluptates possimus quo voluptate, exercitationem aut,
              enim tempore provident atque aspernatur. Architecto doloremque
              adipisci minus officia impedit? Odit, adipisci dolores.`,
  },
  {
    icon: <Gavel />,
    mainText: "Legal Digital Marketing Expert",
    subText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
              consequatur voluptates possimus quo voluptate, exercitationem aut,
              enim tempore provident atque aspernatur. Architecto doloremque
              adipisci minus officia impedit? Odit, adipisci dolores.`,
  },
  {
    icon: <Insights />,
    mainText: "Performance",
    subText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
              consequatur voluptates possimus quo voluptate, exercitationem aut,
              enim tempore provident atque aspernatur. Architecto doloremque
              adipisci minus officia impedit? Odit, adipisci dolores.`,
  },
];

const SectionThree = () => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(
    goalsObj.map(() => false)
  );

  const handleAddButtonClick = (index) => {
    const newVisibility = [...isDescriptionVisible];
    newVisibility[index] = !newVisibility[index];
    setIsDescriptionVisible(newVisibility);
  };

  return (
    <div className="sThreeContainer">
      <h1 className="sThreeHero">Our Values Stands For</h1>
      <div className="sThreeRight">
        {goalsObj.map((data, index) => (
          <div key={index} className="sThreeDropContainer">
            <div className="sThreeDropDown">
              <h1 className="sThreeDropMainText">
                {data.icon} {data.mainText}
              </h1>
              <button onClick={() => handleAddButtonClick(index)}>
                {isDescriptionVisible[index] ? (
                  <Remove sx={{ fontSize: 24, color: "red" }} />
                ) : (
                  <Add style={{ fontSize: 24, color: "#333", border: "none" }} />
                )}
              </button>
            </div>

            {isDescriptionVisible[index] && (
              <p className="sThreeDropText">{data.subText}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
