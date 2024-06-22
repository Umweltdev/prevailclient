import React from "react";
import logo from "./pm2.png";
import "./Loading.css";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <img className="blink" src={logo} alt="" />
    </div>
  );
};

export default Loading;
