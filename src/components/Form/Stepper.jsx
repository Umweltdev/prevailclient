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
import { makeStyles } from "@mui/styles";
import FormSelect from "./FormSelect";
import FormInputText from "./FormInputText";
import FormTextArea from "./FormTextArea";
import SubmitStepper from "./SubmitStepper";

const useStyles = makeStyles({
  textArea: {
    width: "50vw",

    marginBottom: "3vh",
  },
});

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

  const classes = useStyles();

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
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FormInputText
                    label="What is the name of your establishment, and what is the
                      industry/sector?"
                    name="company"
                    labelInput="Company & Industry"
                    value={formData.companyName}
                    onChange={handleChange}
                  />

                  <FormTextArea label="Can you describe your establishment in a few sentences?" />

                  <FormSelect
                    label="How long has your business been operating in Ireland? (A).
                      If yes, please provide them below."
                    value1="Yes"
                    value2="No"
                    onChange={handleChange}
                  />

                  <FormTextArea label="If yes, please provide them below" />
                </Grid>
              )}
              {/* SECOND STEPPER */}
              {activeStep === 1 && (
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <FormSelect
                    label=" Do you have any existing brand identity you want to retain
                      or modify? (e.g., logo, colour scheme, font style)"
                    value1="Yes"
                    value2="No"
                  />

                  <FormTextArea
                    label="(A) If yes, please provide them below"
                    label2="(B) If you still need to, please provide examples of
                      brands or designs that appeal to your vision"
                  />

                  <FormTextArea
                    label=" How would you like your brand to be perceived by your
                      target audience?"
                  />

                  <FormTextArea
                    label="Are there any specific emotions or feelings you want your
                      brand to evoke?"
                  />
                </Grid>
              )}
              {activeStep === 2 && (
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <FormTextArea label="Who are your main competitors in the industry?" />

                  <FormTextArea label=" What are your establishment's unique features, benefits, or unique selling points?" />

                  <FormTextArea label="Are there any specific elements of your competitors' brand identities or ethos that you find appealing or inspiring?" />
                </Grid>
              )}
              {activeStep === 3 && (
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <FormTextArea
                    label="Who are your primary customers or ideal customers?"
                    label2="(a) Can you provide a breakdown of the percentage of male and female customers? (b) What is the age range of your target audience? (C) What is your target audience's geographic location (country and region)?"
                  />

                  <FormSelect
                    label="Do you have any existing customer data or insights that can help us understand your target audience better? (e.g., customer surveys, sales data, website analytics, CRM data)"
                    value1="Yes"
                    value2="No"
                  />
                  <FormTextArea label="If so, please provide the data." />

                  <FormSelect
                    label="Have you observed any specific behaviours or patterns among your customers?"
                    value1="Yes"
                    value2="No"
                  />
                  <FormTextArea label="If yes, please provide details." />

                  <FormSelect
                    label="Are you aware of any critical needs, desires, or pain points of your ideal customer that your establishment aims to address? "
                    value1="Yes"
                    value2="No"
                  />
                  <FormTextArea label="If yes, please provide details." />

                  <FormTextArea label="How does your ideal customer align with your business goals and objectives?" />
                </Grid>
              )}
              {activeStep === 4 && (
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <FormSelect
                    label="Do you currently have a website? "
                    value1="Yes"
                    value2="No"
                  />
                  <FormInputText
                    label="If yes, please provide the website link and do you use a hosting platform (Shopify, Squarespace, Wix)."
                    name="website"
                    labelInput="Website"
                  />

                  <FormSelect
                    label="Do you have or need an e-commerce platform to sell products or services online?"
                    value1="Yes"
                    value2="No"
                  />

                  <FormSelect
                    label="Who are your top competitors, and what aspects of their websites do you appreciate or dislike?"
                    value1="Yes"
                    value2="No"
                  />
                </Grid>
              )}
              {activeStep === 5 && (
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <FormSelect
                    label="Have you conducted a Search Engine Optimisation (SEO) audit for your website?"
                    value1="Yes"
                    value2="No"
                  />
                  <FormTextArea label="If yes, please provide the last audit date and critical findings." />

                  <FormSelect
                    label="Are you actively managing your business profile on Google My Business and other search engines?"
                    value1="Yes"
                    value2="No"
                  />

                  <FormTextArea label="What are the primary keywords or phrases you are ranked for or would like to rank for in search engine results?" />

                  <FormSelect
                    label="Have you utilised or are you considering paid advertising campaigns on SEO?"
                    value1="Yes"
                    value2="No"
                  />
                  <FormTextArea label="If yes, please specify your budget and objectives." />
                </Grid>
              )}
              {activeStep === 6 && (
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SubmitStepper />
                </Grid>
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
