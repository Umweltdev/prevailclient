// import "./TrinityPlus/globals.css";
import { useEffect } from "react";
import TrinityPlusPage from "./TrinityPlus/page.js";
import { style } from "./TrinityPlus/styles.js";

function TrinityPlus() {
    useEffect(() => {
    // Inject styles when component mounts
    const styleElement = document.createElement('style');
    styleElement.textContent = style;
    document.head.appendChild(styleElement);
    
    // Cleanup function to remove styles when component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div>
      <style>
        {style}
      </style>
      <TrinityPlusPage />
    </div>
  );
}

export default TrinityPlus;
