import {
  Box,
  Fab,
  Modal,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { FileCopy, HomeMax, Maximize, Minimize } from "@mui/icons-material";
import jsPDF from "jspdf";
import img1 from "./assets/dab/DAB_Whitepaper-_Slide-1_.avif";
import img2 from "./assets/dab/DAB_Whitepaper-_Slide-2_.avif";
import img3 from "./assets/dab/DAB_Whitepaper-_Slide-3_.avif";
import img4 from "./assets/dab/DAB_Whitepaper-_Slide-4_.avif";
import img5 from "./assets/dab/DAB_Whitepaper-_Slide-5_.avif";
import img6 from "./assets/dab/DAB_Whitepaper-_Slide-6_.avif";
import img7 from "./assets/dab/DAB_Whitepaper-_Slide-7_.avif";
import img8 from "./assets/dab/DAB_Whitepaper-_Slide-8_.avif";
import img9 from "./assets/dab/DAB_Whitepaper-_Slide-9_.avif";
import img10 from "./assets/dab/DAB_Whitepaper-_Slide-10_.avif";
import img11 from "./assets/dab/DAB_Whitepaper-_Slide-11_.avif";
import img12 from "./assets/dab/DAB_Whitepaper-_Slide-12_.avif";
import img13 from "./assets/dab/DAB_Whitepaper-_Slide-13_.avif";
import img14 from "./assets/dab/DAB_Whitepaper-_Slide-14_.avif";
import img15 from "./assets/dab/DAB_Whitepaper-_Slide-15_.avif";
import img16 from "./assets/dab/DAB_Whitepaper-_Slide-16_.avif";
import img17 from "./assets/dab/DAB_Whitepaper-_Slide-17_.avif";
import img18 from "./assets/dab/DAB_Whitepaper-_Slide-18_.avif";
import img19 from "./assets/dab/DAB_Whitepaper-_Slide-19_.avif";
import img20 from "./assets/dab/DAB_Whitepaper-_Slide-20_.avif";
import img21 from "./assets/dab/DAB_Whitepaper-_Slide-21_.avif";
import img22 from "./assets/dab/DAB_Whitepaper-_Slide-22_.avif";
import img23 from "./assets/dab/DAB_Whitepaper-_Slide-23_.avif";
import img24 from "./assets/dab/DAB_Whitepaper-_Slide-24_.avif";
import img25 from "./assets/dab/DAB_Whitepaper-_Slide-25_.avif";
import img26 from "./assets/dab/DAB_Whitepaper-_Slide-26_.avif";
import img27 from "./assets/dab/DAB_Whitepaper-_Slide-27_.avif";

import { Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

const imageUrls = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
];

const EmpowerBusiness = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(
    Array(imageUrls.length).fill(false)
  );
  const [maximized, setMaximized] = useState(false);

  const handleOpenModal = () => {
    setIsLoading(true);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsLoading(true);
    setImagesLoaded(Array(imageUrls.length).fill(false));
    setMaximized(false); // Reset maximized state
  };

  const handleImageLoad = (index) => {
    setImagesLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      if (newLoaded.every((loaded) => loaded)) {
        setIsLoading(false);
      }
      return newLoaded;
    });
  };

  const toggleMaximize = () => {
    setMaximized((prev) => !prev);
  };

  const downloadPdf = async () => {
    const pdfWidth = 210; // A4 width in mm
    const pdfHeight = 148; // half of A4 height in mm

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [pdfWidth, pdfHeight],
    });

    const imagePromises = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = reject;
      });
    });

    try {
      const images = await Promise.all(imagePromises);
      images.forEach((img, index) => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        const imgData = canvas.toDataURL("image/jpeg");
        if (index > 0) doc.addPage();
        doc.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      });
      doc.save("prevail.pdf");
    } catch (error) {
      console.error("Error loading images:", error);
    }
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
        margin: "-20vh 0",
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
          e.stopPropagation();
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
            width: maximized ? "95vw" : "70vw",
            height: maximized ? "100vh" : "auto",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
            outline: "none",
            "@media (max-width: 600px)": {
              width: "95vw",
              height: maximized ? "95vh" : "auto",
            },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <span onClick={toggleMaximize} variant="contained">
              <Link to="empower-your-business">
                <HomeMax sx={{ color: "#653BB5" }} />
              </Link>
            </span>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ textAlign: "right" }}
            >
              PDF Viewer
            </Typography>
          </Box>
          {isLoading && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "500px",
              }}
            >
              <CircularProgress />
            </Box>
          )}
          <Box
            sx={{
              overflowY: "auto",
              maxHeight: maximized ? "80vh" : "500px",
              display: isLoading ? "none" : "block",
            }}
          >
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`page-${index + 1}`}
                onLoad={() => handleImageLoad(index)}
                style={{ width: "100%", marginBottom: "10px" }}
              />
            ))}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              onClick={downloadPdf}
              variant="contained"
              sx={{
                background: "#653BB5",
                color: "white",
                textTransform: "capitalize",
              }}
            >
              Download as PDF
            </Button>

            <Fab
              onClick={handleCloseModal}
              sx={{
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
        </Box>
      </Modal>
    </Box>
  );
};

export default EmpowerBusiness;
