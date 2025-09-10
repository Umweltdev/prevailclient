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
  Paper,
  Fade,
  LinearProgress,
} from "@mui/material";
import IndustryStep from "./steps/IndustryStep";
import GoalsStep from "./steps/GoalsStep";
import SpecializedStep from "./steps/SpecializedStep";
import UniversalStep from "./steps/UniversalStep";
import InvestmentStep from "./steps/InvestmentStep";
import GetStartedStep from "./steps/GetStartedStep";

const steps = [
  { label: "Industry", description: "Select your business type" },
  { label: "Goals", description: "Define your objectives" },
  { label: "Specialized", description: "Industry-specific solutions" },
  { label: "Universal", description: "Core business tools" },
  { label: "Investment", description: "Choose your platform" },
  { label: "Get Started", description: "Complete setup" },
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
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

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

  const progress = ((activeStep + 1) / steps.length) * 100;

  return (
    <Box sx={{ 
      minHeight: "100vh", 
      background: "#ffffff",
      py: { xs: 2, sm: 4 }
    }}>
      <Container maxWidth="lg" sx={{pt: {xs: 16, md: 20}}}>
        <Paper 
          elevation={0}
          sx={{ 
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(10px)",
            borderRadius: 3,
            p: { xs: 3, sm: 4, md: 6 },
            mb: 4,
            textAlign: "center",
            border: "1px solid rgba(128, 90, 213, 0.1)",
            boxShadow: "0 8px 32px rgba(128, 90, 213, 0.1)"
          }}
        >
          <Typography
            variant={isMobile ? "h5" : isTablet ? "h4" : "h3"}
            component="h1"
            sx={{ 
              fontWeight: 800,
              background: "linear-gradient(45deg, #805ad5, #9f7aea)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2
            }}
          >
            Transform Your Business with Intelligent Digital Solutions
          </Typography>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            color="text.secondary"
            sx={{ 
              fontWeight: 400,
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6
            }}
          >
            From custom enterprise platforms to ready-to-deploy templates
          </Typography>
          <Box sx={{ mt: 3, mb: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Step {activeStep + 1} of {steps.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Math.round(progress)}% Complete
              </Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={progress}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: "rgba(128, 90, 213, 0.1)",
                "& .MuiLinearProgress-bar": {
                  borderRadius: 4,
                  background: "linear-gradient(45deg, #805ad5, #9f7aea)"
                }
              }}
            />
          </Box>
        </Paper>
        <Paper 
          elevation={0}
          sx={{ 
            background: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(15px)",
            borderRadius: 3,
            p: { xs: 2, sm: 3, md: 4 },
            mb: 4,
            border: "1px solid rgba(128, 90, 213, 0.1)",
            boxShadow: "0 8px 32px rgba(128, 90, 213, 0.08)"
          }}
        >
          <Stepper
            activeStep={activeStep}
            orientation={isMobile ? "vertical" : "horizontal"}
            alternativeLabel={!isMobile}
            sx={{
              "& .MuiStep-root": {
                minWidth: isMobile ? "auto" : "120px",
                mb: isMobile ? 2 : 0,
              },
              "& .MuiStepConnector-root": {
                ...(isMobile ? {
                  marginLeft: "12px",
                  minHeight: "20px"
                } : {}),
                "& .MuiStepConnector-line": {
                  borderColor: "rgba(128, 90, 213, 0.2)",
                  borderWidth: 2,
                }
              },
              "& .MuiStepConnector-active .MuiStepConnector-line": {
                background: "linear-gradient(45deg, #805ad5, #9f7aea)",
                borderColor: "transparent"
              },
              "& .MuiStepConnector-completed .MuiStepConnector-line": {
                background: "linear-gradient(45deg, #805ad5, #b794f6)",
                borderColor: "transparent"
              }
            }}
          >
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isCompleted = activeStep > index;
              const isUpcoming = activeStep < index;
              
              return (
                <Step key={step.label} completed={isCompleted}>
                  <StepLabel
                    StepIconComponent={() => (
                      <Box
                        sx={{
                          width: isMobile ? 32 : 40,
                          height: isMobile ? 32 : 40,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: isMobile ? "0.75rem" : "0.9rem",
                          fontWeight: 700,
                          background: isActive
                            ? "linear-gradient(45deg, #805ad5, #9f7aea)"
                            : isCompleted
                              ? "linear-gradient(45deg, #805ad5, #b794f6)"
                              : "linear-gradient(45deg, #e0e0e0, #f5f5f5)",
                          color: isActive || isCompleted ? "#fff" : "#666",
                          boxShadow: isActive 
                            ? "0 4px 12px rgba(128, 90, 213, 0.4)"
                            : isCompleted
                              ? "0 4px 12px rgba(128, 90, 213, 0.3)"
                              : "0 2px 4px rgba(0, 0, 0, 0.1)",
                          transition: "all 0.3s ease-in-out",
                          transform: isActive ? "scale(1.1)" : "scale(1)"
                        }}
                      >
                        {index + 1}
                      </Box>
                    )}
                  >
                    <Box sx={{ textAlign: isMobile ? "left" : "center" }}>
                      <Typography
                        sx={{
                          fontWeight: isActive ? 700 : 500,
                          fontSize: isMobile ? "0.75rem" : "0.9rem",
                          color: isActive 
                            ? "#805ad5" 
                            : isCompleted 
                              ? "#805ad5"
                              : isUpcoming
                                ? "text.secondary"
                                : "text.primary",
                          transition: "color 0.3s ease-in-out",
                          mb: 0.5
                        }}
                      >
                        {step.label}
                      </Typography>
                      {!isMobile && (
                        <Typography
                          variant="caption"
                          sx={{
                            color: "text.secondary",
                            fontSize: "0.7rem",
                            display: "block"
                          }}
                        >
                          {step.description}
                        </Typography>
                      )}
                    </Box>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Paper>
        <Paper 
          elevation={0}
          sx={{ 
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: 3,
            overflow: "hidden",
            border: "1px solid rgba(128, 90, 213, 0.15)",
            boxShadow: "0 12px 40px rgba(128, 90, 213, 0.12)"
          }}
        >
          <Fade in={true} timeout={500} key={activeStep}>
            <Box sx={{ 
              p: { xs: 3, sm: 4, md: 6 },
              minHeight: { xs: "400px", sm: "500px", md: "600px" },
              display: "flex",
              flexDirection: "column"
            }}>
              <Box sx={{ mb: 4, textAlign: "center" }}>
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  sx={{
                    fontWeight: 700,
                    color: "#805ad5",
                    mb: 1
                  }}
                >
                  {steps[activeStep].label}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontWeight: 400 }}
                >
                  {steps[activeStep].description}
                </Typography>
              </Box>

              <Box sx={{ flex: 1 }}>
                {getStepContent(activeStep)}
              </Box>
            </Box>
          </Fade>
        </Paper>
        <Box sx={{ 
          mt: 4, 
          textAlign: "center",
          color: "rgba(128, 90, 213, 0.7)"
        }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {activeStep === steps.length - 1 
              ? "Ready to get started!" 
              : `${steps.length - activeStep - 1} steps remaining`
            }
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MultiStepForm;