
import TrinityPlusPage from "./TrinityPlus/page.js";
import { style } from "./TrinityPlus/styles.js";

function TrinityPlus() {

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
