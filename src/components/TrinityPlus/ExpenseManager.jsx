import { useEffect } from 'react'
import TrinityLandingPage from './ExpenseManager/page.js'

function ExpenseManager() {
    useEffect(() => {
        import("./ExpenseManager/globals.css");
    }, []);
  return (
    <TrinityLandingPage/>
  )
}

export default ExpenseManager