import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from "react";
import PropTypes from "prop-types";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Calendar,
  Clock,
  ArrowRight,
  Video,
  LoaderCircle,
} from "lucide-react";
import {
  ThemeProvider,
  Paper,
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
} from "@mui/material";
import { theme } from "../../theme.js";

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
];
const timeZone = "Africa/Lagos (WAT)";
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();



const CalendarComponent = ({
  selectedDate,
  setSelectedDate,
  currentDate,
  setCurrentDate,
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
            disabled={isPast}
            sx={{
              width: 42,
              height: 42,
              borderRadius: "50%", // guarantees circle
              fontSize: "0.9rem",
              fontWeight: isToday || isSelected ? "bold" : "normal",
              color: isSelected
                ? "white"
                : isPast
                  ? "text.disabled"
                  : isToday
                    ? "primary.main"
                    : "text.primary",
              backgroundColor: isSelected
                ? "primary.main"
                : isToday
                  ? "grey.200"
                  : "transparent",
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
  }, [year, month, selectedDate, today, handleDateClick]);

  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        width: "100%",
        maxWidth: 380,
        borderRadius: "16px",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
      >
        <IconButton onClick={handlePrevMonth} aria-label="Previous month">
          <ChevronLeft />
        </IconButton>
        <Typography variant="h6" fontWeight="bold">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </Typography>
        <IconButton onClick={handleNextMonth} aria-label="Next month">
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
CalendarComponent.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func.isRequired,
  currentDate: PropTypes.instanceOf(Date).isRequired,
  setCurrentDate: PropTypes.func.isRequired,
};

const TimeSlotComponent = ({
  selectedTime,
  setSelectedTime,
  onNextStep,
  timeSlotRef,
}) => (
  <Paper
    ref={timeSlotRef}
    elevation={3}
    sx={{
      p: 2,
      width: "100%",
      maxWidth: 360,
      mt: { xs: 2, md: 0 },
      borderRadius: "12px",
    }}
  >
    <Typography variant="h6" mb={1}>
      Select a Time
    </Typography>
    <Typography variant="body2" color="text.secondary" mb={2}>
      Timezone: {timeZone}
    </Typography>
    <Box sx={{ maxHeight: 280, overflowY: "auto", pr: 1 }}>
      <Grid container spacing={1}>
        {timeSlots.map((time) => (
          <Grid item xs={6} key={time}>
            <Button
              variant={selectedTime === time ? "contained" : "outlined"}
              fullWidth
              onClick={() => setSelectedTime(time)}
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                padding: "10px 0",
              }}
            >
              {time}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
    <Button
      onClick={onNextStep}
      disabled={!selectedTime}
      variant="contained"
      fullWidth
      endIcon={<ArrowRight />}
      sx={{ mt: 2, borderRadius: "8px" }}
    >
      Next Step
    </Button>
  </Paper>
);
TimeSlotComponent.propTypes = {
  selectedTime: PropTypes.string,
  setSelectedTime: PropTypes.func.isRequired,
  onNextStep: PropTypes.func.isRequired,
  timeSlotRef: PropTypes.object,
};

const ConfirmationComponent = ({
  selectedDate,
  selectedTime,
  onConfirm,
  onPrevStep,
  isBooking,
}) => {
  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <Paper
      elevation={3}
      sx={{ p: 3, width: "100%", maxWidth: 400, borderRadius: "12px" }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Confirm Your Booking
      </Typography>
      <Box sx={{ my: 3, display: "flex", flexDirection: "column", gap: 2 }}>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
            bgcolor: "background.paper",
            borderRadius: "8px",
          }}
        >
          <Calendar color="primary" />
          <Box>
            <Typography variant="subtitle1" fontWeight="medium">
              Date
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formattedDate}
            </Typography>
          </Box>
        </Paper>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
            bgcolor: "background.paper",
            borderRadius: "8px",
          }}
        >
          <Clock color="primary" />
          <Box>
            <Typography variant="subtitle1" fontWeight="medium">
              Time
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedTime} ({timeZone})
            </Typography>
          </Box>
        </Paper>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
            bgcolor: "background.paper",
            borderRadius: "8px",
          }}
        >
          <Video color="primary" />
          <Box>
            <Typography variant="subtitle1" fontWeight="medium">
              Meeting Method
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Google Meet (Link sent via email)
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Button
          onClick={onConfirm}
          disabled={isBooking}
          variant="contained"
          color="success"
          size="large"
          startIcon={
            isBooking ? <LoaderCircle className="animate-spin" /> : <Check />
          }
        >
          {isBooking ? "Booking..." : "Confirm Booking"}
        </Button>
        <Button onClick={onPrevStep} disabled={isBooking} variant="text">
          Go Back
        </Button>
      </Box>
    </Paper>
  );
};
ConfirmationComponent.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  selectedTime: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onPrevStep: PropTypes.func.isRequired,
  isBooking: PropTypes.bool.isRequired,
};

