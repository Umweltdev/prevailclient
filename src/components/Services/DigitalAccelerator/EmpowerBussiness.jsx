import { Box, Fab, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { FileCopy } from "@mui/icons-material";

const EmpowerBussiness = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
        height: "160vh",
        position: "relative",
        "@media (max-width: 600px)": {
          backgroundImage:
            "url(https://res.cloudinary.com/dtzuqacg3/image/upload/v1720212269/Screenshot_from_2024-07-05_21-43-15_gevfwa.png)",
          width: "100vw",
          height: "100vh",
          
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
            top: "80%",
            left: "26%",
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
            p: 4,
            outline: "none",
            "@media (max-width: 600px)": {
              width: "95vw",
            },
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            PDF Viewer
          </Typography>
          <iframe
            src="https://www.dropbox.com/scl/fi/7idvjhtcj9wwftckn4xs0/Prevail-Brand-Identity.pdf?rlkey=kosev0nzvx6r2pja51nzaa8u3&st=zdhbu6pd&dl=0"
            width="100%"
            height="500px"
            title="PDF Viewer"
            style={{
              border: "none",
            }}
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

export default EmpowerBussiness;
