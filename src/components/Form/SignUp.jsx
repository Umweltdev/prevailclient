import React, { useState } from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    fontSize: "14px",
    height: "45px",
    borderRadius: "10px",
  },
  "& .MuiInputLabel-root": {
    fontSize: "14px",
  },
});

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    companyName: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = () => {
    if (window.innerWidth <= 600) {
      navigate("/MobStepper");
    } else {
      navigate("/Stepper");
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const isFormFilled =
    Object.values(formData).every((val) => val.trim() !== "") &&
    formData.password === formData.confirmPassword;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", bgcolor: "#F6F9FC", py: 3 }}>
      <Paper elevation={3} sx={{ p: 3, width: "80%", maxWidth: 500 }}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h4" align="center">
              Sign Up
            </Typography>
          </Grid>
          <Grid item>
            <form>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <CustomTextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item>
                  <CustomTextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item>
                  <CustomTextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    name="phoneNumber"
                    value={formData.phone}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item>
                  <CustomTextField
                    fullWidth
                    label="Location"
                    variant="outlined"
                    name="location"
                    value={formData.location}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item>
                  <CustomTextField
                    fullWidth
                    label="Company Name"
                    variant="outlined"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item>
                  <CustomTextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                    InputProps={{
                      endAdornment: (
                        <Box
                          sx={{ cursor: "pointer" }}
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </Box>
                      ),
                    }}
                  />
                </Grid>
                <Grid item>
                  <CustomTextField
                    fullWidth
                    label="Confirm Password"
                    variant="outlined"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleFormChange}
                    InputProps={{
                      endAdornment: (
                        <Box
                          sx={{ cursor: "pointer" }}
                          onClick={toggleConfirmPasswordVisibility}
                        >
                          {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </Box>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={handleSignUp}
              //disabled={!isFormFilled}
              fullWidth
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item>
            <Typography align="center">
              Already have an account?{" "}
              <Link to="/Login" style={{ fontWeight: "bold", textDecoration: "none" }}>
                Login
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SignUp;
