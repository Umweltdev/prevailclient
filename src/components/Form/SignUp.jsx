import React, { useContext, useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  CircularProgress,
  CardMedia,
  useMediaQuery,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import image2 from "../Form/Group_1.svg";
import { PasswordInput, TextInput } from "./Textfileds";

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
  const isMobile = useMediaQuery("(max-width:600px)");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: { message: "Passwords do not match" },
      });
      return;
    }
    try {
      dispatch({ type: "LOGIN_START" });
      setIsButtonLoading(true);

      const response = await axios.post(
        "https://prevailserver-4b3c670a5496.herokuapp.com/api/auth/register",
        // "http://localhost:8080/api/auth/register",
        formData
      );
      const user = response.data;
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
      // navigate("/user/profile", { state: { user: user } });
      navigate("/Stepper");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    } finally {
      setIsButtonLoading(false);
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
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        "@media (max-width: 900px)": {
          flexDirection: "column",
          margin: "auto",
          overflowX: "hidden",
        },
      }}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50vw",
          "@media (max-width: 900px)": {
            flexDirection: "column",
            width: "90vw",
            alignItems: "center",
            margin: "auto",
          },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="on"
          id="sign-up"
        >
          <Grid item>
            <Typography
              variant="h4"
              align="center"
              sx={{
                fontWeight: "bold",
                marginBottom: "1rem",
                mt: { xs: "4rem", md: "0" },
              }}
            >
              Welcome
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ marginBottom: "15px" }}
            >
              Welcome to prevail! Please register your details.
            </Typography>
            {error && (
              <span style={{ color: "red", textAlign: "center" }}>
                {error.message}!
              </span>
            )}
          </Grid>
          <Grid
            sx={{
              display: "flex",
              "@media (max-width: 900px)": {
                flexDirection: "column",
              },
            }}
          >
            <TextInput
              placeholder="First Name"
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleFormChange}
              width="20vw"
              mobileWidth={"80vw"}
            />
            <TextInput
              placeholder="Last Name"
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleFormChange}
              width="20vw"
              mobileWidth={"80vw"}
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              "@media (max-width: 900px)": {
                flexDirection: "column",
              },
            }}
          >
            <TextInput
              placeholder="Email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleFormChange}
              width="20vw"
              mobileWidth={"80vw"}
            />
            <TextInput
              placeholder="Company"
              name="company"
              label="Company"
              value={formData.company}
              onChange={handleFormChange}
              width="20vw"
              mobileWidth={"80vw"}
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              "@media (max-width: 900px)": {
                flexDirection: "column",
              },
            }}
          >
            <TextInput
              placeholder="Address"
              name="address"
              label="Address"
              value={formData.address}
              onChange={handleFormChange}
              width="20vw"
              mobileWidth={"80vw"}
            />
            <TextInput
              placeholder="Phone"
              name="phone"
              label="Phone"
              value={formData.phone}
              onChange={handleFormChange}
              width="20vw"
              mobileWidth={"80vw"}
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              "@media (max-width: 900px)": {
                flexDirection: "column",
              },
            }}
          >
            <PasswordInput
              placeholder="Password"
              name="password"
              label="Password"
              value={formData.password}
              onChange={handleFormChange}
              width="20vw"
              mobileWidth={"80vw"}
            />
            <PasswordInput
              placeholder="Confirm Password"
              name="confirmPassword"
              label="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleFormChange}
              width="20vw"
              mobileWidth={"80vw"}
            />
          </Grid>

          <Button
            variant="contained"
            type="submit"
            disabled={isButtonLoading}
            sx={{
              backgroundColor: "#7a4fd4",
              color: "white",
              textTransform: "none",
              marginBottom: "10px",
              fontSize: "16px",
              width: "41vw",
              padding: "12px 0",
              "@media (max-width: 900px)": {
                width: "80vw",
              },
              "&:hover": {
                backgroundColor: "#9370db",
              },
            }}
          >
            {isButtonLoading ? (
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CircularProgress size={24} /> Loading...
              </Typography>
            ) : (
              "Sign Up"
            )}
          </Button>
          <Grid item>
            <Typography
              variant="body2"
              align="center"
              sx={{
                marginTop: "1rem",
              }}
            >
              Already have an account?
              <span style={{ marginLeft: "5px" }}>
                <Link
                  to="/login"
                  style={{ fontWeight: "bold", textDecoration: "none" }}
                >
                  <Typography variant="body2" component="span">
                    Sign in
                  </Typography>
                </Link>
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "top",
          alignItems: "center",
          backgroundColor: "#F7F7FD",
          width: "50vw",
          height: "100vh",
          overflowY: "auto",
          "@media (max-width: 900px)": {
            width: "100vw",
            height: "unset",
          },
        }}
      >
        <CardMedia
          component={"img"}
          image="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720440293/Login-Signup_kk5xao.avif"
          alt="Login-Signup"
          sx={{
            height: "75vh",
            marginBottom: "20px",
            width: "50vw",
            objectFit: "cover",
            "@media (max-width: 900px)": {
              width: "100vw",
              height: "unset",
              mt: "30px",
            },
          }}
        />
        <Typography
          variant="h6"
          align="left"
          sx={{
            width: "90%",
            "@media (max-width: 900px)": {
              width: "80vw",
              height: "unset",
            },
          }}
        >
          Powered by <img src={image2} alt="Prevail Logo" />
        </Typography>
        <Typography
          align="left"
          sx={{
            width: "90%",
            marginTop: "1rem",
            "@media (max-width: 900px)": {
              width: "80vw",
              height: "unset",
              mb: "5vh",
            },
          }}
        >
          You agree to Prevail Agency's Terms of Use & Privacy Policy. You don't
          need to consent as a condition of renting any property, or buying any
          other goods or services. Message/data rates may apply.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SignUp;
