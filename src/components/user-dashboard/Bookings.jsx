import { useContext, useEffect, useState } from "react";
import {
  Typography,
  Box,
  Stack,
  IconButton,
  Paper,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import Bookmark from "@mui/icons-material/Bookmark";
import EastIcon from "@mui/icons-material/East";
import Header from "./Header";
import { useCalendlyEventListener, PopupButton } from "react-calendly";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Booking = ({
  _id,
  name,
  start_time,
  end_time,
  status,
  created_at,
  timezone,
  id,
}) => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  const formattedStartTime = new Date(start_time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const formattedEndTime = new Date(end_time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <Link to={`/user/bookings/${_id}`} style={{ textDecoration: "none" }}>
      <Paper
        elevation={0}
        sx={{
          paddingX: 2,
          paddingY: 1.5,
          display: "flex",
          bgcolor: "white",
          borderRadius: "10px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="subtitle1" flex="1.2 1 0">
          {_id}
        </Typography>

        <Typography variant="subtitle2" flex="1 1 0" sx={{ margin: "6px" }}>
          {new Date(created_at).toLocaleDateString()}
        </Typography>
        <Typography
          variant="subtitle2"
          flex="1 1 0"
          margin="6px"
          textAlign={{ xs: "center", sm: "left" }}
        >
          {timezone}
        </Typography>
        <Typography
          variant="subtitle2"
          flex="1 1 0"
          margin="6px"
          textAlign={{ xs: "center", sm: "left" }}
        >
          {status}
        </Typography>

        <Typography>
          <IconButton>
            <EastIcon />
          </IconButton>
        </Typography>
      </Paper>
    </Link>
  );
};

const Bookings = ({ openDrawer }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  

  useEffect(() => {
    
    const getBookings = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://prevailserver-4b3c670a5496.herokuapp.com/api/booking`
        );
        // Filter bookings by user email
        const userBookings = res.data.filter(
          (booking) => booking.email === user?.user.email
        );
        setBookings(userBookings);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getBookings();
  }, [user]);

  return (
    <Stack spacing={2}>
      <Header
        Icon={Bookmark}
        title={"My Bookings"}
        openDrawer={openDrawer}
        button={
          <PopupButton
            url="https://calendly.com/prevailagency"
            rootElement={document.getElementById("root")}
            text={`Click here to schedule!`}
            styles={{
              color: "#884ed9",
              backgroundColor: "#f3e8ee",
              // padding: "1vh 0.1vw",
              fontFamily: "Sarabun",
              fontSize: "15px",
              border: "none",
              borderRadius: "5vw",
              cursor: "pointer",
              fontWeight: 600,
              padding: "5px 0",
            }}
          />
        }
      />

      {loading ? (
        <Box
          sx={{
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : bookings.length > 0 ? (
        <>
          <Box display="flex" px={2} color="#7d879c">
            <Typography variant="body2" flex="1 1 0">
              Booking ID
            </Typography>
            <Typography variant="body2" flex="1 1 0">
              Date Booked
            </Typography>
            <Typography variant="body2" flex="1 1 0">
              Time Zone
            </Typography>
            <Typography variant="body2" flex="1 1 0">
              Status
            </Typography>
          </Box>
          <Stack spacing={2}>
            {bookings.map((booking, index) => (
              <Booking {...booking} key={index} />
            ))}
          </Stack>
        </>
      ) : (
        <Box
          height="300px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5" textAlign="center" mt={2}>
            No bookings found.
          </Typography>
        </Box>
      )}
    </Stack>
  );
};

export default Bookings;
