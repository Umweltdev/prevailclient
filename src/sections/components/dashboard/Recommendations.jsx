import { Box, Typography, Paper, Stack, Chip, useTheme, alpha } from '@mui/material';

export const Recommendations = () => {
  const theme = useTheme();
  
  const recommendations = [
    { priority: 'IMMEDIATE', icon: '🚨', action: 'Stop manual Instagram', impact: 'Save $1,000/month instantly', color: 'error' },
    { priority: 'AUTO', icon: '⚡', action: 'Moving $200 to TikTok', impact: 'TikTok showing 3x better performance', color: 'warning' },
    { priority: 'CONSIDER', icon: '💡', action: 'Double farmers market presence', impact: '$11 per customer vs $41 digital average', color: 'success' },
    { priority: 'DELEGATE', icon: '💰', action: 'Hire writer for blog', impact: '$15/hour freelancer vs your $50/hour value', color: 'info' },
  ];

  return (
    <Box>
      <Typography variant="h4" fontWeight={800} mb={4}>
        🎯 Automation Recommendations
      </Typography>
      
      <Stack spacing={3}>
        {recommendations.map((rec, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 4,
              background: alpha(theme.palette[rec.color].main, 0.05),
              borderLeft: `4px solid ${theme.palette[rec.color].main}`,
            }}
          >
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Typography variant="h3">{rec.icon}</Typography>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                  <Chip 
                    label={rec.priority}
                    size="small"
                    sx={{
                      bgcolor: theme.palette[rec.color].main,
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.625rem',
                    }}
                  />
                  <Typography variant="h6" fontWeight={700}>
                    {rec.action}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {rec.impact}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};
