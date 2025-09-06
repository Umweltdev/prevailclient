import React from 'react';
import { Box, Container, Typography, Grid, Link, Stack, useTheme, alpha } from '@mui/material';

export const Footer = () => {
  const theme = useTheme();

  const footerLinks = {
    Product: ['Features', 'Integrations', 'Pricing'],
    Company: ['About', 'Blog', 'Careers'],
    Support: ['Documentation', 'Contact', 'Status'],
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: alpha(theme.palette.grey[50], 0.5),
        borderTop: `1px solid ${theme.palette.divider}`,
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    background: 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    <Box sx={{ width: 4, height: 12, bgcolor: 'white', borderRadius: 0.5 }} />
                    <Box sx={{ width: 4, height: 16, bgcolor: 'white', borderRadius: 0.5 }} />
                    <Box sx={{ width: 4, height: 10, bgcolor: 'white', borderRadius: 0.5 }} />
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  PREVAIL
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Transforming marketing with intelligent automation.
              </Typography>
            </Stack>
          </Grid>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid item xs={6} sm={4} md={2.67} key={category}>
              <Typography variant="subtitle2" fontWeight={700} gutterBottom>
                {category}
              </Typography>
              <Stack spacing={1.5} sx={{ mt: 2 }}>
                {links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ mt: 8, pt: 4, borderTop: `1px solid ${theme.palette.divider}` }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © 2025 Prevail. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};