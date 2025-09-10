import { Helmet } from "react-helmet";
import FooterNew from "../../Footer/FooterNew";
//import AppBarOne from "../../Navbar/AppbarOne";
import ElevateYourPresence from "./ElevateYourPresence";
import Addressing from "./Addressing";
import TailoredApproach from "./TailoredApproach";
import HeroComponent from "../ReusedComponenets/HeroComponent";
import AppBarNav from "../../Navbar/Appbar";
import PdfSection from "./PdfSection";
import SmoothScrollUp from "../../utils/SmoothScrollUp";

import StepWizard from "./Packages";

//import MainPage from "./MainPage";

const BrandIdentity = () => {
  return (
    <>
      <Helmet>
        <title>Distinctive Brand Identity Solutions by Prevail</title>
        <meta
          name="description"
          content="Build Trust and Recognition with Prevail's Brand Identity"
        />
      </Helmet>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <AppBarNav color="#000" />

        <HeroComponent title={"Brand Identity Package"} />
        <ElevateYourPresence />
        <PdfSection />
        <Addressing />
        <TailoredApproach />
        
         
            <StepWizard/>
        <SmoothScrollUp />
        <FooterNew />
      </div>
    </>
  );
};

export default BrandIdentity;
