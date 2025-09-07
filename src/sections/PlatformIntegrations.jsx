import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  Stack,
} from "@mui/material";
import { GlassCard } from "./components/common/GlassCard";
import { gradients } from "../theme.js";

export const PlatformIntegrations = () => {
  const platforms = [
    { name: "Google Ads", icon: "🔍", status: "Connected" },
    { name: "Facebook Ads", icon: "📘", status: "Connected" },
    { name: "TikTok Ads", icon: "🎵", status: "Connected" },
    { name: "LinkedIn Ads", icon: "💼", status: "Connected" },
    { name: "Amazon Ads", icon: "📦", status: "Connected" },
    { name: "15+ More", icon: "➕", status: "Available" },
  ];

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        background: gradients.primary,
        color: "white",
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center" textAlign="center" mb={6}>
          <Typography
            variant="h2"
            fontWeight={900}
            sx={{
              fontSize: {
                xs: "1.75rem",
                sm: "2rem",
                md: "3.25rem",
              },
              lineHeight: 1.2,
            }}
          >
            Direct API Access
          </Typography>

          <Typography
            variant="h6"
            fontWeight={300}
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
              maxWidth: 600,
              color: "white",
              opacity: 0.9,
            }}
          >
            Complete control over all major advertising platforms
          </Typography>
        </Stack>

        <GlassCard
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            background: "rgba(255,255,255,0.05)",
            color: "white",
          }}
        >
          <Grid container spacing={3}>
            {platforms.map((platform, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Paper
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.13)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    cursor: "pointer",
                    color: "white",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 8px 40px rgba(0, 0, 0, 0.25)",
                    },
                  }}
                >
                  <Typography variant="h2" mb={2}>
                    {platform.icon}
                  </Typography>
                  <Typography variant="subtitle2" fontWeight={700} mb={2}>
                    {platform.name}
                  </Typography>
                  <Chip
                    label={platform.status}
                    size="small"
                    sx={{
                      fontWeight: 600,
                      color: "white",
                      border:
                        platform.status === "Connected"
                          ? "1px solid #22c55e"
                          : "1px solid #60a5fa",
                      background:
                        platform.status === "Connected"
                          ? "rgba(34,197,94,0.2)"
                          : "rgba(96,165,250,0.2)",
                    }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </GlassCard>
      </Container>
    </Box>
  );
};
