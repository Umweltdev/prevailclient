import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
} from "@mui/material";

const steps = [
  "Company Information",
  "Brand Overview",
  "Industry Overview",
  "Target Audience",
  "Digital Presence",
  "Search Engine Optimisation",
  "Submit",
];

export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [formData, setFormData] = React.useState({
    companyName: "",
    brandOverview: "",
    industryOverview: "",
    targetAudience: "",
    digitalPresence: "",
    searchEngineOptimisation: "",
  });

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      companyName: "",
      brandOverview: "",
      industryOverview: "",
      targetAudience: "",
      digitalPresence: "",
      searchEngineOptimisation: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        // height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20vh ",
      }}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <form>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pt: 2,
                margin: "0 auto",
              }}
            >
              {activeStep === 0 && (
                <Grid
                  sx={{ display: "flex", flexDirection: "column", gap: "4vh" }}
                >
                  <Grid sx={{ margin: "0 auto" }}>
                    <Typography>
                      What is the name of your establishment, and what is the
                      industry/sector?
                    </Typography>
                    <TextField
                      sx={{ width: "50vw" }}
                      name="companyName"
                      label="Company Name/Industry"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid sx={{ margin: "0 auto" }}>
                    <Typography>
                      Can you describe your establishment in a few sentences?
                    </Typography>
                    <TextField
                      sx={{ width: "50vw" }}
                      name="companyName"
                      label="Company Name/Industry"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid sx={{ margin: "0 auto" }}>
                    <Typography>
                      How long has your business been operating in Ireland?
                    </Typography>
                    <FormControl sx={{ margin: "1vh 0" }}>
                      <InputLabel id="demo-simple-select-label">
                        Select
                      </InputLabel>
                      <Select
                        sx={{ width: "50vw" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Select}
                        label="Select"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <>
                    <Typography>If yes, please provide them below</Typography>
                    <TextareaAutosize
                      placeholder="Type anything…"
                      sx={{ maxWidth: "80vw" }}
                      minRows={4}
                    />
                  </>
                </Grid>
              )}
              {activeStep === 1 && (
                <TextField
                  name="brandOverview"
                  label="Brand Overview"
                  value={formData.brandOverview}
                  onChange={handleChange}
                />
              )}
              {/* Add more fields for other steps as needed */}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Grid>
        )}
      </form>
    </Box>
  );
}
