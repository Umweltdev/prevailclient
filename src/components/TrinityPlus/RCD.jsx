import { useEffect  } from 'react';
import RcdLanding from './Rcd/rcd-viral-landing.js'

function Rcd() {
  useEffect(() => {
      import("./Rcd/globals.css");
  }, []);
  return (
    <RcdLanding/>
  )
}

export default Rcd