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
import FormSelect from "./StepperFormInputs/FormSelect";
import FormInputText from "./StepperFormInputs/FormInputText";
import FormTextArea from "./StepperFormInputs/FormTextArea";
import SubmitStepper from "./StepperFormInputs/SubmitStepper";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [formData, setFormData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
    q11: "",
    q12: "",
    q13: "",
    q14: "",
    q15: "",
    q16: "",
    q17: "",
    q18: "",
    q19: "",
    q20: "",
    q21: "",
    q22: "",
    q23: "",
    q24: "",
    q25: "",
    q26: "",
    q27: "",
    q28: "",
    q29: "",
    q30: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://prevailserver-4b3c670a5496.herokuapp.com/api/stepper",
        formData
      );

      const reg = response.data;
      setSuccess("Registration successful!");
      navigate("/user/profile");
    } catch (err) {
      setError(`Registration failed. Please try again: ${err}`);
    } finally {
      setLoading(false);
    }
  };

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
  // console.log(name);

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
              All steps completed - We will get back to you as soon as Possible
              through your email, or check Your dashboard for Update
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
                    name="q1"
                    labelInput="Company & Industry"
                    value={formData.q1}
                    onChange={handleChange}
                  />

                  <FormTextArea
                    label="Can you describe your establishment in a few sentences?"
                    name="q2"
                    value={formData.q2}
                    onChange={handleChange}
                  />

                  <FormSelect
                    label="How long has your business been operating in Ireland? (A).
                      If yes, please provide them below."
                    value1="Yes"
                    value2="No"
                    name="q3"
                    value={formData.q3}
                    onChange={handleChange}
                  />

                  <FormTextArea
                    label="If yes, please provide them below"
                    name="q4"
                    value={formData.q4}
                    onChange={handleChange}
                  />
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
                    name="q5"
                    value={formData.q5}
                    onChange={handleChange}
                  />

                  <FormTextArea
                    label="(A) If yes, please provide them below"
                    label2="(B) If you still need to, please provide examples of
                      brands or designs that appeal to your vision"
                    name="q6"
                    value={formData.q6}
                    onChange={handleChange}
                  />

                  <FormTextArea
                    label=" How would you like your brand to be perceived by your
                      target audience?"
                    name="q7"
                    value={formData.q7}
                    onChange={handleChange}
                  />

                  <FormTextArea
                    label="Are there any specific emotions or feelings you want your
                      brand to evoke?"
                    name="q8"
                    value={formData.q8}
                    onChange={handleChange}
                  />
                </Grid>
              )}
              {activeStep === 2 && (
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <FormTextArea
                    label="Who are your main competitors in the industry?"
                    name="q9"
                    value={formData.q9}
                    onChange={handleChange}
                  />

                  <FormTextArea
                    label=" What are your establishment's unique features, benefits, or unique selling points?"
                    name="q10"
                    value={formData.q10}
                    onChange={handleChange}
                  />

                  <FormTextArea
                    name="q11"
                    value={formData.q11}
                    onChange={handleChange}
                    label="Are there any specific elements of your competitors' brand identities or ethos that you find appealing or inspiring?"
                  />
                </Grid>
              )}
              {activeStep === 3 && (
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <FormTextArea
                    name="q12"
                    value={formData.q12}
                    onChange={handleChange}
                    label="Who are your primary customers or ideal customers?"
                    label2="(a) Can you provide a breakdown of the percentage of male and female customers? (b) What is the age range of your target audience? (C) What is your target audience's geographic location (country and region)?"
                  />

                  <FormSelect
                    name="q13"
                    value={formData.q13}
                    onChange={handleChange}
                    label="Do you have any existing customer data or insights that can help us understand your target audience better? (e.g., customer surveys, sales data, website analytics, CRM data)"
                    value1="Yes"
                    value2="No"
                  />
                  <FormTextArea
                    label="If so, please provide the data."
                    name="q14"
                    value={formData.q14}
                    onChange={handleChange}
                  />

                  <FormSelect
                    name="q15"
                    value={formData.q15}
                    onChange={handleChange}
                    label="Have you observed any specific behaviours or patterns among your customers?"
                    value1="Yes"
                    value2="No"
                  />
                  <FormTextArea
                    label="If yes, please provide details."
                    name="q16"
                    value={formData.q16}
                    onChange={handleChange}
                  />

                  <FormSelect
                    label="Are you aware of any critical needs, desires, or pain points of your ideal customer that your establishment aims to address? "
                    value1="Yes"
                    value2="No"
                    name="q17"
                    value={formData.q17}
                    onChange={handleChange}
                  />
                  <FormTextArea
                    label="If yes, please provide details."
                    name="q18"
                    value={formData.q18}
                    onChange={handleChange}
                  />

                  <FormTextArea
                    name="q19"
                    value={formData.q19}
                    onChange={handleChange}
                    label="How does your ideal customer align with your business goals and objectives?"
                  />
                </Grid>
              )}
              {activeStep === 4 && (
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <FormSelect
                    name="q20"
                    value={formData.q20}
                    onChange={handleChange}
                    label="Do you currently have a website? "
                    value1="Yes"
                    value2="No"
                  />
                  <FormInputText
                    name="q21"
                    value={formData.q21}
                    onChange={handleChange}
                    label="If yes, please provide the website link and do you use a hosting platform (Shopify, Squarespace, Wix)."
                    labelInput="Website"
                  />

                  <FormSelect
                    name="q22"
                    value={formData.q22}
                    onChange={handleChange}
                    label="Do you have or need an e-commerce platform to sell products or services online?"
                    value1="Yes"
                    value2="No"
                  />

                  <FormSelect
                    name="q23"
                    value={formData.q23}
                    onChange={handleChange}
                    label="Who are your top competitors, and what aspects of their websites do you appreciate or dislike?"
                    value1="Yes"
                    value2="No"
                  />
                </Grid>
              )}
              {activeStep === 5 && (
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <FormSelect
                    name="q24"
                    value={formData.q24}
                    onChange={handleChange}
                    label="Have you conducted a Search Engine Optimisation (SEO) audit for your website?"
                    value1="Yes"
                    value2="No"
                  />
                  <FormTextArea
                    name="q25"
                    value={formData.q25}
                    onChange={handleChange}
                    label="If yes, please provide the last audit date and critical findings."
                  />

                  <FormSelect
                    name="q26"
                    value={formData.q26}
                    onChange={handleChange}
                    label="Are you actively managing your business profile on Google My Business and other search engines?"
                    value1="Yes"
                    value2="No"
                  />

                  <FormTextArea
                    name="q27"
                    value={formData.q27}
                    onChange={handleChange}
                    label="What are the primary keywords or phrases you are ranked for or would like to rank for in search engine results?"
                  />

                  <FormSelect
                    name="q28"
                    value={formData.q28}
                    onChange={handleChange}
                    label="Have you utilised or are you considering paid advertising campaigns on SEO?"
                    value1="Yes"
                    value2="No"
                  />
                  <FormTextArea
                    name="q29"
                    value={formData.q29}
                    onChange={handleChange}
                    label="If yes, please specify your budget and objectives."
                  />
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
              <Button
                onClick={
                  activeStep === steps.length - 1 ? handleSubmit : handleNext
                }
              >
                {activeStep === steps.length - 1 ? `Finish` : "Next"}
              </Button>
              {/* <Button>Dashboard</Button> */}
            </Box>
          </Grid>
        )}
      </form>
    </Box>
  );
}
