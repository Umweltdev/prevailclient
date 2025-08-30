import { useEffect } from 'react'
import GAROLandingPage from './Garo/page';

function Garo() {
     useEffect(() => {
        import("./Garo/globals.css");
    }, []);
  return (
    <GAROLandingPage/>
  )
}

export default Garo