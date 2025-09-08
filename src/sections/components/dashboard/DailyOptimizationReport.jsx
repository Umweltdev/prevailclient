import { Box, Grid, Container, Typography, Stack } from "@mui/material";
import { GlassCard } from "../common/GlassCard.jsx";
import { gradients } from "../../../theme.js";


export const DailyOptimizationReport = () => {
  const optimizationStats = [
    { title: "$37", subtitle: "Saved by pausing poor performers" },
    { title: "$124", subtitle: "Extra earned by boosting winners" },
    { title: "+$161", subtitle: "Net improvement (all automatic)" },
  ];

  const actionsNeeded = [
    "⚠️ Radio ad ends Thursday - renewal not recommended",
    "💡 Farmers market customers worth 4x digital customers",
    "🎯 Stopping manual Instagram would save $1,000/month",
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center" textAlign="center" mb={8}>
          <Typography
            variant="h2"
            fontWeight={900}
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
              lineHeight: 1.25,
            }}
          >
            Today&apos;s Automatic Optimizations
          </Typography>
          <Typography
            variant="h6"
            fontWeight={300}
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
              opacity: 0.8,
              color: "purple",
            }}
          >
            6:00 PM Report
          </Typography>
        </Stack>

        <GlassCard
          sx={{
            px: { xs: 2, sm: 4 },
            py: { xs: 6, md: 10 },
            background: gradients.primary,
            color: "white",
            borderRadius: "20px",
          }}
        >
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {optimizationStats.map((card, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <GlassCard
                  sx={{
                    p: { xs: 3, sm: 4 },
                    height: "100%",
                    textAlign: "center",
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: "16px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 8px 40px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    fontWeight={800}
                    sx={{
                      fontSize: {
                        xs: "2rem",
                        sm: "2.5rem",
                        md: "3rem",
                        color: "white",
                      },
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      fontSize: {
                        xs: "0.85rem",
                        sm: "0.95rem",
                        md: "1rem",
                        color: "white",
                      },
                      opacity: 0.9,
                    }}
                  >
                    {card.subtitle}
                  </Typography>
                </GlassCard>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <GlassCard
                  sx={{
                    p: { xs: 3, sm: 4 },
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: "16px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    maxWidth: 700,
                    width: "100%",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 8px 40px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    mb={2}
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.05rem", md: "1.15rem" },
                      letterSpacing: 0.5,
                      color: "white",
                    }}
                  >
                    YOUR ACTIONS NEEDED:
                  </Typography>
                  <Stack spacing={1.5} alignItems="center">
                    {actionsNeeded.map((action, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        sx={{
                          fontSize: {
                            xs: "0.85rem",
                            sm: "0.95rem",
                            md: "1rem",
                          },
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        {action}
                      </Typography>
                    ))}
                  </Stack>
                </GlassCard>
              </Box>
            </Grid>
          </Grid>
        </GlassCard>
      </Container>
    </Box>
  );
};
