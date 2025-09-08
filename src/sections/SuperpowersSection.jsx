import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Chip,
  Collapse,
  useTheme,
  alpha,
  useMediaQuery,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { GlassCard } from "./components/common/GlassCard.jsx";

export const SuperpowersSection = () => {
  const theme = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const superpowers = [
    {
      id: "autopilot",
      number: "#1",
      icon: "🤖",
      title: "The Autopilot",
      subtitle: "Automation That Actually Spends Your Money",
      color: theme.palette.primary.main,
      gradient: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)",
      features: [
        "Controls your ad accounts 24/7",
        "Reallocates budget every minute",
        "Uses multilevel queue scheduling for better prices",
      ],
      details:
        'Like giving a trusted assistant your credit card with strict rules: "Never spend more than $100/day", "Never pay more than $5 per customer", "Stop what\'s not working immediately"',
    },
    {
      id: "truth",
      number: "#2",
      icon: "📊",
      title: "Complete Truth Dashboard",
      subtitle: "See The Real Cost of Everything",
      color: theme.palette.secondary.main,
      gradient: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
      features: [
        "Track traditional advertising ROI",
        "Reveal hidden time costs",
        "Compare everything apples-to-apples",
      ],
      details: "Example: 3 hours on Instagram = $150 real cost at $50/hour",
    },
  ];

  const handleCardEnter = (id) => {
    if (!isMobile) setHoveredCard(id);
  };
  const handleCardLeave = () => {
    if (!isMobile) setHoveredCard(null);
  };
  const handleCardClick = (id) => {
    if (isMobile) setHoveredCard(hoveredCard === id ? null : id);
  };

  return (
    <Box sx={{ textAlign: "center", mt: { xs: 3, md: 6 } }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {superpowers.map((power) => (
            <Grid item xs={12} md={6} key={power.id}>
              <Box
                onMouseEnter={() => handleCardEnter(power.id)}
                onMouseLeave={handleCardLeave}
                onClick={() => handleCardClick(power.id)}
                sx={{ position: "relative", height: "100%", cursor: "pointer" }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: -8,
                    background: power.gradient,
                    borderRadius: 3,
                    filter: "blur(24px)",
                    opacity: hoveredCard === power.id ? 0.35 : 0.15,
                    transition: "opacity 0.3s",
                    zIndex: 0,
                  }}
                />
                <GlassCard
                  sx={{
                    position: "relative",
                    p: { xs: 3, md: 6 },
                    height: "100%",
                    background:
                      hoveredCard === power.id
                        ? alpha(theme.palette.background.paper, 0.85)
                        : alpha(theme.palette.background.paper, 0.7),
                    transform:
                      hoveredCard === power.id ? "translateY(-4px)" : "none",
                    transition: "all 0.3s ease",
                    zIndex: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: { xs: 2, md: 4 },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 60, md: 80 },
                        height: { xs: 60, md: 80 },
                        background: `linear-gradient(135deg, ${alpha(
                          power.color,
                          0.1
                        )} 0%, ${alpha(power.color, 0.2)} 100%)`,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: { xs: "1.8rem", md: "2.5rem" },
                      }}
                    >
                      {power.icon}
                    </Box>
                    <Chip
                      label={`SUPERPOWER ${power.number}`}
                      size="small"
                      sx={{
                        background: power.gradient,
                        color: "white",
                        fontWeight: 800,
                        fontSize: "0.625rem",
                        letterSpacing: "0.1em",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h3"
                    fontWeight={900}
                    sx={{
                      mb: 1,
                      fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                    }}
                  >
                    {power.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    fontWeight={300}
                    sx={{
                      mb: { xs: 2, md: 4 },
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                    }}
                  >
                    {power.subtitle}
                  </Typography>

                  <Stack spacing={1.5}>
                    {power.features.map((feature, index) => (
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <Box
                          sx={{
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            background: power.gradient,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <CheckCircleIcon
                            sx={{ fontSize: 14, color: "white" }}
                          />
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: {
                              xs: "0.85rem",
                              sm: "0.9rem",
                              md: "1rem",
                            },
                          }}
                          color="text.primary"
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Collapse in={hoveredCard === power.id}>
                    <Box
                      sx={{
                        mt: { xs: 3, md: 4 },
                        pt: { xs: 2, md: 4 },
                        borderTop: `1px solid ${alpha(
                          theme.palette.divider,
                          0.2
                        )}`,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: "0.8rem", md: "0.95rem" },
                        }}
                        color="text.secondary"
                        fontStyle="italic"
                      >
                        {power.details}
                      </Typography>
                    </Box>
                  </Collapse>
                </GlassCard>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
