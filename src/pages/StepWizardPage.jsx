import { Helmet } from "react-helmet";
import AppBarNav from "../components/Navbar/Appbar.jsx";
import FooterNew from "../components/Footer/FooterNew.jsx";
import SmoothScrollUp from "../components/utils/SmoothScrollUp.jsx";
import StepWizard from "../components/stepWizard/StepWizard.jsx";

const StepWizardPage = () => {
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

      <StepWizard />

      <SmoothScrollUp />

      <FooterNew />
    </>
  );
};

export default StepWizardPage;
