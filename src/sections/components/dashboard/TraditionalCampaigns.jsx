import { Box, Typography, Paper, useTheme, alpha } from "@mui/material";

export const TraditionalCampaigns = () => {
  const theme = useTheme();

  const campaigns = [
    {
      name: "Local Magazine Ad",
      spent: "$500",
      customers: "12 customers",
      cpc: "$41 per customer",
      good: true,
    },
    {
      name: "Radio Spot",
      spent: "$300",
      customers: "3 customers",
      cpc: "$100 per customer",
      good: false,
    },
    {
      name: "Farmers Market Booth",
      spent: "$200",
      customers: "18 customers",
      cpc: "$11 per customer",
      good: true,
    },
  ];

  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={800}
        mb={4}
        textAlign="center"
        color="white"
      >
        💰 Traditional Campaigns
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {campaigns.map((campaign, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              flex: "1 1 320px",
              maxWidth: 360,
              p: 3,
              borderRadius: 2,
              background: campaign.good
                ? alpha(theme.palette.success.main, 0.2)
                : alpha(theme.palette.success.main, 0.2),
              border: `1px solid ${
                campaign.good
                  ? alpha(theme.palette.success.main, 0.5)
                  : alpha(theme.palette.success.main, 0.5)
              }`,
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  {campaign.name}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, opacity: 0.85 }}>
                  {campaign.spent} spent
                </Typography>
              </Box>

              <Box sx={{ textAlign: "right" }}>
                <Typography
                  variant="h6"
                  fontWeight={800}
                  sx={{ color: "white" }}
                >
                  {campaign.customers}
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5, opacity: 0.85 }}>
                  {campaign.cpc}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};
