import { Box, Typography, Container } from '@mui/material';
import { styled, keyframes } from '@mui/system';

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Styled components
const HowItWorksWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2.5),
  background: theme.palette.background.default,
}));

const StepsContainer = styled(Container)({
  maxWidth: 1000,
});

const Step = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isEven',
})(({ theme, isEven }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(6),
  animation: `${isEven ? slideInRight : slideInLeft} 0.8s ease`,
  flexDirection: isEven ? 'row-reverse' : 'row',
  
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
    gap: theme.spacing(2),
  },
}));

const StepNumber = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: 'white',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  fontWeight: 900,
  flexShrink: 0,
  margin: theme.spacing(0, 3),
  
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(0, 0, 2, 0),
  },
}));

const StepContent = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const StepTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  marginBottom: theme.spacing(0.5),
  color: theme.palette.text.primary,
  fontWeight: 600,
}));

const StepDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
}));

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Choose Your Package",
      description: "Select the campaign package that best fits your business goals and budget. Each tier is designed to deliver maximum value."
    },
    {
      number: 2,
      title: "Pay 50% Deposit",
      description: "Secure your campaign with a 50% deposit. The remaining balance is due upon campaign launch."
    },
    {
      number: 3,
      title: "Complete Questionnaire",
      description: "Share your business insights, goals, and provide images. This helps us craft the perfect campaign for your brand."
    },
    {
      number: 4,
      title: "We Build & Optimise",
      description: "Our experts create your custom campaigns, design compelling ads, and launch with precision targeting."
    },
    {
      number: 5,
      title: "You Grow",
      description: "Watch your business grow while we continuously optimise for better results. Regular reports keep you informed."
    }
  ];

  return (
    <HowItWorksWrapper component="section">
      <StepsContainer maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          sx={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            fontWeight: 800, 
            mb: 6,
            color: 'text.primary'
          }}
        >
          How It Works
        </Typography>
        
        {steps.map((step, index) => (
          <Step key={index} isEven={index % 2 !== 0}>
            <StepNumber>
              {step.number}
            </StepNumber>
            
            <StepContent>
              <StepTitle variant="h3" component="h3">
                {step.title}
              </StepTitle>
              
              <StepDescription variant="body1">
                {step.description}
              </StepDescription>
            </StepContent>
          </Step>
        ))}
      </StepsContainer>
    </HowItWorksWrapper>
  );
};

export default HowItWorks;