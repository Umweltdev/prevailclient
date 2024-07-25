import { useState, useEffect } from "react";
import {
  Typography,
  Stack,
  Button,
  Paper,
  Box,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { Receipt } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import { userRequest } from "../../requestMethods";
import Loading from "../utils/Loading";

const Addresses = ({ openDrawer }) => {
  const [invoices, setInvoices] = useState([]);
  const [deleteFlag, setDeleteFlag] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const Mobile = useMediaQuery("(min-width:600px)");
  const [loading, setLoading] = useState(false);

  const { _id } = useParams();

  useEffect(() => {
    const getInvoices = async () => {
      try {
        const res = await userRequest.get(`/invoice`);
        setInvoices(res.data);
      } catch (error) {
        console.error("Error fetching invoices:", error);
        console.log(error);
      }
    };
    getInvoices();
  }, [_id]);


  // console.log(invoices);

  return (
    <Stack spacing={2}>
      <Header
        Icon={Receipt}
        title={"My Invoice"}
        openDrawer={openDrawer}
        // button="Add New Address"
        // link={`/user/invoices/new`}
      />
      {loading ? (
        <Loading />
      ) : invoices.length > 0 ? (
        <>
          {invoices.map((invoice) => (
            <Paper
              key={invoice._id}
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
                  {invoice.invoiceNumber}
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
                  Title
                </small>
                <Typography variant="subtitle2" textTransform="capitalize">
                  {invoice.items[0].title}
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
                <Typography variant="subtitle2">{invoice.duedate}</Typography>
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
                  Status
                </small>
                <Typography variant="subtitle2"> {invoice.status}</Typography>
              </Box>
            </Paper>
          ))}
        </>
      ) : (
        <Box
          height="100px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5" textAlign="center" mt={4}>
            NO INVOICE HAS BEEN MADE
          </Typography>
        </Box>
      )}
    </Stack>
  );
};

export default Addresses;