const Booking = ({ onBookingConfirmed = () => {} }) => {
  const [step, setStep] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const timeSlotRef = useRef(null);

  useEffect(() => {
    if (selectedDate && timeSlotRef.current && window.innerWidth < 768) {
      timeSlotRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedDate]);

  const handleNextStep = useCallback(() => setStep((s) => s + 1), []);
  const handlePrevStep = useCallback(() => setStep((s) => s - 1), []);

  const handleBookingConfirmation = useCallback(() => {
    setIsBooking(true);
    const bookingDetails = {
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime,
    };

    // Simulate API call
    setTimeout(() => {
      setIsConfirmed(true);
      setIsBooking(false);
      onBookingConfirmed(bookingDetails);
    }, 2000);
  }, [selectedDate, selectedTime, onBookingConfirmed]);

  const MemoizedCalendar = React.memo(CalendarComponent);
  const MemoizedTimeSlots = React.memo(TimeSlotComponent);
  const MemoizedConfirmation = React.memo(ConfirmationComponent);

  if (isConfirmed) {
    return (
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
            background: theme.palette.background.default,
          }}
        >
          <Paper
            elevation={4}
            sx={{
              p: 4,
              width: "100%",
              maxWidth: 420,
              textAlign: "center",
              borderRadius: "12px",
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                bgcolor: "success.light",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
              }}
            >
              <Check
                style={{ fontSize: 32, color: theme.palette.success.main }}
              />
            </Box>
            <Typography variant="h5" gutterBottom>
              Booking Confirmed!
            </Typography>
            <Typography color="text.secondary">
              Your consultation is scheduled for{" "}
              <Typography component="span" fontWeight="bold">
                {selectedDate.toLocaleDateString()}
              </Typography>{" "}
              at{" "}
              <Typography component="span" fontWeight="bold">
                {selectedTime}
              </Typography>
              .
            </Typography>
            <Typography color="text.secondary" mt={1}>
              A Google Meet invitation has been sent to your email.
            </Typography>
          </Paper>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          background: theme.palette.background.default,
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "lg" }}>
          <Typography
            variant="h3"
            component="h1"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Schedule Your Consultation
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            mb={5}
          >
            Select a date and time that works for you.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {step === 1 && (
              <>
                <MemoizedCalendar
                  {...{
                    selectedDate,
                    setSelectedDate,
                    currentDate,
                    setCurrentDate,
                  }}
                />
                {selectedDate && (
                  <MemoizedTimeSlots
                    {...{
                      selectedTime,
                      setSelectedTime,
                      onNextStep: handleNextStep,
                      timeSlotRef,
                    }}
                  />
                )}
              </>
            )}
            {step === 2 && (
              <MemoizedConfirmation
                {...{
                  selectedDate,
                  selectedTime,
                  onConfirm: handleBookingConfirmation,
                  onPrevStep: handlePrevStep,
                  isBooking,
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

Booking.propTypes = {
  onBookingConfirmed: PropTypes.func,
};

export default Booking;
