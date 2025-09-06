import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  useTheme,
  alpha,
} from "@mui/material";
import { GlassCard } from "./components/common/GlassCard.jsx";

export const HiddenCostStory = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
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
              textAlign: "center",
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
              textAlign: "center",
            }}
          >
            See the true cost of &quot;free&quot; marketing that&apos;s actually
            costing you thousands
          </Typography>
        </Stack>

        <GlassCard sx={{ p: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          <Typography
            variant="h3"
            fontWeight={800}
            mb={4}
            sx={{
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            The Shocking Truth About Your Time
          </Typography>
          <Paper
            sx={{
              p: { xs: 2.5, sm: 4 },
              mb: 4,
              textAlign: { xs: "center", md: "left" },
              background:
                "linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(252, 165, 165, 0.05))",
              border: `1px solid ${alpha(theme.palette.error.main, 0.2)}`,
            }}
          >
            <Typography
              variant="h5"
              fontWeight={700}
              mb={3}
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Example: &quot;Just Posting on Instagram&quot;
            </Typography>

            <Stack spacing={2}>
              {[
                { label: "Time spent creating content:", value: "2 hours" },
                { label: "Your hourly value:", value: "$50/hour" },
              ].map((row, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "center", sm: "flex-start" },
                    pb: 2,
                    borderBottom: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                    gap: { xs: 0.5, sm: 0 },
                  }}
                >
                  <Typography fontSize={{ xs: "0.9rem", sm: "1rem" }}>
                    {row.label}
                  </Typography>
                  <Typography
                    fontWeight={700}
                    fontSize={{ xs: "0.95rem", sm: "1rem" }}
                  >
                    {row.value}
                  </Typography>
                </Box>
              ))}

              {/* Highlight Row */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: { xs: "center", sm: "flex-start" },
                  pb: 2,
                  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                  gap: { xs: 0.5, sm: 0 },
                }}
              >
                <Typography
                  fontWeight={700}
                  fontSize={{ xs: "0.95rem", sm: "1rem" }}
                >
                  True cost of &quot;free&quot; post:
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={900}
                  color="error"
                  fontSize={{ xs: "1.1rem", sm: "1.25rem" }}
                >
                  $150
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: { xs: "center", sm: "flex-start" },
                  gap: { xs: 0.5, sm: 0 },
                }}
              >
                <Typography
                  fontWeight={900}
                  fontSize={{ xs: "1rem", sm: "1.1rem" }}
                >
                  ACTUAL RESULT:
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight={900}
                  color="error"
                  fontSize={{ xs: "1.25rem", sm: "1.5rem" }}
                >
                  -$120 LOSS!
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </GlassCard>
      </Container>
    </Box>
  );
};
