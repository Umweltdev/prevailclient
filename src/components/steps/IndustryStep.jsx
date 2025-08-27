import PropTypes from "prop-types";
import { Grid, Paper, Typography, Box } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import StorefrontIcon from "@mui/icons-material/Storefront";
import WorkIcon from "@mui/icons-material/Work";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import StepHeader from "../ReusedComponents/StepHeader";

const industries = [
  {
    icon: <RestaurantIcon sx={{ fontSize: 40 }} color="primary" />,
    title: "Restaurant & Food",
    description: "Restaurants, Takeaways, Cafes",
  },
  {
    icon: <StorefrontIcon sx={{ fontSize: 40 }} color="primary" />,
    title: "Retail & E-commerce",
    description: "Shops, Online Stores, Boutiques",
  },
  {
    icon: <WorkIcon sx={{ fontSize: 40 }} color="primary" />,
    title: "Professional Services",
    description: "Consulting, Legal, Financial",
  },
  {
    icon: <HolidayVillageIcon sx={{ fontSize: 40 }} color="primary" />,
    title: "Hospitality & Events",
    description: "Hotels, Venues, Tourism",
  },
  {
    icon: <RealEstateAgentIcon sx={{ fontSize: 40 }} color="primary" />,
    title: "Property & Real Estate",
    description: "Agents, Management, Development",
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 40 }} color="primary" />,
    title: "Other Industry",
    description: "Tell us about your business",
  },
];

const IndustryStep = (props) => {
  const { onSelect, selectedIndustry } = props;
  return (
    <Box>
      <StepHeader
        step={1}
        title="What industry are you in?"
        subtitle="Select your industry to receive tailored recommendations"
      />
      <Grid container spacing={2}>
        {industries.map((industry) => (
          <Grid item xs={12} sm={6} md={4} key={industry.title}>
            <Paper
              variant="outlined"
              onClick={() => onSelect(industry.title)}
              sx={{
                p: 3,
                cursor: "pointer",
                textAlign: "center",
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
                "&:hover": {
                  borderColor: "primary.main",
                  boxShadow: 2,
                },
              }}
            >
              {industry.icon}
              <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
                {industry.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {industry.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

IndustryStep.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedIndustry: PropTypes.string,
};

export default IndustryStep;
