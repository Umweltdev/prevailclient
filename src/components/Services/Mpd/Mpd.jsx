import React from 'react'
import HeroSection from './HeroSection'
import DrawerAppBarWhite from '../../Navbar/Appbar'
import PainPoint from './PainPoints'
import Advantages from './Advantages'
import Budget from './Budget'
import Footer from "../../Footer/Footer"

const Mpd = () => {
  return (
    <div>
      <DrawerAppBarWhite/>
      <HeroSection/>
      <PainPoint/>
      <Advantages/>
      <Budget/>
      <Footer/>
    </div>
  )
}

export default Mpd