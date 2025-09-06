import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  alpha,
} from "@mui/material";
import { GlassCard } from "./components/common/GlassCard.jsx";

export const LaunchWeekCaseStudy = () => {
  const theme = useTheme();

  const weekData = [
    {
      day: "Monday",
      action: "System distributes $5,000 across all platforms",
      icon: "🚀",
    },
    {
      day: "Tuesday",
      action: "TikTok showing 3x results - shifts 60% budget there",
      icon: "📈",
    },
    {
      day: "Wednesday",
      action: "Your manual posts: $0 sales. System recommends stopping",
      icon: "⚠️",
    },
    {
      day: "Thursday",
      action: "Newspaper offers ad. System predicts 10-15 customers",
      icon: "📰",
    },
    {
      day: "Weekend",
      action: "Final results calculated and analyzed",
      icon: "🏆",
    },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <GlassCard
          sx={{
            p: { xs: 3, md: 6, lg: 8 },
            background:
              "linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(236, 72, 153, 0.05))",
          }}
        >
          <Typography
            variant="h2"
            fontWeight={900}
            textAlign="center"
            mb={{ xs: 4, md: 6 }}
            sx={{
              fontSize: {
                xs: "1.75rem",
                sm: "2.2rem",
                md: "3.5rem",
                lg: "4rem",
              },
            }}
          >
            Launch Week Case Study: $5,000 Budget
          </Typography>

          {/* Week Data Cards */}
          <Grid
            container
            spacing={3}
            justifyContent="center"
            mb={{ xs: 4, md: 6 }}
          >
            {weekData.map((item, index) => (
              <Grid item xs={12} sm={6} md={2.4} key={index}>
                <Paper
                  sx={{
                    p: { xs: 2, sm: 3 },
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: alpha(theme.palette.background.paper, 0.7),
                    backdropFilter: "blur(10px)",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: theme.shadows[8],
                    },
                    transition: "all 0.3s",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
                    mb={1}
                  >
                    {item.icon}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight={700}
                    color="primary"
                    mb={0.5}
                    sx={{
                      fontSize: { xs: "0.85rem", md: "1rem" },
                      textAlign: "center",
                    }}
                  >
                    {item.day}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                      textAlign: "center",
                    }}
                  >
                    {item.action}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Analysis Section */}
          <Paper
            sx={{
              p: { xs: 3, md: 4 },
              background: alpha(theme.palette.grey[900], 0.05),
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={800}
              mb={{ xs: 3, md: 4 }}
              sx={{ fontSize: { xs: "1.25rem", md: "1.75rem" } }}
            >
              LAUNCH WEEK COMPLETE ANALYSIS
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Paper
                  sx={{
                    p: { xs: 2, md: 3 },
                    textAlign: "center",
                    background: alpha(theme.palette.success.main, 0.05),
                    border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={700} mb={1}>
                    🤖 Automated Digital
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight={900}
                    sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                  >
                    326 @ $9.20
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper
                  sx={{
                    p: { xs: 2, md: 3 },
                    textAlign: "center",
                    background: alpha(theme.palette.warning.main, 0.05),
                    border: `1px solid ${alpha(theme.palette.warning.main, 0.2)}`,
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={700} mb={1}>
                    📰 Traditional
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight={900}
                    sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                  >
                    23 @ $21
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper
                  sx={{
                    p: { xs: 2, md: 3 },
                    textAlign: "center",
                    background: alpha(theme.palette.error.main, 0.05),
                    border: `1px solid ${alpha(theme.palette.error.main, 0.2)}`,
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={700} mb={1}>
                    ⏰ Your Time
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight={900}
                    sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                  >
                    0 customers!
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </GlassCard>
      </Container>
    </Box>
  );
};
