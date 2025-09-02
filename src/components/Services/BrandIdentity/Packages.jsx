import React, {useState, useCallback, useEffect, useRef} from "react";
import { theme } from "../../stepWizard/theme.js";
import {
  ThemeProvider,
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Stepper,
  Step,
  StepLabel,
  Snackbar,
  Alert,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Fade,
   CircularProgress,
} from "@mui/material";
import "./assets/style.css"
import PropTypes from "prop-types";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  RefreshCw,
} from "lucide-react";
import { 
  createCheckoutSession, 
   
} from "../../stepWizard/api.js";

//import { loadStripe } from "@stripe/stripe-js";
// STRIPE INITIALIZATION & CONSTANT DATA
//const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_TEST_KEY);
const platformTiers = [
  {
    id: "Starter",
    name: "Starter Brand Identity Package",
    price: 500,
    features:   [
    "Logo design concept (up to 2 proposals)",
   "colour scheme",
    "Typography",
    "business card",
    "letterhead design or invoice design",
   "questionnaire submission",
   "style scope",
   "X1 revision",
    
]
  
  },
  {
    id: "Premium",
    name: "Premium Brand Identity Package",
    price: 750,
    features:  [
     "Logo design concept (up to 2 proposals)",
     "colour scheme",
     "Typography",
     "business card",
     "letterhead design or invoice design",
     "questionnaire submission",
     "style scope",
     "dos and don’ts",
     "up to X3 marketing material",
     "X2 revision",
    ]
  },
  {
    id: "Elite",
    name: "Elite Brand Identity Package",
    price: 1000,
    features:   [
  "Logo design concept (up to 2 proposals)",
  "colour scheme",
  "Typography",
  "business card",
  "letterhead design or invoice design",
  "questionnaire submission",
  "style scope",
  "dos and don’ts",
  "up to X5 marketing material",
  "X4 revision (up to proposals) brand personality overview",
  "printing guide",
  "digital asset guide",
  "1-hour consultation meeting",
  
    ],
  },
];
const gradientText = {
    background: "linear-gradient(to right, #6E3EF4, #3B82F6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  };
const SelectableCard = ({ children, selected, ...props }) => (
   <Card
     {...props}
     elevation={selected ? 8 : 2}
     sx={{
       cursor: "pointer",
       height: "100%",
       border: "2px solid",
       borderColor: selected ? "primary.main" : "transparent",
       transform: selected ? "scale(1.03)" : "none",
       transition:
         "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
       "&:hover": {
         transform: "scale(1.03)",
         borderColor: "rgba(136, 78, 217, 0.5)",
       },
       ...props.sx,
     }}
   >
     <CardContent
       sx={{ display: "flex", flexDirection: "column", height: "100%", p: 3 }}
     >
       {children}
     </CardContent>
   </Card>
 );
 SelectableCard.propTypes = {
   children: PropTypes.node,
   selected: PropTypes.bool,
   sx: PropTypes.object,
 };
 const PlatformTier = (
{
  selectedTier,
  setSelectedTier,
  nextStep,
  prevStep,
}
) =>{ return(
  <Fade in timeout={500}>
    <Box>
      <Chip
        label="Package Type"
        color="primary"
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <Typography variant="h2" gutterBottom>
        Choose Your Package
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Choose the functionality you need for your brand identity.
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {platformTiers.map((tier) => (
          <Grid item xs={12} md={4} key={tier.id}>
            <SelectableCard
              selected={selectedTier === tier.id}
              onClick={() => setSelectedTier(tier.id)}
            >
              
              <Typography variant="h6" component="h3">
                {tier.name}
              </Typography>
              <Typography
                variant="h5"
                component="p"
                color="primary"
                sx={{ my: 1 }}
              >
                £{tier.price} 
              </Typography>
              <List dense sx={{ mt: 2, p: 0 }}>
                {tier.features.map((feature) => (
                  <ListItem key={feature} disableGutters sx={{ p: 0 }}>
                    <ListItemIcon sx={{ minWidth: 24 }}>
                      <Check size={16} color={theme.palette.success.main} />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </SelectableCard>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" gap={2}>
        <Button
          variant="outlined"
          onClick={prevStep}
          startIcon={<ChevronLeft />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={nextStep}
          disabled={!selectedTier}
          endIcon={<ChevronRight />}
        >
          Continue
        </Button>
      </Box>
    </Box>
  </Fade>
)};
PlatformTier.propTypes = {
  selectedTier: PropTypes.string,
  setSelectedTier: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
const MemoizedPlatformTier = React.memo(PlatformTier);
// Consolidated Final Summary Component
  const FinalSummary = ({
  selectedTier,
  
  name,
  setName,
  email,
  setEmail,
  additionalNotes,
  setAdditionalNotes,
  keywords,
  setKeywords,
  selectedSystems,
  setSelectedSystems,
  selectedDashboards,
  setSelectedDashboards,
  prevStep,
  handleCheckout,
  isProcessing,
  
}) => {
    
    const total = 0
   
const tierSelection = platformTiers.find((t) => t.id === selectedTier);


    return (
      <Fade in timeout={500}>
            <Grid container spacing={4}>
              <Grid item xs={12} lg={8}>
                <Chip
                  label="Final Step: Review & Purchase"
                  color="primary"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <Typography variant="h2" gutterBottom>
                  Confirm Your Configuration
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  Review your selections and provide your details to proceed.
                </Typography>
                <Card>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 4, p: 3 }}
                  >
                    <Box>
                      <Typography variant="h6" component="h3" gutterBottom>
                        Your Details
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Your Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    <Box>
                      <Typography variant="h6" component="h3" gutterBottom>
                        Optional Customization
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Keywords (comma-separated)"
                            value={keywords}
                            onChange={(e) => setKeywords(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Systems (e.g. CRM)"
                            value={selectedSystems}
                            onChange={(e) => setSelectedSystems(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Dashboards (e.g. Sales)"
                            value={selectedDashboards}
                            onChange={(e) => setSelectedDashboards(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            multiline
                            rows={3}
                            label="Additional Notes"
                            value={additionalNotes}
                            onChange={(e) => setAdditionalNotes(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Card sx={{ position: "sticky", top: "24px" }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" component="h3" gutterBottom>
                      Your Summary
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Box display="flex" flexDirection="column" gap={1}>
                      
                      
                        {tierSelection && (
                          <Box display="flex" justifyContent="space-between" alignItems={"center"}>
                            <Typography variant="subtitle2">Package Tier:</Typography>
                            <Typography variant="subtitle1">
                              {tierSelection.name}
                            </Typography>
                          </Box>
                        )}
                    </Box>
                    <Box mt={3} pt={2} borderTop={1} borderColor="divider">
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="baseline"
                      >
                        <Typography variant="h6">Total Price:</Typography>
                        <Typography variant="h5" fontWeight="bold" sx={gradientText}>
                          £{tierSelection.price}
                        </Typography>
                      </Box>
                    </Box>
                    <Box mt={3} display="flex" flexDirection="column" gap={2}>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={handleCheckout}
                        disabled={isProcessing || !name || !email}
                        startIcon={
                          isProcessing ? (
                            <CircularProgress size={20} color="inherit" />
                          ) : null
                        }
                      >
                        {isProcessing ? "Processing..." : "Proceed to Checkout"}
                        
                      </Button>
                      <Button
                        variant="outlined"
                        fullWidth
                        onClick={prevStep}
                        startIcon={<ChevronLeft />}
                      >
                        Back
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Fade>
    );
  };
  FinalSummary.propTypes = {
    
    selectedTier: PropTypes.string,
    
    name: PropTypes.string,
    setName: PropTypes.func,
    email: PropTypes.string,
    setEmail: PropTypes.func,
    additionalNotes: PropTypes.string,
    setAdditionalNotes: PropTypes.func,
    keywords: PropTypes.string,
    setKeywords: PropTypes.func,
    selectedSystems: PropTypes.string,
    setSelectedSystems: PropTypes.func,
    selectedDashboards: PropTypes.string,
    setSelectedDashboards: PropTypes.func,
    prevStep: PropTypes.func,
    handleCheckout: PropTypes.func,
    isProcessing: PropTypes.bool,
    calculateRunningTotal: PropTypes.func,
  };
 const MemoizedFinalSummary = React.memo(FinalSummary);
const StepWizard= () => {
  
  
  const [currentStep, setCurrentStep] = useState(1);
    
    const [showToast, setShowToast] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [additionalNotes, setAdditionalNotes] = useState("");
    const [keywords, setKeywords] = useState("");
    const [selectedSystems, setSelectedSystems] = useState("");
     const [selectedTier, setSelectedTier] = useState(null);
    const [selectedDashboards, setSelectedDashboards] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    // Effect to save state to localStorage on any change
    
  const showToastMessage = (message) => {
    setShowToast(message);
    setTimeout(() => setShowToast(null), 3000);
  };
  
  const getSteps =() => {
   
    return ["Package Type", "Review"]
  };
 const wizardRef = useRef(null);
  const nextStep = useCallback(() => {
    const steps = 2;
   // if (currentStep < steps.length) {
      let nextStepNum = currentStep + 1;

      

      setCurrentStep(nextStepNum);
      wizardRef.current?.scrollIntoView({ behavior: "smooth" });
      
    
  }, [currentStep]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      let prevStepNum = currentStep - 1;
      setCurrentStep(prevStepNum);
      wizardRef.current?.scrollIntoView({ behavior: "smooth" });

    
    }
  }, [currentStep]);
   const resetSelections = useCallback(() => {
      setCurrentStep(1);
      
      showToastMessage("Selections have been reset.");
    }, [showToastMessage]);
  useEffect(() => {
    const stateToSave = {
      currentStep,
      
    };
    localStorage.setItem("quoteBuilderState", JSON.stringify(stateToSave));
  }, [
    currentStep,
    
   // budget,
    
  ]);
  
  const tierSelection = platformTiers.find((t) => t.id === selectedTier);
 
const handleCheckout = useCallback(async () => {
    if (!name || !email) {
      showToastMessage("Error: Please enter your name and email to proceed.");
      return;
    }
    
    setIsProcessing(true);

    try {
      //const total = calculateRunningTotal();
      //console.log(name, email, price)
      const finalPrice = tierSelection.price

      // Prepare checkout data using the new API format
      const checkoutData = {
        name,
        email,
       
        price: finalPrice,
       
        serviceType:tierSelection.id,
        notes: `${additionalNotes || ''} | Selected Systems: ${selectedSystems || 'None'} | Dashboards: ${selectedDashboards || 'None'} | Keywords: ${keywords || 'None'}| Tier: ${selectedTier || 'None'} `.trim()
      };

      // Create checkout session using the API function
      const session = await createCheckoutSession(checkoutData);

      // Redirect to Stripe checkout
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe.js has not loaded yet.");
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      showToastMessage(`Error: ${error.message || "Unknown error occurred"}`);
    } finally {
      setIsProcessing(false);
    }
  }, [
    name,
    email,

    selectedTier,
    
    additionalNotes,
    keywords,
    selectedSystems,
    selectedDashboards,
    
    showToastMessage,
  ]);



 
   const steps = getSteps();
   const renderStepContent = () => {
    //const steps = getSteps();
    const isReviewStep = steps.length > 1 && steps.length === currentStep;

    if (isReviewStep) {
      return <MemoizedFinalSummary
          {...{  
            selectedTier,
            name,
            setName,
            email,
            setEmail,
            additionalNotes,
            setAdditionalNotes,
            keywords,
            setKeywords,
            selectedSystems,
            setSelectedSystems,
            selectedDashboards,
            setSelectedDashboards,
            prevStep,
            handleCheckout,
            isProcessing,
          
          }}
        /> 
    }

   
        switch (currentStep) {
          case 1:
            return <MemoizedPlatformTier
                {...{
                  selectedTier,
                  setSelectedTier,
                  nextStep,
                  prevStep,
                }}
              />;;
          
          default:
            return null;
        }
    
  };
return (
  <ThemeProvider theme={theme}>
       <Box
         sx={{
           minHeight: "100vh",
           background: theme.palette.background.default,
           color: "text.primary",
           overflowX: "hidden",
         }}
       >
         <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
           <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
             <Typography variant="h1" component="h1" gutterBottom>
               Your Partner in Accelerating the{" "}
               <Box component="span" sx={gradientText}>
                 Digital Space
               </Box>
             </Typography>
             <Typography
               variant="h5"
               color="text.secondary"
               sx={{ maxWidth: "720px", mx: "auto" }}
             >
               Our goal is to help businesses thrive by providing innovative and
               holistic solutions.
             </Typography>
             <Button
               onClick={resetSelections}
               startIcon={<RefreshCw size={16} />}
               sx={{ mt: 3, color: "text.secondary" }}
             >
               Start Over
             </Button>
           </Box>
          <Stepper
                      activeStep={currentStep - 1}
                      alternativeLabel
                      sx={{ mb: { xs: 5, md: 7 } }}
                    >
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
          
        
<div className="my-container">
        {renderStepContent()}
        </div>
       </Container>

      <Snackbar
                open={!!showToast}
                autoHideDuration={6000}
                onClose={() => setShowToast(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              >
                <Alert
                  onClose={() => setShowToast(null)}
                  severity={
                    showToast && showToast.toLowerCase().includes("error")
                      ? "error"
                      : "success"
                  }
                  sx={{ width: "100%" }}
                  variant="filled"
                >
                  {showToast}
                </Alert>
              </Snackbar>
       </Box>

     </ThemeProvider>
      
)
}

export default StepWizard;



