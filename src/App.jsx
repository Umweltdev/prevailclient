import Landing from "./pages/Landing";
import About from "./pages/About";
import { Navigate, Route, Routes } from "react-router-dom";
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
import DigitalEcosystem from "./components/Explore/DigitalEcosystem/DigitalEcosystem";
import CustomerJourney from "./components/Explore/CustomerJourney/CustomerJourney";
import AboutOurWhy from "./components/About/AboutOurWhy";
import AboutOurSolution from "./components/About/AboutOurSolution";
import CaseDetails from "./components/Portfolio/CaseDetails";
import SignUpForm from "./pages/SignUp";
import LoginForm from "./pages/Login";

import Stepper from "./pages/Stepper";
import MobStepper from "./pages/MobStepper";
import UserDashBoard from "./pages/UserDashboard";
import Profile from "./components/user-dashboard/Profile";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./ScrollToTop";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import ResetPasswordForm from "./components/Form/ForgotPassword/ResetPasswordForm";

const stripePromise = loadStripe(
  "pk_test_51OsCJ5P1A39VkufThp1PVDexesvf2XAY8faTyK0uucC1qRl9NW9QkpBdwXQDyjCAjzL166zjMWNn5Zr25ZkaQJVi00vurq61mj"
);

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Elements stripe={stripePromise}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/reset_password/:id/:token" element={<ResetPasswordForm />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog/:index" element={<BlogDetails />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Services/brand" element={<BrandIdentity />} />
        <Route path="/Services/website" element={<WebsiteDevelopment />} />
        <Route
          path="/explore/digitalecosystem"
          element={<DigitalEcosystem />}
        />
        <Route path="/explore/customerjourney" element={<CustomerJourney />} />
        <Route path="/Services/webmanagement" element={<WebManagement />} />
        <Route path="/Services/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/Services/sem" element={<Sem />} />
        <Route path="/Services/mpd" element={<Mpd />} />
        <Route
          path="/Services/digitalaccelerator"
          element={<DigitalAccelerator />}
        />
        <Route path="/Portfolio/:index" element={<CaseDetails />} />
        <Route path="/about/ourWhy" element={<AboutOurWhy />} />
        <Route path="/about/ourSolution" element={<AboutOurSolution />} />
        <Route path="/SignUp" element={<SignUpForm />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Stepper" element={<Stepper />} />
        <Route path="/MobStepper" element={<MobStepper />} />
        <Route
          path="/UserDashboard"
          element={user ? <UserDashBoard /> : <Navigate to="/" />}
        />
        <Route
          path="/user/*"
          element={user ? <UserDashBoard /> : <Navigate to="/" />}
        />
      </Routes>
    </Elements>
  );
}

export default App;
