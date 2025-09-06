import { Card, styled, alpha } from '@mui/material';
import PropTypes from 'prop-types';

const StyledGlassCard = styled(Card)(({ theme, blur = 20, opacity = 0.7, gradient }) => ({
  background: gradient 
    ? `linear-gradient(135deg, 
        ${alpha(theme.palette.primary.main, opacity)} 0%, 
        ${alpha(theme.palette.secondary.main, opacity)} 100%)`
    : alpha(theme.palette.background.paper, opacity),
  backdropFilter: `blur(${blur}px)`,
  WebkitBackdropFilter: `blur(${blur}px)`,
  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[20],
  },
}));


export const GlassCard = ({ children, ...props }) => {
  return <StyledGlassCard {...props}>{children}</StyledGlassCard>;
};

GlassCard.propTypes = {
  children: PropTypes.node,
};