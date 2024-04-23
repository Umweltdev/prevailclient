import { useState, useCallback } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DialogActions from '@mui/material/DialogActions';
import CircularProgress from '@mui/material/CircularProgress';
import Iconify from './iconify';
import InvoicePDF from './invoice-pdf';

// ----------------------------------------------------------------------

export default function InvoiceToolbar({ invoice, currentStatus, statusOptions, onChangeStatus }) {
  const [value, setValue] = useState(false);

  const onTrue = useCallback(() => {
    setValue(true);
  }, []);

  const onFalse = useCallback(() => {
    setValue(false);
  }, []);

  return (
    <>
      <Stack
        spacing={3}
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'flex-end', sm: 'center' }}
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
              document={<InvoicePDF invoice={invoice} currentStatus={currentStatus} />}
              fileName={invoice?.invoiceNumber}
              style={{ textDecoration: 'none' }}
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

      </Stack>

      <Dialog fullScreen open={value}>
        <Box sx={{ height: 1, display: 'flex', flexDirection: 'column' }}>
          <DialogActions
            sx={{
              p: 1.5,
            }}
          >
            <Button color="inherit" variant="contained" onClick={onFalse}>
              Close
            </Button>
          </DialogActions>

          <Box sx={{ flexGrow: 1, height: 1, overflow: 'hidden' }}>
            <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
              <InvoicePDF invoice={invoice} currentStatus={currentStatus} />
            </PDFViewer>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

