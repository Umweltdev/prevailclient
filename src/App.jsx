import Landing from "./pages/Landing";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BlogDetails from "./components/Blog/BlogDetails";
import BrandIdentity from "./components/Services/BrandIdentity/BrandIdentity";
import WebsiteDevelopment from "./components/Services/WebsiteDevelopement/WebsiteDevelopment";
import WebManagement from "./components/Services/WebManagement/WebManagement";
import Sem from "./components/Services/Sem/Sem";
import Mpd from "./components/Services/Mpd/Mpd";
import DigitalAccelerator from "./components/Services/DigitalAccelerator/DigitalAccelerator";
import AboutOurWhy from "./components/About/AboutOurWhy";
import AboutOurSolution from "./components/About/AboutOurSolution";
import CaseDetails from "./components/Portfolio/CaseDetails";
import SignUpForm from "./pages/SignUp";
import LoginForm from "./pages/Login";

import Stepper from "./pages/Stepper";
import MobStepper from "./pages/MobStepper";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/About" element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Blog/:index" element={<BlogDetails />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Services/brand" element={<BrandIdentity />} />
      <Route path="/Services/website" element={<WebsiteDevelopment />} />
      <Route path="/Services/webmanagement" element={<WebManagement />} />
      <Route path="/Services/sem" element={<Sem />} />
      <Route path="/Services/mpd" element={<Mpd />} />
      <Route
        path="/Services/digitalaccelerator"
        element={<DigitalAccelerator />}
      />
      <Route path="/Portfolio/:index" element={<CaseDetails />} />
      <Route
        path="/Services/digitalaccelerator"
        element={<DigitalAccelerator />}
      />
      <Route path="/about/ourWhy" element={<AboutOurWhy />} />
      <Route path="/about/ourSolution" element={<AboutOurSolution />} />
      <Route path="/Sign Up" element={<SignUpForm />} />
      <Route path="/Login" element={<LoginForm />} />
      <Route path="/Stepper" element={<Stepper />} />
      <Route path="/MobStepper" element={<MobStepper />} />
    </Routes>
  );
}

export default App;
