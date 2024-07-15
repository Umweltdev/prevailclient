import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Box, Typography, Paper, Fab } from "@mui/material";
import axios from "axios";

const BookingDetails = () => {
  const { id } = useParams(); // Get the booking ID from URL parameters
  const [backendDetails, setBackendDetails] = useState(null);
  const [externalDetails, setExternalDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch from backend
  useEffect(() => {
    const fetchBackendDetails = async () => {
      setLoading(true);
      try {
        const backendRes = await axios.get(
          `https://prevailserver-4b3c670a5496.herokuapp.com/api/booking/${id}`
        );
        setBackendDetails(backendRes.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching backend details:", error);
        setLoading(false);
      }
    };

    fetchBackendDetails();
  }, [id]);

  // Fetch from external URI
  useEffect(() => {
    const fetchExternalDetails = async () => {
      if (backendDetails && backendDetails.uri) {
        try {
          const eventRes = await axios.get(backendDetails.event);
          setExternalDetails(eventRes.data);
          console.log(eventRes);
        } catch (error) {
          console.error("Error fetching external details:", error);
        }
      }
    };

    fetchExternalDetails();
  }, [backendDetails]);

  if (loading) {
    return (
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
    );
  }

  return (
    <Box p={2}>
      <Typography variant="h4">Booking Details</Typography>

      {backendDetails && (
        <Paper sx={{ padding: 2, marginTop: 2 }}>
          <Typography sx={{ mb: "10px" }}>
            <strong>ID:</strong> {backendDetails._id}
          </Typography>
          <Typography sx={{ mb: "10px" }}>
            <strong>Email:</strong> {backendDetails.email}
          </Typography>
          {/* <Typography sx={{ mb: "10px" }}>
            <strong>Event:</strong> {backendDetails.event}
          </Typography> */}
          <Typography sx={{ mb: "10px" }}>
            <strong>Created At:</strong>{" "}
            {new Date(backendDetails.created_at).toLocaleString()}
          </Typography>
          <Typography sx={{ mb: "10px" }}>
            <strong>Status:</strong> {backendDetails.status}
          </Typography>
          <Typography sx={{ mb: "10px" }}>
            <strong>Reschedule URL:</strong>{" "}
            <a
              href={backendDetails.reschedule_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {backendDetails.reschedule_url}
            </a>
          </Typography>
          
          <Typography sx={{ mb: "10px" }}>
            <strong>Timezone:</strong> {backendDetails.timezone}
          </Typography>
          {/* Add other fields from backendDetails as needed */}
        </Paper>
      )}

      {externalDetails && (
        <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
          <Typography variant="h6">External Data</Typography>
          {/* Display the external data based on your structure */}
          <Typography>
            <strong>External Info:</strong> {externalDetails.end_time}
          </Typography>
          {/* Add other fields from externalDetails as needed */}
        </Paper>
      )}
    </Box>
  );
};

export default BookingDetails;
