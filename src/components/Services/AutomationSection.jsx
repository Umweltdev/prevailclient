import * as React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { Build, AttachMoney, EventAvailable, Alarm } from '@mui/icons-material'; // Import icons

const AutomationSection = () => {
  return (
    <Box sx={{ 
      paddingLeft: "75px",
      paddingRight: "75px"
    }}>
      <Grid container spacing={3}> {/* Increased spacing */}
        {/* First Item */}
        <Grid item xs={6} md={3}> {/* Adjusted xs prop */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}> {/* Changed icon color */}
            <Divider orientation="vertical" flexItem /> {/* Vertical divider */}
            <Build fontSize="large" sx={{ color: '#884ED9' }} />
            <Typography variant="h5">Automate with webhooks</Typography>
          </Box>
          <Typography variant="body1">
            Programmatically trigger actions based on lifecycle events like upgrades, payments, and cancellations.
          </Typography>
          
        </Grid>

        {/* Second Item */}
        <Grid item xs={6} md={3}> {/* Adjusted xs prop */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}> {/* Changed icon color */}
            <Divider orientation="vertical" flexItem /> {/* Vertical divider */}
            <AttachMoney fontSize="large" sx={{ color: '#884ED9' }} />
            <Typography variant="h5">Billing proration</Typography>
          </Box>
          <Typography variant="body1">
            Prevail automatically prorates billing when any plan changes occur Lorem ipsum dolor sit amet consectetur.
          </Typography>
          
        </Grid>

        {/* Third Item */}
        <Grid item xs={6} md={3}> {/* Adjusted xs prop */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}> {/* Changed icon color */}
            <Divider orientation="vertical" flexItem /> {/* Vertical divider */}
            <EventAvailable fontSize="large" sx={{ color: '#884ED9' }} />
            <Typography variant="h5">Schedule subscriptions</Typography>
          </Box>
          <Typography variant="body1">
            Configure rules to easily make changes to subscriptions over time Lorem ipsum dolor sit amet consectetur.
          </Typography>
          
        </Grid>

        {/* Fourth Item */}
        <Grid item xs={6} md={3}> {/* Adjusted xs prop */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}> {/* Changed icon color */}
            <Divider orientation="vertical" flexItem /> {/* Vertical divider */}
            <Alarm fontSize="large" sx={{ color: '#884ED9' }} />
            <Typography variant="h5">Automatic reminders</Typography>
          </Box>
          <Typography variant="body1">
            Maximise your chances of getting paid with email reminders for missed or overdue payments.
          </Typography>
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default AutomationSection;