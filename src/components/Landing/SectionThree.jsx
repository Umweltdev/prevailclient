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
import connect from "./assets/connect.png";
import data from "./assets/data.png";
import bulb from "./assets/bulb.png";
import badge from "./assets/badge.png";
import add from "./assets/add.png";
import remove from "./assets/remove.png";

const goalsObj = [
  {
    icon: connect,
    mainText: "Empowering Local Businesses",
    subText: `Recognise the struggle of local SMEs in the current economic climate. Prevail is committed to empowering these businesses, providing them with the tools and resources to compete effectively against larger enterprises.`,
  },
  {
    icon: data,
    mainText: "Innovative and Accessible Technology",
    subText: `Address the gap in technology accessibility between large corporations and “small-to-medium-sized" enterprises (SMEs). Prevail will focus on bringing innovative, affordable tech solutions to local businesses, allowing them to harness automation and other advancements without the need for full-time programmers.`,
  },
  {
    icon: bulb,
    mainText: "Adaptive Business Strategies",
    subText: `Understand the volatility in consumer demands and behaviours. Prevail offers insights and tools to help local businesses quickly adapt to changing market conditions, ensuring they remain competitive and responsive to consumer needs.`,
  },
  {
    icon: badge,
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
                <img
                  src={data.icon}
                  alt={data.mainText}
                  style={{ width: "3.5vw" }}
                />{" "}
                {data.mainText}
              </h1>
              <div onClick={() => handleAddButtonClick(index)}>
                {isDescriptionVisible[index] ? (
                  <img
                    src={remove}
                    alt=""
                    style={{
                      width: "2.5vw",
                    }}
                  />
                ) : (
                  <img
                    src={add}
                    alt=""
                    style={{
                      width: "2.5vw",
                    }}
                  />
                )}
              </div>
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
