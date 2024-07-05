import { useState, useEffect, useContext } from "react";
import {
  Typography,
  Stack,
  Button,
  Paper,
  Box,
  IconButton,
  useMediaQuery,
  TextField,
  styled,
  Divider,
} from "@mui/material";

import { RemoveRedEye, Description, Clear } from "@mui/icons-material";
import makeToast from "../../makeToast";
import Header from "./Header";
import { fDate } from "../utils/format-time";
import axiosInstance from "../utils/axios";
import Dropzone from "react-dropzone";
import { useFormik } from "formik";
import * as yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";

const CreateMessage = ({ openDrawer }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [touch, setTouched] = useState(false);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:968px)");
  const Mobile = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    const getAddresses = async () => {
      try {
        const res = await axiosInstance.get("/api/message/user-messages", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setMessage(res.data);
        setSelectedFiles(res.data.images.map(_ =>_.url))
      } catch (error) {
        console.log(error);
      }
    };
    if (id !== "create") {
      getAddresses();
    }
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      content: message?.content || "",
      images: [],
    },
    validationSchema: descriptionSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("content", values.content);
        if (values.images && values.images.length > 0) {
          values.images.forEach((file) => {
            formData.append("images", file);
          });
        }

        const res =
          id === "create"
            ? await axiosInstance.post("/api/message", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization: `Bearer ${user.token}`,
                },
              })
            : await axiosInstance.put(`/api/message/${message._id}`, formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization: `Bearer ${user.token}`,
                },
              });
        resetForm();
        setLoading(false);
        setSelectedFiles([]);
        navigate("/user/message");

      } catch (error) {
        console.error("Submission error:", error);
        setLoading(false);
      }
    },
  });

  return (
    <Stack spacing={2}>
      <Header
        Icon={Description}
        title={id !== "create" ? "Edit message" : "Create new message"}
        openDrawer={openDrawer}
        button={"Back"}
        link={"/user/message"}
      />

      <Paper
        elevation={0}
        sx={{
          paddingY: 4,
          paddingX: Mobile ? 3 : 1.5,
          borderRadius: 2,
          display: "flex",
          bgcolor: message ? "white" : "transparent",
        }}
      >
        <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
          <Stack spacing={2} width={"100%"}>
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Content"
              multiline
              rows={4}
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.content && Boolean(formik.errors.content)}
              helperText={formik.touched.content && formik.errors.content}
              InputLabelProps={{
                style: { fontSize: "14px" },
              }}
            />

            <Dropzone
              onDrop={(acceptedFiles) => {
                const validFiles = acceptedFiles.filter(
                  (file) => file.size <= 2 * 1024 * 1024
                );
                if (validFiles.length !== acceptedFiles.length) {
                  makeToast(
                    "error",
                    "Some files are too large. File should not be more than 2mb"
                  );
                  return;
                }
                const files = acceptedFiles.map((file) => {
                  const url = URL.createObjectURL(file);
                  return url;
                });
                setSelectedFiles((prevFiles) => [...files, ...prevFiles]);
                formik.setFieldValue("images", [
                  ...acceptedFiles,
                  ...formik.values.images,
                ]);
              }}
              accept="image/*"
              multiple={true}
            >
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  style={{
                    backgroundColor: "#F6F9FC",
                    width: "100%",
                    mt: 2,
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    alignItems: "center",
                    flexDirection: "column",
                    minHeight: "200px",
                    py: 4,
                    borderRadius: "8px",
                    // border: formik.touched.images && Boolean(formik.errors.images) ? '2px dashed red' : '2px dashed #DAE1E7',
                  }}
                  onBlur={() => setTouched(true)}
                >
                  <input accept="image/*" {...getInputProps()} />
                  <Typography
                    variant="body2"
                    // color={errors.images && touch ? "#f44336" : "#7D879C"}
                  >
                    {/* {errors.images && touch
                  ? errors.images
                  : "Drag and drop images here"}{" "} */}
                  </Typography>
                  <Box width="300px">
                    <Divider
                      sx={{
                        color: "#DAE1E7",
                      }}
                    >
                      OR
                    </Divider>
                  </Box>

                  <Button
                    variant="outlined"
                    sx={{
                      color: "#884ed9",
                      borderColor: "#884ed980",
                      textTransform: "none",
                      fontSize: "15px",
                      fontWeight: 500,
                      paddingX: "30px",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "rgba(78, 151, 253, 0.04)",
                        border: "1px solid #884ed9",
                      },
                    }}
                    component="span"
                  >
                    Select File
                  </Button>
                </div>
              )}
            </Dropzone>
            {selectedFiles.length > 0 && (
              <div
                style={{
                  marginTop: "30px",
                }}
              >
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    style={{
                      display: "inline-block",
                      position: "relative",
                      marginRight: "10px",
                    }}
                  >
                    <Clear
                      sx={{
                        position: "absolute",
                        fontSize: "14px",
                        top: "-10px",
                        right: "-7px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSelectedFiles((prevFiles) => {
                          const updatedFiles = prevFiles.filter(
                            (_, i) => i !== index
                          );
                          return updatedFiles;
                        });
                        const updatedImages = formik.values.images.filter(
                          (_, i) => i !== index
                        );
                         formik.setFieldValue("images", updatedImages);
                      }}
                    />

                    <img
                      src={file}
                      alt="Selected"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
            <Button
              type="submit"
              sx={{
                textTransform: "none",
                bgcolor: "#884ed9",
                color: "white",
                fontSize: "14px",
                paddingX: "20px",
                fontWeight: 400,
                paddingY: "8px",
                alignSelf: "start",
                borderRadius: "100px",
                alignItems: "center",
                alignSelf: "end",
                mt: "20px",
                "&:hover": {
                  backgroundColor: "#884ed9",
                },
              }}
              disabled={loading || !formik.isValid || !formik.dirty}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Paper>
    </Stack>
  );
};

const descriptionSchema = yup.object().shape({
  content: yup.string().required("Content is required"),
});

export default CreateMessage;
