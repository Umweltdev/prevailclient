import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PropTypes from "prop-types";


const ModalDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiBackdrop-root": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  "& .MuiDialog-paper": {
    width: "90%",
    maxWidth: 600,
    maxHeight: "90vh",
    borderRadius: "20px",
    padding: theme.spacing(3),
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  right: theme.spacing(2),
  width: 40,
  height: 40,
  background: theme.palette.background.default,
  "&:hover": {
    background: theme.palette.grey[300],
    transform: "rotate(90deg)",
  },
}));

const FormGroupStyled = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const FormLabel = styled(Typography)(({ theme }) => ({
  display: "block",
  marginBottom: theme.spacing(0.5),
  fontWeight: 600,
  color: theme.palette.text.primary,
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
  },
}));

const FormSubmit = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: "15px",
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: "white",
  borderRadius: "10px",
  fontSize: "1.1rem",
  fontWeight: 700,
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)",
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    padding: "12px",
  },
}));

const CheckboxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

// Custom Alert Component
const CustomAlert = styled(Dialog)(({ theme }) => ({
  "& .MuiBackdrop-root": {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  "& .MuiDialog-paper": {
    width: "90%",
    maxWidth: 450,
    borderRadius: "20px",
    padding: theme.spacing(4),
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const AlertIcon = styled(Box)(({ theme }) => ({
  fontSize: "4rem",
  color: theme.palette.success.main,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
  },
}));

const AlertTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.8rem",
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.4rem",
  },
}));

const AlertMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3),
  lineHeight: 1.6,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem",
  },
}));

const AlertButton = styled(Button)(({ theme }) => ({
  padding: "12px 30px",
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: "white",
  borderRadius: "10px",
  fontSize: "1rem",
  fontWeight: 600,
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 8px 20px rgba(37, 99, 235, 0.25)",
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
  },
}));

// Package prices mapping
const packagesData = {
  starter: { title: "Starter Campaign", price: 350 },
  growth: { title: "Growth Campaign", price: 500 },
  premium: { title: "Premium Campaign", price: 750 },
};


const Modal = ({ open, onClose, packageType }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    goals: "",
    motion: false,
    testing: false,
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState({ title: "", message: "" });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const showCustomAlert = (title, message) => {
    setAlertData({ title, message });
    setShowAlert(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!packageType) return;

    let total = packagesData[packageType].price;
    if (formData.motion) total += 250;
    if (formData.testing) total += 100;

    showCustomAlert(
      "Thank You!",
      `Your ${packagesData[packageType].title} order has been received. Total: €${total}. We'll contact you shortly to arrange payment.`
    );

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      website: "",
      goals: "",
      motion: false,
      testing: false,
    });
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    onClose();
  };

  const getModalTitle = () => {
    return packagesData[packageType]?.title || "Get Started";
  };

  return (
    <>
      <ModalDialog open={open} onClose={onClose}>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>

        <DialogTitle sx={{ textAlign: "center", pb: 2 }}>
          <Typography variant={isMobile ? "h5" : "h4"} component="h2">
            {getModalTitle()}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Complete this form to begin your campaign journey.
          </Typography>
        </DialogTitle>

        <DialogContent>
          <form onSubmit={handleSubmit}>
            {["name", "email", "company", "phone", "website", "goals"].map(
              (field, idx) => (
                <FormGroupStyled key={idx}>
                  <FormLabel>
                    {field === "goals"
                      ? "Campaign Goals *"
                      : `${field.charAt(0).toUpperCase() + field.slice(1)} ${
                          ["name", "email", "company"].includes(field)
                            ? "*"
                            : ""
                        }`}
                  </FormLabel>
                  <TextField
                    fullWidth
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    required={["name", "email", "company", "goals"].includes(
                      field
                    )}
                    multiline={field === "goals"}
                    rows={field === "goals" ? 4 : 1}
                    variant="outlined"
                    size="small"
                    type={
                      field === "email"
                        ? "email"
                        : field === "phone"
                          ? "tel"
                          : field === "website"
                            ? "url"
                            : "text"
                    }
                    placeholder={
                      field === "goals"
                        ? "What do you want to achieve with this campaign?"
                        : ""
                    }
                  />
                </FormGroupStyled>
              )
            )}

            <FormGroupStyled>
              <FormLabel>Add-ons</FormLabel>
              <CheckboxContainer>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="motion"
                      checked={formData.motion}
                      onChange={handleInputChange}
                    />
                  }
                  label="Motion Ad Concepts (+€250)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="testing"
                      checked={formData.testing}
                      onChange={handleInputChange}
                    />
                  }
                  label="A/B Variant Testing (+€100)"
                />
              </CheckboxContainer>
            </FormGroupStyled>

            <FormSubmit type="submit">Proceed to Payment</FormSubmit>
          </form>
        </DialogContent>
      </ModalDialog>

      <CustomAlert open={showAlert} onClose={handleAlertClose}>
        <AlertIcon>
          <CheckCircleIcon fontSize="inherit" />
        </AlertIcon>
        <AlertTitle variant={isMobile ? "h6" : "h5"}>
          {alertData.title}
        </AlertTitle>
        <AlertMessage variant="body2">{alertData.message}</AlertMessage>
        <AlertButton onClick={handleAlertClose}>Continue</AlertButton>
      </CustomAlert>
    </>
  );
};

export default Modal;


Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  packageType: PropTypes.oneOf(["starter", "growth", "premium"]).isRequired,
};
