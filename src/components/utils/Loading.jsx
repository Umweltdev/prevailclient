import React from "react";
import logo from "./newlogo.svg";
import "./Loading.css";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        background: "linear-gradient(135deg, #d1c4e9, #ffffff, #bbdefb)",
        height: "100vh"
      }}
    >
      <img className="blink" src={logo} alt="" />
    </div>
  );
};

export default Loading;
