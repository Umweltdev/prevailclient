import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  alpha,
} from "@mui/material";
import { GlassCard } from "./components/common/GlassCard.jsx";
import { gradients } from "../theme.js";

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

  const analysisStats = [
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
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          fontWeight={900}
          textAlign="center"
          mb={{ xs: 4, md: 6 }}
          sx={{
            fontSize: {
              xs: "1.75rem",
              sm: "2.25rem",
              md: "3rem",
              lg: "3.5rem",
            },
            lineHeight: 1.25,
          }}
        >
          Launch Week Case Study: $5,000 Budget
        </Typography>
        <GlassCard
          id="features"
          sx={{
            px: { xs: 2, sm: 4 },
            py: { xs: 6, md: 10 },
            background: gradients.secondary,
            color: "white",
          }}
        >
          <Grid
            container
            spacing={3}
            justifyContent="center"
            mb={{ xs: 4, md: 6 }}
          >
            {weekData.map((item, index) => (
              <Grid item xs={12} sm={6} md={2} key={index}>
                <GlassCard
                  sx={{
                    p: { xs: 2, sm: 3 },
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "16px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Typography
                    component="div"
                    sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
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
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      textAlign: "center",
                    }}
                  >
                    {item.day}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      textAlign: "center",
                      opacity: 0.9,
                    }}
                  >
                    {item.action}
                  </Typography>
                </GlassCard>
              </Grid>
            ))}
          </Grid>

          <GlassCard
            sx={{
              p: { xs: 3, md: 5 },
              background: alpha(theme.palette.background.paper, 0.05),
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={800}
              mb={{ xs: 3, md: 5 }}
              sx={{ fontSize: { xs: "1.35rem", md: "2rem" }, color: "white" }}
            >
              Launch Week Complete Analysis
            </Typography>

            <Grid container spacing={3} justifyContent="center">
              {analysisStats.map((stat, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <GlassCard
                    sx={{
                      p: { xs: 2, md: 3 },
                      textAlign: "center",
                      background: alpha(stat.color, 0.08),
                      border: `1px solid ${alpha(stat.color, 0.25)}`,
                      borderRadius: "16px",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      mb={1}
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: "white",
                      }}
                    >
                      {stat.label}
                    </Typography>
                    <Typography
                      variant="h5"
                      fontWeight={900}
                      sx={{
                        fontSize: { xs: "1.25rem", md: "1.75rem" },
                        color: "white",
                      }}
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
