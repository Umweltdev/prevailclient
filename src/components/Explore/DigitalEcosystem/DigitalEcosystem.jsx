import React from 'react'
import DrawerAppBarWhite from "../../Navbar/Appbar";
import FooterNew from "../../Footer/FooterNew";
import Digital from './Digital';


const DigitalEcosystem = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <DrawerAppBarWhite />
      <Digital />
      <FooterNew />  
    </div>
  )
}

export default DigitalEcosystem