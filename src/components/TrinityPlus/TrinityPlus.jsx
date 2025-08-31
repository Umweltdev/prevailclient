// import React from 'react'
import { useEffect } from "react";
import TrinityPlusPage from "./TrinityPlus/page.js"

function TrinityPlus() {
  useEffect(() => {
        import("./TrinityPlus/styles/globals.css");
    }, []);
  return (
    <TrinityPlusPage/>
  )
}

export default TrinityPlus