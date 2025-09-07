import { Box, Grid, Container, Typography, Stack } from "@mui/material";
import { GlassCard } from "./components/common/GlassCard";
import { gradients } from "../theme.js";

export const CampaignTypes = () => {
  const campaignTypes = [
    {
      title: "Search Ads",
      platforms: "Google, Bing",
      features: [
        "Auto keyword bidding",
        "Conversion-based adjustments",
        "Pause expensive keywords",
      ],
    },
    {
      title: "Social Media",
      platforms: "Facebook, Instagram, TikTok",
      features: ["Audience testing", "Buyer targeting", "Non-buyer exclusion"],
    },
    {
      title: "Shopping Ads",
      platforms: "Amazon, Google Shopping",
      features: [
        "Margin-based bidding",
        "Product optimization",
        "Auto-pause low performers",
      ],
    },
    {
      title: "Display/Video",
      platforms: "YouTube, Display Networks",
      features: [
        "Creative testing",
        "Winner scaling",
        "Time-based optimization",
      ],
    },
    {
      title: "Professional",
      platforms: "LinkedIn, Industry Sites",
      features: [
        "Job title targeting",
        "Lead quality scoring",
        "B2B nurturing",
      ],
    },
  ];

  return (
    <Box
      id="features"
      sx={{
        py: { xs: 6, md: 10 },
        background: gradients.secondary,
        color: "white",
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center" textAlign="center" mb={8}>
          <Typography
            variant="h2"
            fontWeight={900}
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
              lineHeight: 1.25,
              textAlign: "center",
            }}
          >
            5 Types of “Set & Forget”
            Campaigns
          </Typography>
          <Typography
            variant="h6"
            color="rgba(255,255,255,0.8)"
            fontWeight={300}
            sx={{
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.2rem" },
              textAlign: "center",
              maxWidth: 650,
            }}
          >
            Different ad types managed automatically with real-time optimization
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {campaignTypes.map((campaign, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <GlassCard
                sx={{
                  p: { xs: 3, sm: 4 },
                  height: "100%",
                  textAlign: { xs: "center", md: "left" },
                  color: "white",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={800}
                  mb={1}
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                  }}
                >
                  {campaign.title}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    mb: 2,
                    fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.85rem" },
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {campaign.platforms}
                </Typography>

                <Stack
                  spacing={1}
                  alignItems={{ xs: "center", md: "flex-start" }}
                >
                  {campaign.features.map((feature, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: {
                          xs: "0.8rem",
                          sm: "0.9rem",
                          md: "1rem",
                        },
                      }}
                    >
                      <span
                        style={{
                          color: "#4ade80",
                          marginRight: 6,
                          fontSize: "1.5rem",
                        }}
                      >
                        •
                      </span>
                      {feature}
                    </Typography>
                  ))}
                </Stack>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
