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
import logo from "./pm2.png";
import { useStripe } from "@stripe/react-stripe-js";

import Label from "./label";
import Scrollbar from "./scrollbar";

import InvoiceToolbar from "./invoice-toolbar";

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
  const [loading, setLoading] = useState(false)
  const stripe = useStripe();

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
    setLoading(true)
    const res = await axiosInstance.post(`/api/booking/pay-stripe`, {
      amount: invoice?.totalAmount,
      invoiceId: invoice?._id
    });
    setLoading(false)

    await stripe.redirectToCheckout({
      sessionId: res.data.id,
    });
  };

  const renderTotal = (
    <>
      <StyledTableRow>
        <TableCell colSpan={3} />
        <TableCell sx={{ typography: "subtitle1" }}>Total</TableCell>
        <TableCell width={140} sx={{ typography: "subtitle1" }}>
          {`₦${invoice?.totalAmount.toLocaleString()}`}
        </TableCell>
      </StyledTableRow>
    </>
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
      <Grid xs={12} sx={{ py: 3, textAlign: "right" }}>
        <Button
          variant="outlined"
          sx={{
            textTransform:"none",
            fontSize: 14,
            fontWeight:"600",
            lineHeight: 1.5
          }}
          onClick={handleCheckout}
        >{ loading ? "Loading..." :
          'Pay with stripe'}
        </Button>
      </Grid>
    </Grid>
  );

  const renderList = (
    <TableContainer sx={{ overflow: "unset", mt: 5 }}>
      <Scrollbar>
        <Table sx={{ minWidth: 960 }}>
          <TableHead>
            <TableRow>
              <TableCell width={40}>#</TableCell>

              <TableCell sx={{ typography: "subtitle2" }}>
                Description
              </TableCell>

              <TableCell>Qty</TableCell>

              <TableCell align="right">Unit price</TableCell>

              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {invoice?.items.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>

                <TableCell>
                  <Box sx={{ maxWidth: 560 }}>
                    <Typography variant="subtitle2">{row?.title}</Typography>

                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                      noWrap
                    >
                      {row?.description}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell>{row?.quantity}</TableCell>

                <TableCell align="right">{`₦${row.price.toLocaleString()}`}</TableCell>

                <TableCell align="right">
                  {`₦${(row.price * row.quantity).toLocaleString()}`}
                </TableCell>
              </TableRow>
            ))}

            {renderTotal}
          </TableBody>
        </Table>
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

      <Card sx={{ pt: 5, px: 5 }}>
        <Box
          rowGap={5}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
          }}
        >
          <Box
            component="img"
            alt="logo"
            src={logo}
            sx={{ width: 48, height: 48 }}
          />

          <Stack spacing={1} alignItems={{ xs: "flex-start", md: "flex-end" }}>
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

            <Typography variant="h6">{invoice?.invoiceNumber}</Typography>
          </Stack>

          <Stack sx={{ typography: "body2" }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Invoice From
            </Typography>
            {invoice?.invoiceFrom?.name}
            <br />
            {invoice?.invoiceFrom.fullAddress}
            <br />
            Phone: {invoice?.invoiceFrom.phoneNumber}
            <br />
          </Stack>

          <Stack sx={{ typography: "body2" }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Invoice To
            </Typography>
            {invoice?.invoiceTo.name}
            <br />
            {invoice?.invoiceTo.fullAddress}
            <br />
            Phone: {invoice?.invoiceTo.phoneNumber}
            <br />
          </Stack>

          <Stack sx={{ typography: "body2" }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Date Create
            </Typography>
            {fDate(invoice?.createDate)}
          </Stack>

          <Stack sx={{ typography: "body2" }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Due Date
            </Typography>
            {fDate(invoice?.dueDate)}
          </Stack>
        </Box>

        {renderList}

        <Divider sx={{ mt: 5, borderStyle: "dashed" }} />

        {renderFooter}
      </Card>
    </>
  );
}
