// import * as React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { Build, AttachMoney, EventAvailable, Alarm } from "@mui/icons-material"; // Import icons

const AutomationSection = () => {
  return (
    <Box
      sx={{
        paddingLeft: "75px",
        paddingRight: "75px",
        "@media (max-width: 600px)": {
          display: "none",
        },
      }}
    >
      <Grid container spacing={3}>

        <Grid item xs={6} md={3}>
  
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          
            <Divider orientation="vertical" flexItem />
            <Build fontSize="large" sx={{ color: "#884ED9" }} />
            <Typography variant="h5">Automate with webhooks</Typography>
          </Box>
          <Typography variant="body1">
            Programmatically trigger actions based on lifecycle events like
            upgrades, payments, and cancellations.
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
   
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
         
            <Divider orientation="vertical" flexItem />
            <AttachMoney fontSize="large" sx={{ color: "#884ED9" }} />
            <Typography variant="h5">Billing proration</Typography>
          </Box>
          <Typography variant="body1">
            Prevail automatically prorates billing when any plan changes occur
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Divider orientation="vertical" flexItem />
            <EventAvailable fontSize="large" sx={{ color: "#884ED9" }} />
            <Typography variant="h5">Schedule subscriptions</Typography>
          </Box>
          <Typography variant="body1">
            Configure rules to easily make changes to subscriptions over time
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Divider orientation="vertical" flexItem />
            <Alarm fontSize="large" sx={{ color: "#884ED9" }} />
            <Typography variant="h5">Automatic reminders</Typography>
          </Box>
          <Typography variant="body1">
            Maximise your chances of getting paid with email reminders for
            missed or overdue payments.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AutomationSection;
