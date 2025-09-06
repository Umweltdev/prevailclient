import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  styled,
  alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const GlassAppBar = styled(AppBar)(({ theme }) => ({
  background: alpha(theme.palette.background.default, 0.7),
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  boxShadow: 'none',
}));

const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  cursor: 'pointer',
}));

const LogoIcon = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  background: 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
    borderRadius: theme.shape.borderRadius,
    filter: 'blur(8px)',
    opacity: 0.5,
  },
}));

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ['Features', 'Dashboard', 'Pricing'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <GlassAppBar position="sticky">
        <Toolbar sx={{ py: 2, px: { xs: 2, md: 4, lg: 6 } }}>
          <Logo>
            <LogoIcon>
              <Box sx={{ display: 'flex', gap: 0.5, zIndex: 1 }}>
                <Box sx={{ width: 6, height: 20, bgcolor: 'white', borderRadius: 1 }} />
                <Box sx={{ width: 6, height: 28, bgcolor: 'white', borderRadius: 1 }} />
                <Box sx={{ width: 6, height: 16, bgcolor: 'white', borderRadius: 1 }} />
              </Box>
            </LogoIcon>
            <Box
              sx={{
                fontSize: '1.5rem',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              PREVAIL
            </Box>
          </Logo>

          <Box sx={{ flexGrow: 1 }} />

          {!isMobile ? (
            <>
              <Box sx={{ display: 'flex', gap: 2, mr: 2 }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 600,
                      '&:hover': {
                        background: 'transparent',
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
                  px: 4,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #2563EB 0%, #6D28D9 100%)',
                  },
                }}
              >
                Get Started
              </Button>
            </>
          ) : (
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: theme.palette.text.primary }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </GlassAppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            background: alpha(theme.palette.background.default, 0.95),
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        <List sx={{ pt: 8 }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ mt: 2, px: 2 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #2563EB 0%, #6D28D9 100%)',
                },
              }}
            >
              Get Started
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};