// Enhanced Form Component with Redesigned Input Fields
import { useRef, useState } from "react";
import {
  Alert,
  Box,
  CircularProgress,
  Button,
  Typography,
  Paper,
  Chip,
  TextField,
  InputLabel,
  FormControl,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import emailjs from "@emailjs/browser";
import MultiSelect from "./assets/MultiSelect";
import { TextArea } from "./assets/TextArea";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import LinkIcon from "@mui/icons-material/Link";
import SubjectIcon from "@mui/icons-material/Subject";
import PropTypes from "prop-types";


const useFormStyles = makeStyles((theme) => ({
  formContainer: {
    background: "linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)",
    borderRadius: "24px !important",
    padding: "0 !important",
    boxShadow:
      "0 20px 60px rgba(110, 62, 244, 0.1), 0 8px 20px rgba(0,0,0,0.06) !important",
    border: "1px solid rgba(110, 62, 244, 0.1)",
    position: "relative",
    // ✅ FIX: Changed from 'hidden' to 'visible' to allow the dropdown to show
    overflow: "visible",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "6px",
      background:
        "linear-gradient(90deg, #6E3EF4 0%, #9C6AFF 50%, #6E3EF4 100%)",
    },
  },
  headerSection: {
    background:
      "linear-gradient(135deg, rgba(110, 62, 244, 0.02) 0%, rgba(156, 106, 255, 0.02) 100%)",
    padding: "40px 44px 32px 44px",
    borderBottom: "1px solid rgba(110, 62, 244, 0.08)",
    [theme.breakpoints.down("sm")]: {
      padding: "32px 24px 24px 24px",
    },
  },
  formBody: {
    padding: "32px 44px 44px 44px",
    [theme.breakpoints.down("sm")]: {
      padding: "24px 24px 32px 24px",
    },
  },
  titleChip: {
    background: "linear-gradient(135deg, #6E3EF4 0%, #9C6AFF 100%)",
    color: "#ffffff",
    fontWeight: "600",
    fontSize: "14px",
    marginBottom: "16px",
    boxShadow: "0 4px 12px rgba(110, 62, 244, 0.3)",
  },
  titleText: {
    background: "linear-gradient(135deg, #1D0D40 0%, #6E3EF4 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "600 !important",
    fontSize: "32px !important",
    lineHeight: "1.2 !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px !important",
    },
  },
  inputGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "24px",
    marginBottom: "24px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gap: "20px",
    },
  },
  inputContainer: {
    position: "relative",
    marginBottom: "8px",
  },
  inputField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "16px",
      background: "linear-gradient(145deg, #ffffff 0%, #fafbff 100%)",
      border: "2px solid transparent",
      backgroundClip: "padding-box",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      fontSize: "16px",
      fontWeight: "500",
      color: "#2D3748",
      minHeight: "56px",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: "16px",
        padding: "2px",
        background:
          "linear-gradient(135deg, rgba(110, 62, 244, 0.1) 0%, rgba(156, 106, 255, 0.1) 100%)",
        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        maskComposite: "exclude",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "exclude",
        pointerEvents: "none",
      },
      "&:hover": {
        transform: "translateY(-1px)",
        boxShadow: "0 8px 25px rgba(110, 62, 244, 0.12)",
      },
      "&.Mui-focused": {
        transform: "translateY(-2px)",
        boxShadow: "0 12px 32px rgba(110, 62, 244, 0.2)",
        "&::before": {
          background: "linear-gradient(135deg, #6E3EF4 0%, #9C6AFF 100%)",
        },
      },
      "& fieldset": {
        border: "none",
      },
      "& input": {
        padding: "16px 16px 16px 48px",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#64748B",
      fontWeight: "600",
      fontSize: "14px",
      marginBottom: "8px",
      position: "static",
      transform: "none",
      "&.Mui-focused": {
        color: "#6E3EF4",
      },
    },
  },
  iconContainer: {
    position: "absolute",
    left: "16px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
    color: "#94A3B8",
    transition: "color 0.3s ease",
    "&.focused": {
      color: "#6E3EF4",
    },
  },
  submitButton: {
    background: "linear-gradient(135deg, #6E3EF4 0%, #9C6AFF 100%)",
    borderRadius: "50px !important",
    padding: "16px 48px !important",
    fontSize: "16px !important",
    fontWeight: "600 !important",
    textTransform: "none !important",
    boxShadow: "0 8px 24px rgba(110, 62, 244, 0.4) !important",
    minHeight: "56px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important",
    color: "#ffffff !important",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 12px 32px rgba(110, 62, 244, 0.5) !important",
    },
  },
  successAlert: {
    borderRadius: "12px !important",
    backgroundColor: "rgba(34, 197, 94, 0.1) !important",
    border: "1px solid rgba(34, 197, 94, 0.2) !important",
    "& .MuiAlert-icon": {
      color: "#22C55E !important",
    },
  },
}));


