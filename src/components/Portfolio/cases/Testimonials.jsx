import { Star, Start } from "@mui/icons-material";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Testimonials = () => {
  return (
    <Grid>
      <Card>
        <CardContent>
          <Grid>
            <Star />
          </Grid>
          <Typography>
            Salt has given me a lot of peace of mind, which is very important.
            We are much less stressed about running our business now that we
            know a full-fledged marketing team is carefully managing every
            aspect of our digital marketing. It’s like having your own marketing
            department, but without all the costs and problems that come with
            running one.
          </Typography>
          <Typography>Clive Buckley</Typography>
          <Typography>Owner</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Testimonials;
