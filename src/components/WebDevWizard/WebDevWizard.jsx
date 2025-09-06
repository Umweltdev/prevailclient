import { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Container,
  Typography,
} from "@mui/material";
import IndustryStep from "./steps/IndustryStep.jsx";
import GoalsStep from "./steps/GoalsStep.jsx";
import SpecializedStep from "./steps/SpecializedStep.jsx";
import UniversalStep from "./steps/UniversalStep.jsx";
import InvestmentStep from "./steps/InvestmentStep.jsx";
import UserDetailsStep from "./steps/UserDetailsStep.jsx";
import CheckoutStep from "./components/CheckoutStep.jsx";
import { theme } from "../../theme.js";

const steps = [
  "Industry",
  "Goals",
  "Specialized",
  "Universal",
  "Investment",
  "Your Details",
  "Checkout",
];

const WebDevWizard = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    industry: null,
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
    const discountRate = 0.2;
    const solutionsSpent = formData.solutions.reduce(
      (acc, s) => acc + s.price * (1 - discountRate),
      0
    );
    const dashboardsSpent = formData.dashboards.reduce(
      (acc, d) => acc + d.price * (1 - discountRate),
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
          <SpecializedStep
            onUpdate={handleDataChange}
            selectedIndustry={formData.industry}
            budget={formData.budget}
            selectedSolutions={formData.solutions}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case 3:
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
      case 4:
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

      case 5:
        return (
          <UserDetailsStep
            onUpdate={handleDataChange}
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
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            lineHeight: 1.2,
            mb: { xs: 2, md: 3 },
            background: "linear-gradient(to right, #2c3e50, #8e44ad, #3498db)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            [theme.breakpoints.up("md")]: {
              fontSize: "3.75rem",
            },
            [theme.breakpoints.up("lg")]: {
              fontSize: "4.5rem",
            },
          }}
        >
          Transform Your Business with Intelligent Digital Solutions
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
          From custom enterprise platforms to ready-to-deploy templates
        </Typography>
      </Box>

      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box>{getStepContent(activeStep)}</Box>
    </Container>
  );
};

export default WebDevWizard;
