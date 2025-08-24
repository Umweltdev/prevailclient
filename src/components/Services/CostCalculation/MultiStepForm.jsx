import { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import IndustryStep from "./steps/IndustryStep";
import GoalsStep from "./steps/GoalsStep";
import SpecializedStep from "./steps/SpecializedStep";
import UniversalStep from "./steps/UniversalStep";
import InvestmentStep from "./steps/InvestmentStep";
import GetStartedStep from "./steps/GetStartedStep";

const steps = [
  "Industry",
  "Goals",
  "Specialized",
  "Universal",
  "Investment",
  "Get Started",
];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    industry: "Restaurant & Food",
    goals: [],
    budget: 5000,
    solutions: [],
    dashboards: [],
    platform: null,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNext = () =>
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));

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
            onUpdate={(goals) => handleDataChange("goals", goals)}
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
        return <GetStartedStep formData={formData} handleBack={handleBack} />;
      default:
        return "Unknown step";
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: { xs: 2, sm: 4 } }}>
      <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 6 } }}>
        <Typography
          variant={isMobile ? "h6" : "h3"}
          component="h1"
          sx={{ fontWeight: "bold", color: "#1976d2" }}
        >
          Transform Your Business with Intelligent Digital Solutions
        </Typography>
        <Typography
          variant={isMobile ? "body2" : "h6"}
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          From custom enterprise platforms to ready-to-deploy templates
        </Typography>
      </Box>

      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          mb: 4,
          "& .MuiStep-root": {
            minWidth: isMobile ? "45px" : "auto",
          },
        }}
      >
        {steps.map((label, index) => {
          const isActive = activeStep === index;
          const isCompleted = activeStep > index;
          return (
            <Step key={label} completed={isCompleted}>
              <StepLabel
                StepIconComponent={() => (
                  <Box
                    sx={{
                      width: isMobile ? 24 : 28,
                      height: isMobile ? 24 : 28,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: isMobile ? "0.65rem" : "0.8rem",
                      fontWeight: 700,
                      bgcolor: isActive
                        ? "#1976d2"
                        : isCompleted
                          ? "success.main"
                          : "grey.400",
                      color: "#fff",
                    }}
                  >
                    {index + 1}
                  </Box>
                )}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: isMobile ? "0.65rem" : "0.9rem",
                    color:
                      isActive || isCompleted ? "#1976d2" : "text.secondary",
                    textAlign: "center",
                  }}
                >
                  {label}
                </Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <Box sx={{ width: "100%" }}>{getStepContent(activeStep)}</Box>
    </Container>
  );
};

export default MultiStepForm;
