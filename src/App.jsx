import React, { Suspense, useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ScrollToTop from "./ScrollToTop";
import { AuthContext } from "./context/AuthContext";
import Loading from "./components/utils/Loading";
import ErrorBoundary from "./components/utils/ErrorBoundary";
import NotFoundPage from "./components/utils/NotFoundPage";
import { Helmet } from "react-helmet";
import CookieConsent from "react-cookie-consent";
import { Box } from "@mui/material";
import ConsentBar from "./components/Footer/ConsentBar";

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
const VisualBrandIdentity = React.lazy(() =>
  import("./components/Services/BrandIdentity/VisualBrandIdentity")
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
const EmpowerYourBussiness = React.lazy(() =>
  import("./components/Services/DigitalAccelerator/EmpowerYourBussiness")
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
const UserConsent = React.lazy(() => import("./components/Footer/ConsentPage"));
const viteKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
const stripePromise = loadStripe(viteKey);

function App() {
  const { user } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);

  const handleAcceptCookies = () => {
    // Push an event to Google Tag Manager when cookies are accepted
    window.dataLayer.push({ event: "cookie_consent_given" });
  };

  return (
    <>
      <Elements stripe={stripePromise}>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <ErrorBoundary>
            <Routes>
              {/* Define the new routes */}
              <Route path="/" element={<Landing />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/blog/:index" element={<BlogDetails />} />
              <Route path="/service-landing-page" element={<Services />} />
              <Route
                path="/service/brand-identity-package"
                element={<BrandIdentity />}
              />
              <Route
                path="/explore/digital-ecosystem"
                element={<DigitalEcosystem />}
              />
              <Route
                path="/explore/customer-journey"
                element={<CustomerJourney />}
              />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route
                path="/service/brand-identity-package/visual-brand-identity"
                element={<VisualBrandIdentity />}
              />
              <Route
                path="/service/custom-website-development"
                element={<WebsiteDevelopment />}
              />
              <Route
                path="/service/website-development"
                element={<WebManagement />}
              />
              <Route
                path="/service/search-engine-marketing"
                element={<Sem />}
              />
              <Route
                path="/service/marketing-pricing-displacement"
                element={<Mpd />}
              />
              <Route
                path="/service/digital-accelerator-bundle"
                element={<DigitalAccelerator />}
              />
              <Route
                path="/service/digital-accelerator-bundle/empower-your-business"
                element={<EmpowerYourBussiness />}
              />
              <Route path="/portfolio/:index" element={<CaseDetails />} />
              <Route path="/about/ourWhy" element={<AboutOurWhy />} />
              <Route path="/about/ourSolution" element={<AboutOurSolution />} />
              <Route path="/SignUp" element={<SignUpForm />} />
              <Route path="/Login" element={<LoginForm />} />
              <Route path="/Stepper" element={<Stepper />} />
              <Route path="/MobStepper" element={<MobStepper />} />
              <Route path="/user-consent" element={<UserConsent />} />
              <Route
                path="/UserDashboard"
                element={user ? <UserDashBoard /> : <Navigate to="/" />}
              />

              <Route
                path="/user/*"
                element={
                  user ? <UserDashBoard socket={socket} /> : <Navigate to="/" />
                }
              />

              {/* Redirect old routes to the new routes */}
              <Route path="/About" element={<Navigate to="/about-us" />} />
              <Route path="/Portfolio" element={<Navigate to="/portfolio" />} />
              <Route path="/Blog" element={<Navigate to="/blog" />} />
              <Route path="/Contact" element={<Navigate to="/contact-us" />} />
              <Route
                path="/Blog/:index"
                element={<Navigate to="/blog/:index" />}
              />
              <Route
                path="/Services"
                element={<Navigate to="/service-landing-page" />}
              />
              <Route
                path="/Services/brand"
                element={<Navigate to="/service/brand-identity-package" />}
              />
              <Route
                path="/Services/website"
                element={<Navigate to="/service/custom-website-development" />}
              />
              <Route
                path="/Services/webmanagement"
                element={<Navigate to="/service/website-development" />}
              />
              <Route
                path="/Services/sem"
                element={<Navigate to="/service/search-engine-marketing" />}
              />
              <Route
                path="/Services/mpd"
                element={
                  <Navigate to="/service/marketing-pricing-displacement" />
                }
              />
              <Route
                path="/privacypolicy"
                element={<Navigate to="/privacy-policy" />}
              />
              <Route
                path="/Services/digitalaccelerator"
                element={<Navigate to="/service/digital-accelerator-bundle" />}
              />
              <Route
                path="/Portfolio/:index"
                element={<Navigate to="/portfolio/:index" />}
              />
              <Route
                path="/about/ourWhy"
                element={<Navigate to="/about/ourWhy" />}
              />
              <Route
                path="/about/ourSolution"
                element={<Navigate to="/about/ourSolution" />}
              />
              <Route path="/SignUp" element={<Navigate to="/SignUp" />} />
              <Route path="/Login" element={<Navigate to="/Login" />} />
              <Route path="/Stepper" element={<Navigate to="/Stepper" />} />
              <Route
                path="/MobStepper"
                element={<Navigate to="/MobStepper" />}
              />
              <Route
                path="/UserDashboard"
                element={<Navigate to="/UserDashboard" />}
              />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Box
          sx={{
            width: "50vw",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            "@media (max-width: 600px)": {
              width: "95vw",
            },
          }}
        >
          <ConsentBar />
        </Box>
      </Elements>
    </>
  );
}

export default App;
