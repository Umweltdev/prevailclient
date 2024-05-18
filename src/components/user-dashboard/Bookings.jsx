import { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Stack,
  IconButton,
  Paper,
  CircularProgress,
  Fab,
} from "@mui/material";
import { Link } from "react-router-dom";
import Bookmark from "@mui/icons-material/Bookmark";
import EastIcon from "@mui/icons-material/East";
import Header from "./Header";
import { userRequest } from "../../requestMethods";
import { dateConverter } from "../user-dashboard/utils";
import { Navigation, Receipt } from "@mui/icons-material";
import { useCalendlyEventListener, PopupButton } from "react-calendly";
import axiosInstance from "../utils/axios";
import Calendly from "./Calendly";

const Booking = ({ _id, name, start_time, end_time }) => {
  // const handleBooking = {
  //   Calendly.initPopupWidget({url: 'https://calendly.com/prevailagency'});return false;
  // }

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
    <Link
      to={`/user/bookings/${_id}`}
      style={{
        textDecoration: "none",
      }}
    >
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
        <Typography variant="subtitle1" flex="1 1 0">
          {name}
        </Typography>

        <Typography
          variant="subtitle2"
          flex="1 1 0"
          // marginLeft="40px"
          whiteSpace={{ xs: "pre", sm: "normal" }}
          sx={{
            margin: "6px",
          }}
        >
          {dateConverter(start_time)}
        </Typography>
        <Typography
          variant="subtitle2"
          flex="1 1 0"
          margin="6px"
          whiteSpace={{ xs: "pre", sm: "normal" }}
          textAlign={{ xs: "center", sm: "left" }}
        >
          {end_time ? formattedStartTime : "Pending"}
        </Typography>
        <Typography
          variant="subtitle2"
          flex="1 1 0"
          margin="6px"
          whiteSpace={{ xs: "pre", sm: "normal" }}
          textAlign={{ xs: "center", sm: "left" }}
        >
          {end_time ? formattedEndTime : "Pending"}
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

  useEffect(() => {
    const getBookings = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(`/api/booking`);

        setLoading(false);
        setBookings(res.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getBookings();
  }, []);
  // console.log(bookings);
  return (
    <Stack spacing={2}>
      <Header
        Icon={Bookmark}
        title={"My Bookings"}
        openDrawer={openDrawer}
        button={<Calendly />}
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
          {" "}
          <Box display="flex" px={2} color="#7d879c">
            <Typography variant="body2" flex="1 1 0">
              Booking
            </Typography>
            <Typography variant="body2" flex="1 1 0">
              Meeting Date
            </Typography>
            <Typography variant="body2" flex="1 1 0">
              Start Time
            </Typography>
            <Typography variant="body2" flex="1 1 0">
              End Time
            </Typography>
          </Box>
          <Stack spacing={2}>
            {bookings.map((booking, index) => (
              <Booking {...booking} key={index} />
            ))}
          </Stack>{" "}
        </>
      ) : (
        <Box
          height="300px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5" textAlign="center" mt={2}>
            {/* <a
              href="https://calendly.com/prevailagency"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#884ed9",
                  width: "25vw",
                  // fontSize: "1vw",
                  "&:hover": {
                    backgroundColor: "#884ed9",
                  },
                }}
                variant="extended"
                color=""
              >
                <Receipt sx={{ mr: 1 }} />
                Book A Session
              </Fab>
            </a> */}

            <PopupButton
              url="https://calendly.com/prevailagency"
              rootElement={document.getElementById("root")}
              text={`Click here to schedule!`}
              styles={{
                color: "white",
                backgroundColor: "#884ed9",
                padding: "1.4vh 3vw",
                fontSize: "1.2vw",
                border: "none",
                borderRadius: "5vw",
                cursor: "pointer",
              }}
            />
          </Typography>
        </Box>
      )}
    </Stack>
  );
};

export default Bookings;
