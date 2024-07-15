import React, { useState } from "react";
import { Link } from "react-router-dom";
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

import { Box, Button, Card, CardMedia } from "@mui/material";
import jsPDF from "jspdf";

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

const EmpowerYourBussiness = () => {
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
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      {imageUrls.map((image, index) => (
        <Card
          key={index}
          sx={{
            width: "100%",
            height: "unset",
            "@media (max-width: 600px)": {
              width: "100vw",
              height: "unset",
            },
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={`Slide ${index + 1}`}
            sx={{
              width: "100%",
              height: "unset",
              objectFit: "cover",
              "@media (max-width: 600px)": {
                width: "100vw",
                height: "unset",
              },
            }}
          />
        </Card>
      ))}

      <Box sx={{ position: "fixed", bottom: 20, right: 20 }}>
        <Button
          variant="contained"
          sx={{
            mr: "5px",
            background: "white",
            color: "#653BB5",
            border: "1px solid #653BB5",
            "&:hover": {
              background: "white",
              color: "#653BB5",
            },
          }}
          color="primary"
          onClick={downloadPdf}
        >
          Download PDF
        </Button>
        <Link
          to="/service/digital-accelerator-bundle"
          style={{
            textDecoration: "none",
          }}
        >
          <Button variant="contained" color="primary">
            Back
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default EmpowerYourBussiness;
