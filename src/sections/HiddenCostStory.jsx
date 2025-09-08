import { Box, Container, Typography, Paper, Stack, Grid } from "@mui/material";
import { GlassCard } from "./components/common/GlassCard.jsx";
import { gradients } from "../theme.js";

export const HiddenCostStory = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="xl">
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
          mb={{ xs: 6, md: 8 }}
        >
          <Typography
            variant="h2"
            fontWeight={900}
            sx={{
              fontSize: {
                xs: "1.75rem",
                sm: "2.25rem",
                md: "3.25rem",
                lg: "4rem",
              },
              lineHeight: 1.2,
            }}
          >
            The Hidden Cost Revealer
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight={300}
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.25rem" },
              maxWidth: 600,
            }}
          >
            See the true cost of &quot;free&quot; marketing that&apos;s actually
            costing you thousands
          </Typography>
        </Stack>

        <GlassCard
          sx={{
            p: { xs: 3, sm: 4, md: 6, lg: 8 },
            background: gradients.secondary,
            color: "white",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={800}
            mb={4}
            sx={{
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
              textAlign: "center",
            }}
          >
            The Shocking Truth About Your Time
          </Typography>

          <Typography
            sx={{
              mb: 4,
              color: "white",
              textAlign: "center",
            }}
          >
            <Grid container spacing={3}>
              {[
                { label: "Time spent creating content:", value: "2 hours" },
                { label: "Your hourly value:", value: "$50/hour" },
                { label: "True cost of 'free' post:", value: "$150" },
                { label: "ACTUAL RESULT:", value: "-$120 LOSS!" },
              ].map((row, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper
                    sx={{
                      p: 3,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      textAlign: "center",
                      color: "white",
                      borderRadius: "16px",
                      background: "rgba(255, 255, 255, 0.13)",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(4.1px)",
                      WebkitBackdropFilter: "blur(4.1px)",
                      border: "1px solid rgba(255, 255, 255, 0.89)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 8px 40px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      sx={{ mb: 1 }}
                    >
                      {row.label}
                    </Typography>
                    <Typography variant="h6" fontWeight={900}>
                      {row.value}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Typography>
        </GlassCard>
      </Container>
    </Box>
  );
};
