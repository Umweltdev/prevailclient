import React, { Suspense, useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ScrollToTop from "./ScrollToTop";
import { AuthContext } from "./context/AuthContext";
import Loading from "./components/utils/Loading";
import ErrorBoundary from "./components/utils/ErrorBoundary";
import NotFoundPage from "./components/utils/NotFoundPage";
import { Box } from "@mui/material";
import ConsentBar from "./components/Footer/ConsentBar";
import CostCalculation from "./components/Services/CostCalculation/CostCalculation";
import IndustryStep from "./components/Services/CostCalculation/steps/IndustryStep";
import GoalsStep from "./components/Services/CostCalculation/steps/GoalsStep";
import InvestmentStep from "./components/Services/CostCalculation/steps/InvestmentStep";
import SpecializedStep from "./components/Services/CostCalculation/steps/SpecializedStep";
import UniversalStep from "./components/Services/CostCalculation/steps/UniversalStep";
import GetStartedStep from "./components/Services/CostCalculation/steps/GetStartedStep";
import BookingPage from "./pages/Booking.jsx";

const Landing = React.lazy(() => import("./pages/Landing"));
const About = React.lazy(() => import("./pages/About"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Services = React.lazy(() => import("./pages/Services"));
const Contact = React.lazy(() => import("./pages/Contact"));
const BlogDetails = React.lazy(() => import("./components/Blog/BlogDetails"));
const BrandIdentity = React.lazy(
  () => import("./components/Services/BrandIdentity/BrandIdentity")
);
const VisualBrandIdentity = React.lazy(
  () => import("./components/Services/BrandIdentity/VisualBrandIdentity")
);
const WebsiteDevelopment = React.lazy(
  () => import("./components/Services/WebsiteDevelopement/WebsiteDevelopment")
);
const WebDevWizardPage = React.lazy(() => import("./pages/WebDevWizardPage"));
const WebManagement = React.lazy(
  () => import("./components/Services/WebManagement/WebManagement")
);
const Sem = React.lazy(() => import("./components/Services/Sem/Sem"));
const Mpd = React.lazy(() => import("./components/Services/Mpd/Mpd"));
const DigitalAccelerator = React.lazy(
  () => import("./components/Services/DigitalAccelerator/DigitalAccelerator")
);
const EmpowerYourBussiness = React.lazy(
  () => import("./components/Services/DigitalAccelerator/EmpowerYourBussiness")
);
const TrinityCore = React.lazy(
  () => import("./components/TrinityPlus/TrinityCore")
);
const TrinityPlus = React.lazy(
  () => import("./components/TrinityPlus/TrinityPlus")
);
const ExpenseManager = React.lazy(
  () => import("./components/TrinityPlus/ExpenseManager")
);
const Garo = React.lazy(() => import("./components/TrinityPlus/Garo"));
const Mcd = React.lazy(() => import("./components/TrinityPlus/MCD"));
const Rcd = React.lazy(() => import("./components/TrinityPlus/RCD"));
const Aed = React.lazy(() => import("./components/TrinityPlus/AED"));
const DigitalEcosystem = React.lazy(
  () => import("./components/Explore/DigitalEcosystem/DigitalEcosystem")
);
const CustomerJourney = React.lazy(
  () => import("./components/Explore/CustomerJourney/CustomerJourney")
);
const AboutOurWhy = React.lazy(() => import("./components/About/AboutOurWhy"));
const AboutOurSolution = React.lazy(
  () => import("./components/About/AboutOurSolution")
);
const CaseDetails = React.lazy(
  () => import("./components/Portfolio/CaseDetails")
);
const SignUpForm = React.lazy(() => import("./pages/SignUp"));
const LoginForm = React.lazy(() => import("./pages/Login"));
const Stepper = React.lazy(() => import("./pages/Stepper"));
const MobStepper = React.lazy(() => import("./pages/MobStepper"));
const UserDashBoard = React.lazy(() => import("./pages/UserDashboard"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const UserConsent = React.lazy(() => import("./components/Footer/ConsentPage"));

const viteKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
const stripePromise = loadStripe(viteKey);

function App() {
  const { user } = useContext(AuthContext);
  const [socket] = useState(null);
  return (
    <>
      <Elements stripe={stripePromise}>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/blog/:index" element={<BlogDetails />} />
              <Route path="/service-landing-page" element={<Services />} />
              <Route path="/step1" element={<IndustryStep />} />
              <Route path="/step2" element={<GoalsStep />} />
              <Route path="/step3" element={<InvestmentStep />} />
              <Route path="/step4" element={<SpecializedStep />} />
              <Route path="/step5" element={<UniversalStep />} />
              <Route path="/step6" element={<GetStartedStep />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              <Route
                path="/service/brand-identity-package"
                element={<BrandIdentity />}
              />
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
                path="/service/cost-calculation"
                element={<CostCalculation />}
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

              <Route path="/quote-builder" element={<WebDevWizardPage />} />

              <Route
                path="/explore/digital-ecosystem"
                element={<DigitalEcosystem />}
              />
              <Route
                path="/explore/customer-journey"
                element={<CustomerJourney />}
              />
              <Route path="/trinity" element={<TrinityCore />} />
              <Route path="/trinity/plus" element={<TrinityPlus />} />
              <Route path="/trinity/core" element={<TrinityCore />} />
              <Route
                path="/trinity/expense-manager"
                element={<ExpenseManager />}
              />
              <Route path="/trinity/garo" element={<Garo />} />
              <Route path="/trinity/mcd" element={<Mcd />} />
              <Route path="/trinity/rcd" element={<Rcd />} />
              <Route path="/trinity/aed" element={<Aed />} />
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