const EnhancedInput = ({ name, label, icon: Icon, ...props }) => {
  const classes = useFormStyles();
  const [focused, setFocused] = useState(false);

  return (
    <FormControl fullWidth className={classes.inputContainer}>
      <InputLabel shrink sx={{ position: "static", mb: 1, fontWeight: 600 }}>
        {label}
      </InputLabel>
      <Box sx={{ position: "relative" }}>
        <Box className={`${classes.iconContainer} ${focused ? "focused" : ""}`}>
          <Icon size={20} />
        </Box>
        <TextField
          name={name}
          fullWidth
          placeholder={`Enter your ${label ? String(label).toLowerCase() : ""}`}
          className={classes.inputField}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </Box>
    </FormControl>
  );
};

const Form = () => {
  const classes = useFormStyles();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const serviceOptions = [
    { title: "Brand Identity & Comprehensive Logo Design" },
    { title: "Website Development & Full-Stack Management" },
    { title: "Digital Accelerator Bundle for Startups" },
    { title: "Multi-Channel Campaign Strategy" },
    { title: "Hyper-Targeted Advertising Strategy & Implementation" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(form.current);
    const formObject = Object.fromEntries(formData.entries());
    formObject.services = selectedServices
      .map((service) => service.title)
      .join(", ");

    emailjs
      .send(
        "service_0epeded",
        "template_rr6j484",
        formObject,
        "mBHyvMwaFOG9bwNUx"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
          setSelectedServices([]);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <Paper
      component="form"
      ref={form}
      onSubmit={sendEmail}
      className={classes.formContainer}
      sx={{
        width: { xs: "90vw", sm: "600px", md: "692px" },
        maxWidth: "100%",
      }}
      id="generate_lead"
    >
      <div className={classes.headerSection}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Chip
            icon={<ChatBubbleOutlineIcon />}
            label="Let's Connect"
            className={classes.titleChip}
          />
        </Box>
        <Typography className={classes.titleText}>Talk To Us</Typography>
        <Typography sx={{ color: "#64748B", fontSize: "16px", mt: 1 }}>
          Ready to transform your business? Let&apos;s start the conversation.
        </Typography>

        {success && (
          <Alert
            severity="success"
            className={classes.successAlert}
            sx={{ mt: 3 }}
          >
            <strong>Success!</strong> Your message has been sent. We&apos;ll get
            back to you soon!
          </Alert>
        )}
      </div>

      <div className={classes.formBody}>
        <div className={classes.inputGrid}>
          <EnhancedInput
            name="firstName"
            label="First Name"
            icon={PersonIcon}
            required
          />
          <EnhancedInput
            name="lastName"
            label="Last Name"
            icon={PersonIcon}
            required
          />
          <EnhancedInput
            name="email"
            label="Email"
            icon={EmailIcon}
            type="email"
            required
          />
          <EnhancedInput
            name="phone"
            label="Phone"
            icon={PhoneIcon}
            type="tel"
          />
          <EnhancedInput
            name="location"
            label="Location"
            icon={LocationOnIcon}
          />
          <EnhancedInput
            name="company"
            label="Company Name"
            icon={BusinessIcon}
          />
        </div>

        <Box sx={{ mb: 3 }}>
          <EnhancedInput
            label="Website Link"
            name="weblink"
            icon={LinkIcon}
            type="url"
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <EnhancedInput
            label="Subject"
            name="subject"
            icon={SubjectIcon}
            required
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <TextArea label="How Can We Help You" name="message" />
        </Box>

        <Box sx={{ mb: 4 }}>
          <MultiSelect
            options={serviceOptions}
            label="Which services are you interested in?"
            placeholder="Select services you need..."
            onChange={setSelectedServices}
            value={selectedServices}
          />
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Button
            type="submit"
            className={classes.submitButton}
            disabled={loading}
            startIcon={
              loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <SendIcon />
              )
            }
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </Box>
      </div>
    </Paper>
  );
};

export default Form;

EnhancedInput.protoTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};