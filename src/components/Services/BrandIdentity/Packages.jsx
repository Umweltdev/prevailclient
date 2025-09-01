import  {useState, useCallback, useEffect, useRef} from "react";
import PackagesLayout from "./PackagesLayout";
import { Grid, Typography } from "@mui/material";
import PremiumPackageLayout from "./PremiumPackageLayout";
import ElitePackageLayout from "./ElitePackageLayout";
import "./assets/style.css"

import {
  ChevronRight,
  ChevronLeft,
  Check,
  
  TrendingUp,
} from "lucide-react";
const StepWizard= () => {
  
  
  const [currentStep, setCurrentStep] = useState(1);

  const [trinitySelectionId, setTrinitySelectionId] =
    useState( null);
    const[packageDetails, setPackageDetails]= useState({amount:"", package:""})
    const [showToast, setShowToast] = useState(null);

    // Effect to save state to localStorage on any change
  const showToastMessage = (message) => {
    setShowToast(message);
    setTimeout(() => setShowToast(null), 3000);
  };
  
  const getSteps =() => {
   
    return ["Package Type", "Review"]
  };
 const wizardRef = useRef(null);
  const nextStep = useCallback(() => {
    const steps = 2;
   // if (currentStep < steps.length) {
      let nextStepNum = currentStep + 1;

      

      setCurrentStep(nextStepNum);
      wizardRef.current?.scrollIntoView({ behavior: "smooth" });
      //window.scrollTo(1, 1);
    //}
  }, [currentStep]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      let prevStepNum = currentStep - 1;
      setCurrentStep(prevStepNum);
      wizardRef.current?.scrollIntoView({ behavior: "smooth" });

    
    }
  }, [currentStep]);
  useEffect(() => {
    const stateToSave = {
      currentStep,
      
      trinitySelectionId,
      
      
      
    };
    localStorage.setItem("quoteBuilderState", JSON.stringify(stateToSave));
  }, [
    currentStep,
    
    trinitySelectionId,
    
   // budget,
    
  ]);
  const renderStepContent = () => {
    const steps = getSteps();
    const isReviewStep = steps.length > 1 && steps.length === currentStep;

    if (isReviewStep) {
      return <FinalSummary />;
    }

   
        switch (currentStep) {
          case 1:
            return <Packages />;
          
          default:
            return null;
        }
    
  };
  

const Packages = () => {
  return(
  
    <div
      style={{
        margin: "0px auto 0 auto",
        padding: "30px 0 50px 0",
        
        // background: "#F9FAFC",
        "@media (max-width: 600px)": {
          margin: "1vh auto 0 auto",
        },
      }}
    >
      <div
      style={{
       
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        
      }}
      > 
      <Typography
        sx={{
          fontSize: "48px",
          fontWeight: "bold",
          color: "45px",
          margin: "5vh 0",
          fontFamily: `"Sarabun", sans-serif`,
          "@media (max-width: 600px)": {
            fontSize: "7vw",
            fontWeight: "bold",
            color: "#884ed9",
            margin: "1vh 0",
          },
        }}
      >
        Choose Your Package
      </Typography>
      <Grid
        sx={{
          display: "flex",
          // gap: "2vw",
          "@media (max-width: 760px)": {
            display: "unset",
          },
        }}
      >
        <PackagesLayout
          packages="Starter Brand Identity Package"
          //info="Forever free, even after the launch"
          amount="500"
          handleClick={()=> {nextStep(); setPackageDetails({amount:500, package:"Starter Brand Identity Package"})}}
          onBoxClick={()=> {setPackageDetails({amount:500, package:"Starter Brand Identity Package"})}}
        />
        <PremiumPackageLayout
          packages="Premium Brand Identity Package"
          //info="Forever free, even after the launch"
          amount="750"
         handleClick={()=> {nextStep(); setPackageDetails({amount:750, package:"Premium Brand Identity Package"})}}
         onBoxClick={()=> { setPackageDetails({amount:750, package:"Premium Brand Identity Package"})}}
         
        />
        <ElitePackageLayout
          packages="Elite Brand Identity Package"
          //info="Forever free, even after the launch"
          amount="1000"
           handleClick={()=> {nextStep(); setPackageDetails({amount:1000, packages:"Elite Brand Identity Package"})}}
           onBoxClick={()=> { setPackageDetails({amount:1000, package:"Elite Brand Identity Package"})}}
        />
      </Grid>
      </div>
      <div className="button-container">
        <button
          className="my-button"
          onClick={nextStep}
          disabled={!packageDetails.amount}
        >
          Continue <ChevronRight className="chevron" />
        </button>
        
      </div>
    </div>)
  
};
// Return on Investment (ROI) Calculator Component
  const ROICalculator = () => {
    const totalCost = 0
    //calculateRunningTotal();
    const estimatedMonthlySavings = () => {
      let savings = 0;
      if (trinitySelectionId === "trinity-plus") savings += 700; // Additional value for plus
      return savings;
    };

    const breakEvenMonths =
      estimatedMonthlySavings > 0
        ? (totalCost / estimatedMonthlySavings).toFixed(1)
        : "N/A";

    if (estimatedMonthlySavings === 0) return null;

    return (
      <div className="calculatorContainer">
        <h3 className="calculatorTitle">
          <TrendingUp className="trendingUp" />
          Estimated Return on Investment
        </h3>
        <div className="estmatedSavingsContainer">
          <div>
            <p className="estimatedSavings">
              {/* £{estimatedMonthlySavings.toLocaleString()} */}
        N/A

            </p>
            <p className="estimatedMonthly">Estimated Monthly Savings</p>
          </div>
          <div>
            <p className="breakEvenMonths">
              {breakEvenMonths}
            </p>
            <p className="monthsbreakEven">Months to Break Even</p>
          </div>
        </div>
        <p className="calculatorFooter">
          *This is an illustrative estimate based on typical results for
          businesses with your selected goals.
        </p>
      </div>
    );
  };
