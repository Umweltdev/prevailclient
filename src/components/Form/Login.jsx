import React, { useContext, useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  IconButton,
  Link as MuiLink,
  CardMedia,
  CircularProgress,
  Modal,
  Fade,
  Box,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../utils/Loading";
import loginImage from "../Form/Login-Signup.webp";
import image2 from "../Form/Group_1.svg";
import { PasswordInput, TextInput } from "./Textfileds";
import Backdrop from "@mui/material/Backdrop";
import ForgotPasswordForm from "./ForgotPassword/ForgotPasswordForm";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    fontSize: "14px",
    height: "45px",
    borderRadius: "10px",
    backgroundColor: "#f0f0f0",
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 900px)": {
    width: "80vw",
    fontWeight: "16px",
  },
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { user, loading, error, dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGIN_START" });
      setIsButtonLoading(true);

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
    } finally {
      setIsButtonLoading(false);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // console.log("user", user.user);

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        "@media (max-width: 900px)": {
          flexDirection: "column",
          alignItems: "center",
          margin: "auto",
          overflowX: "hidden",
        },
      }}
    >
      <Grid
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "50vw",
          "@media (max-width: 900px)": {
            flexDirection: "column",
            width: "90vw",
            alignItems: "center",
            margin: "auto",
          },
        }}
        id="login"
      >
        <Grid item>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "bold",
              marginBottom: "1rem",
              "@media (max-width: 900px)": {
                flexDirection: "column",
                width: "80vw",
                alignItems: "center",
              },
              mt: {
                xs: "5rem",
                md: "0",
              }, // Add top margin for small screens
            }}
          >
            Welcome back
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              marginBottom: "2rem",
              "@media (max-width: 900px)": {
                width: "80vw",
              },
            }}
          >
            Welcome back! Please enter your details.
          </Typography>
          {error && (
            <span style={{ color: "red", textAlign: "center" }}>
              {error.message}!
            </span>
          )}
        </Grid>

        {/* <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>Email</Typography> */}
        <TextInput
          width={"30vw"}
          mobileWidth={"80vw"}
          placeholder="hi@example.com"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput
          width={"30vw"}
          mobileWidth={"80vw"}
          placeholder="Enter Password"
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Grid item>
          <Typography
            onClick={handleOpen}
            sx={{ textAlign: "left", mb: "10px", cursor: "pointer" }}
          >
            Forgot Password?
          </Typography>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <ForgotPasswordForm />
              </Box>
            </Fade>
          </Modal>
        </Grid>
        <Grid item>
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
              width: "31vw",
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
              "Login"
            )}
          </Button>
        </Grid>

        <Grid item>
          <Typography
            variant="body2"
            align="center"
            sx={{
              marginTop: "1rem",
              "@media (max-width: 900px)": {
                mb: "50px",
                width: "80vw",
              },
            }}
          >
            Don't have an account?
            <span style={{ marginLeft: "5px" }}>
              <Link
                to="/signup"
                style={{ fontWeight: "bold", textDecoration: "none" }}
              >
                <Typography variant="body2" component="span">
                  Sign up for free
                </Typography>
              </Link>
            </span>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "top",
          alignItems: "center",
          backgroundColor: "#F7F7FD",
          height: "100vh",
          overflowY: "auto",
          width: "50vw",
          "@media (max-width: 900px)": {
            width: "100vw",
            height: "unset",
          },
        }}
      >
        <CardMedia
          component={"img"}
          image={loginImage}
          alt="Login-Signup"
          sx={{
            height: "75vh",
            marginBottom: "20px",
            width: "50vw",
            objectFit: "cover",
            "@media (max-width: 900px)": {
              width: "100vw",
              height: "auto",
            },
          }}
        />
        <Typography
          variant="h6"
          align="left"
          sx={{
            width: "45vw",
            "@media (max-width: 900px)": {
              width: "80vw",
            },
          }}
        >
          Powered by <img src={image2} alt="Prevail Logo" />
        </Typography>
        <Typography
          align="left"
          sx={{
            width: "45vw",
            marginTop: "1rem",
            "@media (max-width: 900px)": {
              width: "80vw",
              mb: "3vh",
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

export default Login;
