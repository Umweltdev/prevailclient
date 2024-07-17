import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FormTextArea from "./StepperFormInputs/FormTextArea";
import FormInputText from "./StepperFormInputs/FormInputText";
import SubmitStepper from "./StepperFormInputs/SubmitStepper";
import { AuthContext } from "../../context/AuthContext";
import emailjs from "emailjs-com";

const useStyles = makeStyles({
  textArea: {
    width: "50vw",
    marginBottom: "3vh",
  },
});

const steps = ["Business Overview", "Market Overview", "Submit"];

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
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const userId = user.user.id;

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEmail = async () => {
    const templateParams = {
      to_name: "Prevail Agency", // Replace with the recipient's name
      from_name: user.user.name, // Replace with the sender's name
      from_company: user.user.company, // Replace with the sender's name
      from_email: user.user.email, // Replace with the sender's email
      q1: formData.q1, // Replace with the actual values from the form
      q2: formData.q2,
      q3: formData.q3,
      q4: formData.q4,
      q5: formData.q5,
      q6: formData.q6,
      q7: formData.q7,
      q8: formData.q8,
      q9: formData.q9,
      q10: formData.q10,
      q11: formData.q11,
    };

    try {
      await emailjs.send(
        "service_lj95wfq",
        "template_whzqabk",
        templateParams,
        "user_CPUrZMkDdKmWI19xzxeJA"
      );
      console.log("Email successfully sent!");
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        `https://prevailserver-4b3c670a5496.herokuapp.com/api/stepper/quest/${userId}`,
        formData
      );

      const reg = response.data;
      setSuccess("Registration successful!");
      await handleEmail();
      navigate("/user/profile");
    } catch (err) {
      setError(`Registration failed. Please try again: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        `https://prevailserver-4b3c670a5496.herokuapp.com/api/stepper/quest/${userId}`,
        formData
      );
      const reg = response.data;
      setSuccess("Data saved successfully!");
      navigate("/dashboard");
    } catch (err) {
      setError(`Save failed. Please try again: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const skipBtn = async () => {
    navigate("/dashboard");
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
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        m: "20vh auto",
        "@media (max-width: 900px)": {
          m: "10vh auto",
        },
      }}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
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
              All steps completed - We will get back to you as soon as possible
              through your email, or check your dashboard for updates
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
                  <FormTextArea
                    label="Why was it founded? What is the story behind the business?"
                    name="q1"
                    value={formData.q1}
                    onChange={handleChange}
                  />
                  <FormInputText
                    label="What is the industry/sector?"
                    name="q2"
                    labelInput="Company & Industry"
                    value={formData.q2}
                    onChange={handleChange}
                  />
                  <FormTextArea
                    label="Does the company have a mission statement or core values?"
                    name="q3"
                    value={formData.q3}
                    onChange={handleChange}
                  />
                  <FormTextArea
                    label="Briefly describe the company in a few sentences."
                    name="q4"
                    value={formData.q4}
                    onChange={handleChange}
                  />
                  <FormTextArea
                    label="What are some of the goals/objectives? (increase revenue, increase profit, improve my ROI, get more conversions, lower my acquisition cost, other)"
                    name="q5"
                    value={formData.q5}
                    onChange={handleChange}
                  />
                  <FormTextArea
                    label="What is the vision for the company in the future? (For example, in 2 years+)"
                    name="q6"
                    value={formData.q6}
                    onChange={handleChange}
                  />
                </Grid>
              )}
              {activeStep === 1 && (
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <FormTextArea
                    label="Can you provide a list of competitors?"
                    name="q7"
                    value={formData.q7}
                    onChange={handleChange}
                  />
                  <FormTextArea
                    label="What sets the company apart from competitors?"
                    name="q8"
                    value={formData.q8}
                    onChange={handleChange}
                  />
                  <FormTextArea
                    label="Can you describe your typical customer? (demographic, geographic, psychographic, and behavioural traits)"
                    name="q9"
                    value={formData.q9}
                    onChange={handleChange}
                  />
                  <FormTextArea
                    label="What problems does your business solve for prospects/customers?"
                    name="q10"
                    value={formData.q10}
                    onChange={handleChange}
                  />
                  <FormTextArea
                    label="What is your unique selling point (USP) which sets you apart from your competitors?"
                    name="q11"
                    value={formData.q11}
                    onChange={handleChange}
                  />
                </Grid>
              )}
              {activeStep === 2 && (
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

              <Button
                onClick={
                  activeStep === steps.length - 1 ? handleSubmit : handleNext
                }
              >
                {activeStep === steps.length - 1 ? `Finish` : "Next"}
              </Button>
              {activeStep < steps.length - 1 && (
                <>
                  <Button onClick={handleSave} sx={{ ml: 1 }}>
                    Save
                  </Button>

                  <Button onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                </>
              )}
            </Box>
          </Grid>
        )}
      </form>
    </Box>
  );
}
