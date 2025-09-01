import MCDLandingPage from './Mcd/mcd-landing-page.js'
import { useEffect } from 'react';

function Mcd() {
  useEffect(() => {
        import("./Mcd/globals.css");
    }, []);
  return (
    <MCDLandingPage/>
  )
}

export default Mcd