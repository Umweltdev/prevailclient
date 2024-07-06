import { Box, Fab, Modal, Typography, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { FileCopy } from "@mui/icons-material";

const EmpowerBusiness = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = () => {
    setIsLoading(true); // Start loading when the modal opens
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsLoading(false); // Reset loading state when the modal closes
  };

  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://res.cloudinary.com/dtzuqacg3/image/upload/v1720198481/DAB-Whitepaper-_Purple__kwkgdw.avif)",
        display: "flex",
        width: "100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "160vh",
        position: "relative",
        overflow: "hidden",
        clipPath: "inset(20vh 0)",
        "@media (max-width: 600px)": {
          height: "100vh",
          clipPath: "inset(10vh 0)",
        },
      }}
    >
      <Fab
        sx={{
          position: "absolute",
          top: "80%",
          left: "80%",
          background: "white",
          color: "#653BB5",
          width: "220px",
          borderRadius: "35px",
          fontSize: "17px",
          border: "1px solid #653BB5",
          textTransform: "capitalize",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "@media (max-width: 600px)": {
            top: "75%",
            left: "23%",
          },
        }}
        onClick={(e) => {
          e.stopPropagation(); // Prevent background click event
          handleOpenModal();
        }}
      >
        Open PDF <FileCopy sx={{ ml: "10px" }} />
      </Fab>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "70vw",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
            outline: "none",
            "@media (max-width: 600px)": {
              width: "95vw",
            },
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            PDF Viewer
          </Typography>
          {isLoading && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "500px", // Adjust based on your design
              }}
            >
              <CircularProgress />
            </Box>
          )}
          <iframe
            src="src/components/Services/DigitalAccelerator/assets/Prevail Brand Identity.pdf"
            width="100%"
            height="500px"
            title="PDF Viewer"
            style={{
              border: "none",
              display: isLoading ? "none" : "block",
            }}
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          ></iframe>
          <Fab
            onClick={handleCloseModal}
            sx={{
              mt: 2,
              background: "white",
              color: "#653BB5",
              width: "100px",
              height: "40px",
              borderRadius: "20px",
              fontSize: "15px",
              border: "1px solid #653BB5",
              textTransform: "capitalize",
            }}
          >
            Close
          </Fab>
        </Box>
      </Modal>
    </Box>
  );
};

export default EmpowerBusiness;
