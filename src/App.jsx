import Landing from "./pages/Landing";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/About" element={<About/>} />
    </Routes>
  );
}

export default App;
