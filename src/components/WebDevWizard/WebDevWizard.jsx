import { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Container,
  Typography,
} from "@mui/material";

import IndustryStep from "./steps/IndustryStep";
import GoalsStep from "./steps/GoalsStep";
import InvestmentStep from "./steps/InvestmentStep";
import SpecializedStep from "./steps/SpecializedStep";
import UniversalStep from "./steps/UniversalStep";
import UserDetailsStep from "./steps/UserDetailsStep";
import CheckoutStep from "./components/CheckoutStep.jsx";

const steps = [
  "Industry",
  "Goals",
  "Investment",
  "Specialized",
  "Universal",
  "Your Details",
  "Checkout",
];

const WebDevWizard = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    industry: "Restaurant & Food",
    goals: [],
    budget: 5000,
    solutions: [],
    dashboards: [],
    platform: null,
    name: "",
    email: "",
  });

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleDataChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const getStepContent = (step) => {
    const solutionsSpent = formData.solutions.reduce(
      (acc, solution) => acc + solution.price,
      0
    );
    const dashboardsSpent = formData.dashboards.reduce(
      (acc, dash) => acc + dash.price,
      0
    );
    const totalSpentSoFar = solutionsSpent + dashboardsSpent;

    switch (step) {
      case 0:
        return (
          <IndustryStep
            onSelect={(industry) => handleDataChange("industry", industry)}
            selectedIndustry={formData.industry}
            handleNext={handleNext}
          />
        );
      case 1:
        return (
          <GoalsStep
            onUpdate={handleDataChange}
            selectedGoals={formData.goals}
            budget={formData.budget}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <InvestmentStep
            onUpdate={handleDataChange}
            budget={formData.budget}
            totalSpentSoFar={totalSpentSoFar}
            selectedPlatform={formData.platform}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case 3:
        return (
          <SpecializedStep
            onUpdate={handleDataChange}
            selectedIndustry={formData.industry}
            budget={formData.budget}
            selectedSolutions={formData.solutions}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case 4:
        return (
          <UniversalStep
            onUpdate={handleDataChange}
            budget={formData.budget}
            solutionsSpent={solutionsSpent}
            selectedDashboards={formData.dashboards}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case 5:
        return (
          <UserDetailsStep
            handleDataChange={handleDataChange}
            formData={formData}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case 6:
        return <CheckoutStep formData={formData} handleBack={handleBack} />;
      default:
        return "Unknown step";
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontWeight: "bold", mb:2, color: "primary.main" }}
        >
          Transform Your Business with Intelligent Digital Solutions
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
          From custom enterprise platforms to ready-to-deploy templates
        </Typography>
      </Box>

      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 5 }}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (activeStep > index) {
            labelProps.sx = {
              "& .MuiStepLabel-label": { color: "success.main" },
              "& .MuiStepIcon-root": { color: "success.main" },
            };
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <Box>{getStepContent(activeStep)}</Box>
    </Container>
  );
};

export default WebDevWizard;
