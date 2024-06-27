import React, { useRef, useState } from "react";
import { InputDesign, LongInputDesign } from "./assets/InputDesign";
import { TextArea } from "./assets/TextArea";
import {
  Alert,
  Box,
  CircularProgress,
  Fab,
  Grid,
  Typography,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import MultiSelect from "./assets/MultiSelect";

const Form = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Collect form data
    const formData = new FormData(form.current);

    // Convert FormData to a plain object
    const formObject = Object.fromEntries(formData.entries());

    // Add selected services as a comma-separated string
    formObject.services = selectedServices
      .map((service) => service.title)
      .join(", ");

    emailjs
      .send(
        "service_0epeded",
        "template_rr6j484",
        formObject,
        "mBHyvMwaFOG9bwNUx"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          setSuccess(true);
          form.current.reset(); // Reset the form
          setSelectedServices([]); // Clear selected services
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <Box
      component={"form"}
      ref={form}
      onSubmit={sendEmail}
      sx={{
        background: "#FBF9FF",
        width: "692px",
        p: "9px 0 69px 0",
        borderRadius: "16px",
        "@media (max-width: 600px)": {
          width: "90vw",
          height: "unset",
        },
      }}
      id="generate_lead"
    >
      <Grid sx={{}}>
        <Typography
          sx={{
            color: "#1D0D40",
            fontSize: "28px",
            fontWeight: "500",
            lineHeight: "110%",
            letterSpacing: "-0.28px",
            pt: "58px",
            pl: "44px",
            pb: "25px",
            "@media (max-width: 600px)": {
              pl: "3vw",
              width: "80vw",
            },
          }}
        >
          Talk To Us
        </Typography>
        {success && (
          <Alert severity="success" sx={{ mx: 4 }}>
            Your message has been sent successfully!
          </Alert>
        )}
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "21px",
          "@media (max-width: 600px)": {
            flexDirection: "column",
          },
        }}
      >
        <InputDesign name={"firstName"} label={"First Name"} />
        <InputDesign name={"lastName"} label={"Last Name"} />
        <InputDesign name={"email_id"} label={"Email"} />
        <InputDesign name={"phone"} label={"Phone"} />
        <InputDesign name={"location"} label={"Location"} />
        <InputDesign name={"company"} label={"Company Name"} />
      </Grid>
      <Grid
        sx={{
          margin: "auto",
          textAlign: "center",
          mt: "16px",
        }}
      >
        <LongInputDesign label={"Website Link"} name={"weblink"} />
        <LongInputDesign label={"subject"} name={"subject"} />
        <TextArea
          label={"How Can We Help You"}
          name={"message"}
          sx={{
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        />
        <MultiSelect
          name={"services"}
          setSelectedServices={setSelectedServices}
        />
      </Grid>
      <Grid
        sx={{
          margin: "auto",
          textAlign: "center",
          mt: "16px",
          "@media (max-width: 600px)": {
            m: "15px auto 60px auto",
          },
        }}
      >
        <Fab
          component="button"
          type="submit"
          sx={{
            color: "#FFF",
            fontSize: "16px",
            width: "620.204px",
            borderRadius: "5px",
            background: "#6E3EF4;",
            transition: "0.5s all ease-in-out",
            boxShadow: "0",
            "&:hover": { boxShadow: "0", color: "#fff", background: "#6E3EF4" },
            "@media (max-width: 600px)": {
              width: "85vw",
              fontSize: "10.992px",
            },
          }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Submit"}
        </Fab>
      </Grid>
    </Box>
  );
};

export default Form;
