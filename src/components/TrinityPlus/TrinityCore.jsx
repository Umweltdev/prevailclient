import TrinityCore from "./TrinityCore/page.js";
import { styles } from "./TrinityCore/style.js";
import { useEffect } from "react";

function Trinitycore() {
  useEffect(() => {
    // Inject styles when component mounts
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    
    // Cleanup function to remove styles when component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  return (
    <div>
      <style>
        {styles}
      </style>
      <TrinityCore />
    </div>
  );
}

export default Trinitycore;
