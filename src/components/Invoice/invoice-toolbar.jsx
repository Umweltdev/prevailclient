import { useState, useCallback } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DialogActions from "@mui/material/DialogActions";
import CircularProgress from "@mui/material/CircularProgress";
import Iconify from "./iconify";
import InvoicePDF from "./invoice-pdf";
import { Typography } from "@mui/material";
import { useCalendlyEventListener, PopupButton } from "react-calendly";

// ----------------------------------------------------------------------

export default function InvoiceToolbar({
  invoice,
  currentStatus,
  statusOptions,
  onChangeStatus,
}) {
  const [value, setValue] = useState(false);

  const onTrue = useCallback(() => {
    setValue(true);
  }, []);

  const onFalse = useCallback(() => {
    setValue(false);
  }, []);

  // -----------------------------CALENDLY------------------------------------

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  return (
    <>
      <Stack
        spacing={3}
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-end", sm: "center" }}
        sx={{ mb: { xs: 3, md: 5 } }}
      >
        <Stack direction="row" spacing={1} flexGrow={1} sx={{ width: 1 }}>
          <Tooltip title="View">
            <IconButton onClick={onTrue}>
              <Iconify icon="solar:eye-bold" />
            </IconButton>
          </Tooltip>

          {invoice && (
            <PDFDownloadLink
              document={
                <InvoicePDF invoice={invoice} currentStatus={currentStatus} />
              }
              fileName={invoice?.invoiceNumber}
              style={{ textDecoration: "none" }}
            >
              {({ loading }) => (
                <Tooltip title="Download">
                  <IconButton>
                    {loading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      <Iconify icon="eva:cloud-download-fill" />
                    )}
                  </IconButton>
                </Tooltip>
              )}
            </PDFDownloadLink>
          )}
        </Stack>
        <PopupButton
          url="https://calendly.com/prevailagency"
          rootElement={document.getElementById("root")}
          text={`Schedule a Meeting`}
          styles={{
            color: "#804de9",
            backgroundColor: "#fbfbfb",
            padding: "1vh 0.5vw",
            fontSize: "1.1vw",
            border: "1px solid #804de9",
            borderRadius: "5px",
            cursor: "pointer",
            fontFamily: "Sarabun",
            width: "18vw",
          }}
        />
      </Stack>

      <Dialog fullScreen open={value}>
        <Box sx={{ height: 1, display: "flex", flexDirection: "column" }}>
          <DialogActions
            sx={{
              p: 1.5,
            }}
          >
            <Button color="inherit" variant="contained" onClick={onFalse}>
              Close
            </Button>
          </DialogActions>

          <Box sx={{ flexGrow: 1, height: 1, overflow: "hidden" }}>
            <PDFViewer width="100%" height="100%" style={{ border: "none" }}>
              <InvoicePDF invoice={invoice} currentStatus={currentStatus} />
            </PDFViewer>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
