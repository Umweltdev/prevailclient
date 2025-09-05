import { Helmet } from "react-helmet";
import AppBarNav from "../Navbar/Appbar.jsx";
import FooterNew from "../Footer/FooterNew.jsx";
import SmoothScrollUp from "../utils/SmoothScrollUp.jsx";
import CtaSection from "./TrinityCore/_components/CTASection.jsx";
// import StepWizard from "../stepWizard/StepWizard.jsx";

const TrinityStepWizard = () => {
  return (
    <>
      <Helmet>
        <title>Build Your Custom Business Solution | Prevail</title>
        <meta
          name="description"
          content="Use our interactive tool to build and price the perfect website, AI system, or complete digital transformation package for your business."
        />
      </Helmet>

      <AppBarNav color="#000" />

      {/* <StepWizardComponent /> */}
      {/* <StepWizard /> */}

      <SmoothScrollUp />

      <FooterNew />
    </>
  );
};

export default TrinityStepWizard;
