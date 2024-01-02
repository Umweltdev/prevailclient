import React from "react";
import logo from "./assets/romaxx.png";

const SectionSix = () => {
  const slideImages = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://i.roamcdn.net/kazi/ng/hq/4c1f78c8cbad809489985bbe65e3a703/-/advertiser-img-ng-jobs-prod/dealer-images/advid287638/adv287638_1698766446.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
  ];
  return (
    <div className="sSixServices">
      {slideImages.map((data, index) => (
        <div key={index} className="sSixCardContainer">
          <img className="sSixCardImg" src={data} alt="" />
        </div>
      ))}
    </div>
  );
};

export default SectionSix;
