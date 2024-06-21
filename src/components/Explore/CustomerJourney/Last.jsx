import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    maxWidth: '1000px',
    margin: 'auto',
  },
  text: {
    fontSize: "26px",
    color: "#34205F",
    textAlign: "center",
    fontWeight: "600",
  }
}));

const Last = () => {
  const classes = useStyles();

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="40vh" 
      bgcolor="#F4F4F4"
    >
      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.text}>
          At Prevail, we are committed to guiding you through each stage of the customer journey with strategic expertise and technological prowess. Let us help you transform potential interest into lasting customer loyalty. Start your journey with us today!
        </Typography>
      </Paper>
    </Box>
  );
};

export default Last;
