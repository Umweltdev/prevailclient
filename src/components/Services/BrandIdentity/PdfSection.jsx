import {
  Box,
  Fab,
  Modal,
  Typography,
  CircularProgress,
  Button,
  Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FileCopy, HomeMax } from "@mui/icons-material";
import jsPDF from "jspdf";
import img1 from "./assets/Brand Identity/Slide-1.avif";
import img2 from "./assets/Brand Identity/Slide-2.avif";
import img3 from "./assets/Brand Identity/Slide-3.avif";
import img4 from "./assets/Brand Identity/Slide-4.avif";
import img5 from "./assets/Brand Identity/Slide-5.avif";
import img6 from "./assets/Brand Identity/Slide-6.avif";
import img7 from "./assets/Brand Identity/Slide-7.avif";
import img8 from "./assets/Brand Identity/Slide-8.avif";
import img9 from "./assets/Brand Identity/Slide-9.avif";
import img10 from "./assets/Brand Identity/Slide-10.avif";
import img11 from "./assets/Brand Identity/Slide-11.avif";
import img12 from "./assets/Brand Identity/Slide-12.avif";
import img13 from "./assets/Brand Identity/Slide-13.avif";
import img14 from "./assets/Brand Identity/Slide-14.avif";
import img15 from "./assets/Brand Identity/Slide-15.avif";
import img16 from "./assets/Brand Identity/Slide-16.avif";
import img17 from "./assets/Brand Identity/Slide-17.avif";
import img18 from "./assets/Brand Identity/Slide-18.avif";
import img19 from "./assets/Brand Identity/Slide-19.avif";
import img20 from "./assets/Brand Identity/Slide-20.avif";
import img21 from "./assets/Brand Identity/Slide-21.avif";
import img22 from "./assets/Brand Identity/Slide-22.avif";
import img23 from "./assets/Brand Identity/Slide-23.avif";
import img24 from "./assets/Brand Identity/Slide-24.avif";
import img25 from "./assets/Brand Identity/Slide-25.avif";
import img26 from "./assets/Brand Identity/Slide-26.avif";
import img27 from "./assets/Brand Identity/Slide-27.avif";
import img28 from "./assets/Brand Identity/Slide-28.avif";
import img29 from "./assets/Brand Identity/Slide-29.avif";
import img30 from "./assets/Brand Identity/Slide-30.avif";
import img31 from "./assets/Brand Identity/Slide-31.avif";
import img32 from "./assets/Brand Identity/Slide-32.avif";
import img33 from "./assets/Brand Identity/Slide-33.avif";
import img34 from "./assets/Brand Identity/Slide-34.avif";
import img35 from "./assets/Brand Identity/Slide-35.avif";
import img36 from "./assets/Brand Identity/Slide-36.avif";
import img37 from "./assets/Brand Identity/Slide-37.avif";
import img38 from "./assets/Brand Identity/Slide-38.avif";
import img39 from "./assets/Brand Identity/Slide-39.avif";
import img40 from "./assets/Brand Identity/Slide-40.avif";
import img41 from "./assets/Brand Identity/Slide-41.avif";
import img42 from "./assets/Brand Identity/Slide-42.avif";
import img43 from "./assets/Brand Identity/Slide-43.avif";
import img44 from "./assets/Brand Identity/Slide-44.avif";
import img45 from "./assets/Brand Identity/Slide-45.avif";
import img46 from "./assets/Brand Identity/Slide-46.avif";
import img47 from "./assets/Brand Identity/Slide-47.avif";
import img48 from "./assets/Brand Identity/Slide-48.avif";
import img49 from "./assets/Brand Identity/Slide-49.avif";
import img50 from "./assets/Brand Identity/Slide-50.avif";
import img51 from "./assets/Brand Identity/Slide-51.avif";
import img52 from "./assets/Brand Identity/Slide-52.avif";
import img53 from "./assets/Brand Identity/Slide-53.avif";
import img54 from "./assets/Brand Identity/Slide-54.avif";
import img55 from "./assets/Brand Identity/Slide-55.avif";
import img56 from "./assets/Brand Identity/Slide-56.avif";
import img57 from "./assets/Brand Identity/Slide-57.avif";
import img58 from "./assets/Brand Identity/Slide-58.avif";
import img59 from "./assets/Brand Identity/Slide-59.avif";
import img60 from "./assets/Brand Identity/Slide-60.avif";
import img61 from "./assets/Brand Identity/Slide-61.avif";
import img62 from "./assets/Brand Identity/Slide-62.avif";
import img63 from "./assets/Brand Identity/Slide-63.avif";
import img64 from "./assets/Brand Identity/Slide-64.avif";
import img65 from "./assets/Brand Identity/Slide-65.avif";
import img66 from "./assets/Brand Identity/Slide-66.avif";
import img67 from "./assets/Brand Identity/Slide-67.avif";
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
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
  img52,
  img53,
  img54,
  img55,
  img56,
  img57,
  img58,
  img59,
  img60,
  img61,
  img62,
  img63,
  img64,
  img65,
  img66,
  img67,
];

const PdfSection = () => {
  const [bgImageLoading, setBgImageLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(
    Array(imageUrls.length).fill(false)
  );
  const [maximized, setMaximized] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720594339/Prevail-Bento-Grid-3_siqifw.avif";
    img.onload = () => setBgImageLoading(false);
  }, []);

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
        display: "flex",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        aspectRatio: "16/9",
        "@media (max-width: 600px)": {
          height: "70vw",
          clipPath: "unset",
          margin: "0vh 0",
          aspectRatio: "unset",
        },
      }}
    >
      {bgImageLoading ? (
        <Skeleton variant="rectangular" width="100%" height="100%" />
      ) : (
        <Box
          sx={{
            backgroundImage: `url(https://res.cloudinary.com/dtzuqacg3/image/upload/v1720594339/Prevail-Bento-Grid-3_siqifw.avif)`,
            backgroundRepeat: "no-repeat",
            aspectRatio: "16/9",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            "@media (max-width: 600px)": {
              height: "100%",
              backgroundSize: "contain",
              clipPath: "unset",
              margin: "unset",
              aspectRatio: "unset",
              width: "100vw",
            },
          }}
        />
      )}
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
            top: "65%",
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
            height: maximized ? "95vh" : "auto",
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
              <Link className="branding_presentation" to="visual-brand-identity">
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

export default PdfSection;

//  backgroundImage: `url(https://res.cloudinary.com/dtzuqacg3/image/upload/v1720594339/Prevail-Bento-Grid-3_siqifw.avif)`,
