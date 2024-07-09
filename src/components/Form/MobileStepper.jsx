import * as React from "react";
import { useRef } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Grid, TextField } from "@mui/material";
import axios from "axios";
import SubmitStepper from "./StepperFormInputs/SubmitStepper";

const steps = [
  {
    label: "Business Overview",
    description: (refs) => (
      <Box sx={{ width: "100%" }}>
        <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
          <Typography
            sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
          >
            Why was it founded? What is the story behind the business?
          </Typography>
          <TextField
            inputRef={refs.q1}
            label="Type here..."
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
          <Typography
            sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
          >
            What is the industry/sector?
          </Typography>
          <TextField
            inputRef={refs.q2}
            label="industry/sector?"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
          <Typography
            sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
          >
            Does the company have a mission statement or core values?
          </Typography>
          <TextField
            inputRef={refs.q3}
            label="Type here..."
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
          <Typography
            sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
          >
            Briefly describe the company in a few sentences.
          </Typography>
          <TextField
            inputRef={refs.q4}
            label="Type here..."
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
          <Typography
            sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
          >
            What are some of the goals/objectives? (increase revenue, increase
            profit, improve my ROI, get more conversions, lower my acquisition
            cost, other)
          </Typography>
          <TextField
            inputRef={refs.q5}
            label="Type here..."
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
          <Typography
            sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
          >
            What is the vision for the company in the future? (For example, in 2
            years+)
          </Typography>
          <TextField
            inputRef={refs.q6}
            label="Type here..."
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
      </Box>
    ),
  },
  {
    label: "Market Overview",
    description: (refs) => (
      <Box sx={{ width: "100%" }}>
        <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
          <Typography
            sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
          >
            Can you provide a list of competitors?
          </Typography>
          <TextField
            inputRef={refs.q7}
            label="Type here..."
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
          <Typography
            sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
          >
            What sets the company apart from competitors?
          </Typography>
          <TextField
            inputRef={refs.q8}
            label="Type here..."
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
          <Typography
            sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
          >
            Can you describe your typical customer? (demographic, geographic,
            psychographic, and behavioural traits)
          </Typography>
          <TextField
            inputRef={refs.q9}
            label="Type here..."
            multiline
            rows={4}
            fullWidth
          />
        </Grid>

        <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
          <Typography
            sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
          >
            What problems does your business solve for prospects/customers?
          </Typography>
          <TextField
            inputRef={refs.q10}
            label="Type here..."
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid sx={{ width: "100%", marginBottom: "2vh" }}>
          <Typography
            sx={{ width: "80vw", marginTop: "1vh", fontSize: "4vw", mb: "1vh" }}
          >
            What is your unique selling point (USP) which sets you apart from
            your competitors?
          </Typography>
          <TextField
            inputRef={refs.q11}
            label="Type here..."
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
      </Box>
    ),
  },
  {
    label: "Submit",
    description: () => <SubmitStepper />,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  // Create refs for each input field
  const refs = {
    q1: useRef(null),
    q2: useRef(null),
    q3: useRef(null),
    q4: useRef(null),
    q5: useRef(null),
    q6: useRef(null),
    q7: useRef(null),
    q8: useRef(null),
    q9: useRef(null),
    q10: useRef(null),
    q11: useRef(null),
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSubmit = () => {
    const data = {
      q1: refs.q1.current.value,
      q2: refs.q2.current.value,
      q3: refs.q3.current.value,
      q4: refs.q4.current.value,
      q5: refs.q5.current.value,
      q6: refs.q6.current.value,
      q7: refs.q7.current.value,
      q8: refs.q8.current.value,
      q9: refs.q9.current.value,
      q10: refs.q10.current.value,
      q11: refs.q11.current.value,
    };

    axios
      .post(
        "https://prevailserver-4b3c670a5496.herokuapp.com/api/stepper",
        data
      )
      .then((response) => {
        console.log("Success:", response.data);
        // Handle navigation if needed
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "13vh 2vh" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {typeof step.description === "function" ? (
                <Typography>{step.description(refs)}</Typography>
              ) : (
                <Typography>{step.description}</Typography>
              )}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={
                      index === steps.length - 1 ? handleSubmit : handleNext
                    }
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
          <Typography>
            All steps completed - We will get back to you as soon as possible
            through your email, or check your dashboard for updates.
          </Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
