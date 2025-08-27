import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Styled components
const AddOnsWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: theme.spacing(8, 2.5),
  textAlign: 'center',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '2.5rem',
  fontWeight: 800,
  marginBottom: theme.spacing(4),
  color: theme.palette.text.primary,
}));

const AddOnsGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const AddOnCard = styled(Paper)(({ theme }) => ({
  background: theme.palette.background.default,
  padding: theme.spacing(4),
  borderRadius: '15px',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
}));

const AddOnTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  textAlign: 'center',
}));

const AddOnDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  flexGrow: 1,
}));

const AddOnPrice = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: theme.palette.primary.main,
  marginTop: theme.spacing(0.5),
}));

const AddOns = () => {
  const addOns = [
    {
      title: "Motion Ad Concepts",
      description: "Animated ads for higher engagement and conversion rates",
      price: "+€250"
    },
    {
      title: "A/B Variant Testing",
      description: "Test multiple ad variations to maximize your ROI",
      price: "+€100"
    }
  ];

  return (
    <AddOnsWrapper component="section">
      <Container maxWidth="md">
        <SectionTitle variant="h2" component="h2">
          Enhance Your Campaign
        </SectionTitle>
        
        <AddOnsGrid container spacing={3}>
          {addOns.map((addOn, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <AddOnCard elevation={2}>
                <AddOnTitle variant="h3" component="h3">
                  {addOn.title}
                </AddOnTitle>
                
                <AddOnDescription variant="body1">
                  {addOn.description}
                </AddOnDescription>
                
                <AddOnPrice>
                  {addOn.price}
                </AddOnPrice>
              </AddOnCard>
            </Grid>
          ))}
        </AddOnsGrid>
      </Container>
    </AddOnsWrapper>
  );
};

export default AddOns;