// Consolidated Final Summary Component
  const FinalSummary = () => {
    // const trinitySelection = ALL_TRINITY_OPTIONS.find(
    //   (opt) => opt.id === trinitySelectionId
    // );
    // const tier = platformTiers.find((t) => t.id === selectedTier);
    // const industry = industries.find((ind) => ind.id === selectedIndustry);
    const total = 0
    //calculateRunningTotal()||0;
    //const isBundle = solutionType === "both" && trinitySelection && tier;
    const discountedTotal = total
    //isBundle ? Math.round(total * 0.9) : total;

    return (
      <div className="finalSummaryContainer">
        <div className="textWrapper">
          <h2 className="summaryHeading">
            Your Custom Solution Summary
          </h2>
          <p className="summaryDescription">
            Here is a complete overview of your selections. Ready to proceed?
          </p>
        </div>

        <div className="columnContainer">
          <div className="columnGrid">
            {/* Column 1: Selections */}
            <div>
              <h4 className="columnTitle">
                Your Selections
              </h4>
              <ul className="packageContainer">
                <li className="packageWrapper">
                  <span className="packageTitle">Package:</span>
                  <span className="packageName">
                    {packageDetails.package}
                  </span>
                </li>
                
                {/* {trinitySelection && (
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">Trinity System:</span>
                    <span className="text-white font-medium">
                      {trinitySelection.name}
                    </span>
                  </li>
                )} */}
                
                {/* <li className="flex justify-between items-center">
                  <span className="text-gray-400">Budget:</span>
                  <span className="text-white font-medium">
                    ~£{budget.toLocaleString()}
                  </span>
                </li> */}
              </ul>
            </div>

            {/* Column 2: Cost Breakdown */}
            <div>
              <h4 className="costBreakdown">
                Cost Breakdown
              </h4>
              <div className="breakdownContainer">
                {/* {trinitySelection && (
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-400">
                      {trinitySelection.name}
                    </span>
                    <span className="text-white">
                      £{trinitySelection.betaPrice.toLocaleString()}
                    </span>
                  </div>
                )} */}
                
                <div className="totalInvestmentWrapper">
                  <span className="totalInvestment">Total Investment</span>
                  <span className="discountedTotal">
                    £{packageDetails.amount}
                    {/* £{discountedTotal.toLocaleString()} */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ROICalculator />

        <div className="controlContainer">
          <button
            onClick={prevStep}
            className="prevButton"
          >
            <ChevronLeft className="chevron" /> Back
          </button>
          <button
            onClick={() =>
              showToastMessage(
                "Your quote has been submitted! We'll be in touch."
              )
            }
            className="finalizeButton"
          >
            Finalize & Get Quote →
          </button>
        </div>
      </div>
    );
  };
   const steps = getSteps();
return (
  <div ref={wizardRef}>
        <div className="container">
          
          {steps.map((step, i) => {
            const stepNum = i + 1;
            const isActive = currentStep === stepNum;
            const isCompleted = currentStep > stepNum;

            return (
              <div
                key={i}
                className={`wrapper ${
                  isActive
                    ? "active"
                    : isCompleted
                      ? "completed"
                      : "general"
                }`}
              >
                <span
                  className={`step ${
                    isActive
                      ? "stepActive"
                      : isCompleted
                        ? "stepCompleted"
                        : "stepGeneral"
                  }`}
                >
                  {isCompleted ? <Check className="completedCheck" /> : stepNum}
                </span>
                <span>{step}</span>
              </div>
            );
          })}
         
        </div>
<div className="my-container">
        {renderStepContent()}
        </div>
      

      {showToast && (
        <div className="toastContainer">
          <Check className="toastCheck" />
          <span className="toastText">{showToast}</span>
        </div>
      )}

     
      </div>
)
}

export default StepWizard;



