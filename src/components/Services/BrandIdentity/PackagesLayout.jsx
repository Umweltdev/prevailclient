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
  eigth,
  ninth,
  tenth,
  eleven,
  twelve,
  thirtheen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
}) => {
  return (
    <Card
      sx={{
        width: "25vw",
        height: "50vh",
        minHeight: "55vh",
        borderRadius: 4,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px;",
        "@media (max-width: 600px)": {
          marginTop: "1vh",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2vh",
          padding: "3vw 0 ",
        }}
      >
        <Typography textAlign="center" fontWeight="bold">
          {packages}
        </Typography>
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
        <Button
          disableElevation
          sx={{
            borderRadius: 7,
            backgroundColor: "#884ed9",
            textTransform: "capitalize",
            fontSize: "1vw",
            padding: "1vh 2vw",
          }}
          variant="contained"
          color="primary"
        >
          {sixth}
        </Button>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {seventh}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {eigth}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {ninth}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {tenth}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {eleven}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {twelve}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {thirtheen}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {fourteen}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {fifteen}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {sixteen}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {seventeen}
        </Typography>

        {/* <Button variant="contained" color="primary" fullWidth>
          Subscribe Now
        </Button> */}
      </CardContent>
    </Card>
  );
};

export default PackagesLayout;
