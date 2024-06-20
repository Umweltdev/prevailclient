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
import loginImage from '../Form/image_130.png';
import image2 from '../Form/Group_1410085960.png';

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    fontSize: "14px",
    height: "45px",
    borderRadius: "10px",
    backgroundColor: "#f0f0f0",
  },
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { user, loading, error, dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGIN_START" });

      const response = await axios.post(
        "https://prevailserver-4b3c670a5496.herokuapp.com/api/auth/login",
        {
          email,
          password,
        }
      );
      const user = response.data;
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
      navigate("/user/profile", { state: { user: user } });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
                    mt: { xs: '2rem', md: '0' } // Add top margin for small screens
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
                <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>Email</Typography>
                <CustomTextField
                  fullWidth
                  placeholder="hi@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item sx={{ position: 'relative' }}>
                <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>Password</Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Enter Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <Grid item>
                <MuiLink href="#" underline="hover" sx={{ alignSelf: 'flex-start', marginBottom: '1rem' }}>
                  Forgot Password?
                </MuiLink>
              </Grid>
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
                  Login
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
                  Don't have an account? <Link to="/signup" style={{ fontWeight: 'bold', textDecoration: 'none' }}>Sign up for free</Link>
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
            <img src={loginImage} alt="Login" style={{ width: '80%', height: 'auto', marginBottom: '1rem' }} />
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

export default Login;
