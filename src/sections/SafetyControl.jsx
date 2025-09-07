import {
  Box,
  Container,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  useTheme,
  alpha,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { GlassCard } from "./components/common/GlassCard.jsx";
import { gradients } from "../theme.js";

export const SafetyControl = () => {
  const theme = useTheme();

  const sections = [
    {
      title: "🛡️ Spending Safeguards",
      color: "primary",
      items: [
        { title: "Daily Maximum", desc: "Never spend more than $100/day" },
        {
          title: "Per-Customer Cap",
          desc: "Never pay more than $20 per customer",
        },
        { title: "Platform Limits", desc: "Never give Facebook more than 30%" },
        {
          title: "Emergency Brake",
          desc: "Auto-pause if losing money 3 days straight",
        },
      ],
    },
    {
      title: "🎮 Manual Override",
      color: "secondary",
      items: [
        { title: "Instant Pause", desc: "Hit pause button anytime" },
        {
          title: "Manual Adjustments",
          desc: "Override any campaign instantly",
        },
        {
          title: "Protected Campaigns",
          desc: 'Set "do not touch" on specific ads',
        },
        {
          title: "Full Control",
          desc: "Take back control instantly when needed",
        },
      ],
    },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          fontWeight={900}
          textAlign="center"
          mb={{ xs: 4, md: 8 }}
          sx={{ fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" } }}
        >
          Complete Safety & Control
        </Typography>
        <GlassCard
          sx={{ p: { xs: 2, md: 4, lg: 6 }, background: gradients.primary }}
        >
          <Grid container spacing={6} alignItems="stretch">
            {sections.map((section, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Typography
                  variant="h4"
                  fontWeight={800}
                  color={section.color}
                  mb={4}
                  textAlign={{ xs: "center", md: "left" }}
                  sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },color: "white" }}
                >
                  {section.title}
                </Typography>
                <Stack spacing={2}>
                  {section.items.map((item, i) => (
                    <Accordion
                      key={i}
                      sx={{
                        bgcolor: alpha(theme.palette.grey[50], 0.6),
                        borderRadius: "12px !important",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                        "&:before": { display: "none" },
                      }}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography
                          variant="subtitle1"
                          fontWeight={700}
                          sx={{
                            fontSize: { xs: "0.95rem", md: "1rem" },
                          }}
                        >
                          {item.title}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.9rem",
                              md: "0.95rem",
                            },
                          }}
                        >
                          {item.desc}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>
        </GlassCard>
        <GlassCard
          sx={{
            mt: { xs: 4, md: 6 },
            p: { xs: 2, md: 4 },
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(124, 58, 237, 0.08))",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" } }}
          >
            <strong>Remember:</strong> The automation is your assistant, not
            your master. You&apos;re always in complete control.
          </Typography>
        </GlassCard>
      </Container>
    </Box>
  );
};
