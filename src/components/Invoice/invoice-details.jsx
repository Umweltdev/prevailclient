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
import { CardMedia } from "@mui/material";

import axiosInstance from "../utils/axios";
import { fDate } from "../utils/format-time";
import logo from "./newlogo.svg";
import { useStripe } from "@stripe/react-stripe-js";
import { useCalendlyEventListener, PopupButton } from "react-calendly";

import Label from "./label";
import Scrollbar from "./scrollbar";
import InvoiceToolbar from "./invoice-toolbar";
import PropTypes from "prop-types";

export const INVOICE_STATUS_OPTIONS = [
  { value: "paid", label: "Paid" },
  { value: "pending", label: "Pending" },
  { value: "overdue", label: "Overdue" },
  { value: "draft", label: "Draft" },
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "& td": {
    textAlign: "right",
    borderBottom: "none",
    paddingTop: theme.spacing(1),
  },
}));

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
      const value = event.target.value;
      if (!value) return;
      try {
        await axiosInstance.put(`/api/invoice/${invoice?._id}`, {
          status: value,
        });
        setCurrentStatus(value);
      } catch (err) {
        console.error("Failed to update status:", err);
      }
    },
    [invoice?._id]
  );

  useEffect(() => {
    if (invoice?.status) setCurrentStatus(invoice.status);
  }, [invoice?.status]);

  const handleCheckout = async () => {
    if (!invoice) return;
    if (!stripe) return console.error("Stripe not loaded");

    setLoading(true);
    try {
      const res = await axiosInstance.post(`/api/payment/pay-stripe`, {
        amount: invoice?.stages?.totalAmount || 0,
        invoiceId: invoice?._id,
      });
      if (res?.data?.id) {
        await stripe.redirectToCheckout({ sessionId: res.data.id });
      }
    } catch (err) {
      console.error("Checkout error:", err);
    } finally {
      setLoading(false);
    }
  };

  const tax = (invoice?.fullAmount || 0) * 0.23;
  const totalAmount = (invoice?.fullAmount || 0) + tax;

  const renderTotal = (
    <>
      <StyledTableRow>
        <TableCell colSpan={3} />
        <TableCell sx={{ typography: "subtitle1", color: "#603799" }}>
          BEFORE TAX
        </TableCell>
        <TableCell width={140} sx={{ typography: "subtitle1" }}>
          €
          {(
            (invoice?.fullAmount || 0) - (invoice?.taxes || 0)
          ).toLocaleString()}
        </TableCell>
      </StyledTableRow>
      <StyledTableRow>
        <TableCell colSpan={3} />
        <TableCell sx={{ typography: "subtitle1", color: "#603799" }}>
          TAX AMOUNT
        </TableCell>
        <TableCell width={140} sx={{ typography: "subtitle1" }}>
          €{tax.toLocaleString()}
        </TableCell>
      </StyledTableRow>
      <StyledTableRow>
        <TableCell colSpan={3} />
        <TableCell sx={{ typography: "subtitle1", color: "#603799" }}>
          FULL AMOUNT
        </TableCell>
        <TableCell width={140} sx={{ typography: "subtitle1" }}>
          €{totalAmount.toLocaleString()}
        </TableCell>
      </StyledTableRow>
    </>
  );

  const paymentStages = (
    <Grid sx={{ display: "flex", justifyContent: "space-between", mb: 7 }}>
      {[
        { label: "PAYMENT STAGE", value: invoice?.stages?.header },
        { label: "BEFORE TAX", value: invoice?.stages?.subAmount || 0 },
        { label: "TAX AMOUNT", value: invoice?.stages?.taxes || 0 },
        { label: "FULL AMOUNT", value: invoice?.stages?.totalAmount || 0 },
      ].map((stage, i) => (
        <Box key={i} sx={{ textAlign: i === 3 ? "right" : "center" }}>
          <Box sx={{ typography: "subtitle1", color: "#603799" }}>
            {stage.label}
          </Box>
          <Box width={140} sx={{ typography: "subtitle1", color: "#333" }}>
            {typeof stage.value === "number"
              ? `€${stage.value.toLocaleString()}`
              : stage.value || "-"}
          </Box>
        </Box>
      ))}
    </Grid>
  );

  const dueStage = (
    <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ textAlign: "left" }}>
        <Box sx={{ typography: "subtitle1", color: "#603799" }}>
          PAYMENT GATEWAY
        </Box>
        <Box width={140} sx={{ typography: "subtitle1", color: "#333" }}>
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
          €{totalAmount.toLocaleString()}
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
        <Typography variant="body2">info@prevailagency.ie</Typography>
      </Grid>
      <Grid
        xs={12}
        sx={{ py: 3, display: "flex", justifyContent: "space-between" }}
      >
        <PopupButton
          url="https://calendly.com/prevailagency"
          rootElement={document.getElementById("root")}
          text="Schedule a Meeting"
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
            "&:hover": { backgroundColor: "#804de9", color: "white" },
          }}
          onClick={handleCheckout}
          disabled={loading || !stripe}
        >
          {loading ? "Loading..." : "Pay with Stripe"}
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
            {(invoice?.items || []).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Box sx={{ maxWidth: 440 }}>
                    <Typography variant="subtitle2">
                      {row?.title || "-"}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {row?.description || "-"}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{row?.hour || "-"}</TableCell>
                <TableCell align="right">
                  €{(row?.price || 0).toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  €{(row?.total || 0).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
            {renderTotal}
          </TableBody>
        </Table>
        <Box sx={{ mt: 5 }}>{paymentStages}</Box>
        <Box sx={{ mt: 2 }}>{dueStage}</Box>
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
        {/* Header */}
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "top",
          }}
        >
          <Box>
            <Label
              variant="soft"
              color={
                currentStatus === "paid"
                  ? "success"
                  : currentStatus === "pending"
                    ? "warning"
                    : currentStatus === "overdue"
                      ? "error"
                      : "default"
              }
            >
              {currentStatus || "N/A"}
            </Label>
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                "@media (max-width: 600px)": { fontSize: 36 },
              }}
            >
              Invoice
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography
                sx={{ fontSize: 14, fontWeight: 600, letterSpacing: 2 }}
              >
                DATE ISSUED:{" "}
                <span style={{ color: "#333", fontWeight: 100 }}>
                  {fDate(invoice?.createDate)}
                </span>
              </Typography>
              <Typography
                sx={{ fontSize: 13, fontWeight: 600, letterSpacing: 2 }}
              >
                INVOICE NUMBER:{" "}
                <span style={{ color: "#333", fontWeight: 100 }}>
                  {invoice?.invoiceNumber}
                </span>
              </Typography>
              <Typography
                sx={{ fontSize: 13, fontWeight: 600, letterSpacing: 2 }}
              >
                PAYMENT STAGE:{" "}
                <span style={{ color: "#333", fontWeight: 100 }}>
                  {invoice?.stages?.header || "-"}
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
              "@media (max-width: 600px)": { width: 70 },
            }}
          />
        </Stack>

        {/* Agency & Client Info */}
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            mt: 5,
          }}
        >
          {/* Agency Info */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Agency Information
            </Typography>
            {[
              ["NAME", "Prevail Agency"],
              ["ADDRESS", "Meath, Ireland"],
              ["TOWN, CITY", "Duleek"],
              ["EMAIL ADDRESS", "info@prevailagency.ie"],
              ["VAT NUMBER", "IE9484135G"],
            ].map(([label, value], idx) => (
              <Typography
                key={idx}
                sx={{ fontSize: 13, fontWeight: 600, letterSpacing: 2 }}
              >
                {label}:{" "}
                <span style={{ color: "#333", fontWeight: 100 }}>{value}</span>
              </Typography>
            ))}
          </Box>

          {/* Client Info */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: { xs: "left", sm: "right" },
              mt: { xs: 5, sm: 0 },
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Client Information
            </Typography>
            {[
              ["NAME", invoice?.invoiceTo?.name || "-"],
              [
                "ADDRESS",
                invoice?.invoiceTo?.fullAddress ||
                  invoice?.invoiceTo?.address ||
                  "-",
              ],
              ["Phone", invoice?.invoiceTo?.phone || invoice?.phone || "-"],
              ["TOWN, CITY", invoice?.invoiceTo?.town || "-"],
              ["EMAIL ADDRESS", invoice?.invoiceTo?.email || "-"],
              [
                "VAT NUMBER",
                invoice?.invoiceTo?.vatNumber || invoice?.vatNumber || "-",
              ],
            ].map(([label, value], idx) => (
              <Typography
                key={idx}
                sx={{ fontSize: 13, fontWeight: 600, letterSpacing: 2 }}
              >
                {label}:{" "}
                <span style={{ color: "#333", fontWeight: 100, width: 200 }}>
                  {value}
                </span>
              </Typography>
            ))}
          </Box>
        </Stack>

        {renderList}

        <Divider
          sx={{
            borderStyle: "dashed",
            "@media (max-width: 600px)": { mt: "unset" },
          }}
        />

        {renderFooter}
      </Card>
    </>
  );
}
InvoiceDetails.propTypes = {
  invoice: PropTypes.shape({
    _id: PropTypes.string,
    status: PropTypes.oneOf(["paid", "pending", "overdue", "draft"]),
    createDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]),
    invoiceNumber: PropTypes.string,
    fullAmount: PropTypes.number,
    taxes: PropTypes.number,
    totalAmount: PropTypes.number,
    dueDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]),
    phone: PropTypes.string,
    vatNumber: PropTypes.string,
    stages: PropTypes.shape({
      header: PropTypes.string,
      subAmount: PropTypes.number,
      taxes: PropTypes.number,
      totalAmount: PropTypes.number,
    }),
    invoiceTo: PropTypes.shape({
      name: PropTypes.string,
      fullAddress: PropTypes.string,
      address: PropTypes.string,
      town: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
      vatNumber: PropTypes.string,
    }),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        hour: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        price: PropTypes.number,
        total: PropTypes.number,
      })
    ),
  }).isRequired,
};
