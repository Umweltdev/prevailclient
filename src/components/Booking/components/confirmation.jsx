import PropTypes from "prop-types";
import { Check, Calendar, Clock, Video, User, Mail } from "lucide-react";
import {
  Paper,
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useMemo } from "react";

const timeZone = "Europe/Dublin";

const isoToLocalDisplay = (iso) => {
  try {
    const dt = new Date(iso);
    return dt.toLocaleTimeString("en-IE", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone,
    });
  } catch {
    return iso || "";
  }
};

const ConfirmationComponent = ({
  selectedDate,
  selectedTimeIso,
  onConfirm,
  onPrevStep,
  isBooking,
  name,
  setName,
  email,
  setEmail,
}) => {
  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString("en-IE", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const isEmailValid = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    [email]
  );
  const canConfirm =
    name.trim() !== "" && isEmailValid && !isBooking && !!selectedTimeIso;

  return (
    <Paper
      elevation={3}
      sx={{ p: 3, width: "100%", maxWidth: 600, borderRadius: "12px" }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Confirm Your Booking
      </Typography>

      <Box sx={{ my: 3, display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          disabled={isBooking}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <User size={20} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          disabled={isBooking}
          error={email.length > 0 && !isEmailValid}
          helperText={
            email.length > 0 && !isEmailValid
              ? "Please enter a valid email."
              : ""
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Mail size={20} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Typography
        variant="subtitle2"
        color="text.secondary"
        sx={{ mb: 2, textAlign: "center" }}
      >
        You are booking the following slot:
      </Typography>

      <Box sx={{ my: 2, display: "flex", flexDirection: "column", gap: 2 }}>
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
              {selectedTimeIso
                ? `${isoToLocalDisplay(selectedTimeIso)} (${timeZone})`
                : ""}
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

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mt: 3 }}>
        <Button
          onClick={onConfirm}
          disabled={!canConfirm}
          variant="contained"
          color="success"
          size="large"
          startIcon={isBooking ? <Check /> : <Check />}
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

export default ConfirmationComponent;

ConfirmationComponent.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  selectedTimeIso: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onPrevStep: PropTypes.func.isRequired,
  isBooking: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
};
