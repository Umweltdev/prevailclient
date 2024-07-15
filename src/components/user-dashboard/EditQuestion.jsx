import { useContext, useState } from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
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
import ReusedTextArea from "./ReusedTextArea";

const EditQuestion = ({ openDrawer }) => {
  const { id } = useParams();
  const { user, dispatch } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const isNonMobile = useMediaQuery("(min-width:968px)");
  const navigate = useNavigate();

  const handleEditQuestion = async (data) => {
    setLoading(true);
    try {
      const res = await axios.put(
        `https://prevailserver-4b3c670a5496.herokuapp.com/api/user/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(res.data);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user: { ...res.data }, token: user.token },
      });
      navigate("/user/question");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues = {
    q1: user?.user?.q1,
    q2: user?.user?.q2,
    q3: user?.user?.q3,
    q4: user?.user?.q4,
    q5: user?.user?.q5,
    q6: user?.user?.q6,
    q7: user?.user?.q7,
    q8: user?.user?.q8,
    q9: user?.user?.q9,
    q10: user?.user?.q10,
    q11: user?.user?.q11,
  };

  return (
    <Stack spacing={3}>
      <Header
        Icon={PersonIcon}
        title={"Edit Questionnaire"}
        openDrawer={openDrawer}
        button="Back To Questionnaire"
        link={`/user/question`}
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
            handleEditQuestion(values);
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
              <Stack spacing={2} sx={{ flexWrap: "wrap" }}>
                {/* BUSSINESS  OVERVIEW */}
                <Typography sx={{ fontWeight: "600" }}>
                  Business Overview
                </Typography>
                <Box
                  display="grid"
                  gap="20px"
                  sx={{ display: "flex", flexWrap: "wrap" }}
                >
                  <Box>
                    <Typography
                      sx={{ mb: "10px", lineHeight: "20px", width: "20vw" }}
                    >
                      Why was it founded? What is the story behind the business?
                    </Typography>
                    <ReusedTextArea
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.q1}
                      name="q1"
                      // error={!!touched.q1 && !!errors.q1}
                      // helperText={touched.q1 && errors.q1}
                      label="Business Overview"
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ mb: "10px", width: "20vw" }}>
                      What is the industry/sector?
                    </Typography>
                    <ReusedTextArea
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.q2}
                      name="q2"
                      // error={!!touched.q2 && !!errors.q2}
                      // helperText={touched.q2 && errors.q2}
                      label="Business Overview"
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{ mb: "10px", lineHeight: "20px", width: "20vw" }}
                    >
                      Does the company have a mission statement or core values?
                    </Typography>
                    <ReusedTextArea
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.q3}
                      name="q3"
                      // error={!!touched.q3 && !!errors.q3}
                      // helperText={touched.q3 && errors.q3}
                      label="Business Overview"
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{ mb: "10px", lineHeight: "20px", width: "20vw" }}
                    >
                      Briefly describe the company in a few sentences.
                    </Typography>
                    <ReusedTextArea
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.q4}
                      name="q4"
                      // error={!!touched.q4 && !!errors.q4}
                      // helperText={touched.q4 && errors.q4}
                      label="Business Overview"
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{ mb: "10px", lineHeight: "20px", width: "390px" }}
                    >
                      What are some of the goals/objectives? (increase revenue,
                      increase profit, improve my ROI, get more conversions,
                      lower my acquisition cost, other){" "}
                    </Typography>
                    <ReusedTextArea
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.q5}
                      name="q5"
                      // error={!!touched.q5 && !!errors.q5}
                      // helperText={touched.q5 && errors.q5}
                      label="Business Overview"
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        mb: "20px",
                        mt: "30px",
                        lineHeight: "20px",
                        width: "390px",
                      }}
                    >
                      What is the vision for the company in the future? (For
                      example, in 2 years+)
                    </Typography>
                    <ReusedTextArea
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.q6}
                      name="q6"
                      // error={!!touched.q6 && !!errors.q6}
                      // helperText={touched.q6 && errors.q6}
                      label="Business Overview"
                    />
                  </Box>
                </Box>

                {/* MARKET OVERVIEW */}
                <Typography sx={{ fontWeight: "600" }}>
                  Market Overview
                </Typography>
                <Box
                  display="grid"
                  gap="20px"
                  sx={{ display: "flex", flexWrap: "wrap" }}
                >
                  <Box>
                    <Typography
                      sx={{ mb: "10px", lineHeight: "20px", width: "390px" }}
                    >
                      Can you provide a list of competitors?{" "}
                    </Typography>
                    <ReusedTextArea
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.q7}
                      name="q7"
                      // error={!!touched.q7 && !!errors.q7}
                      // helperText={touched.q7 && errors.q7}
                      label="Business Overview"
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ mb: "10px", width: "390px" }}>
                      What sets the company apart from competitors?
                    </Typography>
                    <ReusedTextArea
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.q8}
                      name="q8"
                      // error={!!touched.q8 && !!errors.q8}
                      helperText={touched.q8 && errors.q8}
                      label="Business Overview"
                    />
                  </Box>

                  <Box>
                    <Typography sx={{ mb: "10px", width: "390px" }}>
                      What sets the company apart from competitors?
                    </Typography>
                    <ReusedTextArea
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.q9}
                      name="q9"
                      // error={!!touched.q9 && !!errors.q9}
                      // helperText={touched.q9 && errors.q9}
                      label="Business Overview"
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ mb: "10px", width: "390px" }}>
                      What problems does your business solve for
                      prospects/customers?
                    </Typography>
                    <ReusedTextArea
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.q10}
                      name="q10"
                      // error={!!touched.q10 && !!errors.q10}
                      // helperText={touched.q10 && errors.q10}
                      label="Business Overview"
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ mb: "10px", width: "390px" }}>
                      What is your unique selling point (USP) which sets you
                      apart from your competitors?
                    </Typography>
                    <ReusedTextArea
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.q11}
                      name="q11"
                      // error={!!touched.q11 && !!errors.q11}
                      // helperText={touched.q11 && errors.q11}
                      label="Business Overview"
                    />
                  </Box>
                </Box>
              </Stack>
              <Button
                type="submit"
                // disabled={!isValid}
                sx={{
                  mt: 4,
                  textTransform: "none",
                  bgcolor: "primary.main",
                  color: "white",
                  fontSize: "14px",
                  paddingX: "20px",
                  fontWeight: 500,
                  paddingY: "8px",
                  alignSelf: "start",
                  "&:hover": {
                    backgroundColor: "primary.main",
                  },
                }}
              >
                {loading ? "Loading" : "Save Changes"}
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
  q1: yup.string(),
  q2: yup.string(),
  q3: yup.string(),
  q4: yup.string(),
  q5: yup.string(),
  q6: yup.string(),
  q7: yup.string(),
  q8: yup.string(),
  q9: yup.string(),
  q10: yup.string(),
  q11: yup.string(),
});
export default EditQuestion;
