import { useState, useEffect, useContext } from "react";
import {
  Typography,
  Stack,
  Button,
  Paper,
  Box,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import { RemoveRedEye, Description } from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { fDate } from "../utils/format-time";
import axiosInstance from "../utils/axios";

const Invoice = ({ _id, invoiceNumber, createDate, dueDate, status }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Paper
      elevation={0}
      sx={{
        paddingX: 2,
        paddingY: 1,
        display: "flex",
        bgcolor: "white",
        borderRadius: "10px",
        alignItems: "center",
        textTransform: "capitalize",
        gap: 1,
        flexWrap: "wrap",
        flexDirection: isNonMobile ? "row" : "column",
        columnGap: 1.5,
      }}
    >
      <Typography variant="subtitle2" flex={"1 1 0"} whiteSpace="pre">
        {invoiceNumber}
      </Typography>

      <Typography variant="subtitle2" flex="1 1 0" whiteSpace="pre">
        {fDate(dueDate)}
      </Typography>

      <Typography variant="subtitle2" flex={{ xs: "1 1 0" }} whiteSpace="pre">
        {fDate(createDate)}
      </Typography>
      <Typography variant="subtitle2" flex="1 1 0">
        {status}
      </Typography>
      <Stack direction="row" justifyContent="end">
        <Link
          to={`/user/invoices/${_id}`}
          style={{
            textDecoration: "none",
          }}
        >
          <IconButton>
            <RemoveRedEye />
          </IconButton>
        </Link>
      </Stack>
    </Paper>
  );
};

const Invoices = ({ openDrawer }) => {
  const [invoices, setInvoices] = useState([]);
  const { user } = useContext(AuthContext);

  const phone = user?.user.phone;
  useEffect(() => {
    const getAddresses = async () => {
      try {
        const res = await axiosInstance.get(
          `/api/invoice?phoneNumber=${phone}`
        );
        setInvoices(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAddresses();
  }, []);

  return (
    <Stack spacing={2}>
      <Header
        Icon={Description}
        title={"My Invoices"}
        openDrawer={openDrawer}
      />

      {invoices.length === 0 ? (
        <Box>
          <Typography variant="h5" textAlign="center" mt={5}>
            No Invoice Found
          </Typography>
        </Box>
      ) : (
        <Stack spacing={2}>
          {invoices?.map((address, index) => (
            <Invoice {...address} key={index} />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default Invoices;
