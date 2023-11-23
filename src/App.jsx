import Landing from "./pages/Landing";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/About" element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
