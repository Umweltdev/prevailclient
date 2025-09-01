import React, { useState } from 'react';
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
  Typography
} from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Styled components
const ModalDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  '& .MuiDialog-paper': {
    width: '90%',
    maxWidth: 600,
    maxHeight: '90vh',
    borderRadius: '20px',
    padding: theme.spacing(3),
    position: 'relative',
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  width: 40,
  height: 40,
  background: theme.palette.background.default,
  '&:hover': {
    background: theme.palette.grey[300],
    transform: 'rotate(90deg)',
  },
}));

const FormGroupStyled = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const FormLabel = styled(Typography)(({ theme }) => ({
  display: 'block',
  marginBottom: theme.spacing(0.5),
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

const FormSubmit = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: '15px',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: 'white',
  borderRadius: '10px',
  fontSize: '1.1rem',
  fontWeight: 700,
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)',
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
  },
}));

const CheckboxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

// Custom Alert Component
const CustomAlert = styled(Dialog)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  '& .MuiDialog-paper': {
    width: '90%',
    maxWidth: 450,
    borderRadius: '20px',
    padding: theme.spacing(4),
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  },
}));

const AlertIcon = styled(Box)(({ theme }) => ({
  fontSize: '4rem',
  color: theme.palette.success.main,
  marginBottom: theme.spacing(2),
}));

const AlertTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
}));

const AlertMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3),
  lineHeight: 1.6,
}));

const AlertButton = styled(Button)(({ theme }) => ({
  padding: '12px 30px',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: 'white',
  borderRadius: '10px',
  fontSize: '1rem',
  fontWeight: 600,
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 8px 20px rgba(37, 99, 235, 0.25)',
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
  },
}));

// Package prices mapping
const packagesData = {
  starter: { title: 'Starter Campaign', price: 350 },
  growth: { title: 'Growth Campaign', price: 500 },
  premium: { title: 'Premium Campaign', price: 750 }
};

const Modal = ({ open, onClose, packageType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    goals: '',
    motion: false,
    testing: false
  });
  
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState({ title: '', message: '' });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const showCustomAlert = (title, message) => {
    setAlertData({ title, message });
    setShowAlert(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!packageType) return;
    
    // Calculate total
    let total = packagesData[packageType].price;
    if (formData.motion) total += 250;
    if (formData.testing) total += 100;
    
    // Here you would normally send to your backend
    console.log('Form data:', { ...formData, package: packageType });
    console.log('Total price: €' + total);
    
    // Show custom alert
    showCustomAlert(
      'Thank You!', 
      `Your ${packagesData[packageType].title} order has been received. Total: €${total}. We'll contact you shortly to arrange payment.`
    );
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      website: '',
      goals: '',
      motion: false,
      testing: false
    });
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    onClose();
  };

  const getModalTitle = () => {
    return packagesData[packageType]?.title || 'Get Started';
  };

  return (
    <>
      <ModalDialog open={open} onClose={onClose}>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        
        <DialogTitle sx={{ textAlign: 'center', pb: 2 }}>
          <Typography variant="h4" component="h2">
            {getModalTitle()}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Complete this form to begin your campaign journey.
          </Typography>
        </DialogTitle>

        <DialogContent>
          <form onSubmit={handleSubmit}>
            <FormGroupStyled>
              <FormLabel variant="body2">Your Name *</FormLabel>
              <TextField
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                variant="outlined"
                size="small"
              />
            </FormGroupStyled>

            <FormGroupStyled>
              <FormLabel variant="body2">Email Address *</FormLabel>
              <TextField
                fullWidth
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                variant="outlined"
                size="small"
              />
            </FormGroupStyled>

            <FormGroupStyled>
              <FormLabel variant="body2">Company Name *</FormLabel>
              <TextField
                fullWidth
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                variant="outlined"
                size="small"
              />
            </FormGroupStyled>

            <FormGroupStyled>
              <FormLabel variant="body2">Phone Number</FormLabel>
              <TextField
                fullWidth
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                variant="outlined"
                size="small"
              />
            </FormGroupStyled>

            <FormGroupStyled>
              <FormLabel variant="body2">Current Website (if any)</FormLabel>
              <TextField
                fullWidth
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                variant="outlined"
                size="small"
              />
            </FormGroupStyled>

            <FormGroupStyled>
              <FormLabel variant="body2">Campaign Goals *</FormLabel>
              <TextField
                fullWidth
                multiline
                rows={4}
                name="goals"
                value={formData.goals}
                onChange={handleInputChange}
                required
                placeholder="What do you want to achieve with this campaign?"
                variant="outlined"
                size="small"
              />
            </FormGroupStyled>

            <FormGroupStyled>
              <FormLabel variant="body2">Add-ons</FormLabel>
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

            <FormSubmit type="submit" variant="contained">
              Proceed to Payment
            </FormSubmit>
          </form>
        </DialogContent>
      </ModalDialog>

      {/* Custom Alert Dialog */}
      <CustomAlert open={showAlert} onClose={handleAlertClose}>
        <AlertIcon>
          <CheckCircleIcon fontSize="inherit" />
        </AlertIcon>
        <AlertTitle variant="h5">
          {alertData.title}
        </AlertTitle>
        <AlertMessage variant="body1">
          {alertData.message}
        </AlertMessage>
        <AlertButton onClick={handleAlertClose} variant="contained">
          Continue
        </AlertButton>
      </CustomAlert>
    </>
  );
};

export default Modal;