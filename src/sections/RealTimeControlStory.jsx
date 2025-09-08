import {
  Box,
  Grid,
  Container,
  Typography,
  Stack,
  Paper,

} from "@mui/material";
import { GlassCard } from "./components/common/GlassCard";
import { gradients } from "../theme.js";

export const RealTimeControlStory = () => {

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center" textAlign="center" mb={8}>
          <Typography
            variant="h2"
            fontWeight={900}
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3.25rem" },
              lineHeight: 1.25,
              textAlign: "center",
            }}
          >
            What Real-Time Control Actually Means
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

        <GlassCard
          sx={{
            p: { xs: 2.5, sm: 4, md: 6 },
            mb: 6,
            background: gradients.primary,
            color: "white",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={800}
            mb={3}
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
              textAlign: "center",
            }}
          >
            Imagine You Own a Restaurant...
          </Typography>

          <Typography
            variant="body1"
            color="white"
            paragraph
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.125rem" },
              lineHeight: 1.7,
              textAlign: "center",
            }}
          >
            You set aside $3,000/month for digital advertising. You connect your
            ad accounts to the system and set simple rules: &quot;Never spend
            more than $100/day&quot; and &quot;Never pay more than $5 per
            customer.&quot; Then you walk away.
          </Typography>

          <Typography
            sx={{
              p: { xs: 2.5, sm: 4 },
              mb: 4,
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={700}
              mb={3}
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                textAlign: "center",
                color: "white",
              }}
            >
              Monday, 9:00 AM – The System Wakes Up
            </Typography>

            <Grid container spacing={2} justifyContent="center">
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
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper
                    sx={{
                      p: 3,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      textAlign: "left",
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
                      variant="h3"
                      sx={{ mb: 1, textAlign: "center" }}
                    >
                      {item.icon}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      sx={{ mb: 1, textAlign: "center" }}
                    >
                      {item.platform}
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center" }}>
                      {item.result}
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
