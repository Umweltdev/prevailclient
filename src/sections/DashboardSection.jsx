import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Stack,
  useTheme,
  alpha,
} from "@mui/material";
import { GlassCard } from "./components/common/GlassCard";
import { DigitalCampaigns } from "./components/dashboard/DigitalCampaigns.jsx";
import { TraditionalCampaigns } from "./components/dashboard/TraditionalCampaigns.jsx";
import { TimeInvestment } from "./components/dashboard/TimeInvestment.jsx";
import { Recommendations } from "./components/dashboard/Recommendations.jsx";
import { DailyOptimizationReport } from "./components/dashboard/DailyOptimizationReport.jsx";
import { gradients } from "../theme.js";

const TABS_CONFIG = [
  { icon: "📊", title: "Digital Campaigns", component: DigitalCampaigns },
  { icon: "💰", title: "Traditional Ads", component: TraditionalCampaigns },
  { icon: "⏰", title: "Time Investment", component: TimeInvestment },
  {
    icon: "🎯",
    title: "Automation Recommendations",
    component: Recommendations,
  },
];

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export const DashboardSection = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      id="dashboard"
      sx={{
        py: { xs: 6, sm: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
          mb={{ xs: 4, md: 8 }}
        >
          <Typography
            variant="h2"
            fontWeight={900}
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem", lg: "4rem" },
              lineHeight: 1.2,
            }}
          >
            Real Business Example
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xs: "0.95rem",
                sm: "1.25rem",
                md: "1.75rem",
              },
              background: "linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 400,
            }}
          >
            Sarah&apos;s Boutique Dashboard
          </Typography>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 4, md: 6 },
          }}
        >
          <Stack
            direction="column"
            spacing={1}
            sx={{ width: "100%", display: { xs: "flex", sm: "none" } }}
          >
            {TABS_CONFIG.map((tab, index) => (
              <Box
                key={index}
                onClick={() => setActiveTab(index)}
                sx={{
                  p: 2,
                  cursor: "pointer",
                  bgcolor:
                    activeTab === index ? "primary.main" : "background.paper",
                  color: activeTab === index ? "white" : "text.primary",
                  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                  textAlign: "center",
                  "& .MuiTypography-root": {
                    fontWeight: activeTab === index ? 700 : 500,
                  },
                }}
              >
                <Typography component="span" fontSize="1.5rem">
                  {tab.icon}
                </Typography>
                <Typography
                  component="span"
                  fontSize="0.9rem"
                  display="block"
                  mt={0.3}
                >
                  {tab.title}
                </Typography>
              </Box>
            ))}
          </Stack>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              display: { xs: "none", sm: "flex" },
              "& .MuiTabs-indicator": { display: "none" },
            }}
          >
            {TABS_CONFIG.map((tab, index) => (
              <Tab
                key={index}
                icon={
                  <Typography
                    component="span"
                    sx={{ fontSize: "1.2rem", mr: 1 }}
                  >
                    {tab.icon}
                  </Typography>
                }
                iconPosition="start"
                label={tab.title}
                sx={{
                  borderRadius: 2,
                  mx: 0.5,
                  minHeight: 48,
                  fontWeight: 600,
                  transition: "all 0.3s",
                  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                  bgcolor: "background.paper",
                  "&:hover": {
                    bgcolor: alpha(theme.palette.primary.main, 0.05),
                  },
                  "&.Mui-selected": {
                    background:
                      "linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)",
                    color: "#fff",
                    transform: "scale(1.05)",
                    boxShadow: (theme) => theme.shadows[4],
                    border: "1px solid transparent",
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>
        <GlassCard
          sx={{ p: { xs: 2, sm: 3, md: 5 }, background: gradients.success, color : "white" }}
        >
          <Box sx={{ width: "100%" }}>
            {TABS_CONFIG.map((tab, index) => {
              const Component = tab.component;
              return (
                <TabPanel
                  key={index}
                  value={activeTab}
                  index={index}
                  sx={{ width: "100%" }}
                >
                  <Component />
                </TabPanel>
              );
            })}
          </Box>
        </GlassCard>
        <Box sx={{ mt: { xs: 4, md: 6 } }}>
          <DailyOptimizationReport />
        </Box>
      </Container>
    </Box>
  );
};
