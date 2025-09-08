import { Typography, styled } from '@mui/material';
import { gradients } from '../../../theme.js';

const StyledGradientText = styled(Typography)(({ gradient = 'primary' }) => ({
  background: gradients[gradient] || gradients.primary,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  display: 'inline-block',
}));

export const GradientText = (props) => {
  return <StyledGradientText {...props} />;
};