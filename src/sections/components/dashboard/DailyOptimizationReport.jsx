import { Grid, Typography, Paper, Stack, Box, alpha } from "@mui/material";

export const DailyOptimizationReport = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 4, md: 6, lg: 8 },
        background: "linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)",
        color: "white",
        borderRadius: 4,
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight={800}>
          Today&apos;s Automatic Optimizations
        </Typography>
        <Typography variant="subtitle1" sx={{ opacity: 0.8, mt: 1 }}>
          6:00 PM Report
        </Typography>
      </Box>
      <Grid container spacing={3} mb={4}>
        {[
          { title: "$37", subtitle: "Saved by pausing poor performers" },
          { title: "$124", subtitle: "Extra earned by boosting winners" },
          { title: "+$161", subtitle: "Net improvement (all automatic)" },
        ].map((card, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Paper
              sx={{
                p: 4,
                textAlign: "center",
                background: alpha("#FFFFFF", 0.2),
                backdropFilter: "blur(15px)",
                color: "white",
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                },
              }}
            >
              <Typography variant="h3" fontWeight={800}>
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9, mt: 1 }}>
                {card.subtitle}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Paper
        sx={{
          p: 4,
          background: alpha("#FFFFFF", 0.1),
          backdropFilter: "blur(10px)",
          color: "white",
          borderRadius: 3,
        }}
      >
        <Typography variant="subtitle1" fontWeight={700} mb={2}>
          YOUR ACTIONS NEEDED:
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body2">
            ⚠️ Radio ad ends Thursday - renewal not recommended
          </Typography>
          <Typography variant="body2">
            💡 Farmers market customers worth 4x digital customers
          </Typography>
          <Typography variant="body2">
            🎯 Stopping manual Instagram would save $1,000/month
          </Typography>
        </Stack>
      </Paper>
    </Paper>
  );
};
