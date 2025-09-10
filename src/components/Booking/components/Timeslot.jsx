import PropTypes from "prop-types";
import { ArrowRight } from "lucide-react";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";

const timeZone = "Europe/Dublin";
const formatDateToYMD = (date) => date.toISOString().split("T")[0];

const TimeSlotComponent = ({
  selectedTimeIso,
  setSelectedTimeIso,
  onNextStep,
  timeSlotRef,
  selectedDate,
  availability,
}) => {
  const dateString = selectedDate ? formatDateToYMD(selectedDate) : null;
  const rawSlots = (dateString && availability?.[dateString]) || [];

  const slotsNormalized = rawSlots
    .map((s) => {
      if (typeof s === "string" && s.includes("T")) {
        const iso = s;
        const dt = new Date(iso);
        const time = dt.toLocaleTimeString("en-IE", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone,
        });
        return { iso, time, available: true };
      }
      if (s && typeof s === "object") {
        return {
          iso: s.iso || s.date || null,
          time:
            s.time ||
            (s.iso
              ? new Date(s.iso).toLocaleTimeString("en-IE", {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                  timeZone,
                })
              : ""),
          available: s.available !== false,
        };
      }
      return { iso: null, time: s, available: true };
    })
    .filter(Boolean);

  return (
    <Paper
      ref={timeSlotRef}
      elevation={3}
      sx={{
        p: { xs: 2, sm: 3 },
        width: "100%",
        maxWidth: 500,
        mt: { xs: 2, md: 0 },
        borderRadius: "12px",
      }}
    >
      <Typography
        variant="h6"
        mb={1}
        fontSize={{ xs: "1.1rem", sm: "1.25rem" }}
      >
        Select a Time
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        mb={2}
        fontSize={{ xs: "0.85rem", sm: "0.95rem" }}
      >
        Timezone: {timeZone}
      </Typography>

      {slotsNormalized.length === 0 ? (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: "center",
            my: { xs: 3, sm: 4 },
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          No available slots for this date.
        </Typography>
      ) : (
        <Box sx={{ maxHeight: { xs: 300, sm: 450 }, overflowY: "auto", pr: 1 }}>
          <Grid container spacing={1.2}>
            {slotsNormalized.map((slot) => (
              <Grid item xs={12} sm={6} key={slot.iso || slot.time}>
                <Button
                  variant={
                    selectedTimeIso === slot.iso ? "contained" : "outlined"
                  }
                  fullWidth
                  disabled={!slot.available}
                  onClick={() => setSelectedTimeIso(slot.iso)}
                  sx={{
                    borderRadius: "8px",
                    textTransform: "none",
                    py: { xs: 1.5, sm: 1 },
                    fontSize: { xs: "0.95rem", sm: "0.9rem" },
                  }}
                >
                  {slot.time}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      <Button
        onClick={onNextStep}
        disabled={!selectedTimeIso}
        variant="contained"
        fullWidth
        endIcon={<ArrowRight />}
        sx={{
          mt: 2,
          borderRadius: "8px",
          py: { xs: 1.4, sm: 1.1 },
          fontSize: { xs: "1rem", sm: "0.95rem" },
        }}
      >
        Next Step
      </Button>
    </Paper>
  );
};

export default TimeSlotComponent;

TimeSlotComponent.propTypes = {
  selectedTimeIso: PropTypes.string,
  setSelectedTimeIso: PropTypes.func.isRequired,
  onNextStep: PropTypes.func.isRequired,
  timeSlotRef: PropTypes.object,
  selectedDate: PropTypes.instanceOf(Date),
  availability: PropTypes.object,
};
