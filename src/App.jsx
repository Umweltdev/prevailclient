import Landing from "./pages/Landing";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BlogDetails from "./components/Blog/BlogDetails";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Landing />} />
      <Route path="/About" element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Blog/:index" element={<BlogDetails />} />
    </Routes>
  );
}

export default App;
