import React, { Suspense, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ScrollToTop from "./ScrollToTop";
import { AuthContext } from "./context/AuthContext";
import Loading from "./components/utils/Loading";

// Lazy load pages and components
const Landing = React.lazy(() => import("./pages/Landing"));
const About = React.lazy(() => import("./pages/About"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Services = React.lazy(() => import("./pages/Services"));
const Contact = React.lazy(() => import("./pages/Contact"));
const BlogDetails = React.lazy(() => import("./components/Blog/BlogDetails"));
const BrandIdentity = React.lazy(() =>
  import("./components/Services/BrandIdentity/BrandIdentity")
);
const WebsiteDevelopment = React.lazy(() =>
  import("./components/Services/WebsiteDevelopement/WebsiteDevelopment")
);
const WebManagement = React.lazy(() =>
  import("./components/Services/WebManagement/WebManagement")
);
const Sem = React.lazy(() => import("./components/Services/Sem/Sem"));
const Mpd = React.lazy(() => import("./components/Services/Mpd/Mpd"));
const DigitalAccelerator = React.lazy(() =>
  import("./components/Services/DigitalAccelerator/DigitalAccelerator")
);
const DigitalEcosystem = React.lazy(() =>
  import("./components/Explore/DigitalEcosystem/DigitalEcosystem")
);
const CustomerJourney = React.lazy(() =>
  import("./components/Explore/CustomerJourney/CustomerJourney")
);
const AboutOurWhy = React.lazy(() => import("./components/About/AboutOurWhy"));
const AboutOurSolution = React.lazy(() =>
  import("./components/About/AboutOurSolution")
);
const CaseDetails = React.lazy(() =>
  import("./components/Portfolio/CaseDetails")
);
const SignUpForm = React.lazy(() => import("./pages/SignUp"));
const LoginForm = React.lazy(() => import("./pages/Login"));
const Stepper = React.lazy(() => import("./pages/Stepper"));
const MobStepper = React.lazy(() => import("./pages/MobStepper"));
const UserDashBoard = React.lazy(() => import("./pages/UserDashboard"));
const Profile = React.lazy(() => import("./components/user-dashboard/Profile"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const ResetPasswordForm = React.lazy(() =>
  import("./components/Form/ForgotPassword/ResetPasswordForm")
);

const stripePromise = loadStripe(
  "pk_test_51OsCJ5P1A39VkufThp1PVDexesvf2XAY8faTyK0uucC1qRl9NW9QkpBdwXQDyjCAjzL166zjMWNn5Zr25ZkaQJVi00vurq61mj"
);

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Elements stripe={stripePromise}>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/reset_password/:id/:token"
            element={<ResetPasswordForm />}
          />
          <Route path="/about-us" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/Blog/:index" element={<BlogDetails />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Services/brand" element={<BrandIdentity />} />
          <Route path="/Services/website" element={<WebsiteDevelopment />} />
          <Route
            path="/explore/digitalecosystem"
            element={<DigitalEcosystem />}
          />
          <Route
            path="/explore/customerjourney"
            element={<CustomerJourney />}
          />
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
      </Suspense>
    </Elements>
  );
}

export default App;
