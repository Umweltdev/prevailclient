import Landing from "./pages/Landing";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/About" element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
