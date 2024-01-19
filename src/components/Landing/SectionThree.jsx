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
    mainText: "Empowering Local Businesses",
    subText: `Recognise the struggle of local SMEs in the current economic climate. Prevail is committed to empowering these businesses, providing them with the tools and resources to compete effectively against larger enterprises.`,
  },
  {
    icon: <Groups />,
    mainText: "Innovative and Accessible Technology",
    subText: `Address the gap in technology accessibility between large corporations and “small-to-medium-sized" enterprises (SMEs). Prevail will focus on bringing innovative, affordable tech solutions to local businesses, allowing them to harness automation and other advancements without the need for full-time programmers.`,
  },
  {
    icon: <Gavel />,
    mainText: "Adaptive Business Strategies",
    subText: `Understand the volatility in consumer demands and behaviours. Prevail offers insights and tools to help local businesses quickly adapt to changing market conditions, ensuring they remain competitive and responsive to consumer needs.`,
  },
  {
    icon: <Insights />,
    mainText: "Market Equity and Fair Competition",
    subText: `Address the challenge of market share decline for local businesses. Prevail stands for creating a more equitable market where local businesses can compete fairly with larger enterprises, ensuring diversity and choice in the market.`,
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
      <h1 className="sThreeHero">Our Core Values Stands For</h1>
      <div className="sThreeRight">
        {goalsObj.map((data, index) => (
          <div key={index} className="sThreeDropContainer">
            <div className="sThreeDropDown">
              <h1 className="sThreeDropMainText">
                {data.icon} {data.mainText}
              </h1>
              <button onClick={() => handleAddButtonClick(index)}>
                {isDescriptionVisible[index] ? (
                  <Remove
                    style={{
                      fontSize: 24,
                      color: "red",
                      border: "none",
                      background: "white",
                    }}
                  />
                ) : (
                  <Add
                    style={{
                      fontSize: 24,
                      color: "#333",
                      border: "none",
                      background: "white",
                    }}
                  />
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
