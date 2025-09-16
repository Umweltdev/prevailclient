import { Helmet } from "react-helmet";
import AppBarNav from "../../../Navbar/Appbar.jsx";
import MultiStepForm from "./MultiStepForm.jsx";
import SmoothScrollUp from "../../../utils/SmoothScrollUp.jsx";

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
      </div>
    </div>
  );
}

export default CostCalculation