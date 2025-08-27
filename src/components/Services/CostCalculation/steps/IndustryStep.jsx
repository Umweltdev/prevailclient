import PropTypes from "prop-types";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import HouseIcon from "@mui/icons-material/House";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import StepHeader from "../../../ReusedComponents/StepHeader";

const industries = [
  {
    icon: <RestaurantIcon sx={{ fontSize: 50 }} color="primary" />,
    title: "Restaurant & Food",
    description: "Restaurants, Takeaways, Cafes",
  },
  {
    icon: <StorefrontIcon sx={{ fontSize: 50 }} color="primary" />,
    title: "Retail & E-commerce",
    description: "Shops, Online Stores, Boutiques",
  },
  {
    icon: <HomeWorkIcon sx={{ fontSize: 50 }} color="primary" />,
    title: "Professional Services",
    description: "Consulting, Legal, Financial",
  },
  {
    icon: <HolidayVillageIcon sx={{ fontSize: 50 }} color="primary" />,
    title: "Hospitality & Events",
    description: "Hotels, Venues, Tourism",
  },
  {
    icon: <HouseIcon sx={{ fontSize: 50 }} color="primary" />,
    title: "Property & Real Estate",
    description: "Agents, Management, Development",
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 50 }} color="primary" />,
    title: "Other Industry",
    description: "Tell us about your business",
  },
];

const IndustryStep = ({ onSelect, selectedIndustry, handleNext }) => {
  return (
    <Box>
      <StepHeader
        step={1}
        title="What industry are you in?"
        subtitle="Select your industry to receive tailored recommendations"
      />

      <Grid container spacing={5} alignItems="stretch">
        {industries.map((industry) => (
          <Grid item xs={12} sm={6} md={4} key={industry.title}>
            <Paper
              variant="outlined"
              onClick={() => onSelect(industry.title)}
              sx={{
                p: 4,
                minHeight: 220,
                cursor: "pointer",
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border:
                  selectedIndustry === industry.title
                    ? "2px solid"
                    : "1px solid",
                borderColor:
                  selectedIndustry === industry.title
                    ? "primary.main"
                    : "divider",
                backgroundColor:
                  selectedIndustry === industry.title
                    ? "action.selected"
                    : "background.paper",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.07) rotateX(5deg)",
                  boxShadow: 6,
                  borderColor: "primary.main",
                },
              }}
            >
              {industry.icon}
              <Typography variant="h6" sx={{ mt: 2 }}>
                {industry.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {industry.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Continue Button */}
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Button
          variant="contained"
          size="large"
          disabled={!selectedIndustry}
          onClick={handleNext}
          sx={{ px: 6, py: 2, fontSize: "1rem" }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

IndustryStep.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedIndustry: PropTypes.string,
  handleNext: PropTypes.func.isRequired,
};

export default IndustryStep;
