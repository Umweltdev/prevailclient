import React from 'react'
import DrawerAppBarWhite from "../../Navbar/Appbar";
import FooterNew from '../../Footer/FooterNew';
import Hero from './Hero';
import Trigger from './Trigger';
import Presence from './Presence';
import Evaluation from './Evaluation';
import Purchase from './Purchase';
import SpecialOffer from './SpecialOffer';

const CustomerJourney = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
        <DrawerAppBarWhite />
        
        <Hero />
        <Trigger />
        <Presence />
        <Evaluation />
        <Purchase />
        <SpecialOffer />
        <FooterNew />
    </div>
  )
}

export default CustomerJourney