import { useContext } from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import PersonIcon from "@mui/icons-material/Person";
import Header from "./Header";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { userRequest } from "../../requestMethods";
import { useSelector, useDispatch } from "react-redux";
// import { loginSuccess } from "../../redux/userRedux";
import { AuthContext } from "../../context/AuthContext";
import axiosInstance from "../utils/axios";
import axios from "axios";

const EditProfile = ({ openDrawer }) => {
  const { id } = useParams();
  const { user, dispatch } = useContext(AuthContext);

  const isNonMobile = useMediaQuery("(min-width:968px)");
  const navigate = useNavigate();

  const handleEditProfile = async (data) => {
    try {
      const res = await axios.put(`https://prevailserver-4b3c670a5496.herokuapp.com/api/user/${id}`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`
        },
      });   
      console.log(res.data)
      dispatch({ type: "LOGIN_SUCCESS", payload: {user:{...res.data},token:user.token} });
      navigate("/user/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues = {
    firstName: user?.user?.firstName,
    lastName: user?.user?.lastName,
    email: user?.user?.email,
    phone: user?.user?.phone,
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
            handleEditProfile(values);
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
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="Phone Number"
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                  name="phone"
                  error={!!touched.phone && !!errors.phone}
                  helperText={touched.phone && errors.phone}
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
                  bgcolor: !isValid ? "#0000001f !important" : "primary.main",
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
  phone: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
});
export default EditProfile;
