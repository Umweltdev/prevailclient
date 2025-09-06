import { useState } from "react";
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
import PropTypes from "prop-types";
import { DigitalCampaigns } from "./components/dashboard/DigitalCampaigns.jsx";
import { TraditionalCampaigns } from "./components/dashboard/TraditionalCampaigns.jsx";
import { TimeInvestment } from "./components/dashboard/TimeInvestment.jsx";
import { Recommendations } from "./components/dashboard/Recommendations.jsx";
import { DailyOptimizationReport } from "./components/dashboard/DailyOptimizationReport.jsx";

export const DashboardSection = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "📊 Digital Campaigns", component: DigitalCampaigns },
    { label: "💰 Traditional Ads", component: TraditionalCampaigns },
    { label: "⏰ Time Investment", component: TimeInvestment },
    { label: "🎯 Automation Recommendations", component: Recommendations },
  ];

  const TabPanel = ({ value, index, children }) => (
    <Box hidden={value !== index} sx={{ py: { xs: 2, md: 4 } }}>
      {value === index && children}
    </Box>
  );

  return (
    <Box
      id="dashboard"
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        bgcolor: alpha(theme.palette.grey[50], 0.5),
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
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
              textAlign: "center",
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
                lg: "2rem",
              },
              background: "linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 400,
              lineHeight: 1.3,
              textAlign: "center",
            }}
          >
            Sarah&apos;s Boutique Dashboard
          </Typography>
        </Stack>

        {/* Tabs */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 4, md: 6 },
          }}
        >
          {/* Mobile: stack tabs vertically */}
          <Stack
            direction="column"
            spacing={1}
            sx={{ width: "100%", display: { xs: "flex", sm: "none" } }}
          >
            {tabs.map((tab, index) => (
              <Box
                key={index}
                onClick={() => setActiveTab(index)}
                sx={{
                  py: 1,
                  px: 2,
                  borderRadius: 2,
                  textAlign: "center",
                  fontSize: "0.9rem",
                  fontWeight: activeTab === index ? 700 : 500,
                  cursor: "pointer",
                  bgcolor:
                    activeTab === index
                      ? "linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)"
                      : "background.paper",
                  color: activeTab === index ? "white" : "text.primary",
                  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                }}
              >
                {tab.label}
              </Box>
            ))}
          </Stack>

          <Tabs
            value={activeTab}
            onChange={(e, v) => setActiveTab(v)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              display: { xs: "none", sm: "flex" },
              "& .MuiTab-root": {
                borderRadius: 2,
                mx: 0.5,
                minHeight: 40,
                fontWeight: 600,
                fontSize: { sm: "0.85rem", md: "1rem" },
                px: { sm: 2, md: 3 },
                py: { sm: 1 },
                transition: "all 0.3s",
                "&.Mui-selected": {
                  background:
                    "linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)",
                  color: "#fff !important",
                  transform: "scale(1.05)",
                  boxShadow: "0 3px 10px rgba(236, 72, 153, 0.4)",
                },
                "&:not(.Mui-selected)": {
                  color: theme.palette.text.primary,
                  bgcolor: "background.paper",
                  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                  "&:hover": {
                    bgcolor: alpha(theme.palette.primary.main, 0.05),
                  },
                },
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
        </Box>

        <GlassCard sx={{ p: { xs: 2, sm: 3, md: 5, lg: 6 } }}>
          {tabs.map((tab, index) => {
            const Component = tab.component;
            return (
              <TabPanel key={index} value={activeTab} index={index}>
                <Component />
              </TabPanel>
            );
          })}
        </GlassCard>

        <Box sx={{ mt: { xs: 4, md: 6 } }}>
          <DailyOptimizationReport />
        </Box>
      </Container>
    </Box>
  );
};

DashboardSection.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  value: PropTypes.number,
};
