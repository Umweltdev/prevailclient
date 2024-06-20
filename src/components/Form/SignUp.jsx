import React, { useContext, useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../utils/Loading";
import signupImage from '../Form/image_130.png';
import image2 from '../Form/Group_1410085960.png';

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    fontSize: "14px",
    height: "45px",
    borderRadius: "10px",
    backgroundColor: "#f0f0f0",
  },
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { loading, error, dispatch } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    //lastName: "",
    email: "",
    //phone: "",
    //location: "",
    //companyName: "",
    password: "",
    //confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      dispatch({ type: "SIGNUP_FAILURE", payload: { message: "Passwords do not match" } });
      return;
    }
    try {
      dispatch({ type: "SIGNUP_START" });

      const response = await axios.post(
        "https://prevailserver-4b3c670a5496.herokuapp.com/api/auth/register",
        formData
      );
      const user = response.data;
      dispatch({ type: "SIGNUP_SUCCESS", payload: user });
      navigate("/user/profile", { state: { user: user } });
    } catch (error) {
      dispatch({ type: "SIGNUP_FAILURE", payload: error.response.data });
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      {loading && <Loading />}

      {!loading && (
        <Grid container sx={{ width: '100%' }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem',
            }}
          >
            <Grid
              container
              direction="column"
              spacing={2}
              sx={{
                maxWidth: 400,
                width: '100%',
              }}
              component="form"
              onSubmit={handleSubmit}
              noValidate
              autoComplete="on"
            >
              <Grid item>
                <Typography
                  variant="h4"
                  align="center"
                  sx={{
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    mt: { xs: '4rem', md: '0' } // Add top margin for small screens
                  }}
                >
                  Welcome back
                </Typography>
                <Typography variant="body1" align="center" sx={{ marginBottom: '2rem' }}>
                  Welcome back! Please enter your details.
                </Typography>
                {error && <span style={{ color: 'red' }}>{error.message}!</span>}
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>Name</Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </Grid>
              {/*<Grid item>
                <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>Last Name</Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormChange}
                />
                </Grid>*/}
              <Grid item>
                <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>Email</Typography>
                <CustomTextField
                  fullWidth
                  placeholder="hi@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </Grid>
              {/*<Grid item>
                <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>Phone Number</Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
              />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>Location</Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>Company Name</Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleFormChange}
                />
              </Grid>*/}
              <Grid item sx={{ position: 'relative' }}>
                <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>Password</Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Enter Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleFormChange}
                />
                <IconButton
                  onClick={handleTogglePassword}
                  sx={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(10%)', // Adjust the translateY value to align the icon
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </Grid>
              {/*<Grid item sx={{ position: 'relative' }}>
                <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>Confirm Password</Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleFormChange}
                />
                <IconButton
                  onClick={handleToggleConfirmPassword}
                  sx={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(10%)', // Adjust the translateY value to align the icon
                  }}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </Grid>*/}
              <Grid item>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{
                    backgroundColor: '#7a4fd4', // A bit more purple
                    color: 'white',
                    textTransform: 'none',
                    marginBottom: '1rem',
                    borderRadius: '10px', // Add border-radius
                    '&:hover': {
                      backgroundColor: '#9370db',
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    textTransform: 'none',
                    borderRadius: '10px', // Add border-radius
                    borderColor: 'black', // Black border color
                    color: 'black',
                    '&:hover': {
                      borderColor: 'black',
                    }
                  }}
                  startIcon={<img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" style={{ width: '20px', height: '20px' }} />}
                >
                  Continue with Google
                </Button>
              </Grid>
              <Grid item>
                <Typography variant="body2" align="center" sx={{ marginTop: '1rem' }}>
                  Already have an account? <Link to="/login" style={{ fontWeight: 'bold', textDecoration: 'none' }}>Login</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#e0e4e8', // Much lighter blue-grey background
              padding: '2rem',
              height: '100vh', // Ensure it takes the full height of the viewport
              overflowY: 'auto', // Ensure content is scrollable if it overflows
            }}
          >
            <img src={signupImage} alt="Sign Up" style={{ width: '80%', height: 'auto', marginBottom: '1rem' }} />
            <Typography variant="h6" align="left" sx={{ width: '80%' }}>
              Powered by <img src={image2} alt="Prevail Logo" />
            </Typography>
            <Typography align="left" sx={{ width: '80%', marginTop: '1rem' }}>
              You agree to Prevail Agency's Terms of Use & Privacy Policy. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply.
            </Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default SignUp;
