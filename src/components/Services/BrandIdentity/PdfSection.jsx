import { FileCopy } from "@mui/icons-material";
import { Fab, Grid } from "@mui/material";
import React from "react";
import mug from "../assets/mug.png";

const PdfSection = () => {
  // Function to handle the PDF download
  const handleDownloadPdf = () => {
    const link = document.createElement("a");
    link.href =
      "src/components/Services/BrandIdentity/Prevail Brand Identity.pdf"; // Path to the PDF file in the public folder
    link.download = "prevailagency.pdf"; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Grid
      sx={{
        backgroundImage: `url(https://res.cloudinary.com/dtzuqacg3/image/upload/v1720594339/Prevail-Bento-Grid-3_siqifw.avif)`,
        display: "flex",
        width: "100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "160vh",
        position: "relative",
        overflow: "hidden",
        clipPath: "inset(20vh 0)",
        mb: "-20vh",
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
          handleDownloadPdf();
        }}
      >
        Download PDF <FileCopy sx={{ ml: "10px" }} />
      </Fab>
    </Grid>
  );
};

export default PdfSection;
