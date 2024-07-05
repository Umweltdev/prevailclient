import { Visibility } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState }from "react";
import axiosInstance from "../utils/axios";
import makeToast from "../../makeToast";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

const Subscribe = () => {

  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await axiosInstance.post(`/api/auth/addSubscriber`, {
          email: values.email,
        });
        makeToast("success", "Successfully subscribed to our newsletters");
        resetForm();
      } catch (error) {
        makeToast("error", error?.message?.title || "Something went wrong, Please try again later");
        console.log(error);
      }
    },
  });

  return (
    <Grid
      sx={{
        height: "40vh",
        background: "#3E2162",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "@media (max-width: 600px)": {
          flexDirection: "column",
          width: "100vw",
          height: "50vh",
        },
      }}
    >
      <Grid sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography
          sx={{
            fontSize: "38px",
            fontWeight: "700",
            letterSpacing: "-0.38px",
            width: "594.07px",
            "@media (max-width: 600px)": {
              flexDirection: "column",
              width: "90vw",
              fontSize: "28px",
            },
          }}
        >
          Subscribe to our Newsletter
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            letterSpacing: "-0.38px",
            lineHeight: "160%",
            color: "#C1B2D5",
            "@media (max-width: 600px)": {
              flexDirection: "column",
              width: "90vw",
              fontSize: "14px",
            },
          }}
        >
          Follow our Newsletter to stay updated
        </Typography>
      </Grid>
      <Grid sx={{ color: "white", borderRadius: "25px" }}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl
            sx={{
              m: 1,
              width: "607.299px",
              height: "60px",
              color: "#fff",
              borderRadius: "25px",
              "@media (max-width: 600px)": {
                width: "90vw",
              },
            }}
            variant="outlined"
          >
            <InputLabel
              htmlFor="outlined-adornment-email"
              sx={{ color: "white" }}
            >
              Enter your email address
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              endAdornment={
                <InputAdornment position="end" color={"white"}>
                  <IconButton aria-label="subscribe" edge="end" color={"white"}>
                    <Button
                      type="submit"
                      sx={{
                        color: "#fff",
                        background: "#6E3EF4",
                        width: "144px",
                        borderRadius: "25px",
                        "@media (max-width: 600px)": {
                          display: "none",
                        },
                        "&:hover": {
                          color: "#fff",
                          background: "#6E3EF4",
                        },
                      }}
                      disabled={!(formik.isValid && formik.dirty)}
                    >
                      Subscribe
                    </Button>
                  </IconButton>
                </InputAdornment>
              }
              label="Enter your email address"
              sx={{
                borderRadius: "30px",
                "& .MuiOutlinedInput-input": {
                  color: "#656565",
                  borderRadius: "30px",
                  // width: "90vw",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "30px",
                  borderColor: "#656565",
                  // width: "90vw",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#656565",
                  // width: "90vw",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#656565",
                  // width: "90vw",
                },
              }}
            />
            {formik.touched.email && formik.errors.email && (
              <Typography color="error">{formik.errors.email}</Typography>
            )}
          </FormControl>
          <Grid
            sx={{
              display: "none",
              borderRadius: "25px",
              "@media (max-width: 600px)": {
                display: "block",
                margin: "10px 0 55px 0",
                textAlign: "center",
              },
            }}
          >
            <Button
              type="submit"
              sx={{
                borderRadius: "25px",
                textAlign: "center",
                color: "white",
                margin: "auto",
                width: "90vw",
                padding: "10px 0",
                background: "#6E3EF4",
                "&:hover": {
                  color: "#fff",
                  background: "#6E3EF4",
                },
              }}
              disabled={!(formik.isValid && formik.dirty)}
            >
              Subscribe!
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Subscribe;
