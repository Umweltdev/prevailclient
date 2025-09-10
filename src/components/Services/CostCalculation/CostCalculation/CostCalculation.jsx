import { Helmet } from "react-helmet";
import AppBarNav from "../../Navbar/Appbar";
import FooterNew from "../../Footer/FooterNew";
import SmoothScrollUp from "../../utils/SmoothScrollUp";
import MultiStepForm from "./MultiStepForm";


const CostCalculation = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Helmet>
        <title>Prevail: Your Partner in Success</title>
        <meta
          name="description"
          content="Prevail is a Strategic Partner for Businesses in the Digital Age."
        />
      </Helmet>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <AppBarNav color="#000" />
        <MultiStepForm/>
        <SmoothScrollUp />
        <FooterNew />
      </div>
    </div>
  );
}

export default CostCalculation