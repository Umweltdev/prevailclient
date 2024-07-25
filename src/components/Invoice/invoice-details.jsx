import { useState, useEffect, useCallback } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import axiosInstance from "../utils/axios";
import { fDate } from "../utils/format-time";
import logo from "./newlogo.svg";
import { useStripe } from "@stripe/react-stripe-js";
import { useCalendlyEventListener, PopupButton } from "react-calendly";

import Label from "./label";
import Scrollbar from "./scrollbar";

import InvoiceToolbar from "./invoice-toolbar";
import { CardMedia } from "@mui/material";
import axios from "axios";

export const INVOICE_STATUS_OPTIONS = [
  { value: "paid", label: "Paid" },
  { value: "pending", label: "Pending" },
  { value: "overdue", label: "Overdue" },
  { value: "draft", label: "Draft" },
];
// ----------------------------------------------------------------------

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "& td": {
    textAlign: "right",
    borderBottom: "none",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

// ----------------------------------------------------------------------

export default function InvoiceDetails({ invoice }) {
  const [currentStatus, setCurrentStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  const handleChangeStatus = useCallback(
    async (event) => {
      if (event.target.value) {
        await axiosInstance.put(`/api/invoice/${invoice?._id}`, {
          status: event.target.value,
        });
      }
      setCurrentStatus(event.target.value);
    },
    [invoice?._id]
  );


  useEffect(() => {
    if (invoice?.status) {
      setCurrentStatus(invoice?.status);
    }
  }, [invoice?.status]);

  const handleCheckout = async () => {
    setLoading(true);
    const res = await axiosInstance.post(`/api/payment/pay-stripe`, {
      amount: invoice?.stages?.totalAmount,
      invoiceId: invoice?._id,
    });
    setLoading(false);

    await stripe.redirectToCheckout({
      sessionId: res.data.id,
    });
  };

  const tax = 15;

  const renderTotal = (
    <>
      <StyledTableRow>
        <TableCell colSpan={3} />
        <TableCell sx={{ typography: "subtitle1", color: "#603799" }}>
          BEFORE TAX
        </TableCell>
        <TableCell width={140} sx={{ typography: "subtitle1" }}>
          {`€${(
            (invoice?.fullAmount || 0) - (invoice?.taxes || 0)
          ).toLocaleString()}`}
        </TableCell>
      </StyledTableRow>
      <StyledTableRow>
        <TableCell colSpan={3} />
        <TableCell sx={{ typography: "subtitle1", color: "#603799" }}>
          TAX AMOUNT
        </TableCell>
        <TableCell width={140} sx={{ typography: "subtitle1" }}>
          {`€${(invoice?.taxes || 0).toLocaleString()}`}
        </TableCell>
      </StyledTableRow>
      <StyledTableRow>
        <TableCell colSpan={3} />
        <TableCell sx={{ typography: "subtitle1", color: "#603799" }}>
          FULL AMOUNT
        </TableCell>
        <TableCell width={140} sx={{ typography: "subtitle1" }}>
          {`€${(invoice?.fullAmount || 0).toLocaleString()}`}
        </TableCell>
      </StyledTableRow>
    </>
  );

  const paymentStages = (
    <>
      <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ textAlign: "left" }}>
          <Box sx={{ typography: "subtitle1", color: "#603799" }}>
            PAYMENT STAGES
          </Box>
          <Box width={140} sx={{ typography: "subtitle1", color: "#333" }}>
            {invoice?.stages?.header}
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ typography: "subtitle1", color: "#603799" }}>
            BEFORE TAX
          </Box>
          <Box width={140} sx={{ typography: "subtitle1", color: "#333" }}>
            {`€${(invoice?.stages?.subAmount || 0).toLocaleString()}`}
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ typography: "subtitle1", color: "#603799" }}>
            TAX AMOUNT
          </Box>
          <Box width={140} sx={{ typography: "subtitle1", color: "#333" }}>
            {`€${invoice?.stages?.taxes.toLocaleString()}`}
          </Box>
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Box sx={{ typography: "subtitle1", color: "#603799" }}>
            FULL AMOUNT
          </Box>
          <Box width={140} sx={{ typography: "subtitle1", color: "#333" }}>
            {`€${invoice?.stages?.totalAmount.toLocaleString()}`}
          </Box>
        </Box>
      </Grid>
    </>
  );

  const dueStage = (
    <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ textAlign: "left" }}>
        <Box sx={{ typography: "subtitle1", color: "#603799" }}>
          PAYMENT GATEWAY
        </Box>
        <Box width={140} sx={{ typography: "subtitle1", color: "#333" }}>
          {/* {`€${invoice?.totalAmount.toLocaleString()}`} */}
          Stripe | Prevail Website
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ typography: "subtitle1", color: "#603799" }}>DUE BY</Box>
        <Box width={140} sx={{ typography: "subtitle1", color: "#333" }}>
          {fDate(invoice?.dueDate)}
        </Box>
      </Box>

      <Box sx={{ textAlign: "right" }}>
        <Box sx={{ typography: "subtitle1", color: "#603799" }}>DUE AMOUNT</Box>
        <Box width={140} sx={{ typography: "subtitle1", color: "#333" }}>
          {`€${(invoice?.totalAmount + invoice?.taxes).toLocaleString()}`}
        </Box>
      </Box>
    </Grid>
  );

  const renderFooter = (
    <Grid container>
      <Grid xs={12} md={9} sx={{ py: 3 }}>
        <Typography variant="subtitle2">NOTES</Typography>

        <Typography variant="body2">
          We appreciate your business. Should you need us to add VAT or extra
          notes let us know!
        </Typography>
      </Grid>

      <Grid xs={12} md={3} sx={{ py: 3, textAlign: "right" }}>
        <Typography variant="subtitle2">Have a Question?</Typography>

        <Typography variant="body2">support@minimals.cc</Typography>
      </Grid>
      <Grid
        xs={12}
        sx={{ py: 3, display: "flex", justifyContent: "space-between" }}
      >
        <PopupButton
          url="https://calendly.com/prevailagency"
          rootElement={document.getElementById("root")}
          text={`Schedule a Meeting`}
          styles={{
            color: "#804de9",
            backgroundColor: "inherit",
            padding: "0.9vh 1vw",
            fontSize: 16,
            border: "1px solid rgba(128, 77, 233, 0.4)",
            borderRadius: "5px",
            cursor: "pointer",
            fontFamily: "Sarabun",
            fontWeight: "600",
          }}
        />
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            fontSize: 14,
            fontWeight: "600",
            lineHeight: 1.5,
            backgroundColor: "#804de9",
            color: "white",
            "&:hover": {
              backgroundColor: "#804de9",
              color: "white",
            },
          }}
          onClick={handleCheckout}
        >
          {loading ? "Loading..." : "Pay with stripe"}
        </Button>
      </Grid>
    </Grid>
  );

  const renderList = (
    <TableContainer sx={{ overflow: "unset", mt: 5 }}>
      <Scrollbar>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={40}>#</TableCell>

              <TableCell sx={{ typography: "subtitle2" }}>
                DESCRIPTION
              </TableCell>

              <TableCell>HOUR</TableCell>

              <TableCell align="right">PRICE</TableCell>

              <TableCell align="right">TOTAL</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {invoice?.items.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>

                <TableCell>
                  <Box sx={{ maxWidth: 440 }}>
                    <Typography variant="subtitle2">{row?.title}</Typography>

                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                      // noWrap
                    >
                      {row?.description}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell>{row?.hour}</TableCell>

                <TableCell align="right">{`€${row.price.toLocaleString()}`}</TableCell>

                <TableCell align="right">
                  {`€${row.total.toLocaleString()}`}
                </TableCell>
              </TableRow>
            ))}

            {renderTotal}
            {/* {dueStage} */}
          </TableBody>
        </Table>
        <Box sx={{ mt: 5 }}>{paymentStages}</Box>
      </Scrollbar>
    </TableContainer>
  );

  return (
    <>
      <InvoiceToolbar
        invoice={invoice}
        currentStatus={currentStatus || ""}
        onChangeStatus={handleChangeStatus}
        statusOptions={INVOICE_STATUS_OPTIONS}
      />

      <Card sx={{ pt: 5, px: 5, color: "#603799" }}>
        {/* <Box
          rowGap={5}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            // xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
          }}
        > */}
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "top",
            // width: "100%"
          }}
        >
          <Box>
            <Label
              variant="soft"
              color={
                (currentStatus === "paid" && "success") ||
                (currentStatus === "pending" && "warning") ||
                (currentStatus === "overdue" && "error") ||
                "default"
              }
            >
              {currentStatus}
            </Label>
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                "@media (max-width: 600px)": {
                  fontSize: 36,
                },
              }}
            >
              Invoice
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: 2,
                  letterSpacing: 2,
                }}
              >
                DATE ISSUED:{" "}
                <span style={{ color: "#333", fontWeight: 100 }}>
                  {" "}
                  {fDate(invoice?.createDate)}
                </span>
              </Typography>
              <Typography
                sx={{ fontSize: 13, fontWeight: 600, letterSpacing: 2 }}
              >
                INVOICE NUMBER:{" "}
                <span
                  style={{ color: "#333", fontWeight: 100, fontWeight: 100 }}
                >
                  {" "}
                  {invoice?.invoiceNumber}
                </span>
              </Typography>
              <Typography
                sx={{ fontSize: 13, fontWeight: 600, letterSpacing: 2 }}
              >
                PAYMENT STAGE:{" "}
                <span style={{ color: "#333", fontWeight: 100 }}>
                  {invoice?.stages?.header}
                  {/* {invoice?.stages.length > 0 ? invoice?.stages.header : ""} */}
                </span>
              </Typography>
            </Box>
          </Box>
          <CardMedia
            component="img"
            alt="logo"
            src={logo}
            sx={{
              width: 100,
              objectFit: "contain",
              "@media (max-width: 600px)": {
                width: 70,
              },
            }}
          />
        </Stack>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            mt: 5,
            "@media (max-width: 600px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ mb: 1, mb: 2 }}>
              Agency Information
            </Typography>
            <Typography
              sx={{ fontSize: 13, fontWeight: 600, letterSpacing: 2 }}
            >
              NAME:{" "}
              <span style={{ color: "#333", fontWeight: 100 }}>
                Prevail Agency
              </span>
            </Typography>
            <Typography
              sx={{ fontSize: 13, fontWeight: 600, letterSpacing: 2 }}
            >
              ADDRESS:{" "}
              <span style={{ color: "#333", fontWeight: 100 }}>
                Meath, Ireland
              </span>
            </Typography>
            <Typography
              sx={{ fontSize: 13, fontWeight: 600, letterSpacing: 2 }}
            >
              TOWN, CITY:{" "}
              <span style={{ color: "#333", fontWeight: 100 }}>Duleek</span>
            </Typography>
            <Typography
              sx={{ fontSize: 13, fontWeight: 600, letterSpacing: 2 }}
            >
              EMAIL ADDRESS:{" "}
              <span style={{ color: "#333", fontWeight: 100 }}>
                info@prevailagency.ie
              </span>
            </Typography>
            <Typography
              sx={{ fontSize: 13, fontWeight: 600, letterSpacing: 2 }}
            >
              VAT NUMBER:{" "}
              <span style={{ color: "#333", fontWeight: 100 }}>IE9484135G</span>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "right",
              justifyContent: "right",
              alignItems: "right",

              "@media (max-width: 600px)": {
                textAlign: "left",
                justifyContent: "left",
                alignItems: "left",
                mt: 5,
              },
            }}
          >
            <Typography variant="h6" sx={{ mb: 1, mb: 2 }}>
              Client Information
            </Typography>
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 2,
              }}
            >
              NAME:{" "}
              <span style={{ color: "#333", fontWeight: 100 }}>
                {invoice?.invoiceTo?.name}
              </span>
            </Typography>
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 2,
              }}
            >
              ADDRESS:{" "}
              <span style={{ color: "#333", fontWeight: 100, width: "200px" }}>
                {invoice?.invoiceTo.fullAddress}
              </span>
            </Typography>
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 2,
              }}
            >
              TOWN, CITY:{" "}
              <span style={{ color: "#333", fontWeight: 100 }}>
                {invoice?.invoiceTo?.town}
              </span>
            </Typography>
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 2,
              }}
            >
              EMAIL ADDRESS:{" "}
              <span style={{ color: "#333", fontWeight: 100 }}>
                {invoice?.invoiceTo.email}
              </span>
            </Typography>
          </Box>
        </Stack>

        {renderList}

        <Divider
          sx={{
            // mt: -20,
            borderStyle: "dashed",
            "@media (max-width: 600px)": { mt: "unset" },
          }}
        />

        {renderFooter}
      </Card>
    </>
  );
}
