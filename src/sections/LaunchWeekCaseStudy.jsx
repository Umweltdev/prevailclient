import {
  Box,
  Container,
  Typography,
  Grid,
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
      <Container maxWidth="xl">
        <GlassCard
          sx={{
            p: { xs: 3, md: 6, lg: 8 },
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.07), rgba(236,72,153,0.07))",
          }}
        >
          {/* Title */}
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
                <GlassCard
                  sx={{
                    p: { xs: 2, sm: 3 },
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: theme.shadows[8],
                    },
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
                </GlassCard>
              </Grid>
            ))}
          </Grid>

          {/* Analysis Section */}
          <GlassCard
            sx={{
              p: { xs: 3, md: 4 },
              background: alpha(theme.palette.background.paper, 0.05),
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
              {[
                {
                  label: "🤖 Automated Digital",
                  result: "326 @ $9.20",
                  color: theme.palette.success.main,
                },
                {
                  label: "📰 Traditional",
                  result: "23 @ $21",
                  color: theme.palette.warning.main,
                },
                {
                  label: "⏰ Your Time",
                  result: "0 customers!",
                  color: theme.palette.error.main,
                },
              ].map((stat, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <GlassCard
                    sx={{
                      p: { xs: 2, md: 3 },
                      textAlign: "center",
                      background: alpha(stat.color, 0.07),
                      border: `1px solid ${alpha(stat.color, 0.25)}`,
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight={700} mb={1}>
                      {stat.label}
                    </Typography>
                    <Typography
                      variant="h5"
                      fontWeight={900}
                      sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                    >
                      {stat.result}
                    </Typography>
                  </GlassCard>
                </Grid>
              ))}
            </Grid>
          </GlassCard>
        </GlassCard>
      </Container>
    </Box>
  );
};
