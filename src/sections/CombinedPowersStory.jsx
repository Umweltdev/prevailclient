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
      <Container maxWidth="lg">
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

        <GlassCard sx={{ p: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          <Typography
            variant="h3"
            fontWeight={800}
            mb={4}
            sx={{
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Scenario: New Product Launch Week
          </Typography>

          <Stack spacing={3}>
            <Paper
              sx={{
                p: { xs: 2.5, sm: 4 },
                textAlign: { xs: "center", md: "left" },
                background:
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(124, 58, 237, 0.05))",
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                mb={2}
                sx={{
                  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Monday - You Set It Up
              </Typography>
              <Typography
                paragraph
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.125rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                You tell the system: &quot;New product launch, $5,000 budget for
                the week&quot;
              </Typography>

              <Box
                sx={{
                  p: { xs: 2, sm: 3 },
                  bgcolor: alpha(theme.palette.background.paper, 0.7),
                  borderRadius: 2,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  fontWeight={700}
                  mb={1}
                  sx={{ fontSize: { xs: "0.95rem", sm: "1rem" } }}
                >
                  System immediately:
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    pl: { xs: 2, sm: 3 },
                    textAlign: { xs: "left", md: "left" },
                    fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
                  }}
                >
                  <li>Distributes budget across all digital platforms</li>
                  <li>Starts testing different messages/audiences</li>
                  <li>Begins real-time optimization</li>
                </Box>
              </Box>
            </Paper>
          </Stack>
        </GlassCard>
      </Container>
    </Box>
  );
};
