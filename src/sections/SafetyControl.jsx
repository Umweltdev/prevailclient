import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  useTheme,
  alpha,
} from "@mui/material";
import { GlassCard } from "./components/common/GlassCard.jsx";

export const SafetyControl = () => {
  const theme = useTheme();

  const safeguards = [
    { title: "Daily Maximum", desc: "Never spend more than $100/day" },
    { title: "Per-Customer Cap", desc: "Never pay more than $20 per customer" },
    { title: "Platform Limits", desc: "Never give Facebook more than 30%" },
    {
      title: "Emergency Brake",
      desc: "Auto-pause if losing money 3 days straight",
    },
  ];

  const overrides = [
    { title: "Instant Pause", desc: "Hit pause button anytime" },
    { title: "Manual Adjustments", desc: "Override any campaign instantly" },
    {
      title: "Protected Campaigns",
      desc: 'Set "do not touch" on specific ads',
    },
    { title: "Full Control", desc: "Take back control instantly when needed" },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="xl">
        <GlassCard sx={{ p: { xs: 2, md: 4, lg: 6 } }}>
          <Typography
            variant="h2"
            fontWeight={900}
            textAlign="center"
            mb={{ xs: 4, md: 8 }}
            sx={{ fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" } }}
          >
            Complete Safety & Control
          </Typography>
          <Grid container spacing={6} alignItems="stretch">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                fontWeight={800}
                color="primary"
                mb={4}
                textAlign={{ xs: "center", md: "left" }}
                sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" } }}
              >
                🛡️ Spending Safeguards
              </Typography>
              <Stack spacing={2} alignItems={{ xs: "center", md: "stretch" }}>
                {safeguards.map((item, index) => (
                  <Paper
                    key={index}
                    sx={{
                      p: { xs: 2, sm: 3 },
                      bgcolor: alpha(theme.palette.grey[50], 0.5),
                      maxWidth: { xs: 340, sm: "100%" },
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      mb={1}
                      sx={{ fontSize: { xs: "0.95rem", md: "1rem" } }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "0.95rem" },
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                fontWeight={800}
                color="secondary"
                mb={4}
                textAlign={{ xs: "center", md: "left" }}
                sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" } }}
              >
                🎮 Manual Override
              </Typography>
              <Stack spacing={2} alignItems={{ xs: "center", md: "stretch" }}>
                {overrides.map((item, index) => (
                  <Paper
                    key={index}
                    sx={{
                      p: { xs: 2, sm: 3 },
                      bgcolor: alpha(theme.palette.grey[50], 0.5),
                      maxWidth: { xs: 340, sm: "100%" },
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      mb={1}
                      sx={{ fontSize: { xs: "0.95rem", md: "1rem" } }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "0.95rem" },
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </Grid>
          </Grid>
          <Paper
            sx={{
              mt: { xs: 4, md: 6 },
              p: { xs: 2, md: 4 },
              background:
                "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(124, 58, 237, 0.05))",
              textAlign: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" } }}
            >
              <strong>Remember:</strong> The automation is your assistant, not
              your master. You&apos;re always in complete control.
            </Typography>
          </Paper>
        </GlassCard>
      </Container>
    </Box>
  );
};
