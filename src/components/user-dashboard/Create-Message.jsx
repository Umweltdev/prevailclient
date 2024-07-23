import { useState, useEffect, useContext } from "react";
import {
  Typography,
  Stack,
  Button,
  Paper,
  Box,
  useMediaQuery,
  TextField,
  Divider,
} from "@mui/material";

import { Description, Clear, Message } from "@mui/icons-material";
import makeToast from "../../makeToast";
import Header from "./Header";
import axiosInstance from "../utils/axios";
import Dropzone from "react-dropzone";
import { useFormik } from "formik";
import * as yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";

const CreateMessage = ({ openDrawer }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const Mobile = useMediaQuery("(min-width:600px)");
  const [previousImagesObj, setPreviousImagesObj] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/api/message/${id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setMessage(res.data);
        setSelectedFiles(res.data.images.map((img) => img.url));
        setPreviousImagesObj(res.data.images);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    if (id !== "create") {
      fetchData();
    }
  }, [id, user.token]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      content: message?.content || "",
      title: message?.title || "",
      images: [],
    },
    validationSchema: descriptionSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("content", values.content);
        formData.append("title", values.title);

        if (id !== "create") {
          formData.append(
            "previousImages",
            JSON.stringify(previousImagesObj.map((img) => ({ ...img })))
          );
        }

        values.images.forEach((file) => {
          formData.append("images", file);
        });

        const url =
          id === "create" ? "/api/message" : `/api/message/${message._id}`;
        await axiosInstance({
          method: id === "create" ? "post" : "put",
          url: url,
          data: formData,
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

  const handleFileDrop = (acceptedFiles) => {
    const validFiles = acceptedFiles.filter(
      (file) => file.size <= 2 * 1024 * 1024
    );

    if (validFiles.length !== acceptedFiles.length) {
      makeToast(
        "error",
        "Some files are too large. File should not be more than 2mb"
      );
    }

    const files = validFiles.map((file) => URL.createObjectURL(file));
    setSelectedFiles((prevFiles) => [...files,...prevFiles, ]);
    formik.setFieldValue("images", [  ...validFiles,...formik.values.images,]);
  };

  const handleRemoveFile = (index) => {
    setEditMode(true);

    const newSelectedFiles = [...selectedFiles];
    const newImages = [...formik.values.images];
    const newPreviousImagesObj = [...previousImagesObj];

    newSelectedFiles.splice(index, 1);

    if (index < previousImagesObj.length) {
      newPreviousImagesObj.splice(index, 1);
    } else {
      newImages.splice(index - previousImagesObj.length, 1);
    }

    setSelectedFiles(newSelectedFiles);
    setPreviousImagesObj(newPreviousImagesObj);
    formik.setFieldValue("images", newImages);
  };

  return (
    <Stack spacing={2}>
      <Header
        Icon={Message}
        title={id !== "create" ? "Edit message" : "Create new message"}
        openDrawer={openDrawer}
        button={"Messages"}
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
              label="Title"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              InputLabelProps={{
                style: { fontSize: "14px" },
              }}
            />

            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Content"
              multiline
              rows={6}
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

            <Dropzone onDrop={handleFileDrop} accept="image/*" multiple={true}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} style={dropzoneStyle}>
                  <input {...getInputProps()} />
                  <Typography variant="body2"></Typography>
                  <Box width="300px">
                    <Divider sx={{ color: "#DAE1E7" }}>OR</Divider>
                  </Box>
                  <Button variant="outlined" sx={buttonStyle} component="span">
                    Select File
                  </Button>
                </div>
              )}
            </Dropzone>

            {selectedFiles.length > 0 && (
              <div style={previewContainerStyle}>
                {selectedFiles.map((file, index) => (
                  <div key={index} style={previewImageStyle}>
                    <Clear
                      sx={clearButtonStyle}
                      onClick={() => handleRemoveFile(index)}
                    />
                    <img src={file} alt="Selected" style={imageStyle} />
                  </div>
                ))}
              </div>
            )}

            <Button
              type="submit"
              sx={submitButtonStyle}
              disabled={
                loading || !formik.isValid || (!editMode && !formik.dirty)
              }
            >
              {id !== "create" ? "Save" : "Published"}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Stack>
  );
};

const dropzoneStyle = {
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
};

const buttonStyle = {
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
};

const previewContainerStyle = {
  marginTop: "30px",
};

const previewImageStyle = {
  display: "inline-block",
  position: "relative",
  marginRight: "10px",
};

const clearButtonStyle = {
  position: "absolute",
  fontSize: "14px",
  top: "-10px",
  right: "-7px",
  cursor: "pointer",
};

const imageStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "8px",
};

const submitButtonStyle = {
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
};

const descriptionSchema = yup.object().shape({
  content: yup.string().required("Content is required"),
});

export default CreateMessage;
