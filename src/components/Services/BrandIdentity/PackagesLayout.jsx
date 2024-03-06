import React from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";

const PackagesLayout = ({
  packages,
  amount,
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eigth
}) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2vh",
        }}
      >
        <Typography fontWeight="bold">{packages}</Typography>
        <Typography variant="body1" gutterBottom>
          {amount}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {first}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {second}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {third}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {fourth}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {fifth}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {sixth}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {seventh}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {eigth}
        </Typography>
        {/* <Button variant="contained" color="primary" fullWidth>
          Subscribe Now
        </Button> */}
      </CardContent>
    </Card>
  );
};

export default PackagesLayout;
