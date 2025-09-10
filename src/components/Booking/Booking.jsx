import { useState, useCallback, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Check } from "lucide-react";
import { ThemeProvider, Paper, Box, Typography } from "@mui/material";
import { theme } from "../../theme.js";
import TimeSlotComponent from "./components/Timeslot.jsx";
import ConfirmationComponent from "./components/confirmation.jsx";
import CalendarComponent from "./components/calender.jsx";

const formatDateToYMD = (date) => date.toISOString().split("T")[0];

const isoToLocalDisplay = (iso) => {
  try {
    const dt = new Date(iso);
    return dt.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "Africa/Lagos",
    });
  } catch {
    return iso;
  }
};

const combineDateAndTimeToISO = (dateObj, timeStr) => {
  if (!dateObj || !timeStr) return null;
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return null;
  let h = parseInt(match[1], 10);
  const m = parseInt(match[2], 10);
  const period = match[3].toUpperCase();
  if (period === "PM" && h !== 12) h += 12;
  if (period === "AM" && h === 12) h = 0;
  const d = new Date(dateObj);
  d.setHours(h, m, 0, 0);
  return d.toISOString();
};

const Booking = ({ onBookingConfirmed = () => {} }) => {
  const [step, setStep] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeIso, setSelectedTimeIso] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [availability, setAvailability] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const timeSlotRef = useRef(null);

  useEffect(() => {
    const fetchAvailability = async () => {
      if (!selectedDate) return;
      const dateKey = formatDateToYMD(selectedDate);
      try {
        setIsLoading(true);
        const url = `${import.meta.env.VITE_API_BASE_URL}/meeting/available-slots?date=${dateKey}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch availability");

        const data = await res.json();

        let rawSlots = [];
        if (Array.isArray(data)) rawSlots = data;
        else if (Array.isArray(data?.slots)) rawSlots = data.slots;
        else if (Array.isArray(data?.availableSlots))
          rawSlots = data.availableSlots;

        const normalized = rawSlots
          .map((s) => {
            if (typeof s === "string" && s.includes("T")) {
              return { iso: s, time: isoToLocalDisplay(s), available: true };
            }
            if (typeof s === "object") {
              const iso = s.iso || s.date || s.datetime || null;
              if (iso) {
                return {
                  iso,
                  time: isoToLocalDisplay(iso),
                  available: s.available !== false,
                };
              }
              if (s.time) {
                const isoFromTime = combineDateAndTimeToISO(
                  selectedDate,
                  s.time
                );
                return {
                  iso: isoFromTime,
                  time: s.time,
                  available: s.available !== false,
                };
              }
            }
            if (typeof s === "string") {
              const isoFromTime = combineDateAndTimeToISO(selectedDate, s);
              return { iso: isoFromTime, time: s, available: true };
            }
            return null;
          })
          .filter(Boolean);

        setAvailability((prev) => ({ ...prev, [dateKey]: normalized }));
      } catch (err) {
        console.error("Error fetching availability:", err);
        setAvailability((prev) => ({ ...prev, [dateKey]: [] }));
      } finally {
        setIsLoading(false);
      }
    };

    fetchAvailability();
  }, [selectedDate]);

  useEffect(() => {
    setSelectedTimeIso(null);
  }, [selectedDate]);

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

  const handleBookingConfirmation = useCallback(async () => {
    if (!selectedDate || !selectedTimeIso) {
      console.error("Missing date or time");
      return;
    }

    setIsBooking(true);
    try {
      const bookingDetails = {
        name,
        email,
        date: new Date(selectedTimeIso).toISOString(),
        duration: 30,
      };

      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/meeting/book-meeting`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingDetails),
        }
      );

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || "Booking failed");
      }

      const result = await res.json();
      console.log("Booking Response:", result);

      setIsConfirmed(true);
      onBookingConfirmed(result);

      setTimeout(() => setSelectedDate(new Date(selectedDate)), 200);
    } catch (err) {
      console.error("Error confirming booking:", err);
    } finally {
      setIsBooking(false);
    }
  }, [selectedDate, selectedTimeIso, name, email, onBookingConfirmed]);

  const MemoizedCalendar = CalendarComponent;
  const MemoizedTimeSlots = TimeSlotComponent;
  const MemoizedConfirmation = ConfirmationComponent;

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
            elevation={10}
            sx={{
              p: { xs: 3, sm: 4 },
              width: "100%",
              maxWidth: 500,
              textAlign: "center",
              borderRadius: "12px",
            }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
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
                style={{ fontSize: 28, color: theme.palette.success.main }}
              />
            </Box>
            <Typography variant="h6" gutterBottom>
              Booking Confirmed!
            </Typography>
            <Typography
              color="text.secondary"
              fontSize={{ xs: "0.9rem", sm: "1rem" }}
            >
              Your consultation for{" "}
              <Typography component="span" fontWeight="bold">
                {name}
              </Typography>{" "}
              is scheduled for{" "}
              <Typography component="span" fontWeight="bold">
                {selectedDate?.toLocaleDateString()}
              </Typography>{" "}
              at{" "}
              <Typography component="span" fontWeight="bold">
                {selectedTimeIso ? isoToLocalDisplay(selectedTimeIso) : ""}
              </Typography>
              .
            </Typography>
            <Typography
              color="text.secondary"
              mt={1}
              fontSize={{ xs: "0.85rem", sm: "1rem" }}
            >
              A Google Meet invitation has been sent to{" "}
              <Typography component="span" fontWeight="bold">
                {email}
              </Typography>
              .
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
          p: { xs: 2, sm: 3, md: 5 },
          background: theme.palette.background.default,
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "lg" }}>
          <Typography
            variant="h4"
            component="h1"
            align="center"
            fontWeight="bold"
            gutterBottom
            fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem" }}
          >
            Schedule Your Consultation
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            mb={4}
            fontSize={{ xs: "0.9rem", sm: "1rem" }}
          >
            Select a date and time that works for you.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2.5, md: 4 },
              justifyContent: "center",
              alignItems: { xs: "stretch", md: "flex-start" },
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
                    availability,
                    isLoading,
                  }}
                />
                {selectedDate && (
                  <MemoizedTimeSlots
                    {...{
                      selectedTimeIso,
                      setSelectedTimeIso,
                      onNextStep: handleNextStep,
                      timeSlotRef,
                      selectedDate,
                      availability,
                    }}
                  />
                )}
              </>
            )}
            {step === 2 && (
              <MemoizedConfirmation
                {...{
                  selectedDate,
                  selectedTimeIso,
                  onConfirm: handleBookingConfirmation,
                  onPrevStep: handlePrevStep,
                  isBooking,
                  name,
                  setName,
                  email,
                  setEmail,
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
