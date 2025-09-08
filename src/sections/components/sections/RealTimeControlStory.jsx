import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  useTheme,
  alpha,
  Grid
} from '@mui/material';
import { GlassCard } from '../common/GlassCard';
import { GradientText } from '../common/GradientText';

export const RealTimeControlStory = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 12, md: 16, lg: 20 }, background: 'linear-gradient(to bottom, white, rgba(249, 250, 251, 0.5))' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" textAlign="center" mb={8}>
          <Typography variant="h2" fontWeight={900} sx={{ fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' } }}>
            What <GradientText gradient="primary" variant="h2" fontWeight={900} sx={{ fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' } }}>Real-Time Control</GradientText> Actually Means
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={300}>
            The system doesn&apos;t just give advice - it literally controls your ad accounts
          </Typography>
        </Stack>

        <GlassCard sx={{ p: { xs: 4, md: 6, lg: 8 }, mb: 6 }}>
          <Typography variant="h3" fontWeight={800} mb={4}>
            Imagine You Own a Restaurant...
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            You set aside $3,000/month for digital advertising. You connect your ad accounts to the system and set simple rules: 
            &quot;Never spend more than $100/day&quot; and &quot;Never pay more than $5 per customer.&quot; Then you walk away.
          </Typography>

          <Paper sx={{ 
            p: 4, 
            mb: 4,
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(124, 58, 237, 0.05))',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
          }}>
            <Typography variant="h4" fontWeight={700} mb={3}>
              Monday, 9:00 AM - The System Wakes Up
            </Typography>
            <Stack spacing={2}>
              {[
                { icon: '🔍', platform: 'Google Ads Check:', result: 'Spent $20 yesterday, got 5 customers = $4 per customer ✅' },
                { icon: '📘', platform: 'Facebook Check:', result: 'Spent $30 yesterday, got 3 customers = $10 per customer 🤔' },
                { icon: '📷', platform: 'Instagram Check:', result: 'Spent $25 yesterday, got 1 customer = $25 per customer ❌' },
                { icon: '🎵', platform: 'TikTok Check:', result: 'Spent $15 yesterday, got 4 customers = $3.75 per customer 🌟' },
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Typography variant="h4">{item.icon}</Typography>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={700}>{item.platform}</Typography>
                    <Typography color="text.secondary">{item.result}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Paper>

          <Paper sx={{ 
            p: 4, 
            mb: 4,
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(52, 211, 153, 0.05))',
            border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`
          }}>
            <Typography variant="h4" fontWeight={700} mb={3}>
              Monday, 9:01 AM - One Minute Later!
            </Typography>
            <Typography variant="body1" mb={3}>The system AUTOMATICALLY makes these changes:</Typography>
            <Stack spacing={2}>
              {[
                { action: 'PAUSES', color: theme.palette.error.main, text: 'Instagram ads (too expensive!)' },
                { action: 'INCREASES', color: theme.palette.success.main, text: 'TikTok budget by $20/day (best performer!)' },
                { action: 'INCREASES', color: theme.palette.success.main, text: 'Google budget by $10/day (solid performer)' },
                { action: 'REDUCES', color: theme.palette.warning.main, text: 'Facebook to test if performance improves' },
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography fontWeight={700} color={item.color}>{item.action}</Typography>
                  <Typography>{item.text}</Typography>
                </Box>
              ))}
            </Stack>
            <Typography variant="h6" fontWeight={700} sx={{ mt: 3 }}>
              You didn&apos;t click anything. You didn&apos;t make any decisions. It just happened.
            </Typography>
          </Paper>

          <Paper sx={{ 
            p: 4,
            background: alpha(theme.palette.secondary.light, 0.05),
            border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`
          }}>
            <Typography variant="h4" fontWeight={700} mb={3}>
              Multilevel Feedback Queue Scheduling - Your Secret Weapon
            </Typography>
            <Typography paragraph>
              The system uses sophisticated queue scheduling across multiple channels. To platforms, 
              your spending looks unpredictable, forcing them to compete for your budget:
            </Typography>
            <Grid container spacing={2}>
              {[
                { title: 'Priority Queue 1', desc: 'High-performing campaigns get immediate budget', detail: 'Updates every 15 minutes' },
                { title: 'Testing Queue 2', desc: 'New audiences cycle through platforms', detail: 'Rotates hourly across channels' },
                { title: 'Optimization Queue 3', desc: 'Underperformers get reduced gradually', detail: 'Prevents platform penalty' },
                { title: 'Result', desc: 'Platforms can\'t predict your next move', detail: 'Average 35% better prices!' },
              ].map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper sx={{ p: 3, height: '100%', bgcolor: alpha(theme.palette.background.paper, 0.7) }}>
                    <Typography variant="subtitle1" fontWeight={700} color="secondary" mb={1}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" mb={1}>{item.desc}</Typography>
                    <Typography variant="caption" color="text.secondary">{item.detail}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </GlassCard>

        <GlassCard sx={{ p: { xs: 4, md: 6, lg: 8 } }}>
          <Typography variant="h3" fontWeight={800} mb={4}>
            Real-Time Events That Trigger Instant Action
          </Typography>
          
          <Stack spacing={3}>
            <Paper sx={{ p: 4, borderLeft: `4px solid ${theme.palette.primary.main}` }}>
              <Typography variant="h6" fontWeight={700} mb={2}>
                Tuesday, 2:47 PM: TikTok ad suddenly goes viral
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2">• System detects 50 visitors in 10 minutes</Typography>
                <Typography variant="body2">• Immediately adds extra $50 to TikTok budget</Typography>
                <Typography variant="body2">• Pulls that $50 from underperforming Facebook</Typography>
                <Typography variant="body2">• All happens in seconds without your involvement</Typography>
              </Stack>
            </Paper>

            <Paper sx={{ p: 4, borderLeft: `4px solid ${theme.palette.warning.main}` }}>
              <Typography variant="h6" fontWeight={700} mb={2}>
                Wednesday, 8:23 AM: Google changes their pricing
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2">• Your costs just went up 30%</Typography>
                <Typography variant="body2">• System immediately reduces Google budget</Typography>
                <Typography variant="body2">• Redistributes to other platforms</Typography>
                <Typography variant="body2">• Sends you an alert about the change</Typography>
              </Stack>
            </Paper>

            <Paper sx={{ p: 4, borderLeft: `4px solid ${theme.palette.error.main}` }}>
              <Typography variant="h6" fontWeight={700} mb={2}>
                Thursday, 6:15 PM: Competitor launches big campaign
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2">• Your Facebook costs spike (bidding war)</Typography>
                <Typography variant="body2">• System pauses Facebook within minutes</Typography>
                <Typography variant="body2">• Waits 24 hours for prices to normalize</Typography>
                <Typography variant="body2">• Restarts when costs drop back down</Typography>
              </Stack>
            </Paper>
          </Stack>
        </GlassCard>
      </Container>
    </Box>
  );
};