import { useEffect, useState } from "react";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
  Avatar,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { Formik } from "formik";
import * as yup from "yup";
import PersonIcon from "@mui/icons-material/Person";
import Header from "./Header";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { userRequest } from "../../requestMethods";
import { useSelector, useDispatch } from "react-redux";
// import { loginSuccess } from "../../redux/userRedux";

const EditProfile = ({ openDrawer }) => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.currentUser);

  const isNonMobile = useMediaQuery("(min-width:968px)");
  const navigate = useNavigate();

  const handleEditProfile = async (data) => {
    try {
      const res = await userRequest.put(`/users/${id}`, data);
      const updatedUser = {
        ...res.data,
        accessToken: user.accessToken,
      };
      dispatch(loginSuccess(updatedUser));
      navigate("/user/profile")
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setProfilePictureFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const initialValues = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    username: user?.username,
  };
  return (
    <Stack spacing={3}>
      <Header
        Icon={PersonIcon}
        title={"Edit Profile"}
        openDrawer={openDrawer}
        button="Back To Profile"
        link={`/user/profile`}
      />

      <Paper
        elevation={0}
        sx={{
          bgcolor: "white",
          paddingX: isNonMobile ? 5 : 2,
          paddingY: 4,
        }}
      >
        <Formik
          enableReinitialize={true}
          onSubmit={(values) => {
            handleEditProfile(values)
          }}
          initialValues={initialValues}
          validationSchema={editSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            isValid,
            dirty,
          }) => (
            <form onSubmit={handleSubmit}>
              {/* <Box
                display="flex"
                alignItems={{ xs: "center", md: "flex-end" }}
                justifyContent={{ xs: "center", md: "flex-start" }}
                mb={3}
              >
                <Avatar
                  alt="profile-picture"
                  src={profilePicture || user?.image}
                  sx={{ width: 64, height: 64 }}
                />
                <Box ml="-15px">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                    id="profilePictureInput"
                  />
                  <label htmlFor="profilePictureInput">
                    <IconButton
                      component="span"
                      sx={{
                        backgroundColor: "#e3e9ef !important",
                        color: "#0F3460 !important",
                        padding: "7px",
                        "&:hover": {
                          backgroundColor: "#0f34600a !important",
                        },
                      }}
                    >
                      <CameraEnhanceIcon
                        sx={{
                          fontSize: "1.2rem",
                        }}
                      />
                    </IconButton>
                  </label>
                </Box>
              </Box> */}

              <Box
                display="grid"
                gap="20px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="Username"
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username}
                  name="username"
                  error={!!touched.username && !!errors.username}
                  helperText={touched.username && errors.username}
                  sx={{
                    gridColumn: "span 2",
                    "& .MuiInputBase-root": {
                      fontSize: "15px",
                    },
                  }}
                  InputLabelProps={{
                    style: { fontSize: "14px" },
                  }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="First Name"
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{
                    gridColumn: "span 2",
                    "& .MuiInputBase-root": {
                      fontSize: "15px",
                    },
                  }}
                  InputLabelProps={{
                    style: { fontSize: "14px" },
                  }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="Last Name"
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  sx={{
                    gridColumn: "span 2",
                    "& .MuiInputBase-root": {
                      fontSize: "15px",
                    },
                  }}
                  InputLabelProps={{
                    style: { fontSize: "14px" },
                  }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  type="email"
                  label="Email"
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{
                    gridColumn: "span 2",
                    "& .MuiInputBase-root": {
                      fontSize: "15px",
                    },
                  }}
                  InputLabelProps={{
                    style: { fontSize: "14px" },
                  }}
                />
              </Box>
              <Button
                type="submit"
                disabled={!isValid}
                sx={{
                  mt: 4,
                  textTransform: "none",
                  bgcolor:
                    !isValid 
                      ? "#0000001f !important"
                      : "primary.main",
                  color: "white",
                  fontSize: "14px",
                  paddingX: "20px",
                  fontWeight: 500,
                  paddingY: "8px",
                  alignSelf: "start",
                  "&:hover": {
                    backgroundColor: "#fc973f",
                  },
                }}
              >
                Save Changes
              </Button>
            </form>
          )}
        </Formik>
      </Paper>
    </Stack>
  );
};
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const editSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  username: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
});
export default EditProfile;
