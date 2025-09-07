import {
  Box,
  Typography,
  Paper,
  Grid,
  Chip,
  useTheme,
  alpha,
} from "@mui/material";

export const Recommendations = () => {
  const theme = useTheme();

  const recommendations = [
    {
      priority: "IMMEDIATE",
      icon: "🚨",
      action: "Stop manual Instagram",
      impact: "Save $1,000/month instantly",
      color: "error",
    },
    {
      priority: "AUTO",
      icon: "⚡",
      action: "Moving $200 to TikTok",
      impact: "TikTok showing 3x better performance",
      color: "warning",
    },
    {
      priority: "CONSIDER",
      icon: "💡",
      action: "Double farmers market presence",
      impact: "$11 per customer vs $41 digital average",
      color: "success",
    },
    {
      priority: "DELEGATE",
      icon: "💰",
      action: "Hire writer for blog",
      impact: "$15/hour freelancer vs your $50/hour value",
      color: "info",
    },
  ];

  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={800}
        mb={4}
        textAlign="center"
        sx={{
          fontSize: { xs: "1.6rem", md: "2rem" },
          color: "white",
        }}
      >
        🎯 Automation Recommendations
      </Typography>

      <Grid container spacing={3}>
        {recommendations.map((rec, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={0}
              sx={{
                position: "relative",
                p: { xs: 3, md: 4 },
                borderRadius: "16px",
                height: "100%",
                background: alpha(theme.palette[rec.color].main, 0.12),
                border: `1.5px solid ${alpha(theme.palette[rec.color].main, 0.4)}`,
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                },
              }}
            >
              <Chip
                label={rec.priority}
                size="small"
                sx={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  bgcolor: theme.palette[rec.color].main,
                  color: "white",
                  fontWeight: 700,
                  fontSize: "0.65rem",
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  gap: 2.5,
                  alignItems: "flex-start",
                  mt: 3,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
                >
                  {rec.icon}
                </Typography>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 0.5 }}
                  >
                    {rec.action}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {rec.impact}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
