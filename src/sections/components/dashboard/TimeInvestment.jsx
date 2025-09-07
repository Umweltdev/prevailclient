import { Box, Typography, Paper, Grid, useTheme, alpha } from "@mui/material";

export const TimeInvestment = () => {
  const theme = useTheme();

  const investments = [
    {
      name: "Blog Writing",
      hours: "8 hours/month",
      cost: "$400",
      revenue: "$200",
      loss: -200,
      negative: true,
    },
    {
      name: "Manual Instagram Posts",
      hours: "20 hours/month",
      cost: "$1,000",
      revenue: "$300",
      loss: -700,
      negative: true,
    },
    {
      name: "Email Newsletter",
      hours: "4 hours/month",
      cost: "$200",
      revenue: "$800",
      loss: 600,
      negative: false,
    },
  ];

  return (
    <Box>
      {/* Title */}
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
        ⏰ Time Investment Analysis
      </Typography>

      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {investments.map((item, index) => (
          <Grid item xs={12} md={4} key={index} sx={{ display: "flex" }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: "16px",
                flexGrow: 1, // makes all cards equal height
                background: alpha(
                  item.negative
                    ? theme.palette.error.main
                    : theme.palette.success.main,
                  0.12
                ),
                border: `1.5px solid ${alpha(
                  item.negative
                    ? theme.palette.error.main
                    : theme.palette.success.main,
                  0.4
                )}`,
                color: "white",
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
                  alignItems: "flex-start",
                  gap: 2,
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      mt: 1,
                      fontSize: { xs: "0.85rem", md: "0.95rem" },
                    }}
                  >
                    {item.hours}
                  </Typography>
                </Box>

                <Box sx={{ textAlign: "right" }}>
                  <Typography
                    variant="h4"
                    fontWeight={800}
                    sx={{
                      fontSize: { xs: "1.6rem", md: "2rem" },
                      color: item.negative
                        ? theme.palette.success.main
                        : theme.palette.success.main,
                    }}
                  >
                    {item.negative ? "-" : "+"}${Math.abs(item.loss)}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ display: "block", color: "rgba(255,255,255,0.7)" }}
                  >
                    Cost: {item.cost}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ display: "block", color: "rgba(255,255,255,0.7)" }}
                  >
                    Revenue: {item.revenue}
                  </Typography>
                </Box>
              </Box>
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
          background: alpha(theme.palette.error.main, 0.12),
          border: `1.5px solid ${alpha(theme.palette.error.main, 0.4)}`,
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
        >
          Total Hidden Cost: $1,600/month in time value
        </Typography>
      </Paper>
    </Box>
  );
};
