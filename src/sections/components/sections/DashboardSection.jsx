import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Stack,
  useTheme,
  alpha,
} from '@mui/material';
import { GlassCard } from '../common/GlassCard';
import { DigitalCampaigns } from '../dashboard/DigitalCampaigns';
import { TraditionalCampaigns } from '../dashboard/TraditionalCampaigns';
import { TimeInvestment } from '../dashboard/TimeInvestment';
import { Recommendations } from '../dashboard/Recommendations';
import PropTypes from 'prop-types';
import { DailyOptimizationReport } from '../dashboard/DailyOptimizationReport';

export const DashboardSection = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: '📊 Digital Campaigns', component: DigitalCampaigns },
    { label: '💰 Traditional Ads', component: TraditionalCampaigns },
    { label: '⏰ Time Investment', component: TimeInvestment },
    { label: '🎯 Automation Recommendations', component: Recommendations },
  ];

  const TabPanel = ({ value, index, children }) => (
    <Box hidden={value !== index} sx={{ py: 4 }}>
      {value === index && children}
    </Box>
  );

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  return (
    <Box id="dashboard" sx={{ py: { xs: 12, md: 16, lg: 20 }, bgcolor: alpha(theme.palette.grey[50], 0.5) }}>
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center" textAlign="center" mb={8}>
          <Typography variant="h2" fontWeight={900} sx={{ fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' } }}>
            Real Business Example
          </Typography>
          <Typography 
            variant="h3" 
            sx={{ 
              fontSize: { xs: '1.5rem', md: '2rem' },
              background: 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 300,
            }}
          >
            Sarah&apos;s Boutique Dashboard
          </Typography>
        </Stack>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Tabs 
            value={activeTab} 
            onChange={(e, v) => setActiveTab(v)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                borderRadius: 2,
                mx: 0.5,
                minHeight: 48,
                fontWeight: 600,
                transition: 'all 0.3s',
                '&.Mui-selected': {
                  background: 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
                  color: 'white',
                  transform: 'scale(1.05)',
                },
                '&:not(.Mui-selected)': {
                  bgcolor: 'background.paper',
                  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                  '&:hover': {
                    bgcolor: alpha(theme.palette.primary.main, 0.05),
                  },
                },
              },
              '& .MuiTabs-indicator': {
                display: 'none',
              },
            }}
          >
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
        </Box>

        <GlassCard sx={{ p: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          {tabs.map((tab, index) => {
            const Component = tab.component;
            return (
              <TabPanel key={index} value={activeTab} index={index}>
                <Component />
              </TabPanel>
            );
          })}
        </GlassCard>

        <Box sx={{ mt: 6 }}>
          <DailyOptimizationReport />
        </Box>
      </Container>
    </Box>
  );
};