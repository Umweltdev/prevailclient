import React from 'react'
import { Helmet } from "react-helmet";
import DrawerAppBarWhite from "../../Navbar/Appbar";
import FooterNew from "../../Footer/FooterNew";
import Digital from './Digital';


const DigitalEcosystem = () => {
  return (
  <>
    <Helmet>
        <title>Enhance Your Digital Strategy for Lasting Impact</title>
        <meta
          name="description"
          content="Navigate Your Brand's Digital Domain to Build Awareness and Gain Advantage"
        />
      </Helmet>
      <div style={{ width: "100%", overflow: "hidden" }}>
      <DrawerAppBarWhite />
      <Digital />
      <FooterNew />  
    </div>
  </>
  )
}

export default DigitalEcosystem