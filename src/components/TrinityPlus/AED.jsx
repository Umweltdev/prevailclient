import { useEffect } from 'react'
import AEDLandingPage from './AedComponents/page.js'

function Aed() {
    useEffect(() => {
        import("./AedComponents/globals.css");
    }, []);
  return (
    <AEDLandingPage/>
  )
}

export default Aed