import React from 'react'
import DrawerAppBarWhite from '../components/Navbar/Appbar'
import SignUp from "../components/Form/SignUp"
import FooterNew from '../components/Footer/FooterNew'

const SignUpForm = () => {
  return (
    <div>
        <DrawerAppBarWhite/>
        <br /> <br /> <br /> <br />
        <SignUp />
        <FooterNew/>
    </div>
  )
}

export default SignUpForm