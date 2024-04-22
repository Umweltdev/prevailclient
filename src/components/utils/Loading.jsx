import React from "react";
import logo from "./pm2.png";
import "./Loading.css";

const Loading = () => {
  return (
    <div style={{ margin: "auto 50vw" }}>
      <img className="blink" src={logo} alt="" />
    </div>
  );
};

export default Loading;
