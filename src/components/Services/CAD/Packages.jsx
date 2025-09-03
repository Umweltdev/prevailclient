import React, { useState } from 'react';
import { 
  Box, Typography, Button, Container, Grid, Card, CardContent, 
  List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import { styled } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import Modal from './Modal'; 

// Styled components
const PackagesWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2.5),
  background: theme.palette.background.default,
  
  '@media (max-width: 768px)': {
    padding: theme.spacing(5, 2),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '2.5rem',
  fontWeight: 800,
  marginBottom: theme.spacing(4),
  color: theme.palette.text.primary,
  
  '@media (max-width: 768px)': {
    fontSize: '2rem',
    marginBottom: theme.spacing(3),
  },
}));

const PackagesGrid = styled(Grid)({
  maxWidth: 1200,
  margin: '0 auto',
});

const PackageCard = styled(Card)(({ theme, featured }) => ({
  background: 'white',
  borderRadius: '20px',
  padding: theme.spacing(3),
  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  border: featured ? `3px solid ${theme.palette.primary.main}` : 'none',

  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
  },
}));

const FeaturedBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 20,
  right: -30,
  background: theme.palette.primary.main,
  color: 'white',
  padding: '5px 40px',
  fontSize: '0.75rem',
  fontWeight: 700,
  transform: 'rotate(45deg)',
}));

const PackageName = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(0.5),
}));

const PackagePrice = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 900,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const PackageDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3),
  fontStyle: 'italic',
}));

const PackageFeaturesList = styled(List)({
  marginBottom: '2rem',
  flexGrow: 1,
});

const PackageFeatureItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1, 0),
  borderBottom: '1px solid #e5e7eb',
  alignItems: 'flex-start',

  '&:last-child': {
    borderBottom: 'none',
  },
}));

const FeatureIcon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.success.main,
  minWidth: 'auto',
  marginRight: theme.spacing(1),
  marginTop: '3px',
}));

const PackageCta = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: '15px',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: 'white',
  borderRadius: '10px',
  fontSize: '1.1rem',
  fontWeight: 700,
  marginTop: 'auto',

  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)',
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
  },
}));

const Packages = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const openModal = (packageType) => {
    setSelectedPackage(packageType);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPackage(null);
  };

  const packages = [
    {
      name: "Starter Campaign",
      price: "€350",
      description: "Best for small businesses starting digital campaigns with focused reach.",
      featured: false,
      type: "starter",
      features: [
        "Customer Insight: Basic segmentation (demographic + geographic overview)",
        "Market Research: Competitor scan + keyword research (10-15 keywords)",
        "Campaign Setup: 1x Google Ads campaign setup",
        "Ad Design: Up to 4 custom ad designs (using client-provided images)",
        "Reporting: 1x performance report (after 2 months)"
      ]
    },
    {
      name: "Growth Campaign",
      price: "€500",
      description: "Best for SMEs seeking wider reach and continuous improvement.",
      featured: true,
      type: "growth",
      features: [
        "Customer Insight: Advanced segmentation (demographic + geographic + psychographic)",
        "Market Research: Competitor analysis + keyword research (20-30 keywords)",
        "Campaign Management: 2x Google Ads campaigns with optimization (1 adjustment)",
        "Ad Design: Up to 7 custom ad designs (using client-provided images)",
        "Enhanced Reporting: Mid-campaign update + final report (CTR, conversions, ROI insights)"
      ]
    },
    {
      name: "Premium Campaign",
      price: "€750",
      description: "Best for businesses aiming for dominance in their market with data-driven scaling.",
      featured: false,
      type: "premium",
      features: [
        "Customer Insight: Deluxe segmentation (demographic, geographic, psychographic, behavioural + 2 buyer personas)",
        "Market Research: In-depth competitor benchmarking + keyword research (40+ keywords, trend analysis)",
        "Campaign Management: 3x Google Ads campaigns with ongoing optimization (2 adjustments)",
        "Ad Design: Up to 10 premium ad designs (with strategic copywriting)",
        "Analytics: Detailed analytics dashboard + next-step recommendations"
      ]
    }
  ];

  return (
    <>
      <PackagesWrapper component="section" id="packages">
        <Container>
          <SectionTitle variant="h2" component="h2">
            Choose Your Campaign Package
          </SectionTitle>
          
          <PackagesGrid container spacing={4}>
            {packages.map((pkg, index) => (
              <Grid item xs={12} md={4} key={index}>
                <PackageCard featured={pkg.featured}>
                  {pkg.featured && (
                    <FeaturedBadge>
                      MOST POPULAR
                    </FeaturedBadge>
                  )}
                  
                  <CardContent sx={{ flexGrow: 1 }}>
                    <PackageName variant="h3" component="h3">
                      {pkg.name}
                    </PackageName>
                    
                    <PackagePrice variant="h4" component="div">
                      {pkg.price}
                    </PackagePrice>
                    
                    <PackageDescription variant="body1" component="p">
                      {pkg.description}
                    </PackageDescription>
                    
                    <PackageFeaturesList>
                      {pkg.features.map((feature, featureIndex) => (
                        <PackageFeatureItem key={featureIndex}>
                          <FeatureIcon>
                            <CheckIcon />
                          </FeatureIcon>
                          <ListItemText 
                            primary={feature}
                            primaryTypographyProps={{ variant: 'body2' }}
                          />
                        </PackageFeatureItem>
                      ))}
                    </PackageFeaturesList>
                    
                    <PackageCta 
                      variant="contained" 
                      onClick={() => openModal(pkg.type)}
                    >
                      Get Started
                    </PackageCta>
                  </CardContent>
                </PackageCard>
              </Grid>
            ))}
          </PackagesGrid>
        </Container>
      </PackagesWrapper>

      <Modal 
        open={modalOpen} 
        onClose={closeModal} 
        packageType={selectedPackage} 
      />
    </>
  );
};

export default Packages;