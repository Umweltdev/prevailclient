import { useState, useEffect, useContext } from "react";
import {
  Typography,
  Box,
  Stack,
  Paper,
  Avatar,
  Grid,
  useMediaQuery,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Receipt } from "@mui/icons-material";
import Header from "./Header";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../utils/Loading";
import { AuthContext } from "../../context/AuthContext";

const Invoice = () => {
  const isNonMobile = useMediaQuery("(min-width:968px)");
  const Mobile = useMediaQuery("(min-width:600px)");
  const { user } = useContext(AuthContext);
  const [invoiceData, setInvoiceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvoiceData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/invoice");
        setInvoiceData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching invoice data:", error);
        setLoading(false);
      }
    };

    fetchInvoiceData();
  }, []);

  console.log(invoiceData);

  if (loading) {
    return <Loading />;
  }

  return (
    <Stack spacing={3}>
      <Header
        Icon={Receipt}
        title={"My Invoice"}
        // openDrawer={openDrawer}
        button="Edit Invoice"
        link={`/user/profile/${user?._id}`}
      />
      {invoiceData && (
        <Paper
          elevation={0}
          sx={{
            paddingY: 2,
            paddingX: Mobile ? 3 : 1.5,

            display: "flex",
            bgcolor: "white",
            flexDirection: isNonMobile ? "row" : "column",
          }}
        >
          <Box
            sx={{
              flex: "1 1 0",
              display: "flex",
              flexDirection: "column",
              padding: "8px",
            }}
          >
            <small
              style={{
                color: "rgb(125, 135, 156)",
              }}
            >
              Invoice Number
            </small>
            <Typography variant="subtitle2" textTransform="capitalize">
              {invoiceData?.invoiceNumber}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: "1 1 0",
              display: "flex",
              flexDirection: "column",
              padding: "8px",
            }}
          >
            <small
              style={{
                color: "rgb(125, 135, 156)",
              }}
            >
              Created Date
            </small>
            <Typography variant="subtitle2" textTransform="capitalize">
              {invoiceData?.createDate}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: "1 1 0",
              display: "flex",
              flexDirection: "column",
              padding: "8px",
            }}
          >
            <small
              style={{
                color: "rgb(125, 135, 156)",
              }}
            >
              Due Date
            </small>
            <Typography variant="subtitle2">{invoiceData?.dueDate}</Typography>
          </Box>
          <Box
            sx={{
              flex: "1 1 0",
              display: "flex",
              flexDirection: "column",
              padding: "8px",
            }}
          >
            <small
              style={{
                color: "rgb(125, 135, 156)",
              }}
            >
              Items
            </small>
            <Typography variant="subtitle2">{invoiceData?.items}</Typography>
          </Box>
        </Paper>
      )}
    </Stack>
  );
};

export default Invoice;
