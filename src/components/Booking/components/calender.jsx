import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Paper,
  Box,
  Typography,
  Grid,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { useCallback, useMemo } from "react";

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
const formatDateToYMD = (date) => date.toISOString().split("T")[0];

const CalendarComponent = ({
  selectedDate,
  setSelectedDate,
  currentDate,
  setCurrentDate,
  availability,
  isLoading,
}) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const handlePrevMonth = useCallback(
    () => setCurrentDate(new Date(year, month - 1, 1)),
    [year, month, setCurrentDate]
  );

  const handleNextMonth = useCallback(
    () => setCurrentDate(new Date(year, month + 1, 1)),
    [year, month, setCurrentDate]
  );

  const handleDateClick = useCallback(
    (day) => {
      const newDate = new Date(year, month, day);
      if (newDate >= today) setSelectedDate(newDate);
    },
    [year, month, today, setSelectedDate]
  );

  const calendarDays = useMemo(() => {
    const days = Array.from(
      { length: getFirstDayOfMonth(year, month) },
      (_, i) => <Grid item xs={1} key={`empty-${i}`} />
    );

    for (let day = 1; day <= getDaysInMonth(year, month); day++) {
      const date = new Date(year, month, day);
      const dateString = formatDateToYMD(date);

      const slots = availability?.[dateString] || [];

      const isFullyBooked =
        Array.isArray(slots) && slots.length > 0
          ? slots.every((s) => s.booked === true)
          : false;

      const isSelected =
        selectedDate && date.toDateString() === selectedDate.toDateString();
      const isPast = date < today;
      const isToday = date.toDateString() === today.toDateString();

      days.push(
        <Grid
          item
          xs={1}
          key={day}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <IconButton
            onClick={() => handleDateClick(day)}
            disabled={isPast || isFullyBooked}
            sx={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              fontSize: "0.9rem",
              fontWeight: isToday || isSelected ? "bold" : "normal",
              color: isSelected
                ? "white"
                : isPast || isFullyBooked
                  ? "text.disabled"
                  : isToday
                    ? "primary.main"
                    : "text.primary",
              backgroundColor: isSelected
                ? "primary.main"
                : isToday
                  ? "grey.200"
                  : "transparent",
              textDecoration: isFullyBooked ? "line-through" : "none",
              opacity: isFullyBooked ? 0.6 : 1,
              boxShadow: isSelected ? 2 : 0,
              "&:hover": {
                backgroundColor: isSelected ? "primary.dark" : "action.hover",
              },
              transition: "all 0.2s ease-in-out",
            }}
          >
            {day}
          </IconButton>
        </Grid>
      );
    }
    return days;
  }, [year, month, selectedDate, today, handleDateClick, availability]);

  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        width: "100%",
        maxWidth: 500,
        borderRadius: "16px",
        border: "1px solid",
        borderColor: "divider",
        position: "relative",
        opacity: isLoading ? 0.7 : 1,
        transition: "opacity 0.3s",
      }}
    >
      {isLoading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            zIndex: 1,
            borderRadius: "16px",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
      >
        <IconButton
          onClick={handlePrevMonth}
          aria-label="Previous month"
          disabled={isLoading}
        >
          <ChevronLeft />
        </IconButton>
        <Typography variant="h6" fontWeight="bold">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </Typography>
        <IconButton
          onClick={handleNextMonth}
          aria-label="Next month"
          disabled={isLoading}
        >
          <ChevronRight />
        </IconButton>
      </Box>

      <Grid container columns={7} spacing={1.5} textAlign="center">
        {dayNames.map((day) => (
          <Grid item xs={1} key={day}>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ fontWeight: "bold" }}
            >
              {day}
            </Typography>
          </Grid>
        ))}
        {calendarDays}
      </Grid>
    </Paper>
  );
};

export default CalendarComponent;

CalendarComponent.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func.isRequired,
  currentDate: PropTypes.instanceOf(Date).isRequired,
  setCurrentDate: PropTypes.func.isRequired,
  availability: PropTypes.object,
  isLoading: PropTypes.bool,
};
