import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  useTheme,
  alpha,
} from "@mui/material";
import { GlassCard } from "./components/common/GlassCard";
import { GradientText } from "./components/common/GradientText";

export const RealTimeControlStory = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        background:
          "linear-gradient(to bottom, white, rgba(249, 250, 251, 0.5))",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" textAlign="center" mb={8}>
          <Typography
            variant="h2"
            fontWeight={900}
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "3.25rem",
                lg: "4rem",
              },
              lineHeight: 1.25,
              textAlign: "center",
            }}
          >
            What{" "}
            <GradientText
              gradient="primary"
              variant="h2"
              fontWeight={900}
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "3.25rem",
                  lg: "4rem",
                },
                lineHeight: 1.25,
              }}
            >
              Real-Time Control
            </GradientText>{" "}
            Actually Means
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight={300}
            sx={{
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.2rem" },
              textAlign: "center",
              maxWidth: 600,
            }}
          >
            The system doesn&apos;t just give advice – it literally controls
            your ad accounts
          </Typography>
        </Stack>

        <GlassCard sx={{ p: { xs: 2.5, sm: 4, md: 6, lg: 8 }, mb: 6 }}>
          <Typography
            variant="h3"
            fontWeight={800}
            mb={3}
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Imagine You Own a Restaurant...
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.125rem" },
              lineHeight: 1.7,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            You set aside $3,000/month for digital advertising. You connect your
            ad accounts to the system and set simple rules: &quot;Never spend
            more than $100/day&quot; and &quot;Never pay more than $5 per
            customer.&quot; Then you walk away.
          </Typography>
          <Paper
            sx={{
              p: { xs: 2.5, sm: 4 },
              mb: 4,
              textAlign: { xs: "center", md: "left" },
              background:
                "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(124, 58, 237, 0.05))",
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            }}
          >
            <Typography
              variant="h4"
              fontWeight={700}
              mb={3}
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Monday, 9:00 AM – The System Wakes Up
            </Typography>
            <Stack spacing={2}>
              {[
                {
                  icon: "🔍",
                  platform: "Google Ads Check:",
                  result:
                    "Spent $20 yesterday, got 5 customers = $4 per customer ✅",
                },
                {
                  icon: "📘",
                  platform: "Facebook Check:",
                  result:
                    "Spent $30 yesterday, got 3 customers = $10 per customer 🤔",
                },
                {
                  icon: "📷",
                  platform: "Instagram Check:",
                  result:
                    "Spent $25 yesterday, got 1 customer = $25 per customer ❌",
                },
                {
                  icon: "🎵",
                  platform: "TikTok Check:",
                  result:
                    "Spent $15 yesterday, got 4 customers = $3.75 per customer 🌟",
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
                  >
                    {item.icon}
                  </Typography>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      sx={{ fontSize: { xs: "0.85rem", sm: "1rem" } }}
                    >
                      {item.platform}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: { xs: "0.8rem", sm: "0.95rem" } }}
                    >
                      {item.result}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Paper>
        </GlassCard>
      </Container>
    </Box>
  );
};
