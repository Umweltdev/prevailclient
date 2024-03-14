import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FormInputText from "./MobileStepperFormInputs/FormInputText";
import CompanyInfo from "./MobileStepperFormInputs/CompanyInfo";
import BrandOverview from "./MobileStepperFormInputs/BrandOverview";
import IndustryOverview from "./MobileStepperFormInputs/IndustryOverview";
import TargetAudience from "./MobileStepperFormInputs/TargetAudience";
import DigitalPresence from "./MobileStepperFormInputs/DigitalPresence";
import SearchOptimization from "./MobileStepperFormInputs/SearchOptimization";
import SubmitStepper from "./StepperFormInputs/SubmitStepper";

const steps = [
  {
    label: "Company Information",
    description: <CompanyInfo />,
  },
  {
    label: "Brand Overview",
    description: <BrandOverview />,
  },
  {
    label: "Industry Overview",
    description: <IndustryOverview />,
  },
  {
    label: "Target Audience",
    description: <TargetAudience />,
  },
  {
    label: "Digital Presence",
    description: <DigitalPresence />,
  },
  {
    label: "Search Engine Optimisation",
    description: <SearchOptimization />,
  },
  {
    label: "Submit",
    description: <SubmitStepper />,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (stepIndex) => {
    const step = steps[stepIndex];
    return <step.content />;
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "13vh 2vh" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 6 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
