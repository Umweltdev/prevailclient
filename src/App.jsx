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
import StepWizardPage from "./pages/StepWizardPage.jsx";

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
const AdCampaign = React.lazy(() =>
  import("./components/Services/CAD/AdCampaign")
);
const VisualBrandIdentity = React.lazy(() =>
  import("./components/Services/BrandIdentity/VisualBrandIdentity")
);
const WebsiteDevelopment = React.lazy(() =>
  import("./components/Services/WebsiteDevelopement/WebsiteDevelopment")
);
const WebDevWizardPage = React.lazy(() => import("./pages/WebDevWizardPage"));
const WebManagement = React.lazy(() =>
  import("./components/Services/WebManagement/WebManagement")
);
const Mpd = React.lazy(() => import("./components/Services/Mpd/Mpd"));
const DigitalAccelerator = React.lazy(() =>
  import("./components/Services/DigitalAccelerator/DigitalAccelerator")
);
const EmpowerYourBussiness = React.lazy(() =>
  import("./components/Services/DigitalAccelerator/EmpowerYourBussiness")
);
const TrinityCore = React.lazy(() =>
  import("./components/TrinityPlus/TrinityCore")
);
const TrinityPlus = React.lazy(() =>
  import("./components/TrinityPlus/TrinityPlus")
);
const ExpenseManager = React.lazy(() =>
  import("./components/TrinityPlus/ExpenseManager")
);
const Garo = React.lazy(() => import("./components/TrinityPlus/Garo"));
const Mcd = React.lazy(() => import("./components/TrinityPlus/MCD"));
const Rcd = React.lazy(() => import("./components/TrinityPlus/RCD"));
const Aed = React.lazy(() => import("./components/TrinityPlus/AED"));
const StepWizard = React.lazy(() =>
  import("./components/TrinityPlus/StepWizardPage")
);
const UniversalOutreachPage = React.lazy(
  () => import("./pages/UniversalOutreachPage")
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
                path="/service/stepWizardPage"
                element={<StepWizardPage />}
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
              <Route
                path="/service/custom-ad-campaign"
                element={<AdCampaign />}
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
              <Route path="/trinity/plus#wizard" element={<StepWizard />} />
              <Route path="/portfolio/:index" element={<CaseDetails />} />
              <Route path="/about/ourWhy" element={<AboutOurWhy />} />
              <Route path="/about/ourSolution" element={<AboutOurSolution />} />
              <Route path ="/trinity/universal-outreach" element={<UniversalOutreachPage/>} />
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
              <Route path="/About" element={<Navigate to="/about-us" />} />
              <Route path="/Portfolio" element={<Navigate to="/portfolio" />} />
              <Route path="/Blog" element={<Navigate to="/blog" />} />
              <Route path="/Contact" element={<Navigate to="/contact-us" />} />
              <Route
                path="/Blog/:index"
                element={<Navigate to="/blog/:index" />}
              />
              <Route path="/Booking" element={<Navigate to="/booking" />} />
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
                path="/Services/stepwizard"
                element={<Navigate to="/service/stepWizardPage" />}
              />
              <Route
                path="/Services/costcalculation"
                element={<Navigate to="/service/cost-calculation" />}
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
                path="/Services/custom-ad-campaign"
                element={<Navigate to="/service/custom-ad-campaign" />}
              />
              <Route
                path="/trinity/universal-outreach"
                element={<Navigate to="/trinity/universal-outreach" />}
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
