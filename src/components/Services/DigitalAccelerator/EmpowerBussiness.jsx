import {
  Box,
  Fab,
  Modal,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { FileCopy } from "@mui/icons-material";
import jsPDF from "jspdf";

const imageUrls = [
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437623/Slide-1_bvdsfx.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437667/Slide-2_ureouk.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437634/Slide-3_t9crl0.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437626/Slide-4_kbrk9t.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437703/Slide-5_rfveef.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437684/Slide-6_xj6ef0.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437635/Slide-7_v6llyc.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437687/Slide-8_rsgddv.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437632/Slide-9_g9gium.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437632/Slide-10_k02761.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437631/Slide-11_h4uolo.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437667/Slide-12_iskqgj.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437668/Slide-13_cozrkl.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437648/Slide-14_qvvgpi.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437634/Slide-15_tvd2hu.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437686/Slide-16_a9alzb.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437685/Slide-17_itjjms.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437652/Slide-18_cphmio.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437629/Slide-19_uxoew7.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437649/Slide-20_fsclwb.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437630/Slide-21_zcjym9.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437632/Slide-22_knjlri.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437670/Slide-23_zoz1u4.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437628/Slide-24_mbhidx.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437683/Slide-25_mmhs1j.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437688/Slide-26_rqrmmb.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437671/Slide-27_cmp3kg.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437630/Slide-28_q8icow.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437685/Slide-29_lfp9gd.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437688/Slide-30_gg5yqt.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437686/Slide-31_msz2o5.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437627/Slide-32_dolrpr.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437624/Slide-33_d34sel.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437632/Slide-34_p7lmcq.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437652/Slide-35_eu93ua.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437651/Slide-36_tywtb1.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437626/Slide-37_xazfjt.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437634/Slide-38_cb3efx.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437688/Slide-39_n1wwle.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437653/Slide-40_zxvs5d.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437704/Slide-41_muhsbz.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437629/Slide-42_z887nm.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437635/Slide-43_fiold6.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437668/Slide-44_fnwhsf.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437671/Slide-45_n1eoc3.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437628/Slide-46_nk6rdj.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437650/Slide-47_i4anui.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437651/Slide-48_bb4eb0.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437702/Slide-49_aabfdp.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437704/Slide-50_xuexmm.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437650/Slide-51_yhhjze.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437703/Slide-52_khxt6c.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437670/Slide-53_s4o91w.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437685/Slide-54_vffxh9.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437669/Slide-55_timdqi.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437651/Slide-56_og9s2t.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437625/Slide-57_urpoeb.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437667/Slide-58_bayvnj.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437626/Slide-59_jupj1e.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437687/Slide-60_lno38l.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437624/Slide-61_iem3ne.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437654/Slide-62_buuj9x.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437669/Slide-63_vatz6d.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437654/Slide-64_ujzkud.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437623/Slide-65_jycs1e.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437684/Slide-66_nqjldk.avif",
  "https://res.cloudinary.com/dtzuqacg3/image/upload/v1720437629/Slide-67_whzqgt.avif",
];

const EmpowerBusiness = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(
    Array(imageUrls.length).fill(false)
  );

  const handleOpenModal = () => {
    setIsLoading(true);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsLoading(true);
    setImagesLoaded(Array(imageUrls.length).fill(false));
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

  const downloadPdf = async () => {
    const doc = new jsPDF();

    const fetchImageAsBase64 = async (url) => {
      const response = await fetch(url, { mode: "cors" });
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    };

    const imagePromises = imageUrls.map((url) => fetchImageAsBase64(url));

    try {
      const base64Images = await Promise.all(imagePromises);
      base64Images.forEach((base64Img, index) => {
        if (index > 0) doc.addPage();
        doc.addImage(
          base64Img,
          "JPEG",
          0,
          0,
          doc.internal.pageSize.getWidth(),
          doc.internal.pageSize.getHeight()
        );
      });
      doc.save("Prevail Brand Identity.pdf");
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
                height: "500px",
              }}
            >
              <CircularProgress />
            </Box>
          )}
          <Box
            sx={{
              overflowY: "auto",
              maxHeight: "500px",
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
