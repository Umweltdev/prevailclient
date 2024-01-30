import "./assets/services.css";
import React, { useState } from "react";
import { EstateSilver, cusExecItem, customItems, shopifyGold, shopifySilver } from "../Portfolio/assets/PortfolioData";
import { ArrowDownward } from "@mui/icons-material";

const SectionFour = () => {
  const [shopifySilverItems, setShopifySilverItems] = useState(5);
  const [shopifyGoldItems, setShopifyGoldItems] = useState(5);
  const [shopifyCustomItems, setShopifyCustomItems] = useState(5);
  const [shopifyExecItems, setShopifyExecItems] = useState(5);
  const [shopifyExecCusItems, setShopifyExecCusItems] = useState(5);

  const handleLoadSilver = () => {
    // Increase the number of items to display
    setShopifySilverItems(shopifySilverItems + 5);
  };

  const handleLoadGold = () => {
    // Increase the number of items to display
    setShopifyGoldItems(shopifyGoldItems + 5);
  };

  const handleLoadCustom = () => {
    // Increase the number of items to display
    setShopifyCustomItems(shopifyCustomItems + 5);
  };

  const handleLoadExec = () => {
    // Increase the number of items to display
    setShopifyExecItems(shopifyExecItems + 5);
  };

   const handleLoadExecCus = () => {
     // Increase the number of items to display
     setShopifyExecCusItems(shopifyExecCusItems + 5);
   };


  return (
    <div className="sFourServiceContainer">
      <h1 className="sFourServiceHeader">Our Packages</h1>
      <div className="sFourServiceCards">
        {/* ONE */}
        <div className="sFourServiceCardSmall">
          <div className="sFourServiceCardTwo">
            <h1 className="sFourServiceCardTwo1">Shopify Silver Package</h1>
            <p className="sFourServiceCardSpanText">Original €2,000 once-off</p>
            <ul className="sFourServiceCardList">
              {shopifySilver.slice(0, shopifySilverItems).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {shopifySilverItems < 30 && ( // Assuming you have a maximum of 30 items
              <button
                className="sFourServiceLoadMore"
                onClick={handleLoadSilver}
              >
                Load More{" "}
                <ArrowDownward sx={{ color: "#0076ff", fontSize: "1vw" }} />
              </button>
            )}
            <p className="sFourServiceCardBottom">Original €2,000 once-off</p>
            <button className="sFourServiceCardBtn">Get A Qoute</button>
          </div>
        </div>

        {/* TWO */}
        <div className="sFourServiceCardSmall">
          <div className="sFourServiceCardTwo">
            <h1 className="sFourServiceCardTwo1">Shopify Gold Package</h1>
            <p className="sFourServiceCardSpanText">Original €3,000 once-off</p>
            <ul className="sFourServiceCardList">
              {shopifyGold.slice(0, shopifyGoldItems).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {shopifyGoldItems < shopifyGold.length && ( // Assuming you have a maximum of 30 items
              <button className="sFourServiceLoadMore" onClick={handleLoadGold}>
                Load More{" "}
                <ArrowDownward sx={{ color: "#0076ff", fontSize: "1vw" }} />
              </button>
            )}
            <p className="sFourServiceCardBottom">Original €3,000 once-off</p>
            <button className="sFourServiceCardBtn">Get A Qoute</button>
          </div>
        </div>

        {/* THREE */}
        <div className="sFourServiceCardSmall">
          <div className="sFourServiceCardTwo">
            <h1 className="sFourServiceCardTwo1">
              Custom Website Complete Package{" "}
            </h1>
            <p className="sFourServiceCardSpanText">Consultation Meeting</p>
            <ul className="sFourServiceCardList">
              {customItems.slice(0, shopifyCustomItems).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {shopifyCustomItems < customItems.length && ( // Assuming you have a maximum of 30 items
              <button
                className="sFourServiceLoadMore"
                onClick={handleLoadCustom}
              >
                Load More{" "}
                <ArrowDownward sx={{ color: "#0076ff", fontSize: "1vw" }} />
              </button>
            )}
            <p className="sFourServiceCardBottom">
              Custom Website Complete Package
            </p>
            <button className="sFourServiceCardBtn">Get A Qoute</button>
          </div>
        </div>

        {/* FOUR */}
        <div className="sFourServiceCardSmall">
          <div className="sFourServiceCardTwo">
            <h1 className="sFourServiceCardTwo1">
              Custom Website Executive Package{" "}
            </h1>
            <p className="sFourServiceCardSpanText">Consultation</p>
            <ul className="sFourServiceCardList">
              {cusExecItem.slice(0, shopifyExecItems).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {shopifyExecItems < cusExecItem.length && ( // Assuming you have a maximum of 30 items
              <button className="sFourServiceLoadMore" onClick={handleLoadExec}>
                Load More{" "}
                <ArrowDownward sx={{ color: "#0076ff", fontSize: "1vw" }} />
              </button>
            )}
            <p className="sFourServiceCardBottom">Consultancy</p>
            <button className="sFourServiceCardBtn">Get A Qoute</button>
          </div>
        </div>

        {/* FIVE */}
        <div className="sFourServiceCardSmall exec">
          <div className="sFourServiceCardTwo">
            <h1 className="sFourServiceCardTwo1">
              Custom Website Executive Package{" "}
            </h1>
            <p className="sFourServiceCardSpanText">Consultation</p>
            <ul className="sFourServiceCardList">
              {EstateSilver.slice(0, shopifyExecCusItems).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {shopifyExecCusItems < EstateSilver.length && (
              <button
                className="sFourServiceLoadMore"
                onClick={handleLoadExecCus}
              >
                Load More{" "}
                <ArrowDownward sx={{ color: "#0076ff", fontSize: "1vw" }} />
              </button>
            )}
            <p className="sFourServiceCardBottom">Consultancy</p>
            <button className="sFourServiceCardBtn">Get A Qoute</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
