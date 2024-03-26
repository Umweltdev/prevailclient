import React from 'react'
import HeroSection from './HeroSection'
import DrawerAppBarWhite from '../../Navbar/Appbar'
import PainPoint from './PainPoints'
import Advantages from './Advantages'
import Budget from './Budget'
import Footer from "../../Footer/Footer"
import FooterNew from '../../Footer/FooterNew'
import AppBarOne from '../../Navbar/Appbar'

const Mpd = () => {
  return (
    <div>
      <AppBarOne/>
      <HeroSection/>
      <PainPoint/>
      <Advantages/>
      <Budget/>
      <FooterNew/>
    </div>
  )
}

export default Mpd