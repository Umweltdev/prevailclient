import {
  Box,
  Grid,
  Typography,
  Chip,
  Paper,
  useTheme,
  alpha,
} from "@mui/material";

export const DigitalCampaigns = () => {
  const theme = useTheme();

  const campaigns = [
    {
      name: "Google Ads",
      status: "Auto-optimizing ✅",
      amount: "$400/month",
      customers: "42 customers last week",
      performing: true,
    },
    {
      name: "Facebook",
      status: "Auto-optimizing ✅",
      amount: "$300/month",
      customers: "18 customers last week",
      performing: true,
    },
    {
      name: "Instagram",
      status: "Paused ⏸️",
      amount: "$0/month",
      customers: "Only 4 customers last week",
      performing: false,
    },
    {
      name: "TikTok",
      status: "Increased ⬆️",
      amount: "$500/month",
      customers: "262 customers last week!",
      performing: true,
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
        📊 Automated Digital Campaigns
      </Typography>

      <Grid container spacing={3}>
        {campaigns.map((campaign, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 4 },
                borderRadius: "16px",
                background: campaign.performing
                  ? alpha(theme.palette.success.main, 0.12)
                  : alpha(theme.palette.success.main, 0.12),
                border: `1.5px solid ${
                  campaign.performing
                    ? alpha(theme.palette.success.main, 0.4)
                    : alpha(theme.palette.success.main, 0.4)
                }`,
                color: "white",
                height: "100%",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: { xs: "wrap", md: "nowrap" },
                  mb: 2,
                  gap: 1,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
                >
                  {campaign.name}
                </Typography>
                <Chip
                  label={campaign.status}
                  size="small"
                  sx={{
                    bgcolor: campaign.performing
                      ? alpha(theme.palette.success.main, 0.2)
                      : alpha(theme.palette.error.main, 0.2),
                    color: "white",
                    fontWeight: 600,
                    borderRadius: "8px",
                  }}
                />
              </Box>

              <Typography
                variant="h4"
                fontWeight={800}
                sx={{
                  fontSize: { xs: "1.4rem", md: "1.8rem" },
                  textDecoration: campaign.performing ? "none" : "line-through",
                  opacity: campaign.performing ? 1 : 0.5,
                }}
              >
                {campaign.amount}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  fontSize: { xs: "0.85rem", md: "0.95rem" },
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {campaign.customers}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper
        elevation={0}
        sx={{
          mt: 4,
          p: { xs: 3, md: 4 },
          borderRadius: "16px",
          background: alpha(theme.palette.success.main, 0.12),
          border: `1.5px solid ${alpha(theme.palette.success.main, 0.4)}`,
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
        >
          💡 Total: <strong>$1,200/month</strong> actively managed by automation
        </Typography>
      </Paper>
    </Box>
  );
};
