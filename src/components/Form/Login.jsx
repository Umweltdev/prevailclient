import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Paper,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../utils/Loading";
import loginImage from '../Form/pmmlogo.png';

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
    <Grid container sx={{ height: '100vh' }}>
      {loading && <Loading />}

      {!loading && (
        <Grid container sx={{ width: '100%' }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: '2rem',
                width: '100%',
                maxWidth: 400,
                margin: '0 auto',
              }}
            >
              <img src="/path-to-your-logo.png" alt="Prevail Agency Logo" style={{ width: '150px', marginBottom: '2rem' }} /> {/* Replace with your logo */}
              <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Welcome back
              </Typography>
              <Typography variant="body1" align="center" sx={{ marginBottom: '2rem' }}>
                Welcome back! Please enter your details.
              </Typography>
              {error && <span style={{ color: 'red' }}>{error.message}!</span>}
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
                noValidate
                autoComplete="on"
              >
                <CustomTextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Box sx={{ position: 'relative' }}>
                  <CustomTextField
                    fullWidth
                    label="Password"
                    variant="outlined"
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
                      transform: 'translateY(-50%)',
                    }}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </Box>
                <MuiLink href="#" underline="hover" sx={{ alignSelf: 'flex-start', marginBottom: '1rem' }}>
                  Forgot Password?
                </MuiLink>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{
                    backgroundColor: '#450fad',
                    color: 'white',
                    textTransform: 'none',
                    marginBottom: '1rem',
                    '&:hover': {
                      backgroundColor: '#3a0d96',
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ textTransform: 'none' }}
                  startIcon={<img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" style={{ width: '20px', height: '20px' }} />}
                >
                  Continue with Google
                </Button>
                <Typography variant="body2" align="center" sx={{ marginTop: '1rem' }}>
                  Don't have an account? <Link to="/signup" style={{ fontWeight: 'bold', textDecoration: 'none' }}>Sign up for free</Link>
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <img src={loginImage} alt="Login" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Login;
