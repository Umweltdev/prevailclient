import { useState, useEffect } from "react";
import { Box, Grid, Typography, Stack, CircularProgress } from "@mui/material";
import { Description } from "@mui/icons-material";
import Header from "./Header";
import InvoiceDetails from "../Invoice/invoice-details";
import axiosInstance from "../utils/axios";
import { useParams } from "react-router-dom";
import axios from "axios";

const Invoices = ({ openDrawer }) => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    const getInvoice = async () => {
      try {
        const res = await axiosInstance.get(
          `/api/invoice/${id}`
        );
        setInvoice(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getInvoice();
  }, [id]);

  return (
    <Stack spacing={2}>
      <Header
        Icon={Description}
        title={"My Invoices"}
        openDrawer={openDrawer}
      />
      {invoice ? (
        <InvoiceDetails invoice={invoice} />
      ) : (
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
      )}
    </Stack>
  );
};

export default Invoices;
