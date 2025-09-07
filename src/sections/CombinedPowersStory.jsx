import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  useTheme,
  alpha,
} from "@mui/material";
import { GlassCard } from "./components/common/GlassCard";

export const CombinedPowersStory = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        bgcolor: alpha(theme.palette.grey[50], 0.5),
      }}
    >
      <Container maxWidth="xl">
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
          mb={{ xs: 6, md: 8 }}
        >
          <Typography
            variant="h2"
            fontWeight={900}
            sx={{
              fontSize: {
                xs: "1.75rem",
                sm: "2.25rem",
                md: "3.25rem",
                lg: "4rem",
              },
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Both Powers Combined
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight={300}
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.25rem" },
              maxWidth: 600,
              textAlign: "center",
            }}
          >
            Watch how the complete system transforms a real product launch
          </Typography>
        </Stack>

        <GlassCard
          sx={{
            p: { xs: 3, sm: 4, md: 6, lg: 8 },
            background: theme.palette.primary.main,
            color: "white",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={800}
            mb={4}
            sx={{
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
              textAlign: "center",
              color: "white",
            }}
          >
            Scenario: New Product Launch Week
          </Typography>

          <Stack spacing={4}>
            <Paper
              sx={{
                p: { xs: 2.5, sm: 4 },
                borderRadius: 3,
                background: "rgba(255, 255, 255, 0.12)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 40px rgba(0, 0, 0, 0.25)",
                },
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                mb={2}
                textAlign={"center"}
                sx={{
                  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                  color: "white",
                }}
              >
                Monday — You Set It Up
              </Typography>

              <Typography
                paragraph
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.125rem" },
                  color: "white",
                }}
                textAlign={"center"}
              >
                You tell the system: “New product launch, $5,000 budget for the
                week.”
              </Typography>

              <Box
                sx={{
                  p: { xs: 2, sm: 4 },
                  textAlign: "center",
                  borderRadius: 2,
                }}
              >
                <Typography
                  fontWeight={700}
                  mb={1}
                  sx={{
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    color: "white",
                  }}
                >
                  System immediately:
                </Typography>

                <Typography sx={{ color: "white", mb: 0.5 }}>
                  Distributes budget across all digital platforms
                </Typography>
                <Typography sx={{ color: "white", mb: 0.5 }}>
                  Starts testing different messages & audiences
                </Typography>
                <Typography sx={{ color: "white" }}>
                  Begins real-time optimization
                </Typography>
              </Box>
            </Paper>
          </Stack>
        </GlassCard>
      </Container>
    </Box>
  );
};
